//*    THIS OPTION READ BEFORE ANYTHING.  *//

//* DON'T CHANGE BOT NAME
//* CHANGE NUMBER ON SYSTEM/OWNER.JSON
//*                    DEVELOPED BY ICONIC TECH
//*
//*
//*              NEWEST VERSION 

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "254758443111"
global.ownername = "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫"
global.ytname = "YT: https://www.youtube.com/@iconic-tech"
global.socialm = "GitHub: https://github.com/iconic05"
global.location = "KENYA🇰🇪/NAIROBI"

global.ownernumber = '254758443111'  //creator number
global.ownername = '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫' //owner name
global.botname = 'J༙O༙K༙E༙R༙ M༙A༙X༙'//* CHANGE THIS BOT NOT WORK

//STICKER DETAILS
global.packname = 'sᴛɪᴄᴋᴇʀ ᴍᴀᴅᴇ ʙʏ ★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫'
global.author = '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫'

//CONSOLE VIEW/THEME
global.themeemoji = '🪀'
global.wm = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ"

//THEME LINK
global.link = 'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r'

//CUSTOM PREFIX
global.prefa = ['∆']

//FALSE=DISABLE AND TRUE=ENABLE
global.chatbot = true; // Enable text chatbot
global.autoRecording = false//auto recording
global.autoTyping = true //auto typing
global.emojiReact = false; // Default: enabled
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = false //auto view status/story
global.typemenu = 'v2'


module.exports = {
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes in seconds
    }
};
//REPLY MESSAGES : DO NOT CHANGE !!
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}
//JOKER MAX XMD SYSTEM !
global.thumb = fs.readFileSync('./JokerMedia/Joker-MaxPhoto.jpg')
//*.  STOP RECODED THIs BOT WILL FUCKING CRUSH 
//*   ONLY CREATER FIX THE BUG
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

//*.                   MADE  BY ICONIC TECH SUPPORT
