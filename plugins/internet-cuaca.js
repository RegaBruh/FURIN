import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Jakarta`
    m.reply(wait)
    try {
    let res = await fetch(API('https://api.openweathermap.org', '/data/2.5/weather', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!res.ok) throw 'lokasi tidak ditemukan'
    let json = await res.json()
    if (json.cod != 200) throw json

let ahhhh = await conn.sendMessage(m.chat, { location: { 
degreesLatitude: json.coord.lat,
degreesLongitude: json.coord.lon,
}
}, { quoted: m })
    m.reply(`
Lokasi: ${json.name}
Negara: ${json.sys.country}
Cuaca: ${json.weather[0].description}
Suhu saat ini: ${json.main.temp} °C
Suhu terasa seperti: ${json.main.feels_like}°C
Udara: ${json.main.grnd_level} Hph
Permukaan Laut: ${json.main.sea_level} Hph
Kelembapan: ${json.main.humidity} %
Angin: ${json.wind.speed} km/jam
    `.trim())
    } catch {
  try {
    let rea = await fetch(API('https://api.openweathermap.org', '/data/2.5/weather', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!rea.ok) throw 'lokasi tidak ditemukan'
    let jsos = await rea.json()
    if (jsos.cod != 200) throw jsos

let ahhhs = await conn.sendMessage(m.chat, { location: { 
degreesLatitude: jsos.coord.lat,
degreesLongitude: jsos.coord.lon,
}
}, { quoted: m })
    m.reply(`
Lokasi: ${jsos.name}
Negara: ${jsos.sys.country}
Cuaca: ${jsos.weather[0].description}
Suhu saat ini: ${jsos.main.temp} °C
Suhu terasa seperti: ${jsos.main.feels_like}°C
Kelembapan: ${jsos.main.humidity} %
Angin: ${jsos.wind.speed} km/jam
    `.trim())
    } catch {
    m.reply('Tidak menemukan wilayah')
    }
  }
}

handler.help = ['cuaca']
handler.tags = ['internet']
handler.command = /^(cuaca|weather)$/i
handler.limit = true
export default handler