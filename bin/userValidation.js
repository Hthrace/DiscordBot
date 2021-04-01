const { client } = require("../config/discordClient")
const { records } = require("../commands/moderation/records");
const { warn } = require("../commands/moderation/warning")
const help = require("../commands/utilities/help");
const { commands } = help;

module.exports = {
    userValid: async (args, msg) => {
        try {
            userCheck = await client.users.fetch(args.user);
            if (userCheck !== "Cannot send an empty message" || eval(args.command) === commands) {
                return eval(args.command)(args.user, msg, args.statement);
            } else {
                return msg.channel.send("A valid user was not supplied, try again!");
            }
        } catch (err) {
            return msg.channel.send("A valid user was not supplied, try again!");
        }
    }
}