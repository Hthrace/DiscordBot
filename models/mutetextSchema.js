const mongoose = require("mongoose");

const mutetextSchema = new mongoose.Schema({
    discordId: String,
    action: String,
    reason: String,
    authorId: String,
    actionDate: String,
    unmuteDate: String,
    earlyUnmuteReason: String,
    earlyUnmuteDate: String,
});
module.exports = mongoose.model("Mutetext", mutetextSchema);