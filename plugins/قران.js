import {alquran} from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `البحث عن أي آية في القرآن بالصوت والقراءة :\n${usedPrefix + command} 1 2\n\nاذا لم تفهم اي شيء راسلني  هنا \n https://wa.me/+201556239296\nالتوينز يا قلبى \n https://wa.me/+201067999523`
    if (isNaN(args[0]) || isNaN(args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\n𝐵𝑌:𝐁𝐋𝐀𝐂𝐊&𝐀𝐅𝐑𝐎𝐓𝐎`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.en}
( Q.S ${api[args[0] - 1 ].asma.en.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.help = ['ayta'].map(v => v + ' *surah no*')
handler.tags = ['islam']
handler.command = /^(ايه|اية|آيه)$/i
export default handler
