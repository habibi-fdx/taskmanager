const express = require("express");
const cors = require("cors");
const Task = require("./tasks-model")
const router = require("express").Router();


router.get("/", (req, res) => {
    Task.getAll()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            res.status(500).json({
                message: `Failed to retrieve tasks: ${err.message}`,
            })
    })
})


module.exports = router;