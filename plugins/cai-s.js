// SORRY DI ENC //
import fetch from 'node-fetch';
let handler = async (m, {
  conn: conn,
  args: args,
}) => {
  if (!args[0]) {
    m.reply("Input name");
    return;
  }
  let Pl = 'https://katase-cai.hf.space/api/chara/search?name=' + args[0].replace(/[\n]/g, "\\n").replace(/\s/g, '+');
  if (args[0] === "#info" && args[1]) {
    let YOI = "https://katase-cai.hf.space/api/chara/info?characterId=" + args[1];
    let Ytta = await fetch(YOI);
    let joi = await Ytta.json();
    let furinah = joi.result;
    let GO = furinah.name;
    let RI = furinah.description;
    let RIU = furinah.greeting;
    let RIUC = furinah.user__username;
    let TOOT = formatNumber(furinah.participant__num_interactions);
    let IDK = furinah.external_id;
    let IDIOM = furinah.avatar_file_name;
    let HIG = furinah.title;
    let IMAG = "https://characterai.io/i/400/static/avatars/" + IDIOM;
    let GGFY = await fetchImage(IMAG);
    m.reply(m.chat, "CHARACTER INFO\n\n- Name: " + GO + "\n- Info: " + RI + "\n- Greeting: " + RIU + "\n- Creator: " + RIUC + "\n- User: " + TOOT + "\n- ID: " + IDK, m, {
      'contextInfo': {
        'externalAdReply': {
          'mediaUrl': null,
          'mediaType': 1,
          'description': null,
          'title': GO,
          'body': HIG,
          'previewType': 0,
          'thumbnail': GGFY,
          'jpegThumbnail': GGFY,
          'sourceUrl': ''
        }
      }
    });
    return;
  }
  fetch(Pl).then(hmmm => hmmm.json()).then(hmmmi => {
    if (hmmmi.result) {
      const hmmmik = hmmmi.result.slice(0, 14);
      const hmmmiki = [];
      hmmmik.forEach((joii, entah) => {
        const jooi = joii.participant__name;
        const _0x1f014d = formatNumber(joii.participant__num_interactions);
        const _0x379616 = joii.user__username;
        const _0x55e43b = joii.title;
        const _0x499e4a = joii.greeting;
        const haah = joii.avatar_file_name;
        const _0x4b9db1 = joii.external_id;
        const hmmk = "https://characterai.io/i/400/static/avatars/" + haah;
        const lolpo = fetchImage(hmmk);
        const gghsh = "\n" + (entah + 0x1) + ". Name: " + jooi + "\n- Creator: " + _0x379616 + "\n- User: " + _0x1f014d + "\n- Info: " + (_0x55e43b || _0x499e4a) + "\n- ID: " + _0x4b9db1 + "\n";
        hmmmiki.push(gghsh);
      });
      const _0x1558e1 = hmmmiki.join('');
      m.reply("「 CHARA SEARCH 」\n\n" + _0x1558e1, m, {
      'contextInfo': {
        'externalAdReply': {
          'mediaUrl': null,
          'mediaType': 1,
          'description': null,
          'title': joii,
          'body': _0x55e43b,
          'previewType': 0,
          'thumbnail': lolpo,
          'jpegThumbnail': lolpo,
          'sourceUrl': ''
        }
      }
    });
    }
  })["catch"](_0x471d88 => {
    console.error("Error:", _0x471d88);
  });
};
handler.help = ["cai-s"];
handler.tags = ['ai'];
handler.command = /^(cai-s)$/i;
export default handler;
function formatNumber(_0x3aaa31) {
  if (_0x3aaa31 >= 0xf4240) {
    return (_0x3aaa31 / 0xf4240).toFixed(0x1) + 'm';
  } else {
    return _0x3aaa31 >= 0x3e8 ? (_0x3aaa31 / 0x3e8).toFixed(0x1) + 'k' : _0x3aaa31.toString();
  }
}
async function fetchImage(url) {
  const _0x1e86cc = await fetch(url);
  const _0x2d78a1 = await _0x1e86cc.buffer();
  return _0x2d78a1;
}
