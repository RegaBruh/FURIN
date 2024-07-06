import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
 let type = (command).toLowerCase()

switch (type) {
 case 'lolicon':
  let img = await conn.getFileI('https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=GataDios')
        conn.sendFile(m.chat, img.data, 'img.jpg', `✅ Resultado 🤭`, m)
	    
	break
	
	
	default:
 }
}

handler.help = ['lolicon']
handler.tags = ['nsfw']

handler.command = /^(lolicon)$/i
handler.premium = false
handler.register = true
handler.limit = 20
module.exports = handler