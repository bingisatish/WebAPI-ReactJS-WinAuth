# Windows Authentication with React and ASP.NET Core Web API

This project demonstrates how to implement Windows Authentication in a React application with an ASP.NET Core Web API backend.

## Project Structure

- **Backend**: ASP.NET Core Web API with Windows Authentication
- **Frontend**: React application that consumes the API

## Setup Instructions

### Backend (ASP.NET Core Web API)

1. Open the solution in Visual Studio or Visual Studio Code
2. Build the solution
3. Run the API project (it will start on https://localhost:7001)

### Frontend (React)

1. Navigate to the ClientApp directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. The React app will start on http://localhost:3000

## How It Works

1. The ASP.NET Core Web API is configured to use Windows Authentication
2. The UserController returns information about the currently authenticated Windows user
3. The React application makes authenticated requests to the API
4. The user's Windows identity is automatically passed to the API
5. The API returns the user's full name and other details

## Important Notes

- Windows Authentication requires that the client and server are properly configured
- This demo works best in an intranet environment where Windows Authentication is supported
- Make sure CORS is properly configured to allow the React app to communicate with the API
- For production use, additional security measures should be implemented