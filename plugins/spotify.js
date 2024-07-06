import pkg from 'sanzy-spotifydl'
let { downloadTrack, downloadAlbum, search } = pkg
import axios from 'axios'
import fetch from 'node-fetch'
import pkg2 from 'fluid-spotify.js'
let { Spotify } = pkg2

let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) return m.reply(`Masukan Query Atau Link\n\nContoh :\n${usedPrefix + command} Mantra Hujan\n${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
 let isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);
 if (!isSpotifyUrl && !text) throw `🚩 Masukkan tautan Lagu, Daftar Putar, atau Album Spotify.`
let user = global.db.data.users[m.sender]
await m.react('🕓')
try {
if (isSpotifyUrl) {
if (isSpotifyUrl[2] === 'album') {
let album = await downloadAlbum(isSpotifyUrl[0])
let img = await (await fetch(`${album.metadata.cover}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩  *Album* : ${album.metadata.title}\n`
    txt += `	✩   *Artist* :${album.metadata.artists}\n`
    txt += `	✩   *Rilis* : ${album.metadata.releaseDate}\n`   
    txt += `	✩   *Total track* : ${album.trackList.length}\n\n`   
    txt += `*- ↻ Audio sedang dikirim, tunggu sebentar. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
for (let i = 0; i < album.trackList.length; i++) {
await conn.sendFile(m.chat, album.trackList[i].audioBuffer, album.trackList[i].metadata.name + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}
} else if (isSpotifyUrl[2] === 'track') {
let track = await downloadTrack(isSpotifyUrl[0])
let dlspoty = track.audioBuffer
let img = await (await fetch(`${track.imageUrl}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩   *Title* : ${track.title}\n`
    txt += `	✩   *Artist* : ${track.artists}\n`
    txt += `	✩   *Durasi* : ${track.duration}\n`
    txt += `	✩   *Album* : ${track.album.name}\n`                 
    txt += `	✩   *Rilis* : ${track.album.releasedDate}\n\n`   
    txt += `*- ↻ Audio sedang dikirim, tunggu sebentar. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dlspoty, track.title + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
} else if (isSpotifyUrl[2] === 'playlist') {
let infos = new Spotify({
clientID: "7fb26a02133d463da465671222b9f19b",
clientSecret: "d4e6f8668f414bb6a668cc5c94079ca1",
})
let playlistId = isSpotifyUrl[0].split('/').pop()
let playlistInfoByID = await infos.getPlaylist(playlistId)
let tracks = playlistInfoByID.tracks.items
let img = await (await fetch(`${playlistInfoByID.images[0].url}`)).buffer()
let txt = `*乂  S P O T I F Y  -  D O W N L O A D*\n\n`
    txt += `	✩   *Playlist* : ${playlistInfoByID.name}\n`
    txt += `	✩   *Tracks total* : ${tracks.length}\n\n`
    txt += `*- ↻ Audio sedang dikirim, tunggu sebentar. . .*`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
let target = m.chat
if (m.isGroup && tracks.length > 20) {
target = m.sender;
}
for (let i = 0; i < tracks.length; i++) {
let track = await downloadTrack(tracks[i].track.external_urls.spotify)
await conn.sendFile(m.chat, track.audioBuffer, tracks[i].track.name + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
await m.react('✅')
}}
} else {
let search = await SpotifyApi.search(text)
        
        let body = search.data.map((v, i) => {
            return `
_*${i + 1}. ${v.title.toUpperCase()}*_
❃ Artist : ${v.artist.name}
❃ Link : ${v.url}
`.trim()
        }).join('\n\n')
        let head = `_*Download Lagu Dengan Cara :*_ \n_*${usedPrefix + command} https://open.spotify.com/track/3M0lSi5WW79CXQamgSBIjx*_\n\n`
        conn.reply(m.chat, head + body, m)
        //conn.adReply(m.chat, head + body, result[0].title, '▶︎\n━━━━━━━•───────────────', fs. readFileSync('./media/spotify.jpg'), result[0].link, m)
await m.react('✅')
}  
} catch {
await m.react('✖️')
}}
handler.tags = ['downloader']
handler.help = ['spotify']
handler.command = ['spotify']
//handler.limit = 1
handler.register = true
export default handler


async function spotifyCreds() {
  return new Promise(async (resolve) => {
    try {
      const json = await (
        await axios.post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials",
          {
            headers: {
              Authorization:
                "Basic " +
                Buffer.from(
                  process.env.SPOTIFY_CLIENT_ID +
                    ":" +
                    process.env.SPOTIFY_CLIENT_SECRET,
                ).toString("base64"),
            },
          },
        )
      ).data;
      if (!json.access_token)
        return resolve({
          creator: "Budy x creator ",
          status: false,
          msg: "Can't generate token!",
        });
      resolve({
        status: true,
        data: json,
      });
    } catch (e) {
      resolve({
        status: false,
        msg: e.message,
      });
    }
  });
}

