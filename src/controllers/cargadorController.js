const CargadorModel = require('../models/cargadorModel');
const CargadorServices = require('../services/cargador.services');


class CargadorController {

    static async getCargadores(req, res) {
            try {
                const response = await CargadorServices.getCargadores();
                res.status(200).json({ "cargadores": response })
            } catch (error) {
                res.status(400).json({
                    status: "ERROR ❌ ",
                    message: `Hubo un error ❌ ${error}`
                })
            }
        };

    static async saveCargador(req, res) {
        try {
            const {
                nombre,
                apellido,
                dni,
                email,
                contraseña
            } = req.body;

            /* const file = req.file; // Archivo subido por Multer
            const avatarUrl = file ? `${req.protocol}://${req.get('host')}/uploads/${file.filename}` : `${req.protocol}://${req.get('host')}/uploads/avatar.svg`; // URL del avatar */
            const cargador = CargadorModel({
                nombre,
                apellido,
                dni,
                email,
                contraseña,
                /* avatar: avatarUrl */
            });

            const response = await CargadorServices.saveCargador(cargador);
            res.status(200).json({
                cargador: response
            });

        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            });
        }
    }

    static async getById(req, res) {
        try {
            const response = await CargadorServices.getCargadorById(req.params.id);
            res.status(200).json({ "cargador": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

    static async deleteCargadorById(req, res) {
        try {
            const response = await CargadorServices.deleteCargadorById(req.params.id);
            res.status(200).json({ "Cargador": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

    static async updateCargador(req, res) {
        try {
            let id = req.params.id;
            const {
                nombre,
                apellido,
                dni,
                email,
                contraseña
            } = req.body;

           /*  const file = req.file; // Archivo subido por Multer
            const avatarUrl = file ? `${req.protocol}://${req.get('host')}/uploads/${file.filename}` : `${req.protocol}://${req.get('host')}/uploads/avatar.svg`; // URL del avatar */
            const cargador = {
                nombre,
                apellido,
                dni,
                email,
                contraseña,
                /* avatar: avatarUrl */
            };
            const responseUpdate = await CargadorServices.updateCargador(id, cargador);
            res.status(200).json({ "message": responseUpdate });
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };
}

module.exports = CargadorController;