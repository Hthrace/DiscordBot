const client = require("../../config/discordClient");
const user = require("../../models/userSchema")
const kick = require("../../models/kickSchema");
const mutetext = require("../../models/mutetextSchema");
const mutevoice = require("../../models/mutevoiceSchema");
const warning = require("../../models/warningSchema");
const ban = require("../../models/banSchema");

module.exports = {
    userUpdate: async (userId, pfp, msg) => {
        try {
            const updatedUserData = msg.client.users.cache.get(userId);

            if (pfp) {
                pfpUpdated = "../../img/bannedImg.jpg";
            } else {
                pfpUpdated = `https://cdn.discordapp.com/avatars/${userId}/${updatedUserData.avatar}.webp`
            }

            updatedRecords = {
                username: updatedUserData.username,
                avatar: pfpUpdated,
            }

            return await user.findOneAndUpdate({ discordId: userId }, updatedRecords, { new: true }).populate("kick").populate("mutetext").populate("mutevoice").populate("warning").populate("ban");

        } catch (err) {
            return;
        }
    }
}