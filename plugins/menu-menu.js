import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `• مرحبا ياعزيزى ⤌⤈       
↝ *${taguser}* ↜

⧉┆انا بوت واتس اسمي
↝ *بوت توينز الكاريزما* ↜
♩☜ اعمل في الخاص وجروبات
♩☜ وظيفتي حماية جروبك
♩☜ اكتب كلمه .الاوامر لمعرفه
♩☜ اوامر البوت وطريقه الاستخدام
♩☜ مميزات البوت كثيره جدا 
♩☜ ويعمل بجودة فائقه وعاليه
    𓍹————————————𓍻
↜ اوامر سورس التوينز بوت ↝
    𓍹————————————𓍻
❰ .م1 ❱ ➢ اوامر الاعضاء
❰ .م2 ❱ ➢ اوامر المالك
❰ .م3 ❱ ➢  اوامر الجروبات
❰ .م4 ❱ ➢ اوامر البحث وتنزيل
❰ .م5 ❱ ➢ اوامر التحويل
❰ .م6 ❱ ➢ اوامر الملصقات
❰ .م7 ❱ ➢ اوامر التسليه
❰ .م8 ❱ ➢ اوامر البنك
❰ .م9 ❱ ➢ اوامر القرآن
❰ .م10 ❱ ➢ كل الاوامر
.المميزات ➢ لعرض مميزات البوت
.المطور ➢ لعرض مطور البوت
.السورس ➢ لعرض المبرمج
بݪآڪ و٘ عٓفـرتو٘ يآ حٓبي
 `.trim()

const im = ['']

try {
await conn.sendMessage(m.chat, { video: { url: im.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(منيو|اوامر|الاوامر)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
