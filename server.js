const express = require("express");
const cors = require("cors");

const welcomeRouter = require("./api/welcome/welcome-router")
const taskRouter = require("./api/tasks/tasks-router")

const server = express()

server.use(cors());
server.use(express.json());

server.use("/", welcomeRouter);
server.use("/tasks", taskRouter);


module.exports = server