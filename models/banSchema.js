const mongoose = require("mongoose");

const banSchema = new mongoose.Schema({
    discordId: String,
    reason: String,
    authorId: Number,
    actionDate: String,
    unbanDate: String,
    earlyUnbanReason: String,
    earlyUnbanDate: String,
});
module.exports = mongoose.model("Ban", banSchema);