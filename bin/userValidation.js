const { client } = require("../config/discordClient");
const { records } = require("../commands/moderation/records");
const { warn } = require("../commands/moderation/warning");
const { kick } = require("../commands/moderation/kick");
const { mutevoice } = require("../commands/moderation/muteVoice")
const help = require("../commands/utilities/help");
const { commands } = help;

module.exports = {
    userValid: async (args, msg) => {
        try {
            //Plan to expand this to include non-moderation commands possibly.
            if (eval(args.command) === commands) {
                return eval(args.command)(msg);;
            } else {
                await client.users.fetch(args.user);
                return eval(args.command)(args.user, msg, args.statement);
            }
        } catch (err) {
            return msg.channel.send("A valid user was not supplied, try again!");
        }
    }
}