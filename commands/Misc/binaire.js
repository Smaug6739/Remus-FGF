module.exports.run =async(client, message, args) => {

  
    let text = args.join(' ');
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let bin = text[i].charCodeAt().toString(2);
        result += Array(8 - bin.length + 1).join('0') + bin;
    }
    return message.channel.send(result);
    


}
module.exports.help = {
    
    name : 'binaire',
    aliases : ['binaire'],
    category : 'misc',
    description : 'Convertis du  texte en binaire.',
    cooldown : 3,
    usage : '',
    exemple :['ping'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : []
}