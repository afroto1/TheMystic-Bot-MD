/*

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo fue realizado por:
- ReyEndymion (https://github.com/ReyEndymion)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'
let handler  = async (m, { conn }, args) => {
let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: '*استخدم هذا الأمر مباشرة على رقم البوت الرئيسي*'}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, {text: "*👋 وداعا أيها البوت ، توقف عن كونك روبوتًا*"}, { quoted: m }) 
}
try {
fs.rmdir("./jadibts/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, {text : "*تم حذف جميع البوتات الفرعية*" } , { quoted: m })
} catch(err) {
console.error('تم ايقاف البوتات الفرعية بنجاح', err)   
}}
handler.help = ['deletebot']
handler.tags = ['jadibot']
handler.command = /^(deletebot|eliminarsesion|deletesesion)$/i
handler.private = true
handler.fail = null
export default handler
