const express = require("express");
const router = express.Router();

const pacientesRouter = require("./api/portal.js");

router.use(pacientesRouter);

module.exports = pacientesRouter;