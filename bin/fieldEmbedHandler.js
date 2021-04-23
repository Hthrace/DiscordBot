//Need to replace date with proper action date once date handler function is implemented

module.exports = {
    fieldValueEmbed: (modAction, modActionType, time = "blank") => {
        try {
            const blank = "";
            if (modAction.length <= 0) {
                return [];
            } else {
                fieldData = [];
                modAction.forEach((val) => {
                    fieldData.push(`\n[${val._id}] Date -- <@${val.authorId}> -- ${eval(time)} ${val.reason}`);
                });
                return {
                    name: `${modActionType}: ${modAction.length}`,
                    value: fieldData,
                };
            }
        } catch (err) {
            return;
        }
    },
}