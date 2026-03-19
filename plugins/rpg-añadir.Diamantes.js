import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}ضيف اسم للمستخدم *@منشن*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ضيف عدد الالماس يحب`
if (isNaN(txt)) throw `${mg}متحطش رموز حط ارقام بس`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}الحد الأدنى لعدد الماس هو  *1*`
let users = global.db.data.users
users[who].limit += dmt
m.reply(`*╭[ 💎 دايموند 💎 ]⬣*\n┃\n┃➢ *ل:*\n┃➢ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃➢ *تمت إضافة*\n┃➢ *${dmt} دايموند* 💎\n┃\n*╰━━━━━━━━━━━━━━⬣*`)
//conn.sendHydrated(m.chat, `╭[ دايموند 💎 ]⬣\n┃\n┃ღ ل:\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ تمت اضافة\n┃ღ *${dmt} الماس* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝗧𝗵𝗲 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁 - 𝗠𝗗', null, null, [
//['💗 اوامر المغامرة 💗', '.rpgmenu'],
//['الاوامر ☘️', '/menuall']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['ماس', 'دايموند', 'dardiamante'] 
handler.rowner = true
export default handler
