const mongoose = require("mongoose");

const mutevoiceSchema = new mongoose.Schema({
    discordId: String,
    action: String,
    reason: String,
    authorId: String,
    actionDate: String,
    unmuteDate: String,
    earlyUnmuteReason: String,
    earlyUnmuteDate: String,
});
module.exports = mongoose.model("Mutevoice", mutevoiceSchema);