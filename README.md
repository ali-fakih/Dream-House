# Dream-House - Real Estate Project

A full-stack MERN application for real estate listings, property management, and agent interactions.

## Features

- User authentication and authorization system
- Property listings with search and filtering
- Agent profiles and property management
- Admin dashboard for site management
- Responsive design for all devices

## Technology Stack

- **Frontend**: React.js with Redux, Bootstrap, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)

## Deployment Instructions

### Deploying to Render

This project is configured for easy deployment to Render using the included `render.yaml` file.

1. Create a Render account at [render.com](https://render.com)
2. Connect your GitHub repository to Render
3. Use the "Blueprint" deployment option and select the repository
4. Render will automatically detect the `render.yaml` configuration
5. Enter your environment variables in the Render dashboard:
   - MONGODB_URI
   - JWT_SECRET
   - AUTH_EMAIL
   - Auth_PASS
   - RESET_PASSWORD_KEY
   - SECRET_STRIPE_KEY
   - REFRESH_TOKEN_SECRET
   - CHAT_ENGINE_PRIVATE_KEY

### Manual Deployment

If you prefer to deploy manually:

#### Backend
1. Add your environment variables in the Render dashboard
2. Deploy with the build command: `cd backend && npm install`
3. Set the start command: `cd backend && node server.js`

#### Frontend
1. Set the REACT_APP_API_URL to point to your deployed backend URL
2. Deploy with the build command: `cd frontend && npm install && npm run build`
3. Set the publish directory to: `./frontend/build`

## Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/dreamhouse.git

# Install backend dependencies
cd backend
npm install

# Start backend server
npm start

# In a new terminal, install frontend dependencies
cd ../frontend
npm install

# Start frontend development server
npm start
```
