// Use Express app from server.js for Vercel serverless functions
const app = require('../server');

// Export module for serverless function 
module.exports = app;
