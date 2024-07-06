import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix: _p }) => {
 let loadd = [
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶.',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶..',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶...',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶..',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶.',
  '𝙻𝙾𝙰𝙳𝙸𝙽𝙶',
   '𝙻𝙾𝙰𝙳𝙸𝙽𝙶',
 '𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶'})//Pengalih isu

await conn.sendMessage(m.chat, { react: { text: "👻", key: m.key, } });

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  let user = `@${m.sender.split('@')[0]}`
    
  let tags = {'genshin': 'GENSHIN ONLY AREA',
'hoyoverse': 'HOYOVERSE (HI3,HSR,ZZZ)',
'ai': 'AI',
'downloader': 'DOWNLOAD',              
'group': 'GROUP',
'fun': 'FUN',
'audio': 'AUDIO',
'game': 'GAMES',
'cecan': 'CECAN',
'owner': 'OWNER',}
const defaultMenu = {
  before: `
------------ » *𝙱𝙾𝚃 𝙸𝙽𝙵𝙾* « ------------
*_✎  Library : [ Baileys-MD ]_*
*_⚐  Prefix : [ %_p ]_*
*_♘  Platform : [ %platform ]_*
*_⛁  Date : [ %date ]_*
*_⚿  Pengguna Bot : [ %totalreg ]_*

------------ » *𝙰𝙻𝙻 𝙼𝙴𝙽𝚄* « ------------
${hmmm.getRandom()}
----------------------------------------
%readmore
`.trimStart(),
header: '╭─ •⌗ *%category* ',
  body: '│ 本 %cmd',
 footer: '┗─────────────···',
  after: ``,
}
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let totalreg = Object.keys(global.db.data.users).length
    let platform = os.platform()
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      name, date, time, platform, _p, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      const fkontak = {
	"key": {
		"participants": `6289646942000@s.whatsapp.net`,
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "© 𝙵𝚄𝚁𝙸𝙽𝙰"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": `0@s.whatsapp.net`
};
      
let Furina = 'https://telegra.ph/file/9d434fb0067dda1742489.mp4'
/*await conn.sendMessage(m.chat,{text:text,
  contextInfo: {
    externalAdReply: {
      title: `© 𝙵𝚄𝚁𝙸𝙽𝙰`,
      body: global.author,
      thumbnailUrl: global.fotonya2,
      sourceUrl: `https://furinaa.netlify.app/`,
      mediaType: 1,
      renderLargerThumbnail: true
    },
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    sendEphemeral: true
  },
}, { quoted: fkontak })*/     
conn.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
            fileName: 'Furina-MD',
            fileLength: new Date(),
            pageCount: "2024",
            caption: text,
            mimetype: 'image/png',
            jpegThumbnail: await conn.resize('https://telegra.ph/file/47ad23c65a02ac65d3809.jpg', 400, 400),
      contextInfo: {
      externalAdReply: {
      title: `FurinaMD 3.5 || All Menu`,
      body: `Made By Rgbruh`,
      thumbnailUrl: global.fotonya2,
      sourceUrl: null,
      mediaType: 1,
      renderLargerThumbnail: true, 
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `6285794209006@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363258256492594@newsletter',
            serverMessageId: null,
            newsletterName: 'FurinaMD || 3.5 Versions'
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: 'FurinaMD 3.5 Terverifikasi Oleh WhatsApp' }}});        

        conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/tahu.mp3'), quoted: m });;
      } catch (e) {

    conn.reply(m.chat, '❎ Maaf, menu mengalami kesalahan', m)

    throw e

  }

}
/*conn.sendMessage(m.chat, {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      title: `© 𝙵𝚄𝚁𝙸𝙽𝙰`,
      body: global.author,
      thumbnailUrl: global.fotonya2,
      sourceUrl: syt,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
  } catch (e) {
    m.reply('Error')
  }
*/
handler.command = /^(allmenu)$/i
export default handler
const hmmm = [

"`Tidak usah cemas, karena cerita hidupmu telah di tulis oleh penulis skenario terbaik.`",
    "`Terkadang Allah akan membuatmu kehilangan segalanya agar kau dapat memulainya lagi.`",
    "`Lemahnya manusia adalah ketika dia menganggap pacarnya sebagai jodoh nya, sampai dia lupa bahwa Istidraj itu benar ada.`",
    "`Jangan sibuk mencari tulang rusukmu yang sebelah kiri, sedangkan surga yang ada di bawah telapak kaki saja kamu  belum bisa menjaganya.`",
    "`Tidak ada satu pun hubungan yang bisa menambahkan rasa cinta kecuali dengan menikah.`",
    "`Kadang Penyebab kita insecure adalah, membandingkan proses diri kita dengan orang lain.`",
    "`Dunia takkan lagi sama setelah kamu mengubur jenazah orang tuamu`",

]
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}