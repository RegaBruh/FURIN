import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `Rega`, `RegaBruhh`, ``, `unknow@gmail.com`, `poluto`, `https://youtube.com/@idk?si=YZM1DdvOzcWFRqKz`, `Developer 🗿`],
    [`${nana}`, `Nekuu`, `Neku`, ``, `NekuHistoria@gmail.com`, `saturn`, `idk`, `Nah`]
  ], m)
  } 

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler