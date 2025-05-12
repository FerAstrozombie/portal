const express = require("express");
const router = express.Router();

const pacientesRouter = require("./api/portal.js");
const {router: cargadoresRouter} = require("./api/auth.router.js");

router.use(pacientesRouter);
router.use(cargadoresRouter);

module.exports = {pacientesRouter, cargadoresRouter};