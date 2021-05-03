const user = require("../models/userSchema");
const { client } = require("../config/discordClient");
const updateUserRecords = require("../commands/utilities/updateUserRecords");
const { userUpdate } = updateUserRecords;

module.exports = {
    userFind: async (userId, msg) => {
        try {
            const userData = await user.findOne({ discordId: userId })
            const discordData = await client.users.fetch(userId);
            if (userData === null) {
                newUser = {
                    discordId: discordData.id,
                    username: discordData.username,
                    avatar: `https://cdn.discordapp.com/avatars/${discordData.id}/${discordData.avatar}.webp`,
                    creationDate: new Date().getTime(),
                    isModerated: false,
                    isBanned: false,
                    isMutedVoice: false,
                    isMutedText: false,
                    isPfpRemoved: false,
                }
                const newUserRecords = await user.create(newUser);
                return newUserRecords;
            } else {
                return await userUpdate(userId, userData.isPfpRemoved, msg);
            }
        } catch (err) {
            return;
        }
    }
}