const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');


// Middleware to verify the JWT token and populate req.user with user information
const protect = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization");

    // Exclude token verification for registration route and refresh token route
    if (req.path === "/register") {
        return next();
    }

    if (!authorizationHeader) {
        return res
            .status(401)
            .json({ message: "Access denied. Token not provided" });
    }

    // Check if the header starts with "Bearer "
    const [scheme, token] = authorizationHeader.split(" ");
    if (!token || scheme !== "Bearer") {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded JWT payload:", decoded); // Add this line for debugging
        // Fetch user information from the database using the decoded user ID
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }
        // Populate req.user with the user object fetched from the database
        req.user = user;
        console.log("Populated req.user:", req.user); // Add this line for debugging
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token" });
    }
};



// Middleware to check if the user has admin role
const isAdmin = async (req, res, next) => {
    try {
        // Ensure req.user is populated correctly
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized access" });
        }

        // Retrieve user information from the database
        const user = await User.findById(req.user.id);

        // Check if user has admin role
        if (!user || user.role !== "admin") {
            return res
                .status(403)
                .json({ message: "Access denied. Admin role required" });
        }

        // If the user has admin role, proceed to the next middleware/route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
// Middleware to check if the user has admin role or agent role
const isAgentOrAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'agent')) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an agent or admin' });
    }
};

module.exports = { protect, isAdmin, isAgentOrAdmin };
