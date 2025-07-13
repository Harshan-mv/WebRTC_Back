require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");

const app = express();

// CORS setup with allowed origin from env
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:3000"];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/rooms");

app.use("/api/auth", authRoutes);
app.use("/api/room", roomRoutes);

// WebSocket logic
require("./socket")(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
