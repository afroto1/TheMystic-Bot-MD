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
let menu = `• مرحبا ياروحي ⤌⤈       
↝ *${taguser}* ↜

𓍹——————————𓍻
↝اليك قائمة باوامر المطور↜
𓍹——————————𓍻
❰ .بريم ❱
♚ جعل شخص مميز بالبوت
ꔹ━━━━━ꔹ
❰ .بريم-خفض ❱
♚ خفض شخص من مميز لـ عادي
ꔹ━━━━━ꔹ
❰ .المميزين ❱
♚ يجيبلك الاعضاء البريميوم
ꔹ━━━━━ꔹ
❰ .بان ❱
♚ حظر اي شخص من استخدام البوت 
ꔹ━━━━━ꔹ
❰ .رفع-البان ❱
♚ رفع الحظر عن شخص من استخدام البوت
ꔹ━━━━━ꔹ
❰ .اخرج ❱
♚ خروج البوت من الجروب 
ꔹ━━━━━ꔹ
❰ .انضم ❱
♚ ينضم البوت لجروب عبر الرابط
ꔹ━━━━━ꔹ
❰ .بلوك ❱
♚ عمل بلوك لشخص من البوت 
ꔹ━━━━━ꔹ
❰ .رفع-البلوك ❱
♚ الغاء البلوك عن الشخص 
ꔹ━━━━━ꔹ
❰ .البلوكات ❱
♚ الاشخاص ال البوت عاملهم بلوك
ꔹ━━━━━ꔹ
❰ .حظر ❱
♚ حظر الشات للبوت
ꔹ━━━━━ꔹ
❰ .الغاء-حظر ❱
♚ الغاء حظر الشات للبوت
ꔹ━━━━━ꔹ
❰ .ابلاغ ❱
♚ ابلاغ المطور عن ايرور
ꔹ━━━━━ꔹ
❰ .بنج ❱
♚ يجيبلك معلومات عن خادم البوت ...الخ
ꔹ━━━━━ꔹ
❰ .تسريع ❱
♚ تسريع البوت
ꔹ━━━━━ꔹ
❰ .تحديث ❱
♚ تحديث البوت
ꔹ━━━━━ꔹ
❰ .السرعه ❱
♚ يجيبلك معلومات عن سرعة البوت...الخ
ꔹ━━━━━ꔹ
❰ .ستوري ❱
♚ يرفع استوري انت تحددها
ꔹ━━━━━ꔹ
❰ .اذاعه ❱
♚ عمل اذاعه لكل الجروبات
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

handler.command = /^(م2|منيو2|المنيو2)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
