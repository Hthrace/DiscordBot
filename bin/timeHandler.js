const dateFns = require("date-fns");

module.exports = {
    timeInterval: (dateFrom) => {
        try {
            return dateFns.formatDuration(dateFns.intervalToDuration({
                start: new Date(dateFrom),
                end: new Date(),
            }), {zero: (false)});
        } catch (err) {
            return console.log(err)
        }
    }
}