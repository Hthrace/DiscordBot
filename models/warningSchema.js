const mongoose = require("mongoose");

const warningSchema = new mongoose.Schema({
    discordId: String,
    action: String,
    reason: String,
    authorId: String,
    actionDate: String,
});
module.exports = mongoose.model("Warning", warningSchema);