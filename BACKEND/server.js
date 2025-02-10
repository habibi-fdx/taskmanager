const express = require("express");
const cors = require("cors");

const welcomeRouter = require("./api/welcome/welcome-router");
const taskRouter = require("./api/tasks/tasks-router");
const userRouter = require("./api/users/users-routes");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/", welcomeRouter);
server.use("/tasks", taskRouter);
server.use("/users", userRouter);

module.exports = server;
