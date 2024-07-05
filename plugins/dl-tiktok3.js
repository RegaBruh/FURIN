import axios from 'axios';
import vm from 'node:vm';

const savefrom = async function(url) {
    let body = new URLSearchParams({
        "sf_url": encodeURI(url),
        "sf_submit": "",
        "new": 2,
        "lang": "id",
        "app": "",
        "country": "id",
        "os": "Windows",
        "browser": "Chrome",
        "channel": "main",
        "sf-nomad": 1
    });

    try {
        let response = await axios.post("https://worker.sf-tools.com/savefrom.php", body, {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "origin": "https://id.savefrom.net",
                "referer": "https://id.savefrom.net/",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
            }
        });

        let exec = '[]["filter"]["constructor"](b).call(a);';
        let data = response.data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
        let context = {
            "scriptResult": "",
            "i": 0
        };
        vm.createContext(context);
        new vm.Script(data).runInContext(context);
        return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0]);
    } catch (error) {
        console.error("Error in savefrom:", error);
        throw error;
    }
};

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Masukkan tautan Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`;

    m.react('🗿');

    try {
        let result = await savefrom(args[0]);
        let te = `
┌─⊷ TIKTOK
▢ *Nama:* ${result.nickname}
▢ *Username:* ${result.unique_id}
▢ *Durasi:* ${result.duration}
▢ *Deskripsi:* ${result.description}
└───────────`;
        conn.sendFile(m.chat, result.play, 'tiktok.mp4', te, m);
        m.react('💧');
    } catch (error) {
        m.reply(`❎ Kesalahan mengunduh video`);
        console.error("Error in TikTok handler:", error);
    }
};

handler.help = ['tiktok3'];
handler.tags = ['dl'];
handler.command = /^(tiktok3|ttdl3|tiktokdl3|tiktoknowm3|tt3)$/i;
handler.diamond = true;

export default handler;

