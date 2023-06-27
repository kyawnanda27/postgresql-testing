const express = require("express");
const router = express.Router();

router.use("/student", require("./student"));

router.use((req, res, next) => {
    const error = new Error("404 Not Found");
    error.status = 404;
    next();
});

module.exports = router;