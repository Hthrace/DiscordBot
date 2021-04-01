const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds } = embeds;
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
                    reason: statement,
                    authorId: msg.author.id,
                    actionDate: new Date(),
                };

                await warning.create(newWarning,(err, warningData)=>{
                    userData.warnings.push(warningData);
                    userData.isModerated = true;
                    return userData.save();
                });
                return;
            }
        } catch (err) {
            return;
        }
    }
}