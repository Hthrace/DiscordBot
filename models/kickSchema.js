const mongoose = require("mongoose");

const kickSchema = new mongoose.Schema({
    discordId: String,
    reason: String,
    authorId: Number,
    actionDate: String,
});
module.exports = mongoose.model("kickvoice", kickSchema);