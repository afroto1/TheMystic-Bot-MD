let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'أنت مسؤول بالفعل عن المجموعة التي ابتكرتها 🫡'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "رفع")
}
handler.command = /^admin.|ادمن|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
