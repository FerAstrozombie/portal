const express = require('express');
const PortalController = require("../../controllers/portalController.js");
const router = express.Router();

router.get('/', PortalController.getPacientes);

router.post('/paciente', PortalController.savePaciente);

router.delete('/paciente/:id', PortalController.deleteById);

router.patch('/paciente/:id', PortalController.updatePaciente);

module.exports = router;