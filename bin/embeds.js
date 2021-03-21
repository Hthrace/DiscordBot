const userRecords = require("../database/userRecords");


module.exports = {
    userRecordsEmbeds: () => {
        try {

            const userRecordsEmbed = {
                color: 0x0099ff,

                title: 'Some title',

                url: 'https://discord.js.org',

                author: { name: 'Some name' },

                description: 'Moderation Actions',

                thumbnail: {
                    url: 'https://i.imgur.com/wSTFkRM.png',
                },

                //fields: [],

                image: {
                    url: 'https://i.imgur.com/wSTFkRM.png',
                },

                timestamp: new Date(),

                footer: {
                    text: 'Some footer text here',
                    icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
            };
            return userRecordsEmbed;
        } catch (err) {
            return;
        }
    }
}