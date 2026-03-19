import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/ShadowBot.mp3'
let chat = global.db.data.chats[m.chat]
if (/^اوامر|الاوامر|menu|.الاوامر|.اوامر$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*هلا ياحب انا بوت عفرتو و بلاك*', wm, [['الاوامر', `#menu`]], 'conversation', { sendEphemeral: true, quoted: m })
conn.sendFile(m.chat, vn, 'ShadowBot.mp3', null, m, true, { type: 'audioMessage', seconds: '20', ptt: true, sendEphemeral: true, quoted: m })}
return !0
}
export default handler
