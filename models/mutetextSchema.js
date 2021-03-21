const mongoose = require("mongoose");

const mutetextSchema = new mongoose.Schema({
    discordId: String,
    reason: String,
    authorId: Number,
    actionDate: String,
    unmuteDate: String,
    earlyUnmuteReason: String,
    earlyUnmuteDate: String,
});
module.exports = mongoose.model("Mutetext", mutetextSchema);