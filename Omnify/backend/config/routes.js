const express = require("express");
const weatherCltr = require("../app/controllers/weatherCltr");

const router = express.Router();

// routes

router.post("/api/weather", weatherCltr.show);

module.exports = router;
