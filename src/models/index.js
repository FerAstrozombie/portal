const MongoCointainer = require("./managers/mongo.manager");
const PortalModel = require("./portalModel.js");
const CargadorModel = require("./cargadorModel.js");

const PortalManager = new MongoCointainer(PortalModel);
const CargadorManager = new MongoCointainer(CargadorModel);

module.exports = {
    PortalManager,
    CargadorManager
};