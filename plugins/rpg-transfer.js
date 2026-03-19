const items = [
    'حد', 'خبره', 'joincount', 'مال', 'علاج', 'تراش', 'خشب',
    'صخر', 'string', 'طعام', 'زمرد',
    'الماس', 'ذهب', 'iron', 'شائع',
    'uncoommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {} 
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('أنت تقوم بالتحويل')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    
    let lol = `💱 *تحويل* 💱
    
*${usedPrefix + command}  متنساش المنشن يحب @منشن*
*مثال*
*${usedPrefix + command} خبره 30 @59300000000*

╭━━━━━━━━━━━━━━━━━━ ღ
┃ ✅ *الموارد المتاحة*
┃──────────────
┃ حد *= دايموند* 💎
┃ المال *= شادو كوينز* 🐈
┃ النقاط *= خبرة* ⚡
┃──────────────
┃𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅
┃201063720595 ღ
┃201098906252 ღ
╰━━━━━━━━━━━━━━━━━━ ღ 
`.trim()
    
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply(`${ag} *قم بتسمية المستخدم*`)
    if (!(who in global.db.data.users)) return m.reply(`${fg}*المستخدم ${who} لم يتم العثور عليها في قاعدة البيانات الخاصة بي*`)
    if (user[type] * 1 < count) return m.reply(`${fg}*ليس لديك ما يكفي لإجراء نقل ${type}*`)
    let mentionedJid = [who]
    let username = conn.getName(who)
    
    let confirm = `
*أنت على وشك القيام بإجراء التحويل هذا* 

💹 *${count} ${type} para* *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

*هل تريد الاستمرار؟*`.trim()
    
    let c = `${wm}\nلديك 60 ثانية!!`
    conn.sendButton(m.chat, confirm, c, null, [['نعم'], ['لا']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*انتهى وقتك*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/لا?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('*ألغيت*')
    }
    if (/نعم?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ *تم النقل بنجاح:*\n\n*${count} ${type} ل* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*فشل التحويل ${count} ${type} ل* *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['دفع', 'transfer', 'darxp', 'dar', 'enviar', 'transferir'] 

handler.disabled = false
handler.register = true
export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncoommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
