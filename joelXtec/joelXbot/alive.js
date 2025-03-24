import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const joel = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

   if (cmd === "uptime" || cmd === "alive" || cmd === "runtime") {
    await m.React('⏳'); // Loading reaction
     
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Sri Lanka/Colombo").format("HH:mm:ss");
    const xtime = moment.tz("Sri Lanka/Colombo").format("HH:mm:ss");
    const xdate = moment.tz("Sri Lanka/Colombo").format("DD/MM/YYYY");
    const time2 = moment().tz("Sri Lanka/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `*CODES BY ZERO XMD*
    *---------------------`;

    await m.React('☄️'); // React with a success icon
    
    sock.sendMessage(
      m.from,
      {
            audio: { url: 'https://files.catbox.moe/fbcycg.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363317462952356@newsletter',
                    newsletterName: 'ᴢᴇʀᴏ xᴍᴅ ʙᴏᴛ ᴠ ⁷',
                    serverMessageId: 143
            },
            forwardingScore: 999, // Score to indicate it has been forwarded
            externalAdReply: {
            title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴇʀᴏ xᴍᴅʟ",
            body: `UPTIME ${days}D ${hours}H ${minutes}M ${seconds}S`,
            thumbnailUrl: 'https://files.catbox.moe/3jpwr1.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://facebook.com/dasundularaka', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default joel;





















      
