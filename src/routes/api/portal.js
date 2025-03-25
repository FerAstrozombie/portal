const express = require('express');
const PortalController = require("../../controllers/portalController.js");
const router = express.Router();

router.get('/', PortalController.getPacientes);

router.post('/paciente', PortalController.savePaciente);

router.delete('/deletePaciente/:id', PortalController.deleteById);

router.patch('/updatePaciente/:id', PortalController.updatePaciente);

router.get('/paciente/:id', PortalController.getById);

module.exports = router;