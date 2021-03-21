const client = require("../../config/discordClient")
const findUser = require("../../database/userRecords");
const { userFind } = findUser;

module.exports = {
    records: async (user, msg) => {
        try {
            return userFind(user, msg);
        } catch (err) {
            return;
        }
    }
}