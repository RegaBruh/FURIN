import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "final.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Akhirnya|akhirny|akhrnya|akhirnyaa|finally|final chapter|finaly|wohooo akhirnya|wohooo|wohoo akhrnya)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/final.mp3",
]