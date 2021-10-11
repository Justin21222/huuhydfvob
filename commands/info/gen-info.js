const discord = require("discord.js");
const prefix = "-";
let c = "```"
module.exports = {
    name: "geninfo",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      
      let embed = new discord.MessageEmbed()
      .setTitle("Gen access Info")
      .setAuthor(`requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter("Coded by Justin")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`

<:prinde:870764042535444490>**HOW TO GET ACCESS TO THE GEN**<:prinde:870764042535444490>


The generator costs 2 invites, or you can boost the server for instant access.


<:prinde:870764042535444490>**HOW TO USE THE GENERATOR**<:prinde:870764042535444490>


- Make sure to use the correct prefix, our prefix is the minus symbol 

- Do " -stock " to see what's currently available in stock.

- Do "-gen (Account Service) to generate the type of account you want. 90% of the accounts work, not all of them though!

                      `)
       message.channel.send(embed);
      
    }
}
