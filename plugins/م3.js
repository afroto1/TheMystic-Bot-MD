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
↝اليك قائمة باوامر الجروب↜
𓍹——————————𓍻
❰ .منشن ❱
♚ منشن جماعي لكل الاعضاء
ꔹ━━━━━ꔹ
❰ .منشنلي ❱
♚ البوت يمنشن ليك
ꔹ━━━━━ꔹ
❰ .مخفي ❱
♚ منشن مخفي لكل الاعضاء 
ꔹ━━━━━ꔹ
❰ .الاصنام ❱
♚ يمنشن للناس ال مبتتفاعلش 
ꔹ━━━━━ꔹ
❰ .حذف ❱
♚ حذف رسالة البوت والاعضاء
ꔹ━━━━━ꔹ
❰ .لينك ❱
♚ يرسلك رابط الجروب 
ꔹ━━━━━ꔹ
❰ .رستر ❱
♚ رستارت لرابط الجروب 
ꔹ━━━━━ꔹ
❰ .رفع ❱
♚ رفع عضو لمشرف 
ꔹ━━━━━ꔹ
❰ .خفض ❱
♚ تنزيل عضو من المشرف 
ꔹ━━━━━ꔹ
❰ .تغيرالاسم ❱
♚ تغيير اسم الجروب 
ꔹ━━━━━ꔹ
❰ .تغيرالوصف ❱
♚ تغيير وصف الجروب 
ꔹ━━━━━ꔹ
❰ .تغيرالصوره ❱
♚ تغيير صورة الجروب 
ꔹ━━━━━ꔹ
❰ .جروب فتح ❱
♚ فتح الجروب
ꔹ━━━━━ꔹ
❰ .جروب غلق ❱
♚ اغلاق الجروب
ꔹ━━━━━ꔹ
❰ .طرد ❱
♚ طرد شخص من الجروب 
ꔹ━━━━━ꔹ
❰ .اعدادات ❱
♚ منع ارسال الروابط في الجروب 
ꔹ━━━━━ꔹ
❰ .انذار ❱
♚ جلب نسبه حب الشخص لك
ꔹ━━━━━ꔹ
❰ .الغاء-الانذار ❱
♚ الغاء الانذار من شخص
ꔹ━━━━━ꔹ
❰ .التحذيرات ❱
♚ يجيبلك الاشخاص ال معهم انذارات
ꔹ━━━━━ꔹ
❰ .فحص ❱
♚ البوت يفحص الجروب 
ꔹ━━━━━ꔹ
❰ .المشرفين ❱
♚ يجيبلك قائمة المشرفين
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

handler.command = /^(م3|منيو3|المنيو3)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
