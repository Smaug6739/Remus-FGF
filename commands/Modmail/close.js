module.exports.run =async(client, message, args) => {
    if(message.channel.parent == client.guilds.cache.get(client.config.modmail.SERVEUR).channels.cache.get(client.config.modmail.CATEGORIE)){
        var oldMessage;
        let date = new Date()
        var now = ((date.getDate() < 10) ? "0"+date.getDate() : date.getDate())+"/"+((date.getMonth() < 10) ? "0"+date.getMonth() : date.getMonth())+"/"+date.getFullYear()
        var hour = date.getHours()+":"+date.getMinutes()
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
                        var user = client.users.cache.get(userId)
                        var newContentArray = messages.last().content.split(":")
                        newContentArray.shift()
                        newContentArray.shift()
                        var newContent = newContentArray.join(":")
                        client.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à  contacter de nouveau Spiritus.").then(msg => {
                            client.guilds.cache.get(client.config.modmail.SERVEUR).channels.cache.get(client.config.modmail.CHENNELLOGS).send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
                                message.channel.delete()
                            })
                        })
                    })
                    .catch(console.error);
                })
                .catch(console.error);
            } else {
                oldMessage = msgs.last().content
                var messageArray = oldMessage.split("{")
                var messArray = messageArray[1].split("}")
                var userId = messArray[0]
                var user = client.users.cache.get(userId)
                var newContentArray = msgs.last().content.split(":")
                newContentArray.shift()
                newContentArray.shift()
                var newContent = newContentArray.join(":")
                client.users.cache.get(userId).send("Demande traitée par un administrateur. Merci d'avoir fait appel à Spiritus, le bot relai de la FGF.\r\nPour une nouvelle requête, n'hésitez pas à me contacter de nouveau.").then(msg => {
                    client.guilds.cache.get(client.config.modmail.SERVEUR).channels.cache.get(client.config.modmail.CHANNELLOGS).send("@here Une nouvelle demande à été traitée :"+"\r\n**Demande de : **"+user.tag+"\r\n**Traitée par : **"+message.author.username+"\r\n**Contenu : **"+newContent+"\r\n**Le : **"+now+"\r\n**À : **"+hour).then(m => {
                        message.channel.delete()
                    })
                })
                .catch(console.error);
            }
        })
        .catch(console.error);
    }

}                
module.exports.help = {
    
    name : 'close',
    aliases : ['close'],
    category : 'modmail',
    description : 'Ferme une demane modmail',
    cooldown : 3,
    usage : '',
    exemple :['ping'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}         
            