const { client } = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;
const embeds = require("../../bin/embeds");
const { userRecordsEmbeds, modActionConfirm } = embeds;
const actions = require("../../database/actions");
const { actionHandler } = actions;
const { timeParse } = require("../../bin/actionTimeHandler")

module.exports = {
    mutevoice: async (userId, msg, statement) => {
        try {
            muteVoiceDuration = timeParse(statement, msg)
            if (muteVoiceDuration === 0) {
                return msg.channel.send("A mute voice reason was not supplied, try again!");
            }
            if(!muteVoiceDuration){
                return msg.channel.send("A valid mute voice duration was not supplied, try again!");
            }
            console.log(muteVoiceDuration);
            return 
        } catch (err) {
            console.log(err)
            return;
        }
    }
}