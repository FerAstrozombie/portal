const { PortalManager } = require("../models/index.js");

class PortalServices {
    static async getPacientes(){
        return await PortalManager.getAll();
    }

    static async savePaciente(body){
        return await PortalManager.save(body);
    }

    static async getPacientreById(id){
        return await PortalManager.getById(id);
    }

    static async deletePacienteById(id){
        return await PortalManager.deleteById(id);
    }

    static async updatePaciente(id, body){
        return await PortalManager.updateById(id, body);
    }
}

module.exports = PortalServices;