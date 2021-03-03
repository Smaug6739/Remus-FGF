module.exports = (bot, member)=>{
  const {HI,LOUP,MUSCL,ANNONCES,WARN,PINED,WELCOMECHANNEL,CHANNELACCESSALONS} = require('../../configstyle')
  const NewUser = member.user;
        member.guild.channels.cache.get(`${WELCOMECHANNEL}`)
        .send(`Salut ${NewUser} ${HI}, bienvenue dans la meute de la French Gaming Family ! ${LOUP} ${MUSCL}\n\n${ANNONCES} **N\'oublie pas d\'aller dans <#${CHANNELACCESSALONS}> pour choisir ton support et tes jeux et ainsi faire apparaître les différents salons** \n\n${WARN} **__Attention :Tu ne pourra pas écrire avant d\'avoir choisi tes jeux et supports !__** \n\n${PINED} **__Nous sommes désormais:__** ${member.guild.memberCount}\n \n .`)
     };