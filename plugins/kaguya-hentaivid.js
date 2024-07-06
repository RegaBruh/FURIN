import {hentaivid} from "../scrape/scraper.js"
 async function handler(m, { conn, args }) {
  conn.hentai = conn.hentai ? conn.hentai : {};
  const video = await hentaivid();
  const hasil = `*• List Hentai Video*\n${video.map((a, index) => `*${index + 1}* *Title:* ${a.title}\n*• Source:* ${a.link}\n*• Category:* ${a.category}\n*• Views:* ${a.views_count}`).join("\n\n")}`;
  const key = await conn.reply(m.chat, hasil, m);
  await conn.reply(m.chat, `Type one of the numbers *1 - ${video.length}* to download the video`, key);
  conn.hentai[m.sender] = video;
};

handler.before = async (m, { conn }) => {
conn.hentai = conn.hentai ? conn.hentai : {};

  if (!m.text) return;
    if (m.isBaileys) return
  if (!conn.hentai[m.sender]) return;
  const video = conn.hentai[m.sender];
  conn.sendFile(m.chat, video[m.text - 1].video_1, null, video[m.text - 1].title, m);
  delete conn.hentai[m.sender];
};

handler.help = ["hentaivid"];
handler.tags = ["haram"];
handler.command = ["hentaivid"];

export default handler;