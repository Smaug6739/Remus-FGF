module.exports = (bot, member) => {
    const { BYECHANNEL } = require('../../configstyle')
    const user = member.user;
    member.guild.channels.cache.get(`${BYECHANNEL}`).send(`** ${user.tag} ** le traitre vient de nous abandonner.Bon vent l'ami ! Nous sommes maintenant  ${member.guild.memberCount}`);

}