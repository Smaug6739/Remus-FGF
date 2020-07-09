module.exports.run =async(client, message, args) => {

    let debut = Date.now();
    message.channel.send('Pong !').then(async(m) => await m.edit(`Pong  BOT : \`${Date.now()-debut}ms\` API : \`${client.ws.ping}ms\``));

    let text = args.join(' ');
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let bin = text[i].charCodeAt().toString(2);
        result += Array(8 - bin.length + 1).join('0') + bin;
    }
    return message.channel.send({ embed: {
        title: 'Binary converssion',
        description: result
    }});
    


}
module.exports.help = {
    
    name : 'ping',
    aliases : ['ping'],
    category : 'misc',
    description : 'Ping le bot et donne son temps de réaction',
    cooldown : 3,
    usage : '',
    exemple :['ping'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}