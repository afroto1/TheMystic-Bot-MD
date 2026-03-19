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
↝اليك قائمة باوامر التحويل↜
𓍹——————————𓍻
❰ .ملصق ❱
♚ تحويل الصور والفيديوهات لملصق
ꔹ━━━━━ꔹ
❰ .استك ❱
♚ يحول لك الكلام الي ملصق في شكل تعليق
ꔹ━━━━━ꔹ
❰ .تدوير ❱
♚ تحويل الصورة لاستيكر دائري
ꔹ━━━━━ꔹ
❰ .سرقه ❱
♚ تغير حقوق الاستيكر
ꔹ━━━━━ꔹ
❰ .لانمي ❱
♚ تحويل الصورة لانمي
ꔹ━━━━━ꔹ
❰ .لكرتون ❱
♚ تحويل الصورة لكرتون
ꔹ━━━━━ꔹ
❰ .لصورة ❱
♚ تحويل الاستيكر لصورة
ꔹ━━━━━ꔹ
❰ .لفيديو ❱
♚ تحويل الاستيكر المتحرك لفديو 
ꔹ━━━━━ꔹ
❰ .لصوت ❱
♚ تحويل الفديو لصوت
ꔹ━━━━━ꔹ
❰ .انطق ❱
♚ تحويل النص الي كلام 
ꔹ━━━━━ꔹ
❰ .تليجراف ❱
♚ رفع الصور لتليجراف
ꔹ━━━━━ꔹ
❰ .كلام مشفر ❱
♚ تحويل الكلام لشفرة مورس
ꔹ━━━━━ꔹ
❰ .فك التشفير ❱
♚ فك شفرة مورس
ꔹ━━━━━ꔹ
❰ .كود ❱
♚ تحويل اي شئ لباركود 
ꔹ━━━━━ꔹ
❰ .لوجو ❱
♚ تحويل النص للوغو
ꔹ━━━━━ꔹ
❰ .قص ❱
♚ قص وتصغير الروابط 
ꔹ━━━━━ꔹ
❰ .سلس ❱
♚ التعديل ع سلاسه الصوت
ꔹ━━━━━ꔹ
❰ .سنجاب ❱
♚ تغير الصوتيات لصوت السنجاب
ꔹ━━━━━ꔹ
❰ .منفوخ  ❱
♚ التعديل ع الصوتيات واضافه تاثيرات
 ꔹ━━━━━ꔹ
❰ .عميق  ❱
♚ تحويل الصوتيات الي صوت عميق
ꔹ━━━━━ꔹ
❰ .تحسين ❱
♚ تعديل وتحسين الصوتيات
ꔹ━━━━━ꔹ
❰ .بطئ ❱
♚ تقليل سرعة الصوتيات
ꔹ━━━━━ꔹ
❰ .سريع ❱
♚ زيادة سرعة الصوتيات
ꔹ━━━━━ꔹ
❰ .عكس ❱
♚ عكس المقاطع الصوتية
ꔹ━━━━━ꔹ
❰ .عميق2 ❱
♚ تقليل السرعه مع الغاء التشويش 
ꔹ━━━━━ꔹ
❰ .بسيط ❱
♚ تغير الصوت الى صوت بسيط
ꔹ━━━━━ꔹ
❰ .الي ❱
♚ تحويل الصوت الي صوت انسان الي
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

handler.command = /^(م5|منيو5|المنيو5)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
