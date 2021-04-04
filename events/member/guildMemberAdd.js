const { MessageEmbed } = require('discord.js')
module.exports = (bot, member) => {
  const { HI, LOUP, MUSCL, ANNONCES, WARN, PINED, WELCOMECHANNEL, CHANNELACCESSALONS } = require('../../configstyle')
  const NewUser = member.user;
  member.guild.channels.cache.get(`${WELCOMECHANNEL}`)
    .send(new MessageEmbed()
      .setAuthor(member.user.username, member.user.displayAvatarURL())
      .setColor('#53d419')
      .setDescription(`Salut ${NewUser} ${HI}, bienvenue dans la meute de la French Gaming Family ! ${LOUP} ${MUSCL}
    \n${ANNONCES} **N\'oublie pas d\'aller dans <#${CHANNELACCESSALONS}> pour choisir ton support et tes jeux et ainsi faire apparaître les différents salons** 
    \n${WARN} **__Attention :Tu ne pourra pas écrire avant d\'avoir choisi tes jeux et supports !__** 
    \n${PINED} **__[N'hésite pas a t'inscrire sur notre site](https://french-gaming-family.com)__** et pour rejoindre notre équipe et devenir membre du staff n'hésite pas à m'envoyer un message :wink:`)
      .setTimestamp()
      .setFooter('Powered by Smaug', 'https://cdn.discordapp.com/avatars/611468402263064577/c00b9874d093ea56eb6f01a7adb90611.webp')
    )
  //.send(`Salut ${NewUser} ${HI}, bienvenue dans la meute de la French Gaming Family ! ${LOUP} ${MUSCL}\n\n${ANNONCES} **N\'oublie pas d\'aller dans <#${CHANNELACCESSALONS}> pour choisir ton support et tes jeux et ainsi faire apparaître les différents salons** \n\n${WARN} **__Attention :Tu ne pourra pas écrire avant d\'avoir choisi tes jeux et supports !__** \n\n${PINED} **__Nous sommes désormais:__** ${member.guild.memberCount}\n \n .`)
};