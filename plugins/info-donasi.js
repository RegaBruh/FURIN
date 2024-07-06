let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/2c3bfcb43133ec67a7a67.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..

▧「 *P E M B A Y A R A N* 」

*🎗️E-Walet*
• Ovo = 0857-9420-9006
• Dana = 0857-9420-9006
• Gopay = 0857-9420-9006

👤A/N : unknow

Terima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargai 👽
`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'JPY',
      amount1000: '1000',
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: sewa,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler