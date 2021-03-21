const user = require("../models/userSchema");
const kick = require("../models/kickSchema");
const mutetext = require("../models/mutetextSchema");
const mutevoice = require("../models/mutevoiceSchema");
const warning = require("../models/warningSchema");
const ban = require("../models/banSchema");
const { client } = require("../config/discordClient");
const updateUserRecords = require("../commands/utilities/updateUserRecords");
const { userUpdate } = updateUserRecords;

module.exports = {
    userFind: async (userId, msg) => {
        try {
            const userData = await user.findOne({ discordId: userId }).populate("kick").populate("mutetext").populate("mutevoice").populate("warning").populate("ban");
            const discordData = msg.client.users.cache.get(userId);

            if (userData === null) {
                newUser = {
                    discordId: discordData.id,
                    username: discordData.username,
                    avatar: discordData.avatar,
                    creationDate: new Date(),
                    isModerated: false,
                    isBanned: false,
                    isMutedVoice: false,
                    isMutedText: false,
                    isPfpRemoved: false,
                }
                const newUserRecords = await user.create(newUser);
                return newUserRecords;
            } else {
                const userRecords = userUpdate(userId, userData.isPfpRemoved, msg);
                return userRecords;
            }
        } catch (err) {
            return;
        }
    }
}