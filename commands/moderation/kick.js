const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds, modActionConfirm } = embeds;
const actions = require("../../database/actions");
const { actionHandler } = actions;

module.exports = {
    kick: async (userId, msg, statement) => {
        try {
            if (statement.length <= 0) {
                return msg.channel.send("A kick reason was not supplied, try again!");
            } else {
                const userData = await userFind(userId, msg);
                newKick = {
                    discordId: userData.discordId,
                    action: "Kick",
                    reason: statement,
                    authorId: msg.author.id,
                    actionDate: new Date().getTime(),
                };

                const kickData = await actionHandler(userData, "kicks", newKick, msg);

                const guild = client.guilds.cache.get(msg.guild.id)
                ;(await guild.members.fetch(userId)).kick(newKick.reason);

                return msg.channel.send({ embed: modActionConfirm(kickData) })
            }
        } catch (err) {
            console.log(err)
            return;
        }
    }
}