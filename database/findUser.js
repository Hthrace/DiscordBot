const user = require("../models/userSchema");
const kick = require("../models/kickSchema");
const mutetext = require("../models/mutetextSchema");
const mutevoice = require("../models/mutevoiceSchema");
const warning = require("../models/warningSchema");
const ban = require("../models/banSchema");
const argsHandler = require("./bin/argsHandler");
const { argsFinder, comandPrefixValid } = argsHandler
const { client } = require("../config/discordClient");

module.exports = {
    findUser: (userTarget)=>{
        
    }
}