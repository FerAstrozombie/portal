const express = require("express");
const connectMongoDB = require("./config/dbOptions.js");
const cors = require('cors');
const path = require('path');
const config = require("./config/options.js");
const { pacientesRouter } = require("./routes/index.js");
const { cargadoresRouter } = require("./routes/index.js");
const morgan = require('morgan');

const app = express();

//Configuracion de cors
app.use(cors(
    config.application.cors.server
));

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

//inicio de la base de datos
connectMongoDB();

//El puerto es traido desde el .env y sino el de defecto
const PORT = process.env.PORT || 8081;

app.use(morgan('dev'));

//configuracion de las rutas
app.use("/", pacientesRouter);
app.use("/cargadores", cargadoresRouter);

// Puerto donde corre el servidor
app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})