const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    discordId: String,
    username: String,
    avatar: String,
    serverJoinDate: String,
    isModerated: Boolean,
    lastModerated: String,
    isBanned: Boolean,
    isMutedVoice: Boolean,
    isMutedText: Boolean,
    isPfpRemoved: Boolean,
    bans: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ban"

        }
    ],
    warnings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Warning"

        }
    ],
    muteText: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mutetext"

        }
    ],
    muteVoice: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mutevoice"

        }
    ],
    kicks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Kick"

        }
    ],
});

module.exports = mongoose.model("User", userSchema);