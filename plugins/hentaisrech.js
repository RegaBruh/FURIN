import axios from 'axios'
import cheerio from "cheerio";

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
if (!text) throw '*[ Wrong ]* please input query'
let searchResults = await searchHentai(text)
let memek = searchResults.result.map((v, i) => `*${i + 1}.* ${v.title}
Views : ${v.views}
Link : ${v.url}`).join('\n')
let randomThumbnail
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length)
randomThumbnail = searchResults.result[randomIndex].thumbnail
conn.sendMessage(m.chat, {image: {url:randomThumbnail}, caption:memek},{quoted:m})
} else {
//randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
m.reply('*[ Error ]* hasil tidak ada')

}
}
handler.command = ["hentaisearch"]
handler.tags = ["haram"]
export default handler;

async function searchHentai(text) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + text).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}