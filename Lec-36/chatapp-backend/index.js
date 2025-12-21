require('dotenv').config();
const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const corsOptions = require("./config/cors");
const router = require("./routes/router");

const { createServer } = require("http");
const { Server } = require("socket.io");
const chat = require('./websockets');
const { socketAuth } = require('./middlewares/auth');

const PORT = process.env.PORT || 5000;
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: corsOptions
});
app.set("io", io);
io.use(socketAuth);

app.use(cors(corsOptions));
app.use(express.json());

connectDB();
app.use(router);

chat(io);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});