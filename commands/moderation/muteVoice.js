const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds, modActionConfirm } = embeds;
const actions = require("../../database/actions");
const { actionHandler } = actions;
const { timeParse } = require("../../bin/actionTimeHandler")

module.exports = {
    mutevoice: async(userId, msg, statement, next) => {
        try {
            muteVoiceDuration = timeParse(statement, msg)
            if (isNaN(muteVoiceDuration)) {
                return msg.channel.send(muteVoiceDuration);
            } else {
                console.log("Works")
                const userData = await userFind(userId, msg);

                newMuteVoice = {
                    discordId: userData.discordId,
                    action: "muteVoice",
                    reason: statement,
                    authorId: msg.author.id,
                    actionDate: new Date().getTime(),
                };

                const muteVoiceData = await actionHandler(userData, "mutevoice", newMuteVoice, msg);

                const guild = client.guilds.cache.get(msg.guild.id)
                    ; (await guild.members.fetch(userId)).voice.setMute(true)

                return //msg.channel.send({ embed: modActionConfirm(muteVoiceData) })
            }
        } catch (err) {
            return
        }
    }
}