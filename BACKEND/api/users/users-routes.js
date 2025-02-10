//const express = require("express");
const Users = require("./users-model");
const router = require("express").Router();

// GET /api/users
router.get("/", (req, res) => {
  Users.getAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Failed to retrieve users: ${err.message}`,
      });
    });
});

// GET BY ID /api/users/:id
router.get("/:id", (req, res) => {
  Users.getById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Failed to retrieve user: ${err.message}`,
      });
    });
});

module.exports = router;
