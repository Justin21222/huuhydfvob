const discord = require("discord.js");
const prefix = "-";

module.exports = {
    name: "help",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      
      let embed = new discord.MessageEmbed()
      .setTitle("Help Menu")
      .setAuthor(`requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter("Coded by Justin")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`
      **Bot prefix is -**
      **Member Commands**
      
      __${prefix}gen <Account Type>__ - Sends a random account of your choice to your DMs.
      __${prefix}stock__ - Display's the current stock of the generator.
      
      **Admin Commands**
      
      __${prefix}genadd <Account Type> <email:password OR https://hastebin.com LINK>__ - Restocks the generator.
      __${prefix}clearstock <Account Type>__ - Clears all accounts of the mentioned stock type.
      `)
       message.channel.send(embed);
      
    }
}