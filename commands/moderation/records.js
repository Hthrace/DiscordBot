const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds } = embeds;

module.exports = {
    records: async (user, msg) => {
        try {
            const userData = await userFind(user, msg);
            return msg.channel.send({ embed: userRecordsEmbeds(userData) })
        } catch (err) {
            return;
        }
    }
}