const warnings = require("../models/warningSchema")

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