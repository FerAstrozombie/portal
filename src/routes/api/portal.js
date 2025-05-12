const express = require('express');
const PortalController = require("../../controllers/portalController.js");
const upload = require('../../libs/storage.js');
const { isAuthenticated } = require('./auth.router.js');
const router = express.Router();

router.get('/', isAuthenticated, PortalController.getPacientes);

router.post('/paciente', isAuthenticated, upload.single("imagenAvatar"), PortalController.savePaciente);

router.delete('/deletePaciente/:id', isAuthenticated, PortalController.deleteById);

router.patch('/updatePaciente/:id', isAuthenticated, upload.single("imagenAvatar"), PortalController.updatePaciente);

router.get('/paciente/:id', isAuthenticated, PortalController.getById);

module.exports = router;