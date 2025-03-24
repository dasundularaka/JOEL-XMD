import axios from 'axios';
import config from '../../config.cjs';

const quranImage = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const validCommands = ['quraimage', 'qimg', 'qimg'];

  if (validCommands.includes(cmd)) {
    const joelUrl = `https://files.catbox.moe/3jpwr1.jpg`;
await m.React('⏳'); // React with a loading icon
    await gss.sendMessage(
      m.from,
      {
        image: { url: joelUrl },
        caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴇʀᴏ xᴍᴅ*`,
      },
      { quoted: m }
    );
  }
};

export default quranImage;
