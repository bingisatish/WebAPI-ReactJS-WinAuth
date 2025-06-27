using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System.DirectoryServices.AccountManagement;
using System.Security.Claims;

namespace WinAuthAPI.Controllers
{
    public class UserDto
    {
        public string? UserName { get; set; }
        public string? FullName { get; set; }
        public string? Domain { get; set; }
        public string? Email { get; set; }
        public bool IsAuthenticated { get; set; }
    }
    
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;

        public UserController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [HttpGet]
        public IActionResult GetCurrentUser()
        {
            // Using the SID claim is more reliable for AD lookups and as a unique key.
            var sid = User.FindFirst(ClaimTypes.PrimarySid)?.Value;
            if (string.IsNullOrEmpty(sid))
            {
                return BadRequest("Could not determine user identity from claims.");
            }

            // Use the SID as the cache key for uniqueness.
            if (_memoryCache.TryGetValue(sid, out UserDto? cachedUser))
            {
                return Ok(cachedUser);
            }

            try
            {
                using (var context = new PrincipalContext(ContextType.Domain))
                {
                    var principal = UserPrincipal.FindByIdentity(context, IdentityType.Sid, sid);
                    if (principal != null)
                    {
                        // Get domain from the user's Distinguished Name
                        string domain = principal.DistinguishedName
                            ?.Split(',')
                            .FirstOrDefault(s => s.StartsWith("DC="))
                            ?.Replace("DC=", "") ?? "Unknown";

                        var userDto = new UserDto
                        {
                            UserName = principal.SamAccountName,
                            FullName = $"{principal.GivenName} {principal.Surname}".Trim(),
                            Domain = domain,
                            Email = principal.EmailAddress,
                            IsAuthenticated = User.Identity?.IsAuthenticated ?? false
                        };

                        var cacheEntryOptions = new MemoryCacheEntryOptions()
                            .SetSlidingExpiration(TimeSpan.FromMinutes(5));

                        _memoryCache.Set(sid, userDto, cacheEntryOptions);

                        return Ok(userDto);
                    }
                }
            }
            catch
            {
                // Avoid exposing internal details in production. Log the actual exception.
                return StatusCode(500, "An error occurred while querying Active Directory.");
            }

            return NotFound("User not found in Active Directory.");
        }
    }
}