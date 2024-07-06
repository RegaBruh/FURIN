/**
 * SCRAPED BY KAVIAANN
 * FORBIDDEN TO SELL AND DELETE MY WM
 */
import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, args, command, usedPrefix}) => {
if (!text) throw 'Linknya Mana Kak?'
let hm = await tiktokSlide(text);
for (const item of hm.slides) {
conn.sendFile(m.chat, item, '', ``, m);
}




}
handler.help = ['ttimg2 <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg2|tiktokimg2)$/i
handler.register = true
handler.limit = true

export default handler

async function tiktokSlide(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const origin = "https://ttsave.app/";
      /**
       * @type {RequestInit}
       */
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Content-Type": "application/json",
          Origin: origin,
          Referer: `${origin}/en/slide`,
          "Sec-Fetch-Mode": "cors",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
          
        },
        body: JSON.stringify({
          language_id: "1",
          query: url,
        }),
      };
      const res = await fetch(`${origin}/download`, options).then((v) =>
        v.text()
      );
      const $ = cheerio.load(res);
      const data = {
        author: "",
        username: "",
        profile: "",
        caption: "",
        views: "0",
        likes: "0",
        comment: "0",
        save: "0",
        share: "0",
        music: "",
        thumbnail: "",
        slides: [],
        link: url,
        authorLink: "",
      };
      const download = $("div.items-center");
      const attr = $(download).find("div.gap-2").children("div");
      const slides = $(download).find("div#button-download-ready");
      data.author = $(download)
        .find("h2.font-extrabold.text-xl.text-center")
        .text()
        .trim();
      data.username = $(download).find("a[title]").text().trim();
      data.authorLink = $(download).find("a[title]").attr("href");
      data.caption = $(download).find("a[title] + p").text().trim();
      data.views = attr.eq(0).find("span").text().trim() || "0";
      data.likes = attr.eq(1).find("span").text().trim() || "0";
      data.comment = attr.eq(2).find("span").text().trim() || "0";
      data.save = attr.eq(3).find("span").text().trim() || "0";
      data.share = attr.eq(4).find("span").text().trim() || "0";
      data.music = $(download).find("div.mt-5 > span").text().trim() || "";
      $(slides)
        .children("div")
        .each((i, el) => {
          data.slides.push($(el).find("img").attr("src"));
        });
      data.profile = $(slides).find('a[type="profile"]').attr("href");
      data.thumbnail = $(slides).find('a[type="cover"]').attr("href");

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}