const SpotifyApi = {
  detail: async (text) => {
    return new Promise(async (resolve) => {
      try {
        const creds = await spotifyCreds();
        if (!creds.status) return resolve(creds);
        const json = await (
          await axios.get(
            "https://api.spotify.com/v1/tracks/" + text.split("track/")[1],
            {
              headers: {
                Authorization: "Bearer " + creds.data.access_token,
              },
            },
          )
        ).data;
        resolve({
          thumbnail: json.album.images[0].url,
          title: json.artists[0].name + " - " + json.name,
          artist: json.artists[0],
          duration: convert(json.duration_ms),
          preview: json.preview_url,
        });
      } catch (e) {
        resolve({
          msg: e.message,
        });
      }
    });
  },
  search: async (query, type = "track", limit = 20) => {
    return new Promise(async (resolve) => {
      try {
        const creds = await spotifyCreds();
        if (!creds.status) return resolve(creds);
        const json = await (
          await axios.get(
            "https://api.spotify.com/v1/search?query=" +
              query +
              "&type=" +
              type +
              "&offset=0&limit=" +
              limit,
            {
              headers: {
                Authorization: "Bearer " + creds.data.access_token,
              },
            },
          )
        ).data;
        if (!json.tracks.items || json.tracks.items.length < 1)
          return resolve({
            creator: "Budy x creator ",
            status: false,
            msg: "Music not found!",
          });
        let data = [];
        json.tracks.items.map((v) =>
          data.push({
            title: v.album.artists[0].name + " - " + v.name,
            duration: convert(v.duration_ms),
            artist: v.artists[0],
            popularity: v.popularity + "%",
            preview: v.preview_url,
            url: v.external_urls.spotify,
          }),
        );
        resolve({
          data,
        });
      } catch (e) {
        resolve({
          msg: e.message,
        });
      }
    });
  },
  download: async (text) => {
    return new Promise(async (resolve, reject) => {
      try {
        const yanzz = await axios.get(
          `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(text)}`,
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
              "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": '"Android"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site",
              Referer: "https://spotifydownload.org/",
              "Referrer-Policy": "strict-origin-when-cross-origin",
            },
          },
        );
        const yanz = await axios.get(
          `https://api.fabdl.com/spotify/mp3-convert-task/${yanzz.data.result.gid}/${yanzz.data.result.id}`,
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
              "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
              "sec-ch-ua-mobile": "?1",
              "sec-ch-ua-platform": '"Android"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site",
              Referer: "https://spotifydownload.org/",
              "Referrer-Policy": "strict-origin-when-cross-origin",
            },
          },
        );
        const result = {};
        result.title = yanzz.data.result.name;
        result.type = yanzz.data.result.type;
        result.artis = yanzz.data.result.artists;
        result.durasi = yanzz.data.result.duration_ms;
        result.image = yanzz.data.result.image;
        result.download =
          "https://api.fabdl.com" + yanz.data.result.download_url;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};
process.env["SPOTIFY_CLIENT_ID"] = "4c4fc8c3496243cbba99b39826e2841f";
process.env["SPOTIFY_CLIENT_SECRET"] = "d598f89aba0946e2b85fb8aefa9ae4c8";
async function convert(ms) {

  var minutes = Math.floor(ms / 60000);

  var seconds = ((ms % 60000) / 1000).toFixed(0);

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}