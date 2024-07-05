import X from 'node-fetch';
import b from 'fs';
let nicknameCharIdDict = {};
if (b.existsSync("cai_nicknames.json")) {
  try {
    const fileData = b.readFileSync("cai_nicknames.json", "utf-8");
    nicknameCharIdDict = JSON.parse(fileData);
  } catch (w) {
    console.error("Error loading JSON file:", w);
  }
}
let handler = async (A, {
  text: i,
  usedPrefix: G,
  command: k
}) => {
  if (typeof i !== "string") {
    throw "Invalid input. Expected a string.";
  }
  if (i.startsWith("search ")) {
    const M = i.slice(0x7);
    const Q = "https://apigratis.site/api/search_characters?query=" + encodeURIComponent(M);
    try {
      const d = await X(Q);
      const u = await d.json();
      const V = u.results.characters.slice(0x0, 0x5);
      const L = V.map(U => ({
        'external_id': U.external_id,
        'participant_name': U.participant__name,
        'title': U.title
      }));
      A.reply(JSON.stringify(L, null, 0x2));
    } catch (U) {
      console.error("Error:", U);
      throw "Error fetching data from the API.";
    }
  } else {
    if (i.startsWith("new ")) {
      const H = i.slice(0x4);
      const v = nicknameCharIdDict[H];
      if (v) {
        const g = "https://apicai.vercel.app/api/newchat?q=" + v;
        try {
          const y = await X(g);
          const I = await y.json();
          A.reply("Done bhosadike");
          A.reply(I);
        } catch (j) {
          console.error('Error:', j);
          throw "Error fetching data from the API.";
        }
      } else {
        A.reply("No character found with the nickname \"" + H + "\"");
      }
    } else {
      if (i.startsWith("add ")) {
        const q = i.slice(0x4);
        const [e, N] = q.split(':');
        nicknameCharIdDict[e] = N;
        b.writeFileSync("cai_nicknames.json", JSON.stringify(nicknameCharIdDict, null, 0x2));
        A.reply("Added nickname \"" + e + "\" for charid \"" + N + "\"");
      } else {
        if (i === "trending") {
          try {
            const E = await X("https://apicai.vercel.app/api/trending");
            const c = await E.json();
            const o = c.trending_characters.slice(0x0, 0x5);
            const z = o.map(m => ({
              'external_id': m.external_id,
              'participant_name': m.participant__name,
              'title': m.title
            }));
            A.reply(JSON.stringify(z, null, 0x2));
          } catch (m) {
            console.error("Error:", m);
            throw "Error fetching trending data from the API.";
          }
        } else {
          if (i === "chars" || i === "characters") {
            const S = Object.keys(nicknameCharIdDict);
            if (S.length === 0x0) {
              A.reply("No character nicknames are available.");
            } else {
              A.reply("Characters Available:\n```➤ " + S.join("```\n➤  ```") + '```');
            }
          } else {
            throw "Invalid '.cai' command.\n*Usage*:\n.cai search ```<query>```,\n.cai new ```<charnickname>```,\n.cai trending,\n.cai add ```<nickname>:<charid>```.";
          }
        }
      }
    }
  }
};
handler.command = ["cai"];
handler.diamond = false;
handler.tags = ['AI'];
handler.owner = false;
export default handler