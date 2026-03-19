import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}ضيف اسم المستلم يحب *@منشن*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}ضيف عدد العملات`
if (isNaN(txt)) throw `${mg}نسيت تحط رقم`
let gatacoins = parseInt(txt)
let money = gatacoins
let pjk = Math.ceil(gatacoins * pajak)
money += pjk
if (money < 1) throw `${mg}الحد الأدنى لعدد العملات هو *1*`
let users = global.db.data.users
users[who].money += gatacoins
m.reply(`*╭[شادو كويز 🐈 ]⬣*\n┃━━━━━━━━━━━━━━⬣\n┃➢ *ل:*\n┃➢ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃➢ *تمت إضافة*\n┃➢*${gatacoins} شادو كوينز* 🐈\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅\n┃20109890 6252\n┃201063720595\n*╰━━━━━━━━━━━━━━⬣*`)
//conn.sendHydrated(m.chat, `╭━━━[ شادو كويز 🐈 ]━━━⬣\n┃\n┃ღ ل:\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ تمت اضافة\n┃ღ *${gatacoins} شادو كوينز* 🐈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝗧𝗵𝗲 𝗦𝗵𝗮𝗱𝗼𝘄𝗕𝗼𝘁-𝗠𝗗', null, null, [
//['💗 اوامر المغامرة 💗', '.rpgmenu'],
//['الاوامر ☘️', '/menu']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['lolicoins']
handler.command = ['añadirlolicoins', 'añadirloli', 'añadircoins', 'darlolicoins', 'darloli', 'كوين'] 
handler.rowner = true
export default handler
