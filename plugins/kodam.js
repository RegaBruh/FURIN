import axios from 'axios';
import cheerio from 'cheerio';

const handler = async  (m, {
	conn,
	args,
	usedPrefix,
	text,
	command
}) => {
if (!text) throw `*• Example:* ${usedPrefix + command} Furina`;

let tahu = await khodamCek(text)

let msg = `Nama: ${text}
Khodam: ${tahu.khodam}
Kutipan: ${tahu.kutipan}`
conn.sendMessage(m.chat, {text : msg, })

}
handler.help = ['cekkodam']
handler.tags = ['fun']
handler.command = /^(cekkodam|cekkhodam)$/i

export default handler
async function khodamCek(nama) {
    const url = `https://khodam.vercel.app/v2?nama=${nama}`

    try {
        const response = await axios.get(url)
        const html = response.data
        
        const $ = cheerio.load(html)

        const khodamResult = $('.result').find('.text-rose-600').text().trim()
        const quoteResult = $('.mb-5.sm\\:mb-10.px-8.text-center.text-white\\/90').text().trim()

        return {
            nama: nama.toLowerCase(),
            khodam: khodamResult,
            kutipan: quoteResult
        }
    } catch (error) {
        throw new Error(`error jir: ` + error)
    }
}