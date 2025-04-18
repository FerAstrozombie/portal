const express = require('express');
const PortalController = require("../../controllers/portalController.js");
const upload = require('../../libs/storage.js');
const router = express.Router();

router.get('/', PortalController.getPacientes);

router.post('/paciente', upload.single("imagenAvatar"), PortalController.savePaciente);

router.delete('/deletePaciente/:id', PortalController.deleteById);

router.patch('/updatePaciente/:id', upload.single("imagenAvatar"), PortalController.updatePaciente);

router.get('/paciente/:id', PortalController.getById);

module.exports = router;