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
            if (statement.length <= 0) {
                return msg.channel.send("A mute voice reason or duration was not supplied, try again!");
            }
            console.log(timeParse(statement, msg));
            return 
        } catch (err) {
            console.log(err)
            return;
        }
    }
}