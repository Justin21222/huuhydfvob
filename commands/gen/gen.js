const fs = require("fs");
const discord = require("discord.js");
const db = require("quick.db");
const Canvas = require("canvas");
const cooldown = new Set();
module.exports = {
    name: "gen",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      
        function replyEmbed() {
            let embed = new discord.MessageEmbed()
                .setAuthor(`requested by ${message.author.tag}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor("GREEN")
                .setTimestamp()
                .setDescription("**Check your DM'S!**")
                .setFooter(`Coded by Justin`)
                .setThumbnail("https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/green-checkmark-line.png")
            return message.channel.send(embed);
        }
        if (message.channel.id !== "869761762336071741") return message.channel.send("This isn't the gen channel, don't be retarded and use <#869761762336071741> channel only.");
        if (args[0] == null) {
            return message.channel.send("Do that again, but this time, specify the account type you want!");
        }
        if (args[0].toLowerCase() !== "hulu" && args[0].toLowerCase() !== "crunchyroll" && args[0].toLowerCase() !== "bww" && args[0].toLowerCase() !== "buffalowildwings" && args[0].toLowerCase() !== "buffalo" && args[0].toLowerCase() !== "cod" && args[0].toLowerCase() !== "callofduty" && args[0].toLowerCase() !== "disney" && args[0].toLowerCase() !== "disney+"&& args[0].toLowerCase() !== "vrv"&& args[0].toLowerCase() !== "funimation") {
            return message.channel.send("Account type is invalid, please check your spelling fucking dumbass.");
        }
        if (cooldown.has(message.author.id)) {
            //console.log("yes lol");
          let embed = new discord.MessageEmbed()
          .setAuthor(`requsted by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
          .setTitle("SELFISH BITCH ALERT! YOURE ON COOLDOWN DUMBASS FUCKHEAD")
          .setDescription("i want you jump roping but booty naked right in my face i wanna see that booty bouncing with maximum velocity and exceleration my baby")
          .setTimestamp()
          .setColor("RED")
          .setImage("https://www.advocate.com/sites/default/files/styles/vertical_gallery_desktop_1x/public/2017/11/12/summer_flings_1.jpg?timestamp=1510557742")
          .setFooter("DD the legend lol")
          .setThumbnail("https://lh3.googleusercontent.com/proxy/MYtbg-Hy30gpNDT4ZOXYx6-I4tg8BppdaN_8MivwuoQQ05ii97kW36gbJZb2hNiUuvvFbA-XsttFwgqsrHs5tm0V")
            return message.channel.send(embed);

        }
        if (args[0].toLowerCase() == "hulu" || args[0].toLowerCase() == "crunchyroll" || args[0].toLowerCase() == "bww" || args[0].toLowerCase() == "buffalowildwings" || args[0].toLowerCase() == "buffalo" || args[0].toLowerCase() == "cod" || args[0].toLowerCase() == "callofduty" || args[0].toLowerCase() == "disney"|| args[0].toLowerCase() == "disney+"|| args[0].toLowerCase() == "funimation"|| args[0].toLowerCase() == "vrv") {
            if (!cooldown.has(message.author.id)) {
                //db.set(`cooldown_${message.author.id}`, true);
              cooldown.add(message.author.id);
                //console.log("added cooldown");
                setTimeout(() => {
                    cooldown.delete(message.author.id)
                }, 120000);
            }
        }
        if (args[0].toLowerCase() == "hulu") {
            let hulu = fs.readFileSync("hulu.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let huluStock = hulu.split("\n").length;
            if (huluStock == 1 && hulu.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (hulu.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(hulu.split("\n").slice(0, 1));
            let finalvar = hulu.split("\n")
            finalvar.shift()
            finalvar = finalvar.join("\n")
            fs.writeFileSync('hulu.txt', finalvar);


            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
        if (args[0].toLowerCase() == "buffalowildwings" || args[0] == "buffalo" || args[0] == "bww") {
            let buff = fs.readFileSync("buffalo.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let buffStock = buff.split("\n").length;
            if (buffStock == 1 && buff.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (buff.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(buff.split("\n").slice(0, 1));
            let finalvar = buff.split("\n")
            finalvar.shift()
            finalvar = finalvar.join("\n")
            fs.writeFileSync('buffalo.txt', finalvar);


            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
        if (args[0].toLowerCase() == "cod" || args[0].toLowerCase() == "callofduty") {
            let cod = fs.readFileSync("cod.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let codStock = cod.split("\n").length;
            if (codStock == 1 && cod.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (cod.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(cod.split("\n").slice(0, 1));
            let finalvar = cod.split("\n")
            finalvar.shift()
            finalvar = finalvar.join("\n")
            fs.writeFileSync('cod.txt', finalvar);


            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
        if (args[0].toLowerCase() == "crunchyroll") {
            let c = fs.readFileSync("crunchyroll.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let cStock = c.split("\n").length;
            if (cStock == 1 && c.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (c.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(c.split("\n").slice(0, 1));
            let finalvar = c.split("\n")
            finalvar.shift()
            finalvar = finalvar.join("\n")
            fs.writeFileSync('crunchyroll.txt', finalvar);


            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
        if (args[0].toLowerCase() == "disney+" ||args[0] == "disney") {
            let disney = fs.readFileSync("disney+.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let disneyStock = disney.split("\n").length;
            if (disneyStock == 1 && disney.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (disney.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(disney.split("\n").slice(0, 1));
            let finalvar = disney.split("\n")
            finalvar.shift() //disney
            finalvar = finalvar.join("\n")
            fs.writeFileSync('disney+.txt', finalvar);

            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
      
        if (args[0].toLowerCase() == "vrv") {
            let vrv = fs.readFileSync("vrv.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let vrvStock = vrv.split("\n").length;
            if (vrvStock == 1 && vrv.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (vrv.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(vrv.split("\n").slice(0, 1));
            let finalvar = vrv.split("\n")
            finalvar.shift() //disney
            finalvar = finalvar.join("\n")
            fs.writeFileSync('vrv.txt', finalvar);

            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }
      
        if (args[0].toLowerCase() == "funimation") {
            let fum = fs.readFileSync("fum.txt").toString('utf-8');
            //hulu = hulu.split("\n");
            let fumStock = fum.split("\n").length;
            if (fumStock == 1 && fum.length == 0) return message.channel.send("There is currently no stock for this account type, please wait until it's stocked or generate another account type.")
            replyEmbed();
            if (fum.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
            message.author.send(fum.split("\n").slice(0, 1));
            let finalvar = fum.split("\n")
            finalvar.shift() //disney
            finalvar = finalvar.join("\n")
            fs.writeFileSync('fum.txt', finalvar);

            //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
            //fs.writeFile("hulu.txt", linesExceptFirst);
        }


        //very end any other code goes above this line


    }
}