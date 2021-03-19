const mongoose = require("mongoose");
const { client } = require("./config/discordClient")
const argsHandler = require("./bin/argsHandler");
const { argsFinder, comandPrefixValid } = argsHandler

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


//!msg.member.roles.cache.has('333424099097444352')

client.on('message',  async msg => {
    try {
        if (!msg.author.bot && comandPrefixValid(msg) === "$") {
            args = await argsFinder(msg);
            console.log(args)
           
        }   
    } catch (err) {
        return
    }
});