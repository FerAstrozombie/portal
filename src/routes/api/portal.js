const express = require('express');
const PortalController = require("../../controllers/portalController.js");
const router = express.Router();

router.get('/', PortalController.getPacientes);

module.exports = router;