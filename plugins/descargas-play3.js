import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*نسيت تكتب ال انت عاوز تبحث عليه يحب*\n\n*—◉ مثال:*\n*${usedPrefix + command}سورة البقره*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*آسف لم أتمكن من العثور على الصوت / الفيديو حاول مرة أخرى*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— ملف الفديو —◉*

📌 *العنوان:* ${title}
📇 *الوصف:* ${description}
📆 *منذ:* ${publishedTime}
⌚ *مدة الفديو:* ${durationH}
👀 *المشاهدات:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['الصوت 🔊', `${usedPrefix}yta ${url}`],
['الفديو 🎥', `${usedPrefix}ytv ${url}`],
['غيره 💫', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*خطأ ، يرجى المحاولة مرة أخرى*')
console.log(e)
}}
handler.command = /^play3|ملف-يوتيوب?$/i
export default handler
