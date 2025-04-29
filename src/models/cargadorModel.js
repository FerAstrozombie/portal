const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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
        password:{
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

// Método para encriptar la contraseña
cargadorSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Método para comparar contraseñas
cargadorSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const ControlModel = mongoose.model(cargadorColection, cargadorSchema);

module.exports = ControlModel;