const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds, modActionConfirm } = embeds;
const warning = require("../../models/warningSchema");

module.exports = {
    warn: async (userId, msg, statement) => {
        try {
            if (statement.length <= 0) {
                return msg.channel.send("A warning was not supplied, try again!");
            } else {
                const userData = await userFind(userId, msg);
                newWarning = {
                    discordId: userData.discordId,
                    action: "Warning",
                    reason: statement,
                    authorId: msg.author.id,
                    actionDate: new Date(),
                };

                warningData = await warning.create(newWarning);
                userData.warnings.push(warningData);
                userData.isModerated = true;
                userData.lastModerated = new Date().getTime();
                userData.save();
                return msg.channel.send({ embed: modActionConfirm(warningData) })
            }
        } catch (err) {
            return;
        }
    }
}