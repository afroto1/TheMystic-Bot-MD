let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `لماذا لا تذهب مباشرة مع رقم البوت`, m)
else {
await conn.reply(m.chat, `لديك جلسة مغلقة`, m)
conn.ws.close()
}}
handler.command = /^(berhenti|stop|detener)$/i
  
export default handler
