// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "JOEL~XMD~WZj0KrAR",
  PREFIX: process.env.PREFIX || '.',
//let's add menu captions by lord joel
   BOT_NAME: process.env.BOT_NAME || "ᴢᴇʀᴏ xᴍᴅ ʙᴏᴛ ᴠ¹⁰",
   BOT: process.env.BOT || "hello 👋",
  // lets add new cmd by lord joel
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\| joel",
  CAPTION: process.env.CAPTION|| "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴇʀᴏ xᴍᴅ",
// don't use my codes without a permission 🙏
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'true' : false,
  /*anti left by joel xd tech*/
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by Zero-XMD',
  AUTO_STICKER: process.env.AUTO_STICKER !== undefined ? process.env.AUTO_STICKER === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  /*lets add auto bot respond*/
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : true,
  /*lets add chat bot mode*/
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  /*how about Lydia chat bot*/
  LYDEA: process.env.LYDEA !== undefined ? process.env.LYDEA === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "ᴅᴀꜱᴜɴ ᴅᴜʟᴀʀᴀᴋᴀ",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94765714446",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "255781144539",
  GEMINI_KEY: process.env.GEMINI_KEY || "sk-786bba08a97a43d5b06ce9ee22af1d8f",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;

