import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Linknya Mana?\nExample: *${usedPrefix+command} https://vm.tiktok.com/ZSNNAavM2/*`;
  await m.reply(wait);
  
  try {
    let res = await fetch(`https://vihangayt.me/download/tiktok2?url=${text}`);
    let json = await res.json();
    if (json.status) {
      // Create a caption with ID and author
      //let caption = `Judul: ${json.data.title}\nCaption ${json.data.caption}`;
      // Send the thumbnail with the caption
      //await conn.sendFile(m.chat, json.data.thumbnail, '', caption, m, false);
      // Send the video
      await conn.sendFile(m.chat, json.data.nowm, '', '_Nih Kak Videonya_', m, false);
      // Send the audio
      let doc = {
      audio: {
       url: json.data.mp3
      },
      mimetype: 'audio/mp4',
      fileName: json.data.title,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: json.data.mp3,
            title: json.data.title,
            body: 'Subscribe @KeiLaSenpai',
            sourceUrl: 'https://youtube.com/@KeiLaSenpai',
            thumbnail: await (await conn.getFile(json.data.thumbnail)).data
          }
        }
      };

      await conn.sendMessage(m.chat, doc, { quoted: m });
      //await conn.sendFile(m.chat, json.data.mp3, 'TikTokMusic.mp3', '_Nih Kak Audionya_', m);
      //await conn.sendFile(m.chat, {
      //     document: { url: json.data.mp3},
      //     mimetype: 'audio/mp3',
      //     fileName: 'TikTokMusic.mp3',
      //     caption: '_Nih Kak Audionya_',
      //}, { quoted: m });
    } else {
      await m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`);
    }
  } catch (e) {
    await m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari Url/Link Yang Kamu Masukan`);
  }
};

handler.help = ['tiktok2'];
handler.tags = ['dl'];
handler.command = /^tt2|tiktok2$/i;
handler.limit = true;

export default handler;
