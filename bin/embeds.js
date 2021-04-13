const { client } = require("../config/discordClient");
const { fieldEmbed } = require("../bin/fieldEmbedHandler");

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

                    fields: [{
                        name: `Warnings: ${userData.warnings.length}`,
                        value: `${fieldEmbed(userData.warnings)}`
                    },
                    {
                        name: `Kicks: ${userData.kicks.length}`,
                        value: `${fieldEmbed(userData.kicks)}`
                    },
                    {
                        name: `MuteText: ${userData.muteText.length}`,
                        value: `${fieldEmbed(userData.muteText)}`
                    },
                    {
                        name: `MuteVoice: ${userData.muteVoice.length}`,
                        value: `${fieldEmbed(userData.muteVoice)}`
                    },
                    {
                        name: `Bans: ${userData.bans.length}`,
                        value: `${fieldEmbed(userData.bans)}`
                    }
                    ],

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
    },
    modActionConfirm: (warningData) => {
        try {
            return {
                color: 0x0099ff,

                title: `**__${warningData.action} Successful__**`,

                description: `${warningData.action} issued by <@${warningData.authorId}> to <@${warningData.discordId}>.`,

                //Need to add logic for different action confirmations to the field section.

                fields: [
                    {
                        name: "Reason",
                        value: `${warningData.reason}`
                    }
                ],

                timestamp: new Date(),

                footer: {
                    text: "Action completed",
                },
            };
        } catch (err) {
            return;
        }
    }
}