const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/config");
const path = require("path");
require('dotenv').config();

// Import user routes
const userRoutes = require("./routes/userRoutes");
const agentRoutes = require("./routes/agentRoutes");
const realestateRoutes = require("./routes/realestateRoutes");


// Middleware
// CORS middleware to allow requests from http://localhost:3001
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true // Enable credentials (cookies, authorization headers, etc)
}));



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set 'views' as the folder containing your views
app.set("views", path.join(__dirname, "views"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Use user routes
app.use("/users", userRoutes);
// app.use("/program", programRoutes);
app.use("/agents", agentRoutes);
app.use("/realestate", realestateRoutes);

// app.use('/uploads', express.static('uploads'));

// Access environment variables
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;