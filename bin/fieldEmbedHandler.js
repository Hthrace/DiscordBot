//Need to replace date with proper action date once date handler function is implemented

module.exports = {
    fieldEmbed: (modAction, time = "blank") => {
        try {
            const blank = "";
            if (modAction.length <= 0) {
                return '\u200b'
            } else {
                fieldData = [];
                modAction.forEach((val) => {
                    fieldData.push(`\n[${val._id}] Date -- <@${val.authorId}> -- ${eval(time)} ${val.reason}`);
                });
                return fieldData;
            }
        } catch (err) {
            console.log(err)
            return;
        }
    }
}