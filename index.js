const config = require("./config.json");
const database = require("./database.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const superagent = require("superagent");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));




bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("with 180+ Members");
});

bot.on("guildMemberAdd", async member => {
console.log(`${member.id} has joined the server.`);
  
let welcomechannel = member.guild.channels.find(`name`, "♡-welcome-goodbye📄");
welcomechannel.send(`**Ayeee!!! ${member} has just joined the campaign!!! Welcome him/her to our community!!!:kissing_heart:**`);

});

bot.on("guildMemberRemove", async member => {
console.log(`${member.id} has left the server.`);
  
let byechannel = member.guild.channels.find(`name`, "♡-welcome-goodbye📄");
byechannel.send(`**Nevermind:rolling_eyes: !!! ${member} has left the server because he/she had shortage of IQ :unamused:! However he/she may join again anytime if he/she has not been banned because of misdeeds:thinking:!** `);

});

bot.on("channelCreate", async channel => {
console.log(`${channel.name} has been created.`);
  
let schannel = channel.guild.channels.find(`name`, "•audit_log🚫");
schannel.send(`${channel} has been created.`);

});

bot.on("channelDelete", async channel => {
console.log(`${channel.name} has been deleted.`);
  
let schannel = channel.guild.channels.find(`name`, "•audit_log🚫");
schannel.send(`${channel} has been deleted.`);

  
});
bot.on('message', (message) =>{
          if (message.content == 'GM' || message.content == 'Gm' || message.content == 'gm' || message.content == 'Gm guys' || message.content == 'GM guys' || message.content == 'Good morning' ){
              message.reply('Good morning!');
          }
          if (message.content == 'GN' || message.content == 'Gn' || message.content == 'gn' || message.content == 'Gn guys' || message.content == 'Gn bye' || message.content == 'GN bye' || message.content == 'Bye gn' || message.content == 'Bye GN'
              || message.content == 'Gd n8'
        ){
              message.reply('Good night!');
          }
          if (message.content == 'Sup' || message.content == 'sup' || message.content == 'Wassap'|| message.content == 'wassap' || message.content == 'Wassap!' ){
              message.reply('fine. Wbu?');
          }
          if (message.content == 'HI' || message.content == 'Hi' || message.content == 'hi' ||  message.content == 'Hello' || message.content == 'Hlw' || message.content == 'hlw' || message.content == 'hello' ||
         message.content == 'Hey' || message.content == 'hey' )
          {
            message.reply('wassap!?!');
          }
          if (message.content == 'BYE' || message.content == 'Bye' || message.content == 'bye' || message.content == 'Cya' || message.content == 'Bye cya' || message.content == 'CYA' )
          {
            message.reply('Good bye!! See you again!');
          }
          if (message.content == 'Stfu' || message.content == 'stfu' || message.content == 'STFU'  )
          {
            message.reply('you better stfu or let others speak independently!!! Huh! :rage: ');
          }
          if (message.content == 'Noob' || message.content == 'noob' || message.content == 'nub' || message.content == 'nab' || message.content == 'nabs' || message.content == 'nubs'|| message.content == 'Nabs'|| message.content == 'Nab'|| message.content == 'Nub' )
          {
            message.reply('Lol you are also noob to Hydro :joy: :rofl:');

          }
          if (message.content == 'Kid' || message.content == 'Keed' || message.content == 'kid' || message.content == 'kidoo' || message.content == 'kiddo' || message.content == 'kid stfu' || message.content == 'kids' || message.content == 'Kids' ||
          message.content == 'Kid stfu' || message.content == 'Kid Stfu'  )
          {
            message.reply('First know age of the guy you are calling kid.:unamused:');

          }
          if (message.content == 'LG' || message.content == 'lg' || message.content == 'Lg' || message.content == 'Wanna play' || message.content == 'Wanna play?' || message.content == 'wanna play' || message.content == 'wanna play?' || message.content == 'Who wanna play' ||
          message.content == '1v1 me' || message.content == 'Lg bro'  || message.content == 'Anyone wanna play?' || message.content == 'Anyone wanna play' )
          {
            message.reply('Host, lmma come!');

          }
          if (message.content == 'Fuck you' || message.content == 'Fk u' || message.content == 'fk u' || message.content == 'Fuck u' || message.content == 'Fk u!' || message.content == 'Fuck u!' || message.content == 'Fk U' || message.content == 'fuck you')
          {
            message.reply('Are you gay dude? Get LGBT role from #√-custom_roles✳ channel. :grin:');

          }
          if (message.content == 'NN' || message.content == 'nn' || message.content == 'Nn' ){
              message.reply('What\'s wrong?');
          }
          if (message.content == 'noob bot' || message.content == 'Noob bot' || message.content == 'Noob Bot' ){
              message.reply('Do u even know how to code a bot?');
          }

})
bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split();
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}link`){
    return message.channel.send("Never expiring +NA discord server link: https://discord.gg/rHsJRbC ");
  }


  if (cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot information")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addField("Bot Name" , bot.user.username)
    .addField("Prefix" , config.prefix)
    .addField("Main Commands" , "botinfo, claninfo, serverinfo, warstats, link, say, warnings" )
    .addField("Support Commands" , "help, ping, report " )
    .addField("Moderation Commands" , "purge, warn, mute, kick, ban" )
    .addField("Management Commands" , "addrole, removerole" )
    .addfield("Fun Commands" , "dog, cat" )
    .addField("Author" , "Ezio | PhoenixHeat")
    .addField("Created on" , bot.user.createdAt )
    .addField("Bot Status" , "Online ✅" );

    return message.channel.send(botembed);


  }

  if (cmd === `${prefix}warstats`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("+NA War Statistics")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addField("Total Wars" , database.totcw)
    .addField("War Wins" , database.cwwins)
    .addField("War Loses" , database.cwloses )
    .addField("War Win Percantage" , database.rate);

    return message.channel.send(botembed);

  }

  if (cmd === `${prefix}claninfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("+NA Clan information")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addField("Stands For" , "**Nefarious Assassins**")
    .addField("Founded on" , "18th June, 2018")
    .addField("Owner" , "Zeroskillz" )
    .addField("Total Members" , message.guild.memberCount)
    .addField("War Win Percantage" , database.rate );

    return message.channel.send(botembed);

  }

  if (cmd === `${prefix}help`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Prefix and Command list of the Bot")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addField("Prefix[Main Commands]" , config.prefix)
    .addField("Main Commands" , "botinfo, claninfo, serverinfo, warstats, link, say, warnings")
    .addField("Support Commands" , "help, ping, report" )
    .addField("Moderation Commands" , "purge, warn, mute, kick, ban" )
    .addField("Management Commands" , "addrole, removerole" )
    .addfield("Fun Commands" , "dog, cat" );
    
    return message.channel.send(botembed);
    


  }

  if (cmd === `${prefix}serverinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Server information")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addField("Server Name" , message.guild.name)
    .addField("Created On" , message.guild.createdAt)
    .addField("Joined On" , message.member.joinedAt )
    .addField("Total Members" , message.guild.memberCount )

    return message.channel.send(botembed);

}

  if (cmd === `${prefix}players`){

    let bicon = bot.user.displayAvatarURL;
    let playerembed = new Discord.RichEmbed()
    .setTitle("+NA Ranked Players List")
    .setColor("#17dbd6")
    .setThumbnail(bicon)
    .addfield("Supreme Leader" , database.sldr)
    .addField("Leaders" , database.ldrs)
    .addField("Prides of +NA" , database.pride )
    .addField("Co-Leaders" , database.coldr )
    .addField("Gods" , database.gods )
    .addField("Legends" , database.legends )
    .addfield("Veterans" , database.vets )
    .addField("Pros" , database.pros)
    .addField("Challengers" , database.chng )
    .addField("Beginners" , database.beg )
    .addField("Last Updated" , database.date );

    return message.channel.send(playerembed);


  }

});
bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});


bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }

  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["✝Nitro✝", "░+ИД | Cø-Øwners░", "╰☆ Head of All Staffs ☆╮", "╰☆ +ИД | Senior Staff Team ☆╮", "╰☆ +ИД | Staff Team ☆╮", "╰☆ +ИД | Intern ☆╮"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["✝Nitro✝", "░+ИД | Cø-Øwners░", "╰☆ Head of All Staffs ☆╮", "╰☆ +ИД | Senior Staff Team ☆╮"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to use this command dude!");
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
      return message.reply("Please provide a number between 2 and 1000 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

  if(command === "report") {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!rUser) return message.channel.send("Couldn't find user.");
     let rreason = args.join(" ").slice(22);

     let reportEmbed = new Discord.RichEmbed()
     .setDescription("Reports")
     .setColor("#17dbd6")
     .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
     .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
     .addField("Channel", message.channel)
     .addField("Time", message.createdAt)
     .addField("Reason", rreason);

     let reportschannel = message.guild.channels.find(`name`, "•reports🚫");
     if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


     message.delete().catch(O_o=>{});
     reportschannel.send(reportEmbed);

  }
  
if(command === "mute") {
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have permission to use this command dude!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "× Muted ×");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "× Muted ×",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));

  }
  
  if(command === "addrole"){
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
  }
if(command === "removerole"){
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
  }
  
  if(command === "warn"){
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to use this command dude!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#17dbd6")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "♡-warning_logs⚠");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);
  message.channel.send(`<@${wUser.id}> has been warned ✅`);  

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "× Muted ×");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "10m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
   if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "× Muted ×");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
   if(warns[wUser.id].warns == 4){
    let muterole = message.guild.roles.find(`name`, "× Muted ×");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "120m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }
  }
  
if(command === "warnings"){
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  let warnings = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnings} warnings.`);
}
 
if(command === "dog"){
let {body} = await superagent
.get(`https://random.dog/woof.json`);
  
  
let dogembed = new Discord.RichEmbed()
.setColor("#17dbd6")
.setTitle("Doggo!!!")
.setImage(body.url);
  
message.channel.send(dogembed);

}  


if(command === "cat"){
let {body} = await superagent
.get(`http://aws.random.cat//meow`);
  
  
let catembed = new Discord.RichEmbed()
.setColor("#17dbd6")
.setTitle("Meeeeooow!!!")
.setImage(body.file);
  
message.channel.send(catembed);

}  
});
bot.login(config.token);
