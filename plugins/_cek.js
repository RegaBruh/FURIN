const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import ('@adiwajshing/baileys')).default
import fs from "fs"
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix: _p }) => {
    const messa = await prepareWAMessageMedia({ image: await fetch(`https://telegra.ph/file/47ad23c65a02ac65d3809.jpg`) }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "7072001572901676",
			"title": `Bot Aktif Kak`,
			"description": `Hai`,
			"currencyCode": "JPY",
			"bodyText": `tes`,
			"footerText": `tes`,
			"priceAmount1000": "1945000",
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": "1945000",
			"retailerId": "idk",
			"url": "wa.me/6285794209006"
		},
			"businessOwnerJid": "0@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
  await conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}

handler.command = /^(cek|tes|a|p|test|tess)$/i

export default handler