import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api'
const defaultLang = 'id'

let handler = async (m, { conn, }) => {
try {
   
   let resep = await fetch(`https://api-blue-archive.vercel.app/api/character/random`);
   let resepsi = await resep.json();
    for (const a of resepsi.data ) {
    let apiUrl = `https://api.ennead.cc/buruaka/character/${a.name}`;
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
  }
  } catch (err) {
  m.reply('Tidak menemukan nama di Api')
  }
}

handler.help = ['blueran'];
handler.tags = ['bluearchive'];
handler.command = /^(blueran)$/i;


export default handler;