module.exports.run =async(client, message, args) => {
    if(message.member.roles.cache.get(client.config.server.staffId)) {
            if(message.mentions.users.first() !== 'undefined') {
            let user = message.mentions.users.first()
            let content = args.join(" ")
            user.send("**AVERTISSEMENT : **\r\nSuite au non-respect du règlement la sanction avertissement a été prise a votre encontre :\r\n\r\nModérateur :"+message.author.tag+"\r\n\r\nRaison :\r\n"+content).then(msg => {
                message.delete()
            })
            .catch(console.error);
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('[WARN]')
            .setAuthor('Module de modération')
            .setDescription('__**Raison du warn (warn d\'un staff) :**__\r\n'+content)
            .setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Smaug développeur du bot.');
            message.guild.channels.cache.get(client.config.server.logsChannel).send(embed);
            }
        }
}                
module.exports.help = {
    
    name : 'warn',
    aliases : ['warn'],
    category : 'staff',
    description : 'Donne un avertissement a un membre',
    cooldown : 3,
    usage : '<@user> <raison> ',
    exemple :['warn @Smaug Spam de messages.'],
    permissions : false,
    isUserAdmin: true,
    args : true,
    sousCommdandes : []
}         
            