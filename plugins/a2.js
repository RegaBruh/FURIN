import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
if ( text === "banner" ) {
try { 
const bener = `https://api.ennead.cc/buruaka/banner`
const redon = await fetch(bener)
const dons = await redon.json();
await m.reply("[Banner Saat ini]\n\n" + dons.current.map((v) => 
 `GachaType: ${v.gachaType}\nRateUp: ${v.rateups}\n\n`))
 } catch (err) {
 console.error(err)
 throw "Error fetching trending data from the API.";
 }
} else {
  
  if (text === "raid") {
  try {
  const raido = `https://api.ennead.cc/buruaka/raid`
  const radio = await fetch(raido);
  const radna = await radio.json();
await m.reply("[Saat Ini]\n\n" + radna.current.map((v) => 
`Season: ${v.seasonId}\nBoss: ${v.bossName}\n\n`))  
await m.reply("[Akan Datang]\n\n" + radna.upcoming.map((v) => 
`Season: ${v.seasonId}\nBoss: ${v.bossName}\n\n`))
 } catch (erur) {
 console.error(erur)
 throw "Error fetching trending data from the API.";
 }
}
}
}


handler.help = ['blueinfo'];
handler.tags = ['bluearchive'];
handler.command = /^(blueinfo)$/i;

handler.register = true

export default handler;



function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}