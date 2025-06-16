const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/config");
const path = require("path");
const http = require("http");
const axios = require("axios");


// Import user routes
const homePropertyRoutes = require("./routes/homepropertyRoutes");
const userRoutes = require("./routes/userRoutes");
const agentRoutes = require("./routes/agentRoutes");
const realestateRoutes = require("./routes/realestateRoutes");
const usersPaid = require("./routes/PayUsersRoutes");

// Middleware
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? '*' : "http://localhost:3001",
    credentials: true,
  })
);
// Set 'views' as the folder containing your views
// app.set("../backend/views", path.join(__dirname, "../backend/views"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({ extended: true, limit: 10000, parameterLimit: 2 })
// );
app.use(bodyParser.urlencoded({ extended: true }));

// Use user routes
app.use("/homeProperty", homePropertyRoutes);
app.use("/users", userRoutes);
app.use("/agents", agentRoutes);
app.use("/realestate", realestateRoutes);
app.use("/paidUser", usersPaid);
app.use("/uploads", express.static("uploads"));

// Access environment variables
const port = process.env.PORT || 7000;

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
      const r = await axios.put(
          "https://api.chatengine.io/users/",
          { username: username, secret: username, first_name: username },
          { headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
      );
      return res.status(r.status).json(r.data);
  } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      if (error.response) {
          // If there's a response from the server
          return res.status(error.response.status).json(error.response.data);
      } else {
          // If no response received, handle the error accordingly
          return res.status(500).json({ error: 'Server error' });
      }
  }
});

app.listen(port, () => {
  console.log(`Good app listening on port ${port}`);
});

module.exports = app;