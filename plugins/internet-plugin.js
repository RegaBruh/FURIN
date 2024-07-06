/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

import fetch from 'node-fetch'
import googleIt from'google-it'
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) throw `*• Example:* ${usedPrefix + command} Minecraft`
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  try {
    var logos = `https://skizo.tech/api/ssweb?type=desktop&url=${url}&apikey=seika`
	conn.sendFile(m.chat, logos, 'logos.jpg', url + '\n\n' + msg, m)
  } catch (e) {
    m.reply(msg)
  }
}
handler.help = ['google', 'googlef'].map(v => v + ' *[query]*')
handler.tags = ['internet']
handler.command = /^google?$/i

export default handler;