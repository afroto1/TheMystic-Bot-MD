let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️ ESPERA ${msToTime(time - new Date())}\nلا تستخدم هذا الأمر بسوء استخدام\n (انت ليه عاوز تبعت اسبام للرقم ده ؟ وياريت متستخدمنيش ف فرص قذره)*`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}ضيف الرقم ال والنص والكميه للرقم الي انت هتبعتله\n*❊ ${usedPrefix + command} الرقم|النص|كمية*\nمثال\n*❊ ${usedPrefix + command} 20123232433|هلا|35*`
if (!pesan) throw `${mg}ضيف الرقم ال والنص والكميه للرقم الي انت هتبعتله\n*❊ ${usedPrefix + command} الرقم|النص|كمية*\nمثال\n*❊ ${usedPrefix + command} 20123232433|هلا|35*`
if (jumlah && isNaN(jumlah)) throw `ضيف الرقم ال والنص والكميه للرقم الي انت هتبعتله\n*❊ ${usedPrefix + command} الرقم|النص|كمية*\nمثال\n*❊ ${usedPrefix + command} 20123232433|هلا|35*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}الحد الأدنى *5* لتفعيل الاسيام`
await delay(10000)
await m.reply(`${eg}تم الارسال *${fixedJumlah}* مرات ل *${nomor}*`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?|سبام$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 45
handler.limit = 280
handler.register = true
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
