const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/config");
const path = require("path");
const http = require("http");
const server = http.createServer(app); // Create HTTP server

// Import user routes
const homePropertyRoutes = require("./routes/homepropertyRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionsRoute = require("./routes/transactionsRoutes");
const agentRoutes = require("./routes/agentRoutes");
const realestateRoutes = require("./routes/realestateRoutes");
const MessageRoutes = require("./routes/messageRoutes");
const ChatRoutes = require("./routes/chatRoutes");


// Middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
// Set 'views' as the folder containing your views
app.set("../backend/views", path.join(__dirname, "../backend/views"));

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
app.use("/transaction", transactionsRoute);
app.use("/agents", agentRoutes);
app.use("/realestate", realestateRoutes);
app.use("/message", MessageRoutes);
app.use("/chat", ChatRoutes);
app.use("/uploads", express.static("uploads"));

// Access environment variables
const port = process.env.PORT || 7000;

// Socket.io setup
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true
  }
});

// Socket.io logic
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle sending a new message
  socket.on("newMessage", async (data) => {
    try {
      // Create the message using sendMessage controller
      const message = await sendMessage(data); // You may need to adjust this based on your controller
      // Broadcast the new message to all connected clients
      io.emit("message", message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });

  // Handle other events as needed...

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


app.listen(port, () => {
  console.log(`Good app listening on port ${port}`);
});

module.exports = app;