const mongoose = require("mongoose");

const portalColection = "portal";

const portalSchema = new mongoose.Schema(
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
        direccion:{
            type: String,
            required:true
        },
        codigoPostal:{
            type: Number,
            required:true
        },
        fechaNacimiento:{
            type: String,
            required:true,
        },
        nacionalidad:{
            type: String,
            required:true,
        },
        cobertura:{
            type: String,
            required: true
        },
        avatar:{
            type:String,
            required: true
        }
    },
{
    timestamps: true
});

const PortalModel = mongoose.model(portalColection, portalSchema);

module.exports = PortalModel;