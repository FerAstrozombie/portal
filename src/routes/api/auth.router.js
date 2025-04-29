const express = require('express');
const upload = require('../../libs/storage.js');
const router = express.Router();
const passport = require('passport');

router.get('/signin', (req, res, next) => {
    const errorMessage = req.flash("error");
    res.status(400).json({
        error: errorMessage.length > 0 ? errorMessage[0] : "Error desconocido"
    });
});
router.post('/signin', upload.single("imagenAvatar"), passport.authenticate("local-signin", {
    successRedirect: "/",
    failureRedirect: "/signin",
    passReqToCallback: true,
    failureFlash: true,
}), (req, res) => {
    console.log("Autenticación exitosa");
});
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