const discord = require('discord.js')

module.exports = {
  name: "nuke",
  aliases: ["nuke"],
  category: "fun",
  description: "Shows jail comment",
  usage: "jail <@user>",
  run: async (client, message, args) => {
    
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      
    
    let channel = client.channels.cache.get(message.channel.id)
    let pos = channel.position;
      
      channel.send("<a:Loading:767757817280331786> | Please wait...")
    
    channel.clone().then(channel2 => {
      
      channel2.setPosition(pos)
      channel.delete()
      channel2.send("<a:floss:767758718603362324> | Channel nuked by The sus gen bot!\nhttps://media3.giphy.com/media/screugvMjTBjJ4bqgl/giphy.gif")
      
    })
    } else {
      message.reply("Error!: `You are missing MANAGE_CHANNELS permissions`")
    }
  }
}