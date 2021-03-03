module.exports.run =async(client, message, args) => {
    if(message.member.roles.cache.get(client.config.server.staffId)) {
    let memberRem
    let roleRem
    if(typeof message.mentions.members.first() !== "undefined") {
        memberRem = message.guild.members.cache.get(message.mentions.members.first().id)
        message.delete()
        let check2 = client.emojis.cache.find(emoji => emoji.name === "check2");
        let utilisateur = message.mentions.members.first()
        let rolea = message.mentions.roles.first()
         message.channel.send(`${check2}J\ai bien retiré le role ${rolea} de ${utilisateur} `)
         .then(m => {
            setTimeout(function() {
              m.delete()
            }, 5000)
          })
        if(typeof message.mentions.roles.first() !== "undefined") {
            roleRem = message.mentions.roles.first()
            memberRem.roles.remove(roleRem).catch(console.error)
        }
    }
}
}                
module.exports.help = {
    
    name : 'remove-role',
    aliases : ['remove-role','rem-role','rem-r'],
    category : 'staff',
    description : 'Enleve un role a un membre',
    cooldown : 3,
    usage : '<@user> <@role> ',
    exemple :['warn @Smaug Spam de messages.'],
    permissions : false,
    isUserAdmin: true,
    args : true,
    sousCommdandes : []
}         
            