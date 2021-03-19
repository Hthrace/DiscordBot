const Discord = require('discord.js');
const client = new Discord.Client();
const dontenv = require("dotenv").config()
client.login(process.env.TOKEN);

module.exports = {client};