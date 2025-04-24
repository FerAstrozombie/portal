const express = require('express');
const CargaController = require("../../controllers/cargadorController.js");
const upload = require('../../libs/storage.js');
const router = express.Router();
const passport = require('passport');

router.get('/signin', CargaController.getCargadores);

router.post('/signup', upload.single("imagenAvatar"), (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        if (!user) {
            req.flash("signupMessage", info?.message || "Error desconocido");
            return res.redirect('/signup');
        }
        // Si el registro es exitoso, redirige a la página principal
        return res.redirect('/');
    })(req, res, next);
});

router.get('/signup', (req, res) => {
    const errorMessage = req.flash("signupMessage");
    res.status(400).json({
        error: errorMessage.length > 0 ? errorMessage[0] : "Error desconocido"
    });
});

module.exports = router;