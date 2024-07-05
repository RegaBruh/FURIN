
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react('💧')

let type = (command).toLowerCase()

switch (type) {
	
case 'ahegao':
			case 'yuri':
			case 'cum':
			case 'ero':
			case 'ass':
			case 'okita':
			case 'umeko':
			case 'panties':
			case 'mihye':
			case 'merial':
			case 'quan':
			case 'nanaqi':
			case 'onlyfans':
			case 'onlyhestia':
			case 'nguyenhuang':
			case 'onlynoname': {
			
                
 
                let anu = await fetch(`https://raw.githubusercontent.com/clicknetcafe/Databasee/main/nsfw/${command}.json`)
                let json = await anu.json()
               let result = json[Math.floor(Math.random() * json.length)]               
                conn.sendMessage(m.sender, { image: { url: result}}, { quoted: m })
        }
break
default:
 }
}
handler.help = ['ahegao', 'yuri', 'cum', 'ero', 'ass', 'okita', 'umeko', 'panties', 'mihye', 'merial', 'quan', 'nanaqi', 'onlyfans', 'onlyhestia', 'nguyenhuang', 'onlynoname']
handler.tags = ['haram']
handler.command = ['ahegao', 'yuri', 'cum', 'ero', 'ass', 'okita', 'umeko', 'panties', 'mihye', 'merial', 'quan', 'nanaqi', 'onlyfans', 'onlyhestia', 'nguyenhuang', 'onlynoname'] 
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
