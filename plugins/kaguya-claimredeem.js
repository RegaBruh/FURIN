let handler = async (m, { conn, text, usedPrefix, command }) => {
const user = global.db.data.users[m.sender]
const lastDeliveryTime = user.lastredeem || 0;
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - lastDeliveryTime
if (timeDiff < 3000000) {
    const remainingTime = 300000 - timeDiff;
    const remainingTimeString = clockString(remainingTime);
    conn.reply(m.chat, `‼️ You have claimed the redeem code`, m);
    return;
  }
 if (!text) throw `*• Example:* .claimredeem YTTA`
let redeem = db.data.redeem
if (text == redeem) {
user.limit = 1000
user.exp = 11000
user.lastredeem = Date.now()
m.reply(`🎉 congratulations on getting\n\nlimit: 1000\nexp: 11000\n*Thank you for using Furina, hopefully the future will be better than before*`)
} else m.reply('*[ INVALID REDEEM CODE ]*')
}
handler.help = ["claimredeem"]
handler.tags = ["main"]
handler.command = ["claimredeem"]
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return ['\n' + d, ' *Days*\n ', h, ' *Hours*\n ', m, ' *Minute*\n ', s, ' *Second* '].map(v => v.toString().padStart(2, 0)).join('');
}