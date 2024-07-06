import fetch from "node-fetch"
import axios from "axios"
import cheerio from "cheerio"

let handler = async (m, {text, conn, }) => {
 if (!text) return m.reply('Mana text nya ?')
 

let res = await searchKomiku(text)
       let teks = await res.map((v, index) => {
       return `*[ ${index + 1} ]*.*Title:* ${v.title}\n*Alternate Titles:* ${v.subtitle}\n*Update:* ${v.update}\n*Chapters:* ${v.chapters}\n*Link:* https://komiku.id${v.link}\n`.trim()
        }).filter(v => v).join("\n\n________________________\n\n")
       
       conn.sendMessage(m.chat,{text: teks, contextInfo: {
    externalAdReply: {
    sourceUrl: 'https://komiku.id',
       }
       }
       }
       )
        
        }
handler.help = ['komiku'];
handler.tags = ['internet'];
handler.command = ['komiku'];
handler.register = true;
export default handler;     
   
async function searchKomiku(query) {
    const url = 'https://api.komiku.id/?post_type=manga&s=' + query; // Ganti dengan URL pencarian yang sesuai

    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        const results = [];

        $('div.bge').each((index, element) => {
            const imageSrc = $(element).find('.bgei img').attr('src');
            const link = $(element).find('.bgei a').attr('href');
            const title = $(element).find('.kan a h3').text().trim();
            const subtitle = $(element).find('.kan .judul2').text().trim();
            const update = $(element).find('.kan p').text().trim();

            const chapters = [];
            $(element).find('.kan .new1').each((idx, el) => {
                const chapterTitle = $(el).find('a').attr('title');
                const chapterNumber = $(el).find('span:last-child').text();
                chapters.push({
                    title: chapterTitle,
                    number: chapterNumber
                });
            });

            results.push({
                imageSrc: imageSrc || 'Tidak diketahui',
                link: link || 'Tidak diketahui',
                title: title || 'Tidak diketahui',
                subtitle: subtitle || 'Tidak diketahui',
                update: update || 'Tidak diketahui',
                chapters: chapters.length > 0 ? chapters.map(({
                    title,
                    number
                }, index) => `\n${index + 1}.\n${title}\n${number}\n\n`).join('') : 'Tidak diketahui'
            });
        });

        return results;
    }  catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}