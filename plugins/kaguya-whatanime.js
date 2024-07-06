import axios from 'axios';
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    let img = await q.download();
    let imageUrl = await uploadImage(img);
    try {
      let api = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(imageUrl)}`;
      let { data } = await axios.get(api);
      let anime = data.result[0].anilist;
      let episode = data.result[0].episode;
      let similarity = data.result[0].similarity;
      let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
      let malId = anime.idMal;
      let anilistId = anime.id;
      let titleRomaji = anime.title.romaji;
      let titleNative = anime.title.native;
      let caption = `• *Title:* ${titleRomaji} (${titleNative})
• *Episode:* ${episode}
• *Similarity:* ${(similarity * 100).toFixed(2)}%
• *At:* ${at}`;
      conn.sendFile(m.chat, imageUrl, 'image.jpg', caption, m);
    } catch (e) {
      console.log(e);
      m.reply(m.chat, 'Error!', m);
    }
  } else {
    m.reply(m.chat, `*• Example:* ${usedPrefix + command} *[reply or send media]*`, m);
  }
};

handler.help = ['whatanime'].map(a => a + ' *[premium only]*');
handler.tags = ['anime'];
handler.premium = false
handler.command = /^whatanime$/i;

export default handler