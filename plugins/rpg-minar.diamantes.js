let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['ما المؤيدة التي قمت بتعدينها',
'🌟✨ باهِر!! لقد حصلت',
'رائع!! أنت عامل منجم عظيم؟',
'لقد قمت بالتعدين!!',
'😲لقد تمكنت من تعدين كمية',
'سيرتفع دخلك بفضل حقيقة أنك تعدين',
'⛏️⛏️⛏️⛏️⛏️ التعدين',
'🤩 نعم!!! الآن لديك',
'ميناريا في صفك ، ولهذا السبب تحصل عليه',
'😻 حظ مينار',
'♻️ لقد تم إنجاز مهمتك ، وتمكنت من مهمتي',
'⛏️ لقد أفادك التعدين',
'🛣️ لقد وجدت مكانًا وللتعدين قال المكان الذي تحصل عليه',
'👾 بفضل حقيقة أنك قمت بالتعدين ، زاد دخلك',
'تهانينا!! الآن لديك','⛏️⛏️⛏️ لقد حصلت'])}`

let pp = 'https://telegra.ph/file/7ca10192c93ebcf360f8a.jpg'

let kyubi = `${pickRandom([0, 1, 3, 1, 2])}` * 1
let kyubipremium = `${pickRandom([2, 3, 5, 9, 10, 7])}` * 1

let diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1
let diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1

let tiketcoin = `${pickRandom([1, 0, 0, 1, 0, 0, 2])}` * 1
let tiketcoinpremium = `${pickRandom([2, 3, 4, 5, 2, 3, 3])}` * 1

const recompensas = {	
  kyubi: premium ? kyubipremium : kyubi,
  diamond: premium ? diamondpremium : diamond,
  tiketcoin: premium ? tiketcoinpremium : tiketcoin,
}
//let xp = Math.floor(Math.random() * 2000)
let limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1
let limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1

let time = user.lastdiamantes + 900000 //15 min
if (new Date - user.lastdiamantes < 900000) return await conn.reply(m.chat, `*⏱️ عد بعد ${msToTime(time - new Date())} لمواصلة التعدين${global.rpgshopp.emoticon('limit')}⛏️*`, fkontak,  m)
user.limit += premium ? limitpremium : limit  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `*${premium ? '🎟️ مكافأة مميزة' : '🆓 مكافأة مجانية'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*\n\n🍁 𝗕 𝗢 𝗡 𝗢\n\n${texto}\n\n🎟️ بريميوم ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, pp, 'gata.jpg', gat, fkontak)
/*conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝒃𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`],
['𝙈𝙞𝙣𝙖𝙧 𝗟𝗼𝗹𝗶𝗰𝗼𝗶𝗻𝘀 🐈', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `.menu`]
], m,)*/
user.lastcoins = new Date * 1  
}
handler.help = ['minar2']
handler.tags = ['loli']
handler.command = ['minar2', 'كوينز', 'mine2', 'minarlolicoins', 'minarcoins', 'minarloli'] 
handler.fail = null
handler.exp = 0
handler.register = true
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
