import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *المستوي*
┆ *الاسم*
┆ ${name} ღ
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *الفل :* *${user.level}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *مصنف :* ${role}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *نقاط الخبرة :* *${user.exp - min}/${xp}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ

*تحتاج ${max - user.exp} من نقاط الخبرة للوصول الي مستوي جديد*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `عاش يحب! ${conn.getName(m.sender)} المستوي: ${user.level}`
        let str = `
┌───⊷ *المستوي*
┆ *المستوي السابق :* *${before}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *المستوي الحالي :* *${user.level}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *التصنيف :* ${role} 
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *التاريخ :* *${new Date().toLocaleString('id-ID')}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆𝐵𝑌:𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ

*كلما تفاعلت مع شادو بوت كلما ارتفع مستواك ✨💜*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
await delay(5 * 5000)  
}
handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'مستوي', 'لفل'] 

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))