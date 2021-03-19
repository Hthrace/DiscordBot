const client = require("../../config/discordClient")

module.exports = {
    records: async (user, msg) => {
        try {
            return msg.channel.send("Valid user!");
        } catch (err) {
            return;
        }
    }
}