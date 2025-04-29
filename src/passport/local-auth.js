const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const CargadorModel = require('../models/cargadorModel.js');

passport.serializeUser((cargador, done) => {
    done(null, cargador._id);
});

passport.deserializeUser(async (_id, done) => {
    const cargador = await CargadorModel.findById(_id);
    done(null, cargador);
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        // Verificar si el email ya existe
        const cargadorEncontrado = await CargadorModel.findOne({ email: email });
        if (cargadorEncontrado) {
            return done(null, false, { message: "El email ya está registrado" });
        }

        // Crear un nuevo cargador
        const cargador = new CargadorModel();
        cargador.nombre = req.body.nombre;
        cargador.apellido = req.body.apellido;
        cargador.dni = req.body.dni;
        cargador.email = email;
        cargador.password = cargador.encryptPassword(password);

        // Guardar el cargador en la base de datos
        const user = await cargador.save();
        return done(null, cargador);
    } catch (error) {
        return done(error, false);
    }
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        if (!email || !password) {
            return done(null, false, { message: "Por favor, ingrese su email y contraseña" });
        }

        const user = await CargadorModel.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: "El usuario no existe" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return done(null, false, { message: "Contraseña incorrecta" });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));