import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
The-Shadow-Bot - Abdelrahman Elshamhout
`.trim()
await delay(5000)
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*اسف يحب حصل ايرور!*'
}}
handler.help = ['cat']
handler.tags = ['random']
handler.command = /^قطط$/i
handler.fail = null
handler.money = 25
export default handler
const delay = time => new Promise(res => setTimeout(res, time))