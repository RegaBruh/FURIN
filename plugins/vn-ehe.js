import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "paimonehe.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(hehe|ehe|Ehe|palalu|pala bapak kau)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/paimonehe.mp3",
]