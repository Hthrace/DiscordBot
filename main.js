const mongoose = require("mongoose");
const { client } = require("./config/discordClient")
const argsHandler = require("./bin/argsHandler");
const { argsFinder, comandPrefixValid } = argsHandler
const userValidation = require("./bin/userValidation");
const { userValid } = userValidation;

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
    const guild = client.guilds.cache.get('282786877847764992')
    const member = guild.members.fetch("282786181958074368")
    console.log((await member).voice.setMute(true)) */

    try {
        if (!msg.author.bot && comandPrefixValid(msg) === "$") {
            userValid(argsFinder(msg), msg);
        }
    } catch (err) {
        return
    }
});