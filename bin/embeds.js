const { client } = require("../config/discordClient");

module.exports = {
    userRecordsEmbeds: (userData) => {
        try {
            if (!userData.isModerated) {
                return {
                    color: 0x0099ff,

                    title: "**__Moderation Actions__**",

                    author: {
                        name: `${userData.username} || ${userData.discordId}`,
                    },

                    description: 'No moderation actions.........so far :face_with_raised_eyebrow: ',
                    thumbnail: {
                        url: userData.avatar,
                    },

                    timestamp: new Date(),

                    footer: {
                        text: "Records requested ",
                        //Server icon is a placeholder till I decide what image to go here.
                        icon_url: client.guilds.cache.get("282786877847764992").iconURL(),
                    },
                };
            } else {
                return {
                    color: 0x0099ff,

                    title: "**__Moderation Actions__**",

                    author: {
                        name: `${userData.username} || ${userData.discordId}`,
                    },

                    thumbnail: {
                        url: userData.avatar,
                    },

                    //fields: [],

                    timestamp: new Date(),

                    footer: {
                        text: "Records requested at ",
                        icon_url: client.guilds.cache.get("282786877847764992").iconURL(),
                    },
                };
            }

        } catch (err) {
            return;
        }
    }
}