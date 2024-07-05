import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `Apa?\nEx: ${usedPrefix + command} 1 Hutao`;
  const limit = parseInt(args[0]) || 1; // Jumlah foto yang ingin diambil, defaultnya 1 jika tidak ada argumen pertama

  m.react('🔍');
  if (limit > 5) {
    return m.reply('Maaf, permintaan melebihi jumlah maksimum (5 foto).');
  }
 
  let loadd = [
    '*_Tunggu Sebentar!_*',
    '*_Bot By RgBruhh_*',
    '*_Maaf Jika Terjadi Eror_*',
    '*Furina - MD*',
  ]

  let { key } = await conn.sendMessage(m.chat, { text: loadd[0] }) // Kirim pesan loading pertama

  for (let i = 1; i < loadd.length; i++) {
    // Edit pesan loading saat iterasi berlangsung
    await conn.sendMessage(m.chat, { text: loadd[i], edit: key })
    await new Promise(resolve => setTimeout(resolve, 1000)) // Tunggu sebentar sebelum mengedit pesan selanjutnya
  };
  //m.reply(`Mengambil ${limit} foto dari Pinterest...`);


  try {
    const allImages = [];
    let res = await fetch(`https://aemt.me/pinterest?query=${text}`);
    let json = await res.json();
    if (json.result.length > 0) {
      allImages.push(...json.result);
    }
    const validImages = await filterValidImages(allImages, limit > 5 ? 5 : limit);
    for (const image of validImages) {
      await conn.sendFile(m.chat, image, '', '', m, false);
      m.react('✅');
    }
  } catch (e) {
    m.reply(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Dari API !`);
    m.react('❗');
  }
}

// Fungsi untuk memfilter URL gambar yang valid
async function filterValidImages(images, limit) {
  const validImages = [];
  for (const image of images) {
    if (await isImageURL(image)) {
      validImages.push(image);
      if (validImages.length >= limit) {
        break; // Hentikan jika sudah mencapai jumlah gambar yang diminta
      }
    }
  }
  return validImages;
}

// Fungsi untuk memeriksa apakah URL adalah URL gambar
async function isImageURL(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    const contentType = res.headers.get('content-type');
    return contentType && contentType.startsWith('image'); // Memeriksa apakah tipe file adalah gambar
  } catch (error) {
    return false; // Jika terjadi kesalahan dalam memeriksa URL, mengembalikan false
    m.react('❗');
  }
}

handler.help = ['pin'];
handler.tags = ['dl'];
handler.command = /^(pin2|pinterest2)$/i;
handler.premium = false;
handler.limit = true;

export default handler;

