const PortalModel = require("../models/portalModel.js");
const PortalService = require("../services/portal.services.js");

class PortalController {
    static async getPacientes(req, res) {
        try {
            const response = await PortalService.getPacientes();
            res.status(200).json({ "pacientes": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

    static async savePaciente(req, res) {
        try {
            const {
                nombre,
                apellido,
                dni,
                email,
                direccion,
                codigoPostal,
                fechaNacimiento,
                nacionalidad,
                cobertura
            } = req.body;

            const file = req.file; // Archivo subido por Multer
            const avatarUrl = file ? `${req.protocol}://${req.get('host')}/uploads/${file.filename}` : `${req.protocol}://${req.get('host')}/uploads/avatar.svg`; // URL del avatar
            const paciente = PortalModel({
                nombre,
                apellido,
                dni,
                email,
                direccion,
                codigoPostal,
                fechaNacimiento,
                nacionalidad,
                cobertura,
                avatar: avatarUrl
            });

            const response = await PortalService.savePaciente(paciente);

            res.status(200).json({
                paciente: response
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
            const response = await PortalService.getPacientreById(req.params.id);
            res.status(200).json({ "paciente": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

    static async deleteById(req, res) {
        try {
            const response = await PortalService.deletePacienteById(req.params.id);
            res.status(200).json({ "paciente": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

    static async updatePaciente(req, res) {
        try {
            let id = req.params.id;
            const {
                nombre,
                apellido,
                dni,
                email,
                direccion,
                codigoPostal,
                fechaNacimiento,
                nacionalidad,
                cobertura
            } = req.body;

            const file = req.file; // Archivo subido por Multer
            const avatarUrl = file ? `${req.protocol}://${req.get('host')}/uploads/${file.filename}` : `${req.protocol}://${req.get('host')}/uploads/avatar.svg`; // URL del avatar
            const paciente = {
                nombre,
                apellido,
                dni,
                email,
                direccion,
                codigoPostal,
                fechaNacimiento,
                nacionalidad,
                cobertura,
                avatar: avatarUrl
            };
            const responseUpdate = await PortalService.updatePaciente(id, paciente);
            res.status(200).json({ "message": responseUpdate });
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };
}

module.exports = PortalController;