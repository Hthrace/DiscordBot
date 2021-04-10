const mongoose = require("mongoose");

const kickSchema = new mongoose.Schema({
    discordId: String,
    action: String,
    reason: String,
    authorId: String,
    actionDate: String,
});
module.exports = mongoose.model("Kick", kickSchema);