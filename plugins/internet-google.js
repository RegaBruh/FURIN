import fetch from 'node-fetch'
import ggs from'google-it'
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) throw `*• Example:* ${command} Minecraft`
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await ggs({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `=========================================\n\n*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`

    m.reply(msg)
  
}
handler.help = ['google', 'googlef'].map(v => v + ' *[query]*')
handler.tags = ['internet']
handler.command = /^google?$/i

export default handler;