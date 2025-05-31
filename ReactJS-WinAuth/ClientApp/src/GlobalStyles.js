const GlobalStyles = () => (
  <style jsx global>{`
    /* CSS Variables for easy theming */
    :root {
      --primary-color: #4A7C59; /* Calm, muted green */
      --primary-color-darker: #3A5F47; /* Darker version of primary */
      --secondary-color: #8C7853; /* Muted earthy brown for secondary text/elements */
      --light-gray: #E8E4D9; /* Light beige for submenu backgrounds etc. */
      --border-color: #D4CFC3; /* Slightly darker beige for borders */
      --text-color: #3D352A; /* Dark brown for main text */
      --text-color-light: #FDFBF5; /* Very light, warm off-white for text on dark backgrounds */
      --navbar-bg: #3A5F47; /* Dark green, same as primary-darker for a unified feel */
      --navbar-height: 60px; /* Standardized navbar height */
      --body-bg: #F0EFEB; /* Very light, slightly warm off-white */
      --card-bg: #FBFAF7; /* Slightly warmer off-white for cards */
      --danger-color: #C94C4C; /* Slightly desaturated red */
      --danger-color-darker: #A83C3C; /* Darker version of danger */

      --font-family-sans-serif: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      --border-radius: 8px; /* Slightly larger, softer radius */
      --box-shadow-sm: 0 2px 4px rgba(0,0,0,0.075);
      --box-shadow-md: 0 4px 8px rgba(0,0,0,0.1);
      --box-shadow-lg: 0 10px 20px rgba(0,0,0,0.15);

      --transition-speed: 0.25s;
    }

    /* Reset some default styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* General Styles */
    body {
      font-family: var(--font-family-sans-serif);
      background-color: var(--body-bg);
      color: var(--text-color);
      line-height: 1.6;
    }

    .App {
      display: flex;
      flex-direction: column;
    }

    /* Navbar styles */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem; /* Maintain horizontal padding */
      min-height: var(--navbar-height);
      background-color: var(--navbar-bg);
      color: var(--text-color-light);
      box-shadow: var(--box-shadow-md);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar-title {
      font-size: 1.75rem; /* Slightly larger for better prominence */
      font-weight: 600; /* Adjusted font weight */
    }

    .profile-container {
      position: relative;
      cursor: pointer;
    }

    .profile-details {
      display: none;
    }

    .profile-circle {
      width: 40px;
      height: 40px;
      background-color: var(--primary-color); /* Use primary color */
      color: var(--text-color-light);
      font-weight: bold;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      box-shadow: var(--box-shadow-sm);
      transition: background-color var(--transition-speed) ease, transform var(--transition-speed) ease;
    }

    .profile-circle:hover {
      background-color: var(--primary-color-darker);
      transform: scale(1.05);
    }

    .dropdown-menu {
      position: absolute;
      top: calc(var(--navbar-height) + 5px); /* Position below navbar + small gap */
      right: 0;
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow-lg);
      padding: 1rem;
      z-index: 1000;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity var(--transition-speed) ease, transform var(--transition-speed) ease;
      pointer-events: none;
      color: var(--text-color); /* Text color for dropdown items */
      min-width: 200px; /* Give dropdown a decent minimum width */
    }

    .profile-container:hover .dropdown-menu,
    .dropdown-menu.show {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .dropdown-menu p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--secondary-color); /* Softer color for secondary text */
    }

    .logout-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--danger-color);
      color: var(--text-color-light);
      border: none;
      padding: 0.6rem 1rem; /* Slightly more padding */
      margin-top: 0.5rem;
      border-radius: calc(var(--border-radius) / 2); /* Consistent radius */
      cursor: pointer;
      width: 100%;
      font-size: 0.9rem;
      font-weight: 500;
      transition: background-color var(--transition-speed) ease;
    }

    .logout-button .icon {
      margin-right: 0.5rem;
      display: flex;
      align-items: center;
    }

    .logout-button:hover {
      background-color: var(--danger-color-darker);
    }

    /* Side Navigation styles */
    .side-nav {
      width: 260px; /* Slightly wider */
      background-color: var(--card-bg);
      padding: 1.5rem 1rem; /* More vertical padding */
      height: calc(100vh - var(--navbar-height)); /* Adjust height based on navbar */
      box-shadow: var(--box-shadow-md); /* Softer shadow */
      position: fixed;
      top: var(--navbar-height); /* Position below navbar */
      left: 0;
      overflow-y: auto;
      transition: transform var(--transition-speed) ease, width var(--transition-speed) ease; /* Added width transition for potential collapse feature */
      border-right: 1px solid var(--border-color);
    }

    .side-nav ul {
      list-style: none;
    }

    .accordion {
      padding: 0.85rem 1rem; /* Adjusted padding */
      cursor: pointer;
      border-radius: calc(var(--border-radius) / 1.5);
      transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      color: var(--text-color); /* Default color */
      position: relative; /* For icon positioning */
    }

    .accordion:hover,
    .accordion.active { /* Style for active accordion header */
      background-color: var(--primary-color-darker);
      color: var(--text-color-light);
    }

    .accordion:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    /* Simple arrow icon for accordion */
    .accordion::after {
      content: '▼'; /* Down arrow */
      font-size: 0.7em;
      transition: transform var(--transition-speed) ease;
    }

    .accordion.active::after {
      transform: rotate(180deg); /* Up arrow */
    }

    .submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding var(--transition-speed) ease-out;
      opacity: 0;
      padding-left: 1.5rem; /* Indent further */
      margin-top: 0;
      margin-bottom: 0.3rem;
      border-left: 3px solid var(--primary-color); /* Thicker, more prominent border */
      background-color: var(--light-gray); /* Slight background tint for submenu section */
      border-radius: 0 0 var(--border-radius) var(--border-radius); /* Round bottom corners */
    }

    .submenu.active {
      max-height: 500px; /* Generous max height */
      opacity: 1;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .submenu li {
      padding: 0.6rem 0.75rem; /* Consistent padding */
      cursor: pointer;
      border-radius: calc(var(--border-radius) / 2);
      transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
      font-size: 0.9rem;
      color: var(--secondary-color);
    }

    .submenu li:hover {
      background-color: var(--primary-color);
      color: var(--text-color-light);
    }

    .submenu li.active { /* Style for active submenu item */
      background-color: var(--primary-color);
      color: var(--text-color-light);
      font-weight: 500;
    }

    .submenu li:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: -2px; /* Inside to not overlap too much */
      background-color: #e9ecef; /* Light background on focus */
    }

    /* Main Content styles */
    .content {
      margin-left: 260px; /* Match side-nav width */
      padding: 2rem;
      margin-top: calc(var(--navbar-height) + 1rem); /* Space below navbar */
      transition: margin-left var(--transition-speed) ease;
      width: calc(100% - 260px); /* Ensure content takes remaining width */
    }

    .loading {
      font-size: 1.2rem;
      color: var(--secondary-color);
      text-align: center;
      margin-top: 3rem;
      animation: fadeIn 0.5s ease-in-out;
    }

    .error {
      background-color: #FADBD8; /* Lighter, less saturated red background for error */
      color: var(--danger-color-darker);
      padding: 1.25rem; /* More padding */
      border-radius: var(--border-radius);
      margin-bottom: 1.5rem; /* More margin */
      animation: fadeIn 0.5s ease-in-out;
      border-left: 5px solid var(--danger-color); /* Accent border */
    }

    .user-info {
      background-color: var(--card-bg);
      padding: 2rem; /* More padding */
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow-md);
      max-width: 700px;
      margin: 2rem auto; /* More margin for centering */
      animation: fadeInUp 0.5s ease-out;
    }

    h2 { /* Assuming h2 is used as a title within .user-info or content sections */
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      font-weight: 600;
      font-size: 1.75rem;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

export default GlobalStyles;