using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.DirectoryServices.AccountManagement;
using System.Security.Claims;

namespace WinAuthAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCurrentUser()
        {
            var userName = User.Identity?.Name;

            // Get domain and username parts
            string domain = string.Empty;
            string user = userName ?? string.Empty;

            if (!string.IsNullOrEmpty(userName) && userName.Contains('\\'))
            {
                var parts = userName.Split('\\');
                domain = parts[0];
                user = parts[1];
            }

            // Query Active Directory for additional user details
            string fullName = user;
            string email = null;

            try
            {
                using (var context = new PrincipalContext(ContextType.Domain))
                {
                    var principal = UserPrincipal.FindByIdentity(context, userName);
                    if (principal != null)
                    {
                        fullName = $"{principal.GivenName} {principal.Surname}".Trim();
                        email = principal.EmailAddress;
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the exception (optional)
                Console.WriteLine($"Error querying Active Directory: {ex.Message}");
            }

            return Ok(new
            {
                UserName = userName,
                FullName = string.IsNullOrWhiteSpace(fullName) ? user : fullName, // Use AD full name or fallback to username
                Domain = domain,
                Email = email, // Email from AD or null if not available
                IsAuthenticated = User.Identity?.IsAuthenticated ?? false
            });
        }
    }
}