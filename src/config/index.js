const profile = process.env.PROFILE || "local";
const port = process.env.SERVER_PORT || 3000;

//console.log("Cargando configuraciones para ambiente: ", profile);

let data = require(`./config-${profile}.js`);
data.env = {
    profile: profile,
    server_port: port,
};

export default data;
