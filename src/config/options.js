const dotenv = require("dotenv");

const options = {
    mongo:{
        url: ""
    },
    application: {
        cors: {
            server: [
                {
                    origin: "(*)", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}

module.exports = options;