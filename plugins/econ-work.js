import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 2000)
  let dontol = Math.floor(Math.random() * 7000)
  let time = global.db.data.users[m.sender].lastwork + 3600000
  if (new Date - global.db.data.users[m.sender].lastwork < 3600000) throw `*🧘🏻‍♂️ Anda lelah* dan karena itu Anda harus menunggu *${msToTime(time - new Date())}* untuk kembali bekerja!`

    /*let w = await axios.get(global.API('fgmods', '/api/work', { }, 'apikey'))
    let res = w.data.result*/
    
 global.db.data.users[m.sender].exp += hasil
global.db.data.users[m.sender].money += dontol
  m.reply(`
‣ POKOK E KERJA 
‣*${hasil} XP*
‣ *${dontol} MONEY*
`)
  global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['econ']
handler.command = ['work', 'kerja', 'trabajar']

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " minuto(s) " + seconds + " segundo(s)" 
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}