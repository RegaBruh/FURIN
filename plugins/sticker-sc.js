
import fs from "fs"
import fetch from "node-fetch"
let handler = async (m, { conn, usedPrefix: _p }) => {
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import ('@adiwajshing/baileys')).default
    const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/5783f1a014c908ab8b487.png') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "7072001572901676",
			"title": `Nyariapaan`,
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
			"businessOwnerJid": "6285794209006@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
  await conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.customPrefix = /^(.sc|sc|sourcecode)$/i;
handler.command = new RegExp()

export default handler