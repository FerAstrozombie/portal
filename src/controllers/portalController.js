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
            const response = await PortalService.savePaciente(req.body);
            res.status(200).json({ "paciente": response })
        } catch (error) {
            res.status(400).json({
                status: "ERROR ❌ ",
                message: `Hubo un error ❌ ${error}`
            })
        }
    };

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
            const id = req.params.id;
            const responseUpdate = await PortalService.updatePaciente(id, req.body);
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