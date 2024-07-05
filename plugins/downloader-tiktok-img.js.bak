// Code by Xnuvers007 ft. Jikarinka
// https://github.com/Xnuvers007/
////////////////////////////////////

import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, args, command, usedPrefix}) => {
if (!text) throw 'Linknya Mana Kak?'

try{
 m.react('⏳')   
let hmm = await  fetch(`https://aemt.me/download/tiktokslide?url=${text}`)
let uhhh = await hmm.json();
for (const item of uhhh.result.images) {
await sleep(3000)
            // Send each file after loading is complete
            conn.sendFile(m.chat, item, '', ``, m);
            m.react('✅');
        }
        } catch {
        m.reply('error')
        }


}
handler.help = ['ttimg <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg)$/i
handler.register = true
handler.limit = true

export default handler

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
