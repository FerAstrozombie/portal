const mongoose = require("mongoose");

const cargadorColection = "cargador";

const cargadorSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        apellido:{
            type: String,
            required: true
        },
        dni:{
            type: Number,
            required:true,
            unique : true
        },
        email:{
            type: String,
            required: true,
        },
        contraseña:{
            type: String,
            required:true
        },
        /* avatar:{
            type:String,
            required: true
        } */
    },
{
    timestamps: true
});

const ControlModel = mongoose.model(cargadorColection, cargadorSchema);

module.exports = ControlModel;