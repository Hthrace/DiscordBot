const mongoose = require("mongoose");

const warningSchema = new mongoose.Schema({
    discordId: String,
    reason: String,
    authorId: Number,
    actionDate: String,
});
module.exports = mongoose.model("Warning", warningSchema);