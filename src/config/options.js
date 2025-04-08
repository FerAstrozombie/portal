const dotenv = require("dotenv");

dotenv.config({ path: "./.env"});

const options = {
    mongo:{
        url: process.env.DB_CONNECTION
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
    },
    option:{
        host: process.env.APP_HOST,
        port: process.env.PORT
    }
}

module.exports = options;