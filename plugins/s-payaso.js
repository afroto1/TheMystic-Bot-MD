import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '𝐵𝑌 𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅'
let nombre2 = '𝐵𝑌 𝑺𝐻𝐴𝐷𝑂𝑊&𝐸𝐿𝐺𝐴𝑍𝐴𝑅'
 
const s = [
'https://telegra.ph/file/a669fcbfcb103aa74055b.jpg',
'https://telegra.ph/file/c70d42d26dcb408e92599.jpg',  
'https://telegra.ph/file/dc5813bdc8a81f0da4496.jpg',
'https://telegra.ph/file/460530d254b841a18a7cf.jpg',
'https://telegra.ph/file/2bbee8ee821c51cf497bf.jpg',  
'https://telegra.ph/file/0eab2394783916c431768.jpg',
'https://telegra.ph/file/f7203cd481c447b833ec1.jpg',
'https://telegra.ph/file/8316238d0dc27c1191e26.jpg',
'https://telegra.ph/file/d5ddb5b2841728c76d002.jpg',
'https://telegra.ph/file/7828e63b1a1f8b68a08ac.jpg',
'https://telegra.ph/file/7828e63b1a1f8b68a08ac.jpg',
'https://telegra.ph/file/7828e63b1a1f8b68a08ac.jpg',
'https://telegra.ph/file/0a23da49ce2e09f570934.jpg',
'https://telegra.ph/file/70b42777a2f86a6b2df6a.jpg',
'https://telegra.ph/file/96995cf47d665bc3e49a2.jpg',
'https://telegra.ph/file/9d047de88af8b5d1296d9.jpg',
'https://telegra.ph/file/4169e63549638f429d2f6.jpg',
'https://telegra.ph/file/8316238d0dc27c1191e26.jpg' 
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
 
 }
handler.customPrefix = /شادو/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))