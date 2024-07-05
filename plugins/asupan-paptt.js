import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
        if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	conn.sendFile(m.chat, url, null, 'Tch, dasar sangean', m)
}
handler.help = ['paptt']
handler.tags = ['asupan']
handler.command = /^(paptt)$/i
handler.premium = true
export default handler

global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 "https://telegra.ph/file/48731f7c9ca0be40e66a1.jpg",
 "https://telegra.ph/file/411fd7e09013fc6ec643c.jpg",
 "https://telegra.ph/file/65eeab490cc2e474ea45a.jpg",
 "https://telegra.ph/file/8dd276b478f0315a8bde3.jpg",
 "https://telegra.ph/file/79fd99297516462739a5f.jpg",
 "https://telegra.ph/file/79fd99297516462739a5f.jpg",
 "https://telegra.ph/file/8dd276b478f0315a8bde3.jpg",
 "https://telegra.ph/file/8dd276b478f0315a8bde3.jpg",
 "https://telegra.ph/file/79fd99297516462739a5f.jpg",
 "https://telegra.ph/file/2b2c62ffef5851f588d60.jpg",
 "https://telegra.ph/file/6ec47276a16c071272f63.jpg",
 ]