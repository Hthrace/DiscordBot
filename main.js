const mongoose = require("mongoose");
const { client } = require("./config/discordClient")
const argsHandler = require("./bin/argsHandler");
const { argsFinder, comandPrefixValid } = argsHandler;
const { moderator } = require("./config/permissions");

mongoose.connect('mongodb://localhost/DiscordBot', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log("Database connected and online boss!");
    })
    .catch((err) => {
        console.log(err);
        console.log("Database system knackered boss!");
    });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    /* const user = client.user
    const guild = client.guilds.cache.get(msg.guild.id)
    const member = guild.members.fetch("282786181958074368")
    console.log((await member).voice.setMute(true)) */
    //console.log(client.guilds.cache.get(msg.guild.id))
    //console.log(client.ws.ping)
    try {
        const guild = client.guilds.cache.get(msg.guild.id)
        const member = guild.members.fetch(msg.author.id)
        const mod = (await member).roles.cache.has(moderator);
        if (!msg.author.bot && mod && comandPrefixValid(msg) === "$") {
            return argsFinder(msg);
        }
    } catch (err) {
        return;
    }
});