const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_09_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnbUlwU0YzVnhKVGFsaWtCVXlSVkFTc2JONklTTDE5d2FDYURsT1BuYklvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1TGZ4bDhQZlFhU08ydkNURV8yT1BBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUwZWZkZmI3LTJlOGMtNDhiOC04M2NkLWRlYzZkYzA2YjBjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAyNTIsXG4gICAgICAyMzksXG4gICAgICA4MyxcbiAgICAgIDE0MixcbiAgICAgIDI0OCxcbiAgICAgIDYzLFxuICAgICAgMTQ4LFxuICAgICAgODcsXG4gICAgICAyMixcbiAgICAgIDE0MixcbiAgICAgIDEyNCxcbiAgICAgIDY4LFxuICAgICAgMjAsXG4gICAgICAxNDgsXG4gICAgICAxNTEsXG4gICAgICAyMDMsXG4gICAgICAxMzMsXG4gICAgICAxMjEsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxMDYsXG4gICAgICAwLFxuICAgICAgMixcbiAgICAgIDkzLFxuICAgICAgMTIwLFxuICAgICAgMjU1LFxuICAgICAgMTgsXG4gICAgICA4NixcbiAgICAgIDIyLFxuICAgICAgMTI5LFxuICAgICAgMTcwLFxuICAgICAgMTAzLFxuICAgICAgMTIzLFxuICAgICAgMTM1LFxuICAgICAgOTYsXG4gICAgICAxNjQsXG4gICAgICAyMDAsXG4gICAgICAxNDIsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0tMVFBCRVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDExMDA3MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDgwMTgwNDUxNjE3MTQ6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcUFnSW9DRU9qUXVMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdkTHBhdjhhQTQrU0ExNEY1U3VJSkUyS2ptbGlML0NLMWVDSm44Y251R2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidE5DRTdxNTZRVFY4TGFYaDVaR0Y1ejhvR0JtL3E4YUVreTkyaWEwM3JHMHhDSlVtQ2JTbTdGTFhpeGV6ZWV6UThsa3VYSHhhZFlhOUNDZE05bEs0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmtwVWordHYvQVBVZCtRVUhTdkpSYWFrTWNkQzk5M2ZMQ21qRUxVQVkySFdxd0JSMHBJSEJFRkl6U3hQUmJDb1ExRjF0TmY0d2p6UWVYWUd1YjhtakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0MTEwMDcwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MjcyNTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjBnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmbGcxLzlSZXlYUHN3OVpvNGZ1d1FNOE4yUkJLK1lURm8ySG42VXYyQXdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzg0MjQ3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MjcyNTYyMTY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
