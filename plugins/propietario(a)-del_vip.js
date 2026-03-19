let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗]اسف سيدي شادو ولكنك تركت المنشن فارغا ارجو منك ان تذكر احد المميزين ليتم خفضه*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗] المستخدم الذي ادخلته ليس مميزا بالفعل*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
let textdelprem = `*[❗] @${who.split`@`[0]} الآن لم يعد جزءًا من المستخدمين المميزين*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem|خفض-بريم|تنزيل$/i
handler.group = true
handler.rowner = true
export default handler
