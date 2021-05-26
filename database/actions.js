const warnings = require("../models/warningSchema");
const kicks = require("../models/kickSchema");
const mutevoice = require("../models/mutevoiceSchema")

module.exports = {
    actionHandler: async (userData, actionType, newAction, msg) => {
        try {
            action = eval(actionType)
            actionData = await action.create(newAction);
            userData[actionType].push(actionData);
            userData.isModerated = true;
            userData.lastModerated = new Date().getTime();
            userData.save();
            return actionData;
        } catch (err) {
            return;
        }
    }
}