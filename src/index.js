const express = require("express");
const connectMongoDB = require("./config/dbOptions.js");
const cors = require('cors');
const config = require("./config/options.js");
const pacientesRouter = require("./routes/index.js");

const app = express();

//Configuracion de cors
app.use(cors(
    config.application.cors.server
));

app.use(express.json());

//inicio de la base de datos
connectMongoDB();

//El puerto es traido desde el .env y sino el de defecto
const PORT = process.env.PORT || 8081;

//configuracion de las rutas
app.use("/", pacientesRouter);

// Puerto donde corre el servidor
app.listen(PORT, () =>{
    console.log(`Server listening on port: http://localhost:${PORT}`);
})