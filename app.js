// code adapated from this tutorial https://www.youtube.com/watch?v=024upsEuHaU
const discord = require("discord.js");
const settings = require("./botSettings.json"); // holds onto the token required to login.
const unirest = require('unirest');

const eliza = new discord.Client();

eliza.on("message", message => {
    if (message.author.bot) {
        return; // don't reply to other bots (or messages sent by this one!)
    } 
    let text = message.content; // get the actual text from the message sent
    unirest.post('http://localhost:8080/ask') // only works on localhost currently.
        .send({question : text}) // send text as a post parameter
        .end(response => {
             message.reply(response.body); 
        }); // reply to the message with eliza's answer.
});

eliza.login(settings.token);