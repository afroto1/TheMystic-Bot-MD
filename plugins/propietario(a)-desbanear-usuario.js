let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] اسف سيدي شادو لكنك تركت المنشن فارغا ارجو منك ذكر رقم او الرد علي رساله له*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] ضيف تاج - منشن للشخص المحظور*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗] تم إلغاء حظر المستخدم بنجاح*\n*—◉ يستطيع استخدام البوت حاليا*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^رفع-البان$/i
handler.rowner = true
export default handler
