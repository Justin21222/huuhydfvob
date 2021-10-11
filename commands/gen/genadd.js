const fs = require("fs");
const hastebin = require("hastebin.js");
const hastelol = "https://";
const haste = new hastebin({ url: "https://www.hastebin.com"  });
module.exports = {
    name: "genadd",
    category: "info",
    description: "adds accounts to the gen",
    run: async (client, message, args) => {
      if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You don't have enough permission to do this. GET YO ASS IN THE LINE! GET YO BLACK ASS BACK IN THE LINE!!");
        if (args[0].toLowerCase() == "hulu") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("hulu.txt", "utf8"));

                fs.appendFile("hulu.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("hulu.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("hulu.txt", "utf8"));

                fs.appendFile("hulu.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("hulu.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
      //crunchy -----------------------------------------------------------------------------------------------
      
      if (args[0].toLowerCase() == "crunchyroll") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("crunchyroll.txt", "utf8"));

                fs.appendFile("crunchyroll.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("crunchyroll.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log(raw);
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("crunchyroll.txt", "utf8"));

                fs.appendFile("crunchyroll.txt", "\n" + raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("crunchyroll.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
      //cod----------------------------------------------------------------------------------------------------------------------
      
            if (args[0].toLowerCase() == "cod" || args[0].toLowerCase() == "callofduty") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("cod.txt", "utf8"));

                fs.appendFile("cod.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("cod.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("cod.txt", "utf8"));

                fs.appendFile("cod.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("cod.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
      //buffalo ---------------------------------------------------------------------------------------------------------------------
      
      if (args[0].toLowerCase() == "buffalowildwings" || args[0].toLowerCase() == "bww" || args[0].toLowerCase() == "buffalo") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("buffalo.txt", "utf8"));

                fs.appendFile("buffalo.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("buffalo.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("buffalo.txt", "utf8"));

                fs.appendFile("buffalo.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("buffalo.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
       //disney+ ---------------------------------------------------------------------------------------------------------------------
      
      if (args[0].toLowerCase() == "disney+"||args[0].toLowerCase() == "disney") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("disney+.txt", "utf8"));

                fs.appendFile("disney+.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("disney+.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("disney+.txt", "utf8"));

                fs.appendFile("disney+.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("disney+.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
      //vrv---------------------------------------------------------------------------------------------------------------------------------------
      
      if (args[0].toLowerCase() == "vrv") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("vrv.txt", "utf8"));

                fs.appendFile("vrv.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("vrv.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("vrv.txt", "utf8"));

                fs.appendFile("vrv.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("vrv.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      
      //fumination------------------------------------------------------------------------------------------------------------------------------------
      
      if (args[0].toLowerCase() == "funimation") {
            if (args[1] == null) {
                return message.channel.send("You did not mention an account to add to the stock, or the hastebin link you have provided is invalid.");
            }
            if (!args[1].includes(":") && !args[1].toLowerCase().startsWith("https://hastebin")) {
                message.channel.send("The account must be in the format of `email:password`, or the link you have provided is not a hastebin link.");
            }
            if (args[1] !== null && args[1].includes(":") && !args[1].startsWith("https://")) {
                let toAdd = "\n" + args[1];
                console.log(toAdd);
                console.log("\nFile Contents of file before append:",
                    fs.readFileSync("fum.txt", "utf8"));

                fs.appendFile("fum.txt", toAdd, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("fum.txt", "utf8"));
                    }
                });
                message.channel.send("success");
            } else if (args[1] !== null && args[1].toLowerCase().startsWith(hastelol))
              {
                let sliced = args[1].slice(21);
                console.log(sliced);
                let raw = haste.get(sliced).then(raw => {
                  console.log("\nFile Contents of file before append:",
                    fs.readFileSync("fum.txt", "utf8"));

                fs.appendFile("fum.txt", raw, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // Get the file contents after the append operation
                        console.log("\nFile Contents of file after append:",
                            fs.readFileSync("fum.txt", "utf8"));
                    }
                });
                message.channel.send("Accounts have been added.");
                });
                
              }

        } 
      // if null / non existant------------------------------------------------------------------------------------------------------------------------------------
      
      if (args[0] == null) {
        return message.channel.send("You did not mention an account type to restock.");
      }
      if (args[0].toLowerCase() !== "hulu" && args[0].toLowerCase() !== "crunchyroll" && args[0].toLowerCase() !== "bww" && args[0].toLowerCase() !== "buffalowildwings" && args[0].toLowerCase() !== "buffalo" && args[0].toLowerCase() !== "cod" && args[0].toLowerCase() !== "callofduty"&& args[0].toLowerCase() !== "disney"&& args[0].toLowerCase() !== "disney+"&& args[0].toLowerCase() !== "vrv"&& args[0].toLowerCase() !== "funimation")
        {
          return message.channel.send("The account type you mentioned does not exist in the line of code.");
        }
      
    }
}