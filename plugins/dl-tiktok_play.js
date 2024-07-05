import axios from 'axios';

var handler = async (m, { conn, text }) => {
  if (!text) throw 'Judulnya?';

  try {
    // Mengambil data dari API
    let response = await axios.get(`https://api.qyuunee.my.id/api/download/tiktoksearch?query=${text}&apikey=${koisaja}`);

    if (response.status === 200) {
      let data = response.data; // Add this line to get the data from the response

      let captvid = `╭──── 〔 T I K T O K 〕
• Judul: ${data.result.title}
• Note: Masih Tahap Pengembangan, Bug Harap Lapor Owner!
╰────────⬣`;

      conn.sendMessage(m.chat, { image: { url: data.result.cover }, caption: captvid }, m);

      let kasihGa = {
        video: {
          url: data.result.no_watermark,
        },
        mimetype: 'video/mp4',
        fileName: data.result.title,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: data.result.no_watermark,
            title: 'KeiLa',
            body: 'KeiLa',
            sourceUrl: 'https://youtube.com/@KeiLaSenpai',
            thumbnail: await (await conn.getFile(data.result.cover)).data,
          },
        },
      };

      return conn.sendMessage(m.chat, kasihGa, { quoted: m });

      let kasihAja = {
        audio: {
          url: data.result.music,
        },
        mimetype: 'audio/mp3',
        fileName: data.result.title,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 2,
            mediaUrl: data.result.music,
            title: 'KeiLa',
            body: 'KeiLa',
            sourceUrl: 'https://youtube.com/@KeiLaSenpai',
            thumbnail: await (await conn.getFile(data.result.cover)).data,
          },
        },
      };

      return conn.sendMessage(m.chat, kasihAja, { quoted: m });

    } else {
      throw 'Tidak Ditemukan';
    }
  } catch (error) {
    throw 'Terjadi kesalahan: ' + error;
  }
};

handler.help = ['ttplay'];
handler.tags = ['dl'];
handler.command = ['ttsearch','ttplay','tiktoksearch','tiktokplay'];

handler.limit = true;
handler.register = false;

export default handler;

