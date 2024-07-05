import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api'
const defaultLang = 'id'

let handler = async (m, { conn, text }) => {
    if (text.startsWith("char ")) {
try{
   const M = text.slice(5);
    let apiUrl = `https://api.ennead.cc/buruaka/character/${M}`;
    let response = await fetch(apiUrl);
    let responseData = await response.json();
let ress = await translate (responseData.character.profile, { to: defaultLang, autoCorrect: true }).catch(_ => null)

    let message = `Name: ${responseData.character.name}
Age: ${responseData.info.age}
Position: ${responseData.character.position}
Role: ${responseData.character.role}
Armor Type: ${responseData.character.armorType}
Bullet Type: ${responseData.character.bulletType}
Weapon Type: ${responseData.character.weaponType}
Squad Type: ${responseData.character.squadType}

Release: ${responseData.isReleased}
    
*Profile:*
${ress.text}
    `;

    conn.sendMessage(m.chat, {text: message,
    contextInfo: {
    externalAdReply: {
    title: responseData.character.name,
    body: responseData.info.age,
    thumbnailUrl: responseData.image.lobby,
    sourceUrl: '',
    }
    }
    },
    {qouted:m},
    )
    } catch(err) {
    m.reply('`mungkin nama tidak lengkap/not found`')
    }
   } else {
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
} else {
throw "Invalid '.bluearchive' command.\n*Usage*:\n.bluearchive char ```<query>```,\n.bluearchive ```banner```,\n.bluearchive ```raid```."
}
}
}
}

handler.help = ['bluearchive'];
handler.tags = ['bluearchive'];
handler.command = /^(bluearchive)$/i;

handler.register = true

export default handler;