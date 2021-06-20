module.exports = (client, message) => {

    if (!message.author.bot) { // Si l'auteur du message n'est pas un bot

        var server = client.guilds.cache.get(client.config.modmail.SERVEUR);
        var name = message.author.username + "#" + message.author.discriminator;
        var channelName = message.author.username + message.author.discriminator;
        var user = client.guilds.cache.get(client.config.modmail.SERVEUR).members.cache.get(message.author.id)
        var category = server.channels.cache.get(client.config.modmail.CATEGORIE)
        var exists = false;
        var chanId;

        server.channels.cache.forEach(channel => { // On verifie chaque channel pour voir si il n'existe pas deja

            if (channel.name == channelName.replace(/\s/g, '-').toLowerCase()) {
                exists = true
                chanId = channel.id
            }
        })

        if (!exists) { // Si le channel n'existe pas on le crée

            server.channels.create(channelName, { type: 'text' }).then(chan => {

                if (!category) {
                    console.error
                }

                chan.setParent(category.id).then(e => { // On met le nouveau channel dans la bonne catégorie

                    chan.updateOverwrite(chan.guild.roles.everyone, { VIEW_CHANNEL: false }).then(i => { // On interdit a tout le monde de voir le channel
                        let role = /*client.guilds.roles.cache.get(client.config.modmail.ROLEADMIN)*/client.config.modmail.ROLEADMIN
                        let date = new Date()
                        let now = ((date.getDate() < 10) ? "0" + date.getDate() : date.getDate()) + "/" + ((date.getMonth() < 10) ? "0" + date.getMonth() : date.getMonth()) + "/" + date.getFullYear() + " à " + date.getHours() + ":" + date.getMinutes()
                        chan.send("<@&" + client.config.modmail.ROLEADMIN + "> Nouvelle demande de {" + message.author.id + "} ** " + name + " ** le " + now + " :\r\n" + message.content)
                        message.reply("Votre demande a bien été envoyée. Nous la traiterons dans les plus brefs délais. Merci de votre patience.")
                    })
                        .catch(console.error);
                })
                    .catch(console.error);

            })
                .catch(console.error);

        } else { // Si le channel existe deja on envoi simplement le nouveau message

            var channel = client.channels.cache.get(chanId)
            var last;

            channel.messages.fetch()
                .then(messages => {
                    server.channels.cache.get(chanId).send("**" + name + " :** " + message.content)
                })
                .catch(console.error);

        }
    }
}