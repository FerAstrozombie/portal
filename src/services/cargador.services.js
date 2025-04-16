const { CargadorManager } = require("../models/index.js");

class CargadorServices {

    static async getCargadores(){
        return await CargadorManager.getAll();
    }

    static async saveCargador(body){
        return await CargadorManager.save(body);
    }

    static async getCargadorById(id){
        return await CargadorManager.getById(id);
    }

    static async deleteCargadorById(id){
        return await CargadorManager.deleteById(id);
    }

    static async updateCargador(id, body){
        return await CargadorManager.updateById(id, body);
    }
}

module.exports = CargadorServices;