const mongoose = require("mongoose");

const banSchema = new mongoose.Schema({
    discordId: String,
    action: String,
    reason: String,
    authorId: String,
    actionDate: String,
    unbanDate: String,
    earlyUnbanReason: String,
    earlyUnbanDate: String,
});
module.exports = mongoose.model("Ban", banSchema);