const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const { getForm } = require("./controllers/fromController");
const { postForm } = require("./controllers/fromController");

const fs = require("fs");

router.get("/", getCV);

router.get("/form",getForm);

router.post("/form",postForm);

module.exports = router;
