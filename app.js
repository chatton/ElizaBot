// code adapated from this tutorial https://www.youtube.com/watch?v=024upsEuHaU
const Discord = require("discord.js");
const requestify = require("requestify");
const settings = require("./botSettings.json");
const unirest = require('unirest');

const bot = new Discord.Client();

bot.on("message", message => {
    if (message.author.bot) return; // don't reply to other bots (or messages sent by this one!)
    let text = message.content;        
    unirest.post('http://localhost:8080/ask')
        .send({ "question": text })
        .end(response => {
        message.reply(response.body);
    });
});

bot.login(settings.token);