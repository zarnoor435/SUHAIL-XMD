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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlUDdzcDdKMi8raWFMb3lHd3R2VW9oUkloOW93R0x1bDR6MU1QcHY4Ry9NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxbnZuMGQzTFNMV0MtM2FQdUlDLUxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyMGI3NGJmLTliYTUtNDM3ZS04ODI4LTJjMjU4YWNlY2RlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDc5LFxuICAgICAgMCxcbiAgICAgIDE2MyxcbiAgICAgIDE3MSxcbiAgICAgIDI0OCxcbiAgICAgIDMyLFxuICAgICAgNTAsXG4gICAgICA4OCxcbiAgICAgIDYzLFxuICAgICAgMTg4LFxuICAgICAgMTg1LFxuICAgICAgMTM2LFxuICAgICAgNTcsXG4gICAgICAxODAsXG4gICAgICAxNixcbiAgICAgIDIxNyxcbiAgICAgIDExNSxcbiAgICAgIDc0LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICA1MSxcbiAgICAgIDExLFxuICAgICAgMTM4LFxuICAgICAgNDgsXG4gICAgICAyNDYsXG4gICAgICA3MSxcbiAgICAgIDMyLFxuICAgICAgNTcsXG4gICAgICAxMDgsXG4gICAgICAxMzYsXG4gICAgICAxNDgsXG4gICAgICAxMTAsXG4gICAgICAyNTQsXG4gICAgICAxNjgsXG4gICAgICAyNTMsXG4gICAgICAyMTcsXG4gICAgICA2LFxuICAgICAgMjIxLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRlhHUkQ0WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0MTEwMDcwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODAxODA0NTE2MTcxNDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ttQWdJb0NFSXU4dHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2RMcGF2OGFBNCtTQTE0RjVTdUlKRTJLam1saUwvQ0sxZUNKbjhjbnVHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzZVQ0ZUJlY0x5TUFPQ3lnSWNFcWprUlM4OWpmc3pLOUpycG15Ry9nSnFaRzBUVnNNN0x0Nld0aXEyNVlVcjMwNDdBY0ZLZ2M2M1BvM21hWUlSM0tCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLOFR6VEhQdEdRWUxGMzBzVThyNWx6cVRYUkxOQTFyUjlwL3RXVjJsL21YdXpxMTRnNkMyWnBGVnJpVU1WNTBGY2lGNkZYTS9GODNCc25YTnljdHJDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQxMTAwNzA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyMzcxMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdk9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl2Ty5qc29uIjogIntcImtleURhdGFcIjpcIndTZDYvcDJnQlV2NHZjSTNQdTB4QkFSYkFCNldxV0d0NGM2cm1ieVdBcEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU3ODQyNDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUyMzcxNDExOTFcIn0iCn0="  // PUT your SESSION_ID 


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
