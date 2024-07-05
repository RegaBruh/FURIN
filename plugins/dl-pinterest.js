// Pinterest search with button shifted image
// Fixed by Jarsepay

import axios from 'axios'
const {

    proto,

    generateWAMessage,
prepareWAMessageMedia,
    areJidsSameUser,
    generateWAMessageFromContent,
    generateWAMessageContent

} = (await import('@adiwajshing/baileys')).default

const handler = async (m, { text, conn }) => {
  if (!text) return m.reply(`Example: Nakano Nino`)
  
  await m.reply('Tunggu Sebentar...')

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, { upload: conn.waUploadToServer })
    return imageMessage
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const u = Math.floor(Math.random() * (i + 1));
      [array[i], array[u]] = [array[u], array[i]]
    }
  }

  let push = []
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
  let res = data.resource_response.data.results.map(v => v.images.orig.url)

  shuffleArray(res)
  let ult = res.splice(0, 5)
  let i = 1
  
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: "Furina - MD",
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Hasil dari ${text}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    })
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Selesai!'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Furina - MD",
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [...push]
          })
        })
      }
    }
  }, {})

  await conn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  })
}

handler.help = ['pinterest']
handler.tags = ['image']
handler.command = ['pinterest', 'pin']

handler.limit = true

export default handler