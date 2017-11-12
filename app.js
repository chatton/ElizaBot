// code adapated from this tutorial https://www.youtube.com/watch?v=024upsEuHaU
const Discord = require("discord.js");
const settings = require("./botSettings.json");

const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("ElizaBot Logged in!");
});

bot.on("message", message => {
    if (message.author.bot) return; // don't reply to other bots (or messages sent by this one!)
    let text = message.content;
    let reply = "You said: " + text;
    message.reply(reply);
});

bot.login(settings.token);