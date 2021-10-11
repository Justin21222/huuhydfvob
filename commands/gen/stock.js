const fs = require("fs");
const discord = require("discord.js")
module.exports = {
    name: "stock",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      //hulu
      let hulu = fs.readFileSync("hulu.txt").toString('utf-8');
      let hulu1 = hulu.split("\n");
      let huluStock = hulu1.length - 1;
      if (hulu1.length == 1 && hulu.length > 0) huluStock = 1;
      if (hulu1.length == 1 && hulu.length == 0) huluStock = 0;
      //disney
      let disney = fs.readFileSync("disney+.txt").toString('utf-8');
      let disney1 = disney.split("\n");
      let disneyStock = disney1.length - 1;
      if (disney1.length == 1 && disney.length > 0) disneyStock = 1;
      if (disney1.length == 1 && disney.length == 0) disneyStock = 0;
      //buffalo
      let b = fs.readFileSync("buffalo.txt").toString('utf-8');
      let b1 = b.split("\n");
      let bStock = b1.length - 1;
      if (b1.length == 1 && b.length > 0) bStock = 1;
      if (b1.length == 1 && b.length == 0) bStock = 0;
       
       //crunchy
      let c = fs.readFileSync("crunchyroll.txt").toString('utf-8');
      let c1 = c.split("\n");
      let cStock = c1.length - 1;
      if (c1.length == 1 && c.length > 0) cStock = 1;
      if (c1.length == 1 && c.length == 0) cStock = 0;
      //cod
      let o = fs.readFileSync("cod.txt").toString('utf-8');
      let o1 = o.split("\n");
      let oStock = o1.length - 1;
      if (o1.length == 1 && o.length > 0) oStock = 1;
      if (o1.length == 1 && o.length == 0) oStock = 0;
      //vrv
      let v = fs.readFileSync("vrv.txt").toString('utf-8');
      let v1 = v.split("\n");
      let vStock = v1.length - 1;
      if (v1.length == 1 && v.length > 0) vStock = 1;
      if (v1.length == 1 && v.length == 0) vStock = 0;
      //fumination
      let f = fs.readFileSync("fum.txt").toString('utf-8');
      let f1 = f.split("\n");
      let fStock = f1.length - 1;
      if (f1.length == 1 && f.length > 0) fStock = 1;
      if (f1.length == 1 && f.length == 0) fStock = 0;
      let embed = new discord.MessageEmbed()
       .setTitle("Stock lol")
       .setAuthor(`requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
       .addField("<:emoji_16:871786795329785916> Hulu", huluStock + " accounts", true)
       .addField("<:emoji_15:871786146257055784> Buffalo Wild Wings", bStock + " accounts", true)
       .addField("<:emoji_15:871786316872957962> Crunchyroll", cStock+ " accounts", true)
       .addField("<:emoji_11:871782401406275614> Call of Duty", oStock+ " accounts", true)
       .addField("<:Disneyplus:870059070269309018> Disney+", disneyStock + " accounts", true)
       .addField("<:emoji_15:872267989376978955> Vrv", vStock + " accounts", true)
       .addField("<:emoji_14:872267778541887498> Funimation", fStock + " accounts", true)
       .setFooter("coded by Justin", message.guild.iconURL)
       .setTimestamp()
       .setColor("RANDOM")
       message.channel.send(embed);
    }
}