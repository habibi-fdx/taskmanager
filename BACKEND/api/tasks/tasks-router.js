const express = require("express");
const cors = require("cors");
const Task = require("./tasks-model");
const router = require("express").Router();

// GET /api/tasks
router.get("/", (req, res) => {
  Task.getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Failed to retrieve tasks: ${err.message}`,
      });
    });
});

// GET BY ID /api/tasks/:id
router.get("/:id", (req, res) => {
  Task.getById(req.params.id)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Failed to retrieve task: ${err.message}`,
      });
    });
});

module.exports = router;
