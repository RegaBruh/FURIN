import { instagram } from 'betabotz-tools';
let handler = async (_0x57239d, {
  conn: _0x410242,
  args: _0x3ef7db,
  usedPrefix: _0x56b111,
  command: _0x3a8bb3
}) => {
  if (!_0x3ef7db[0x0]) {
    throw "Linknya Mana?...\n*Contoh :* " + _0x56b111 + _0x3a8bb3 + " https://www.instagram.com/reel/CvYLRDVx9cY/?igshid=NTc4MTIwNjQ2YQ==";
  }
  try {
    var tahu = await instagram(_0x3ef7db[0x0]);
    _0x410242.sendMessage(_0x57239d.chat, {
      'react': {
        'text': '⏳',
        'key': _0x57239d.key
      }
    });
    for (var _0x2e3e33 of tahu.result) {
      _0x410242.sendFile(_0x57239d.chat, _0x2e3e33._url, "t.mp4", "*Done Kak*", _0x57239d);
    }
  } catch (_0x5c9a11) {
    console.log(_0x5c9a11);
    _0x57239d.reply("*Sistem Furina Error");
  }
};
handler.help = ['instagram'].map(_0x59e3b5 => _0x59e3b5 + " <url>");
handler.tags = ["downloader"];
handler.command = /^(ig|instagram(dl)?)$/i;
handler.register = false;
handler.limit = true;
export default handler;