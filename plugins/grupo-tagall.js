let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الرساله:*\n${text ? `${text}\n` : ''}\n*✦━━━━━━[ 𝐁𝐋𝐀𝐂𝐊 𝐂𝐀𝐓 ]━━━━━━✦*\n\*✦━━━━━━[ 𝐀𝐅𝐑𝐎𝐓𝐎 ]━━━━━━✦*\n*⤹⚜𝑨𝒂𝑭𝒇𝑹𝒓𝑶𝒐𝑻𝒕𝑶𝒐⊰⚡⊱𝑩𝑳𝑨𝑪𝑲⚜⤸*\n*✦━━─━━━⌠⚡⌡━━━─━━✦*\n*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*\n\n` + users.map(v => '│◦❈♪ احبڪ @' + v.replace(/@.+/, '')).join`\n` + '\n\n*✦━━━━━━[ 𝐀𝐅𝐑𝐎𝐓𝐎 ]━━━━━━✦*\n*✦━━━━━━[ 𝐁𝐋𝐀𝐂𝐊 𝐂𝐀𝐓 ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['owner']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
