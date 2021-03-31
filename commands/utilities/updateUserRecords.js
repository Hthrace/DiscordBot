const client = require("../../config/discordClient");
const user = require("../../models/userSchema")

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

           return currentRecords = await user.findOneAndUpdate({ discordId: userId }, updatedRecords, {new: true});
        } catch (err) {
            return;
        }
    }
}