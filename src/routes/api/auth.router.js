const express = require('express');
const CargaController = require("../../controllers/cargadorController.js");
const upload = require('../../libs/storage.js');
const router = express.Router();

router.get('/', CargaController.getCargadores);
router.post('/', upload.single("imagenAvatar"), CargaController.saveCargador);
router.get('/signup',);
router.post('/signup',);
router.get('/signin',);
router.post('/signin',); 


module.exports = router;
