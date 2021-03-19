const mongoose = require("mongoose");
const { client } = require("./config/discordClient")
const argsHandler = require("./bin/argsHandler");
const { argsFinder, comandPrefixValid } = argsHandler
const userValidation = require("./bin/userValidation");
const { userValid } = userValidation;
const record = require("./commands/moderation/records");
const { records } = record

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
    try {
        if (!msg.author.bot && comandPrefixValid(msg) === "$") {
            userValid(await argsFinder(msg), msg);
        }
    } catch (err) {
        return
    }
});