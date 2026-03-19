import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}  ضيف اسم للمستخدم *@منشن*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ضيف عدد العملات`
if (isNaN(txt)) throw `${mg}نسيت تحط رقم`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw `${mg}الحد الادني للسحب هو *1* خبره`
let users = global.db.data.users
users[who].exp += xp
  m.reply(`*╭[نقاط خبره ⚡ ]⬣*\n┃━━━━━━━━━━━━━━⬣\n┃➢ *ل:*\n┃➢ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃➢ *تمت إضافة*\n┃➢*${xp} نقاط خبره* ⚡\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅\n┃20109890 6252\n┃201063720595\n*╰━━━━━━━━━━━━━━⬣*`)
//conn.sendHydrated(m.chat, `╭━[ 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 ⚡]━⬣\n┃\n┃ღ *𝑷𝒂𝒓𝒂:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *𝑺𝒆 𝒍𝒆 𝒂𝒏̃𝒂𝒅𝒊𝒐́*\n┃ღ *${xp} EXP* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
//['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 💗', '.rpgmenu'],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['addxp <@user>']
handler.tags = ['xp']
handler.command = ['añadirxp', 'خبرة', 'añadirexperiencia', 'darexperiencia', 'خبره', 'darexp'] 
handler.rowner = true
export default handler