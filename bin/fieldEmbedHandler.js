const dateFns = require("date-fns");

module.exports = {
    fieldValueEmbed: (modAction, modActionType, time = "blank") => {
        try {
            const blank = "";
            if (modAction.length <= 0) {
                return [];
            } else {
                fieldData = [];
                modAction.forEach((val) => {
                    fieldData.push(`\n[${val._id}] ${dateFns.format(new Date(Number(val.actionDate)), 'MM-dd-yyyy')} -- ${eval(time)} ${val.reason}`);
                });
                return {
                    name: `${modActionType}: ${modAction.length}`,
                    value: fieldData,
                };
            }
        } catch (err) {
            console.log(err)
            return;
        }
    },
}