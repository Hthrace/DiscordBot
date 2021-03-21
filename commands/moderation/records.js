const client = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds } = embeds;

module.exports = {
    records: async (user, msg) => {
        try {
            console.log(userRecordsEmbeds())
            //msg.channel.send(userRecordsEmbeds())
            return userFind(user, msg);
        } catch (err) {
            return;
        }
    }
}