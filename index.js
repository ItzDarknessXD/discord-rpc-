const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});










const keepAlive = require('./server.js');
keepAlive();



client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204154123025387573')//
    .setType('STREAMING')//
    .setURL('https://replit.com/@waterhere') //
    .setState('Python <3')//
    .setName('tejv')//
    .setDetails('`tejv#0000`')//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1212366350400487485/1221131443233751134/lv_0_20240323214315.gif?ex=66117647&is=65ff0147&hm=e6bd23d259c3a7b85674b79981915cba33333f4bc675ddf80b84a6a0034b0932&') // Large Image 
    .setAssetsLargeText('Cyber Tej') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1211678342282092576/1221132702351229068/0f084f95f8c8c385e9e07badaebac3d7.jpg?ex=66117773&is=65ff0273&hm=fbbfcf298ccf2c86aff13ce46f8de51f95b32330832ccaea64f2dfe2dd09e3a0&') // Small image
    .setAssetsSmallText('Real Id - tejv') //Text when you hover the Small image
    .addButton('Tej ‡ Tejv#0000 ','https://cdn.discordapp.com/attachments/1205575691697913926/1205977069792526347/Vmake-1706947003795-ezgif.com-video-to-gif-converter.gif?ex=65da54ab&is=65c7dfab&hm=1da1af9cedd9d3658f7bc89446b610f778d00a9ff363e4e4b23797a7ed448a60&')// button 1
.addButton('Real ID','https://cdn.discordapp.com/attachments/1205575691697913926/1205977069792526347/Vmake-1706947003795-ezgif.com-video-to-gif-converter.gif?ex=65da54ab&is=65c7dfab&hm=1da1af9cedd9d3658f7bc89446b610f778d00a9ff363e4e4b23797a7ed448a60&');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
