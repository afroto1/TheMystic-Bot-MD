import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/d7ae77d1178f9de50825c.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`*⋆ بروفايلك قمر ياروحي..🥺🖤*

*اسمك الجميل..*  ${name}
ꔹ━━━━━ꔹ
*رقمك..*  ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ꔹ━━━━━ꔹ
*المعرف..*  wa.me/${who.split`@`[0]}${registered ?'\nꔹ━━━━━\nꔹ العمر ' + age + ' *سنة*' : ''}
ꔹ━━━━━ꔹ
*الحد..*  *${limit}* من الاستخدام
ꔹ━━━━━ꔹ
*مسجل..*  ${user.registered === true ? '✅' : '❌ #التفعيل'}
ꔹ━━━━━ꔹ
*مميز..*  ${user.premiumTime > 0 ? '✅' : '❌ #تميز'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^انا|بروفايل|ايدي$/i
export default handler
