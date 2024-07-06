import { youtubedlv2, youtubedl } from '@bochilteam/scraper'
import axios from 'axios'
const handler = async (m, { conn, args, command }) => {
  if (!args[0]) throw 'Where`s Url?' // Zod
  const v = args[0]

  const resolutions = ["144p", "240p", "360p", "480p", "720p", "1080p"]
  let qu = args[1] && resolutions.includes(args[1]) ? args[1] : "360p"
  let q = qu.replace('p', '')

  let thumb = {}
  try {
    const thumb2 = yt.thumbnails[0].url
    thumb = { jpegThumbnail: thumb2 }
  } catch (e) {}

  let yt
  try {
    yt = await youtubedl(v)
  } catch {
    yt = await youtubedlv2(v)
  }

  const title = await yt.title
let idk = await y2mate(args[0])
  let size = ''
  let dlUrl = ''
  let selectedResolution = ''
  let selectedQuality = ''
  for (let i = resolutions.length - 1; i >= 0; i--) {
    const res = resolutions[i]
    if (yt.video[res]) {
      selectedResolution = res
      selectedQuality = res.replace('p', '')
      size = await yt.video[res].fileSizeH
      dlUrl = await yt.video[res].download()
      break
    }
  }

  if (dlUrl) {
    await m.reply(`Permintaan download video YouTube. Sedang diproses, mohon bersabar...`)

    await conn.sendMessage(m.chat, { video: { url: idk.mp4, caption: title, ...thumb } }, { quoted: m })

    await m.reply(`▢ Title: ${title}
▢ Resolution: ${selectedResolution}
▢ Size: ${size}
▢ Video telah berhasil diunduh!`)
  } else {
    await m.reply(`Maaf, video tidak tersedia untuk diunduh.`)
  }
}

handler.command = /^ytmp4$/i
handler.help = ["ytmp4 <link>"]
handler.tags = ['downloader']

handler.register = true

export default handler

 async function y2mate(url) {
    

    const requestDataInfo = new URLSearchParams({
        k_query: url,
        k_page: 'home',
        hl: 'en',
        q_auto: 1,
    });

    const headersInfo = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36'
    };

    const { data: infoData } = await axios.post('https://www.y2mate.com/mates/analyzeV2/ajax', requestDataInfo.toString(), { headers: headersInfo });

    const requestDataMp4 = new URLSearchParams({
        vid: infoData.vid,
        k: infoData.links.mp4.auto.k,
    });

    const requestDataMp3 = new URLSearchParams({
        vid: infoData.vid,
        k: infoData.links.mp3.mp3128.k,
    });

    const headersConverter = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36'
    };

    const { data: mp4Data } = await axios.post("https://www.y2mate.com/mates/convertV2/index", requestDataMp4.toString(), { headers: headersConverter });
    const { data: mp3Data } = await axios.post("https://www.y2mate.com/mates/convertV2/index", requestDataMp3.toString(), { headers: headersConverter });

    return {
        title: infoData.title,
        mp4: mp4Data.dlink,
        mp3: mp3Data.dlink
    };
}

// Example usage

