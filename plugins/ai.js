// *[INFORMATION]*
// Plug paket lengkap ai esesah
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Ummhh mau tanya apa??, Example: ${usedPrefix + command} Apa itu pedofil`

  m.reply('Writing...');

  try {
    let apiUrl;
    let responseData;

    if (command === 'blackbox') {
      apiUrl = 'https://api.ssateam.my.id/api/blackboxAIChat?message=';
    } else if (command === 'luminai') {
      apiUrl = 'https://api.ssateam.my.id/api/lumineai?message=';
    } else if (command === 'llama3') {
      apiUrl = 'https://api.ssateam.my.id/api/llama3?message=';
    } else if (command === 'youai') {
      apiUrl = 'https://api.ssateam.my.id/api/youai?message=';
    } else if (command === 'chatgpt') {
      apiUrl = 'https://api.ssateam.my.id/api/chatgpt?message=';
    } else if (command === 'ai') {
      apiUrl = 'https://api.ssateam.my.id/api/chatgpt?message=';
    } else if (command === 'gemini') {
      apiUrl = 'https://api.ssateam.my.id/api/gemini?message=';
    } else {
      return m.reply('Invalid command. Please use blackbox, luminai, llama3, or youai');
    }

    const response = await fetch(apiUrl + text);
    responseData = await response.json();

    const result = responseData.data.response || responseData.data.asu; // Use appropriate key

    conn.reply(m.chat, result, m);
  } catch (error) {
    console.error(error); // Log the error for debugging
    await m.reply('Maaf kak... terjadi kesalahan. Please try again later.');
  }
}
handler.help = handler.command = ['blackbox', 'luminai', 'llama3', 'youai', 'chatgpt', 'ai', 'gemini'];
handler.tags = ['ai'];
handler.daftar = handler.limit = true

export default handler