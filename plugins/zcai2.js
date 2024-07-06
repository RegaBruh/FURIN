import C from 'node-fetch';
import fs from 'fs';

let nicknameCharIdDict = {};
if (fs.existsSync("cai_nicknames.json")) {
  try {
    const fileData = fs.readFileSync("cai_nicknames.json", 'utf-8');
    nicknameCharIdDict = JSON.parse(fileData);
  } catch (q) {
    console.error("Error loading JSON file:", q);
  }
}
const nicknames = Object.keys(nicknameCharIdDict);
export async function before(m, {

  conn: i,

  isOwner: G,

  isAdmin: k,

  isROwner: r

}) {

  if (m.text && m.text.startsWith('.')) {
    const M = m.text.split(" ");
    const Q = M[0x0].slice(0x1);
    if (nicknames.includes(Q)) {
      i.sendPresenceUpdate("composing", m.chat);
      const d = nicknameCharIdDict[Q];
      const u = M.slice(0x1).join(" ");
      try {
          

     let _0x627bd = "https://katase-cai.hf.space/api/chara/info?characterId=" + d ;

  

  const _0x4d6c3d = await C(_0x627bd);

  const _0x1c5199 = await _0x4d6c3d.json();

  console.log(_0x1c5199.result);

          const furinaah = _0x1c5199.result

          const ghjh = furinaah.avatar_file_name

          async function _0x4ab31b(_0x5be35f) {

    const _0x141a4e = await C(_0x5be35f);

    const _0x48a553 = await _0x141a4e.buffer();

    return _0x48a553;

  }

  const _0xf257e5 = "https://characterai.io/i/400/static/avatars/" + ghjh;

 let _0xffc85f = await _0x4ab31b(_0xf257e5);
        const V = await C('https://apicai.vercel.app/api/cai?charid=' + d + "&message=" + encodeURIComponent(u));
        const L = await V.json();
        const U = L.reply;
        m.reply(U)
      } catch (H) {
        console.error("Error sending request:", H);
      }
    }
  }
}

