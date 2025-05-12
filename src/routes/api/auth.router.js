const express = require('express');
const upload = require('../../libs/storage.js');
const router = express.Router();
const passport = require('passport');

router.get('/signin', (req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    const errorMessage = req.flash("error");
    const logoutMessage = req.flash("logoutMessage");
    console.log("Mensaje de cierre de sesión enviado al cliente:", logoutMessage);
    res.status(400).json({
        error: errorMessage.length > 0 ? errorMessage[0] : null,
        message: logoutMessage.length > 0 ? logoutMessage[0] : null
    });
});
router.post('/signin', upload.single("imagenAvatar"), passport.authenticate("local-signin", {
    successRedirect: "/",
    failureRedirect: "/signin",
    passReqToCallback: true,
    failureFlash: true,
}), (req, res) => {
    console.log("Autenticación exitosa");
    res.status(200).json({ message: "Inicio de sesión exitoso" });
});
router.post('/signup', upload.single("imagenAvatar"), isAuthenticated, (req, res, next) => {
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
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Error al cerrar sesión:", err);
            return res.status(500).json({ error: "Error al cerrar sesión" });
        }
        req.flash("logoutMessage", "Has cerrado sesión correctamente");
        return res.status(200).json({ message: "Has cerrado sesión correctamente" });
    });
});

router.get("/checkAuth", (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ message: "Autenticado" });
    }
    return res.status(401).json({ error: "No autorizado. Por favor, inicia sesión primero." });
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "Por favor, inicia sesión primero");
    return res.status(401).json({ error: "No autorizado. Por favor, inicia sesión primero." });
}

module.exports = { router , isAuthenticated };