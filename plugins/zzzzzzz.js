
import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `Contoh:\n${usedPrefix + command} furina`;
  }
  try {
  const search = await fetch(
    `https://kind-rose-puffer-tie.cyclic.app/search?q=${text}`
  );
  let hasil = await search.json();
if (hasil.lenght > 0 ) {
    allImages.push(...hasil.origin_url);}
 const imageUrl = hasil[0].origin_url;
 
   let teks = `*Pixiv Result* \n> 🖊️Author=\n> 🔍 *Keyword* *${text}*\n> 🔞= 'true'`;

  
  

  
  await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: teks, viewOnce: false }, { quoted: m });
} catch (e) {
throw `Ulang Command sekali lagih/Error`
}
      
      
 };
handler.help = ['hpixiv'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^hpixiv$/i
handler.limit = false

export default handler;