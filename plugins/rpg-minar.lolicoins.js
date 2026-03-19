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
'رائع!! أنت عامل منجم عظيم؟
'لقد قمت بالتعدين !!',
'😲 لقد تمكنت من تعدين كمية',
'سيرتفع دخلك بفضل حقيقة أنك تعدين',
'⛏️⛏️⛏️⛏️⛏️ التعدين',
'🤩 نعم!!! الآن لديك',
'ميناريا في صفك ، ولهذا السبب تحصل عليه',
'😻 يارتني عندي حظ زيك',
'♻️ لقد تم إنجاز مهمتك ، وتمكنت من مهمتي',
'⛏️ لقد أفادك التعدين',
'🛣️لقد وجدت مكانًا وللتعدين قال المكان الذي تحصل عليه',
'👾 بفضل حقيقة أنك قمت بالتعدين ، زاد دخلك',
'تهانينا!! الآن لديك','⛏️⛏️⛏️ لقد حصلت'])}`

let pp = 'https://telegra.ph/file/d7ae77d1178f9de50825c.jpg'

let aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1
let aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1

let rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1
let rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1

let pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1
let pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1

const recompensas = {	
  aqua: premium ? aquapremium : aqua,
  rock: premium ? rockpremium : rock,
  pancingan: premium ? pancinganpremium : pancingan,
}
//let xp = Math.floor(Math.random() * 2000)
let money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1

let time = user.lastcoins + 600000 //10 min 
if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ عد في ${msToTime(time - new Date())} للمواصلة ${global.rpgshopp.emoticon('money')}⛏️*`, fkontak,  m)
user.money += premium ? moneypremium : money  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `*${premium ? '🎟️ مكافأة مميزة' : '🆓 مكافأة مجانية'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n🍁 رابطة\n${texto}\n\n🎟️ بريموم ⇢ ${premium ? '✅' : '❌'}\n${wm}`
await conn.sendFile(m.chat, pp, 'gata.jpg', gat, fkontak)
user.lastcoins = new Date * 1  
}
handler.help = ['minar2']
handler.tags = ['loli']
handler.command = ['كوين', 'شادو-كوين', 'كوينز', 'minarshadowcoins', 'minarcoins', 'minarshadow'] 
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
