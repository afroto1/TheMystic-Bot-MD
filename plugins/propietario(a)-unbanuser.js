let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] اسف سيدي شادو لكنك قد تركت المنشن فارغا ارجو منك الرد علي رساله الشخص*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] اسف سيدي شادو لكنك قد تركت المنشن فارغا ارجو منك الرد علي رساله الشخص او ذكر رقمة*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗] تم إلغاء حظر المستخدم بنجاح*\n*—◉ يستطيع الان استخدام البوت*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^رفع-البان$/i
handler.rowner = true
export default handler
