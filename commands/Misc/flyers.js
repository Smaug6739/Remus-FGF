const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args, settings) => {

    const flyersHelp = new MessageEmbed()
    .setTitle('Liste des flyers disponibles')
    .setAuthor(`Liste des flyers disponibles`,`${message.guild.iconURL()}`)
    .setThumbnail(client.user.avatarURL())
    .addField('Flyers',`__${settings.prefix}flyer multigaming__\n__${settings.prefix}flyer teso__\n__${settings.prefix}flyer psteso__\n__${settings.prefix}flyer cod__\n__${settings.prefix}flyer gta__\n__${settings.prefix}flyer rocket__\n__${settings.prefix}flyer apex__\n`,false)
    .addField('Affiches',`__${settings.prefix}affiche multigaming 1__\n__${settings.prefix}affiche multigaming 2__\n__${settings.prefix}affiche multigaming 3__\n__${settings.prefix}affiche multigaming 4__\n__${settings.prefix}affiche gtaaffiche multigaming 5__\n__${settings.prefix}affiche teso__\n__${settings.prefix}affiche rocket__\n__${settings.prefix}affiche cod__\n__${settings.prefix}affiche saintSeiya__\n__${settings.prefix}affiche rainbow__\n__${settings.prefix}affiche noel__\n__${settings.prefix}affiche fortnite__`,false)
    .addField('Autre',`__${settings.prefix}rules admin\n__${settings.prefix}emojistab__\n${settings.prefix}affiches help/flyers help`,false)
    .setFooter('Smaug et Noval développeurs officiels du BOT',message.guild.iconURL())
    .setTimestamp()
    const emojiEmbed = new MessageEmbed()
    .setTitle('Tableau de classement emojitique')
    .setDescription('Nommez vos émojis comme sur le tableau pour les placer à l\'endroit désiré')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714436203012816936/sketch-1590086562873.png')
    const flyersEmbed = new MessageEmbed()
    .setTitle('Affiche multigaming')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes multigaming')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714435629366247444/sketch-1590357630728.png')
    const flyersapexEmbed = new MessageEmbed()
    .setTitle('Affiche Apex Legends')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums Apex Legends')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714438140223553618/sketch-1590405707842.png')
    const adminrulesEmbed = new MessageEmbed()
    .setTitle('Règles d\'administration')
    .setDescription('Voici les règles principale d\administration')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714440066830958672/1590406176614.png')
    const rlflyerEmbed = new MessageEmbed()
    .setTitle('Flyer Rocket League')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums rocket league')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714441956960239667/sketch-1590002701071.png')
    const gtaflyerEmbed = new MessageEmbed()
    .setTitle('Flyer GTA5')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums gta 5')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714444986174668870/sketch-1589997701572.png')
    const codflyerEmbed = new MessageEmbed()
    .setTitle('Flyer COD')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums call of duty.')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714446003960545290/sketch-1589913829962-2.png')
    const pstesoflyerEmbed = new MessageEmbed()
    .setTitle('Flyer TESO PS4')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums the elder scrolls online.')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714444081379672195/sketch-1588977355156.png')
    const tesoflyerEmbed = new MessageEmbed()
    .setTitle('Flyer The Elder Scrolls Online')
    .setDescription('Postez cette image accompagnée de votre lien d\'invitation pour recruter de nouveaux compagnons dans des groupes et forums the elder scrolls online.')
    .setImage('https://cdn.discordapp.com/attachments/714242633375023164/714548756263206942/sketch-1590432087779.png')
    //Affiches
    const saintSeiya = new MessageEmbed()
    .setTitle('Affiche : saint-seiya-awakening')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116396926205952/1583369759939.png')
    const multigaming1 = new MessageEmbed()
    .setTitle('Affiche : multigaming')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116398167719986/image0.jpg')
    const multigaming2 = new MessageEmbed()
    .setTitle('Affiche : multigaming2')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116415385337937/IMG_-ymsf7x.jpg')
    const noel = new MessageEmbed()
    .setTitle('Affiche : noel')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116450575548446/Logo_de_noel_3.png')
    const multigaming3 = new MessageEmbed()
    .setTitle('Affiche : multigaming3')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116482414510080/sketch-1555242795350.png')
    const fortnite = new MessageEmbed()
    .setTitle('Affiche : fortnite')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116600874237962/sketch-1583184319375.png')
    const rainbow = new MessageEmbed()
    .setTitle('Affiche : rainbow-six-siege')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116625931272202/sketch-1583266608858.png')
    const cod = new MessageEmbed()
    .setTitle('Affiche : call of duty')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116654314127470/sketch-1583272722780.png')
    const rocket = new MessageEmbed()
    .setTitle('Affiche : rocket league')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116709825609788/sketch-1583342649947.png')
    const multigaming4 = new MessageEmbed()
    .setTitle('Affiche : multigaming')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116749352861716/sketch-1585797494404.png')
    const teso = new MessageEmbed()
    .setTitle('Affiche : TESO')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116759557603378/sketch-1585184197804.png')
    const multigaming5 = new MessageEmbed()
    .setTitle('Affiche : multigaming')
    .setImage('https://cdn.discordapp.com/attachments/731116032479199303/731116766142660658/sketch-1585862021007.png')
    
    if(args[0] === 'affiche multigaming 1')message.channel.send(multigaming1)
    if(args[0] === 'affiche multigaming 2')message.channel.send(multigaming2)
    if(args[0] === 'affiche multigaming 3')message.channel.send(multigaming3)
    if(args[0] === 'affiche multigaming 4')message.channel.send(multigaming4)
    if(args[0] === 'affiche multigaming 5')message.channel.send(multigaming5)
    if(args[0] === 'affiche teso')message.channel.send(teso)
    if(args[0] === 'affiche rocket')message.channel.send(rocket)
    if(args[0] === 'affiche cod')message.channel.send(cod)
    if(args[0] === 'affiche saintSeiya')message.channel.send(saintSeiya)
    if(args[0] === 'affiche rainbow')message.channel.send(rainbow)
    if(args[0] === 'affiche noel')message.channel.send(noel)
    if(args[0] === 'affiches fortnite')message.channel.send(fortnite)

    

    if(args[0] === 'multigaming')message.channel.send(flyersEmbed)
    if(args[0] === 'teso')message.channel.send(tesoflyerEmbed)
    if(args[0] === 'psteso')message.channel.send(pstesoflyerEmbed)
    if(args[0] === 'cod')message.channel.send(codflyerEmbed)
    if(args[0] === 'gta')message.channel.send(gtaflyerEmbed)
    if(args[0] === 'rocket')message.channel.send(rlflyerEmbed)
    if(args[0] === 'apex')message.channel.send(flyersapexEmbed)
    
    if(args[0] === 'emojitab')message.channel.send(emojiEmbed)
    if(args.join(' ') === 'rules admin')message.channel.send(adminrulesEmbed)
    if(args[0] === 'help')message.channel.send(flyersHelp)





};
  
  module.exports.help = {
    name: "flyer",
    aliases: ['flyer','flyers'],
    category: 'misc',
    description: "Renvoi les flyers/affiches.",
    cooldown: 3,
    usage: '<name>',
    exemple :["flyer teso"],
    isUserAdmin: false,
    permissions: false,
    args: true,
    sousCommdandes : []
  };