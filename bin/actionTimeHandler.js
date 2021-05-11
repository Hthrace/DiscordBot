const dateFns = require("date-fns");

module.exports = {
    timeParse: (statement, msg) => {
        try {
            args = statement.split(" ").filter((arry) => { return arry });
            if (args.length < 2) {
                return 0;
            } else {
                timeArgs = args[0].split("");
                durationTime = [];
                unitTime = [];

                timeArgs.forEach((val) => {
                    if (isNaN(val)) {
                        return unitTime.push(val);
                    } else {
                        return durationTime.push(val);
                    }
                });
                argUnit = unitTime.join("")

                let newDate;

                switch (argUnit) {
                    case "min":
                    case "mins":
                    case "minute":
                    case "minutes":
                        newDate = dateFns.add(new Date(), { minutes: Number(durationTime.join("")) })
                        break;
                    case "hr":
                    case "hrs":
                    case "hour":
                    case "hours":
                        newDate = dateFns.add(new Date(), { hours: Number(durationTime.join("")) })
                        break;
                    case "d":
                    case "ds":
                    case "day":
                    case "days":
                        newDate = dateFns.add(new Date(), { days: Number(durationTime.join("")) })
                        break;
                    case "wk":
                    case "wks":
                    case "week":
                    case "weeks":
                        newDate = dateFns.add(new Date(), { weeks: Number(durationTime.join("")) })
                        break;
                    case "mths":
                    case "mth":
                    case "month":
                    case "months":
                        newDate = dateFns.add(new Date(), { months: Number(durationTime.join("")) })
                        break;
                    case "yr":
                    case "yrs":
                    case "year":
                    case "years":
                        newDate = dateFns.add(new Date(), { years: Number(durationTime.join("")) })
                        break;
                }

                return dateFns.getTime(newDate)
            }

        } catch (err) {
            return console.log(err)
        }
    }
}