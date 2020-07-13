const { MessageEmbed} = require("discord.js");
module.exports.run = async (client, message, args, settings) => {
    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");
    switch(getSetting){
        case  'prefix' : {
            if(newSetting){
                await client.updateGuild(message.guild, {prefix : newSetting});
                return message.channel.send(`Prefix mis a jour : \`${settings.prefix }\` ->\`${newSetting}\``)
            }
            message.channel.send(`Prefix actuel : \`${settings.prefix}\``);
            break;
        }
 
        case  'experience' : {
                let uexp ;
                if(settings.expsysteme == true) uexp = false;
                else uexp = true;
                    await client.updateGuild(message.guild, {expsysteme : uexp});
                    message.channel.send(`Système d'experience du serveur mis à jour : \`${settings.expsysteme }\` ->\`${uexp}\``)
            break;
        }

        case  'rankcard' : {
                if(newSetting){
                    if(args[1].includes('png') || args[1].includes('PNG')|| args[1].includes('JPG')|| args[1].includes('jpg')|| args[1].includes('JPEG')|| args[1].includes('jpeg')|| args[1].includes('GIF')|| args[1].includes('gif')){
                        await client.updateGuild(message.guild, {rankcard : newSetting});
                        return message.channel.send(`rank-card mis a jour : \`${settings.rankcard }\` ->\`${newSetting}\``)
                    }else return message.channel.send(`${client.config.emojis.FALSE}Le fichier n'est pas a un format valide. Les formats valides sont : png, jpg, jpeg et gif`)
                }
                message.channel.send(`rank-card actuel : \`${settings.rankcard}\``);
           
            break;
        }
        case  'rank-salon' : {
                if(newSetting){
                    if(!isNaN(args[1])){
                        await client.updateGuild(message.guild, {salonranks : newSetting});
                        return message.channel.send(`rank-salon mis à jour : \`${newSetting}\``)
                    }else if(args[1] === 'desactiver'){
                        client.updateGuild(message.guild, {salonranks : ""});
                        return message.channel.send(`Rank salon à bien été désactiver.`)
                    }
                    else return message.channel.send(`L'id du salon n'est pas valide.`)
                }
                
                message.channel.send(`rank-salon actuel : \`${settings.salonranks || 'Aucun salon'}\``);
           
            break;
        }
    }
};
module.exports.help = {
    
    name: "config",
    aliases: ['config'],
    category: 'administration',
    description: "Modiffier la base de donnée",
    cooldown: 10,
    usage: '[paramètre] (valeur)',
    exemple :[],
    isUserAdmin: false,
    permissions: true,
    args: true,
    sousCommdandes : ["config prefix","config experience","config rankcard","config rank-salon"]
}