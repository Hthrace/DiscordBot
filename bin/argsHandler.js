const { client } = require("../config/discordClient");
const { commandsDefined } = require("../config/commandsDefined");

module.exports = {
    argsFinder: (msg) => {
        try {
            args = msg.content;
            argsArry = args.split(" ").filter((arry) => { return arry });
            statement = argsArry.slice(2).join(" ");

            if (argsArry[1] != undefined && argsArry[1].startsWith("<@") && argsArry[1].endsWith(">")) {
                prefixStrip = argsArry[1].slice(2);
                suffixStrip = prefixStrip.slice(1, prefixStrip.length - 1);
                userTarget = suffixStrip;
            } else {
                userTarget = argsArry[1];
            }

            if (commandsDefined[argsArry[0].slice(1)] !== undefined) {
                return argsValidated = {
                    command: argsArry[0].slice(1),
                    user: userTarget,
                    statement: statement,
                }
            }

        } catch (err) {
            return;
        }
    },
    comandPrefixValid: (msg) => {
        try {
            args = msg.content;
            argsArry = args.split(" ").filter((arry) => { return arry });
            return commandPrefix = argsArry[0].slice(0, 1);
        } catch (err) {
            return;
        }
    }
}