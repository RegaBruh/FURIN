import _0x45ec48 from 'fs';
import _0x5e3347 from 'acrcloud';
let acr = new _0x5e3347({
  'host': "identify-eu-west-1.acrcloud.com",
  'access_key': "c33c767d683f78bd17d4bd4991955d81",
  'access_secret': "bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu"
});
let handler = async _0x2b2463 => {
  let _0x22a64d = _0x2b2463.quoted ? _0x2b2463.quoted : _0x2b2463;
  let _0x1d1a93 = (_0x22a64d.msg || _0x22a64d).mimetype || '';
  if (/audio|video/.test(_0x1d1a93)) {
    if ((_0x22a64d.msg || _0x22a64d).seconds > 60) {
      return _0x2b2463.reply("[ INFORMATION ]\n\nMaksimal 60 detik");
    }
    let _0x5a6968 = await _0x22a64d.download();
    let _0x28ac17 = _0x1d1a93.split('/')[0x1];
    _0x45ec48.writeFileSync("./tmp/" + _0x2b2463.sender + '.' + _0x28ac17, _0x5a6968);
    let _0x1f6275 = await acr.identify(_0x45ec48.readFileSync('./tmp/' + _0x2b2463.sender + '.' + _0x28ac17));
    let {
      code: _0x2b3376,
      msg: _0x17da5e
    } = _0x1f6275.status;
    if (_0x2b3376 !== 0x0) {
      throw _0x17da5e;
    }
    let {
      title: _0x5d44bf,
      artists: _0x44c4c2,
      album: _0x48382b,
      genres: _0x100021,
      release_date: _0x34d0c4
    } = _0x1f6275.metadata.music[0x0];
    let _0x32a315 = ("\n\n*≡ HASIL PENCARIAN INFO MUSIK*\n\n┌─⊷ *MUSIK APA?* \n▢ Judul: " + _0x5d44bf + "\n▢ Artis: " + (_0x44c4c2 !== undefined ? _0x44c4c2.map(_0x4dbfc9 => _0x4dbfc9.name).join(", ") : "Tidak ditemukan") + "\n▢ Album: " + (_0x48382b.name || "Tidak ditemukan") + " \n▢ Genre: " + (_0x100021 !== undefined ? _0x100021.map(_0x3dcd64 => _0x3dcd64.name).join(", ") : "Tidak ditemukan") + "\n▢ Diliris pada: " + (_0x34d0c4 || "Tidak ditemukan") + "\n└──────────────\n\n_By Furina_\n").trim();
    _0x45ec48.unlinkSync('./tmp/' + _0x2b2463.sender + '.' + _0x28ac17);
    _0x2b2463.reply(_0x32a315);
  } else {
    throw "*[ INFORMATION ] Reply Audio*";
  }
};

handler.help = ['whatmusic'];
handler.tags = ['keila'];
handler.command = /^musikapa|whatmusic|musikapakah$/i;
export default handler;