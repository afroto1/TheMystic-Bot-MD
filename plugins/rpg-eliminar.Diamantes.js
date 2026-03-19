import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}نسيت تضيف المستخدم يرجي استخدام المنشن @منشن`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ضيف عدد الماس يحب`
if (isNaN(txt)) throw `${mg}متحطش رموز حط ارقام بس`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit -= pjk
if (limit < 1) throw `${mg}الحد الادني هو*1*`
let users = global.db.data.users
users[who].limit -= dmt
conn.sendHydrated(m.chat, `╭[ الماس 💎 ]⬣\n┃\n┃ღ *ل:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *تم حذف*\n┃ღ *${dmt} الماس* 💎\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝗧𝗵𝗲 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁-𝗠𝗗', null, null, [
['💗 اوامر الترفيه 💗', '.rpgmenu'],
['الاوامر ☘️', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['eliminardiamantes', 'سحب دايموند', 'خصم الماس', 'سحب الماس', 'خصم-الماس'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler 
