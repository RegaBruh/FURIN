
let handler = async (m, {conn, command, args, usedPrefix}) => {
let type = (args[0] || '').toLowerCase()
let users = global.db.data.users[m.sender]
let time = global.db.data.users[m.sender].lastjb + 300000
if (new Date - global.db.data.users[m.sender].lastjb < 300000)  throw `Kamu Sudah blBekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
//let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
   // let _timers = (0 - __timers)
   // let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 4000
let duit = Math.floor(Math.random() * 20) + 2500
let duitm = Math.floor(Math.random() * 50) + 9500
let duitd = Math.floor(Math.random() * 62) + 5200
let duitr = Math.floor(Math.random() * 20) + 4200
let duitk = Math.floor(Math.random() * 70) + 7800
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
let kerjaanya = `*List Kerjaan*
• Ojek
• Pedagang
• Dokter
• Petani
• Montir
• Kuli

Contoh: *.nguli ojek*
`
if (/nguli/i.test(command)) {
switch(type) {
	case 'ojek':
	if (global.db.data.users[m.sender].ojek == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja\nSaatnya Istirahat Selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan *${penumpang}*\nDan Mendapatkan Uang Senilai *Rp.${uangm}*`)
break
     case 'pedagang':
     if (global.db.data.users[m.sender].pedagang == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += duit
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Ada Pembeli Yang Membeli *${dagangan}*\nDan Mendapatkan Uang Senilai *Rp.${duit} *`)
	if (pecat > 1 ) {
                   global.db.data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case 'dokter':
 if (global.db.data.users[m.sender].dokter == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += duitm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Menyembuhkan Pasien *${pasien}*\nDan Mendapatkan Uang Senilai *Rp.${duitm}*`)
break
       case 'petani':
if (global.db.data.users[m.sender].petani == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`${panen} Sudah Panen Dan Menjualnya\nHasil Menjual Mendapatkan Uang Senilai Rp.*${duitd}*`)
break
     case 'montir':
 if (global.db.data.users[m.sender].montir == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah blBekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += duitr
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru Saja Mendapatkan Pelanggan Dan Memperbaiki *${bengkel}*\nHasil Memperbaiki Mendapatkan Uang Senilai *Rp.${duitr}*`)
break
      case 'kuli':
 if (global.db.data.users[m.sender].kuli == false) throw 'Ini Bukan Tugas Kamu Atau Kamu Pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu Sudah Bekerja,Saatnya Istirahat Selama\n${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += duitk
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru Saja Selesai ${rumah}\nDan Mendapatkan Uang Senilai *Rp.${duitk}*`)
break
default:
                        return conn.reply(m.chat, kerjaanya, m)
                }
                }
                
                }
///AKSJDDJ
handler.help = ['nguli']
handler.tags = ['fun']
handler.command = /^nguli$/i 


export default handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Hour(s) " + minutes + " Menit(s)"+ seconds + " Seconds(s) "
  }