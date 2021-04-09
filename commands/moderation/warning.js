const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds, modActionConfirm } = embeds;
//const warnings = require("../../models/warningSchema")
const actions = require("../../database/actions");
const { actionHandler } = actions;

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

                const warningData = await actionHandler(userData, "warnings", newWarning, msg);

                return msg.channel.send({ embed: modActionConfirm(warningData) })
            }
        } catch (err) {
            return;
        }
    }
}