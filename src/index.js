const express = require("express");
const connectMongoDB = require("./config/dbOptions.js");
const cors = require('cors');
const path = require('path');
const config = require("./config/options.js");
const { pacientesRouter } = require("./routes/index.js");
const { cargadoresRouter } = require("./routes/index.js");
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
var flash = require('connect-flash');
require('./passport/local-auth.js');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto a la URL de tu frontend
    credentials: true, // Permite el envío de cookies
}));
app.use(cookieParser());

app.use(session({
    secret: "my_secret_session",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(flash());

//Configuracion de cors
app.use(morgan('dev'));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());

//inicio de la base de datos
connectMongoDB();

//El puerto es traido desde el .env y sino el de defecto
const PORT = process.env.PORT || 8081;

//configuracion de las rutas
app.use("/", cargadoresRouter);
app.use("/", pacientesRouter);

// Puerto donde corre el servidor
app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})