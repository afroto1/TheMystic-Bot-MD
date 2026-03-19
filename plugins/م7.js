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
↝اليك قائمة باوامر التسليه↜
𓍹——————————𓍻
❰ .نصائح ❱
♚ يجيبلك نصائح للحياة وغيرها
ꔹ━━━━━ꔹ
❰ .اسماء_الله ❱
❰ .الله ❱
♚ يجيبلك اسماء الله
ꔹ━━━━━ꔹ
❰ .صداقه ❱
❰ .صحاب ❱
♚ البوت يمنشن لاتنين يبقو اصدقاء
ꔹ━━━━━ꔹ
ꔹ━━━━━ꔹ
❰ .حكمه ❱
♚ يعطيك حكمه جيدا فى حياتك 
ꔹ━━━━━ꔹ
❰ .زواج ❱
♚ البوت يمنشن لاتنين يتجوزوا 
ꔹ━━━━━ꔹ
❰ .طلاق ❱
♚ البوت يطلق اتنين
ꔹ━━━━━ꔹ
❰ .@الحب ❱
♚ يقيس مدي الناس لك
ꔹ━━━━━ꔹ
❰ .بلاك ❱
♚ اسال البوت اسئلة شخصية 
ꔹ━━━━━ꔹ
❰ .عفرتو ❱
♚ اسال البوت اسئلة شخصية 
ꔹ━━━━━ꔹ
❰ .حجر ❱
♚ لعبة حجر ورقة مقص مع البوت 
ꔹ━━━━━ꔹ
❰ .شخصيه ❱
♚ البوت يجيب شخصية شخص
ꔹ━━━━━ꔹ
❰ .اجابه ❱
♚ البوت يحل رياضيات - حساب
ꔹ━━━━━ꔹ
❰ .الدون ❱
♚ يجيبلك صور رونالدو
ꔹ━━━━━ꔹ
❰ .ميسي ❱
♚ ييجيبلك صور ميسي
ꔹ━━━━━ꔹ
❰ .بنت ❱
♚ البوت يجيب صور بنات انمي
ꔹ━━━━━ꔹ
❰ .عيد ❱
♚ البوت يجيب صور اعياد ميلاد 
ꔹ━━━━━ꔹ
❰ .قطط ❱
♚ البوت يجيب صور قطط
ꔹ━━━━━ꔹ
❰ .نيكو ❱
♚ صور اشباه البشر ف الانمي
ꔹ━━━━━ꔹ
❰ .الكيوت ❱
♚ صور بنات من الانمي 
ꔹ━━━━━ꔹ
❰ .ميمز ❱
♚ ميمز انجليزيه
ꔹ━━━━━ꔹ
❰ .ميمز2 ❱
♚ ميمز انجليزيه
ꔹ━━━━━ꔹ
❰ .زغرفه ❱
♚ البوت يزخرف الكلمات
ꔹ━━━━━ꔹ
❰ .سؤال ❱
♚ يجيب لك اسئله انمي
ꔹ━━━━━ꔹ
❰ .توب ❱
♚ يجيبلك افضل عشر اشخاص
ꔹ━━━━━ꔹ
❰ .اختفاء ❱
♚ اترك سبب ذهابك
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

handler.command = /^(م7|منيو7|المنيو7)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
