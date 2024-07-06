let handler = async(m, { conn,}) => {
    if (!m.quoted) throw 'reply pesan!'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    let hmm = await q.quoted.copyNForward(m.chat, true)
  return console.log(hmm)
   
}
handler.command = /^q$/i

export default handler