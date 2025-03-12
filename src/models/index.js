const MongoCointainer = require("./managers/mongo.manager");
const PortalModel = require("./portalModel.js");

const PortalManager = new MongoCointainer(PortalModel);

module.exports = PortalManager;