

module.exports = {
    fieldValueEmbed: (modAction, modActionType, time = "blank") => {
        try {
            const blank = "";
            if (modAction.length <= 0) {
                return [];
            } else {
                fieldData = [];
                modAction.forEach((val) => {
                    const date = new Date(Number(val.actionDate));
                    fieldData.push(`\n[${val._id}] ${date.getMonth()}-${date.getDate()}-${date.getFullYear()} -- <@${val.authorId}> -- ${eval(time)} ${val.reason}`);
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