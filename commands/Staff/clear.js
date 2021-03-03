module.exports.run =async(client, message, args) => {
    if(message.member.roles.cache.get(client.config.server.staffId)) {
        let count = args[1]
        if(isNaN(count))return message.channel.send('Veuillez indiquer un nombre valide')
        if(count < 1 || count > 100)return message.channel.send('Veuillez indiquer un nombre compris entre 0 et 100')
        message.channel.bulkDelete(parseInt(count) + 1) 
    }
}           
module.exports.help = {
    name : 'clear',
    aliases : ['clear','purge'],
    category : 'staff',
    description : 'Purge des messages',
    cooldown : 30,
    usage : '<nb_messages>',
    exemple :['clear 10'],
    permissions : false,
    isUserAdmin: false,
    args : true,
    sousCommdandes : []
}         
            