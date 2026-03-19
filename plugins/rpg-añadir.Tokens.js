import MessageType from '@adiwajshing/baileys' 
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}ضيف اسم للمستخدم *@منشن*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ضيف عدد العملات يحب`
if (isNaN(txt)) throw `${mg}متحطش رموز حط ارقام بس`
let tok = parseInt(txt)
let joincount = tok
let pjk = Math.ceil(tok * pajak)
joincount += pjk
if (joincount < 1) throw `${mg}الحد الأدنى لعدد العملات هو  *1*`
let users = global.db.data.users
users[who].joincount += tok
m.reply(`*╭[ عملات شادو 🪙 ]⬣*\n┃\n┃➢ *ل:*\n┃➢ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃➢ *تمت إضافة*\n┃➢ *${tok} عملات شادو* 🪙\n┃\n*╰━━━━━━━━━━━━━━⬣*`)
//conn.sendHydrated(m.chat, `╭[ 𝒕𝒐𝒌𝒆𝒏(𝙎) 🪙 ]⬣\n┃\n┃ღ *𝑷𝒂𝒓𝒂:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *𝑺𝒆 𝒍𝒆 𝒂𝒏̃𝒂𝒅𝒊𝒐́*\n┃ღ *${tok} Token(s)* 🪙\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
//['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́  ☘️', '/menu']], m)
}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['عملات', 'dartokens', 'dartoken'] 
//handler.group = true
//handler.botAdmin = true
handler.owner = true
export default handler
