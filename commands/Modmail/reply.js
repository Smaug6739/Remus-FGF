module.exports.run =async(client, message, args) => {

    var oldMessage;
    var name = message.author.username+"#"+message.author.discriminator;
    var name = "Admin";
    const mess = message.content.split(/ +/g);
    let command = mess[0]
    var textArray = mess.shift()
    var newMessage = mess.join(' ')
    message.channel.messages.fetch()
    .then(msgs => {
        let role = message.channel.guild.roles.cache.get(client.config.modmail.ROLEADMIN)
        if(!msgs.last().mentions.has(role)) {
            msgs.last().delete().then(m => {
                message.channel.messages.fetch()
                .then(messages => {
                    oldMessage = messages.last().content
                    var messageArray = oldMessage.split("{")
                    var messArray = messageArray[1].split("}")
                    var userId = messArray[0]
                    message.channel.send("**"+name+"** : "+newMessage)
                    message.channel.messages.delete(messages.first())
                    client.users.cache.get(userId).send(newMessage)
                })
                .catch(console.error);
            })
            .catch(console.error);
        } else {
            oldMessage = msgs.last().content
            var messageArray = oldMessage.split("{")
            var messArray = messageArray[1].split("}")
            var userId = messArray[0]
            message.channel.send("**"+name+"** : "+newMessage)
            message.channel.messages.delete(msgs.first())
            client.users.cache.get(userId).send(newMessage)
        }
    })
    .catch(console.error);
}
module.exports.help = {
    
    name : 'reply',
    aliases : ['reply','r'],
    category : 'modmail',
    description : 'Répond a un utilisateur via modmail.',
    cooldown : 3,
    usage : '',
    exemple :['ping'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}