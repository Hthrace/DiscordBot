const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    discordId: String,
    username: String,
    profilePic: String,
    creationDate: String,
    isModerated: Boolean,
    isBanned: Boolean,
    isMutedVoice: Boolean,
    isMutedText: Boolean,
    isPfpRemoved: Boolean,
    lastModeration: String,
    warnings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "warning"

        }
    ],
    warnings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "warning"

        }
    ],
    muteText: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "muteText"

        }
    ],
    muteVoice: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "muteVoice"

        }
    ],
    kicks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "kick"

        }
    ],
});

module.exports = mongoose.model("User", userSchema);