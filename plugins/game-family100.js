import { family100 } from '@bochilteam/scraper'
const winScore = 4999
const tod = 10000
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, '❗Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*📄Soal:* ${json.soal}
📍Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}\n\n💥+${winScore} XP tiap jawaban benar\n\💸+${tod} Money tiap jawanan benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.reply(m.chat, caption, m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
        tod,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.group = true

export default handler