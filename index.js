const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
    if(msg.author == client.user) return;

    const prefix = "+"
    if(msg.content=prefix+"ping"){
        msg.channel.send("Pong!")
    }
})

client.login('xxx')
