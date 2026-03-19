import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, {command, conn, usedPrefix}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) throw '*قم بالرد على الفيديو أو الصوت الذي ترغب في تحويله إلى MP3*';
    
    let media = await q.download();
    let link;
    
    if (command === 'لصوت' || command === 'لصوتي') {
        link = await (/audio/.test(mime) ? uploadFile : uploadImage)(media);
        conn.sendMessage(m.chat, {audio: {url: link}, mimetype: 'audio/mpeg', fileName: `converted_audio.mp3`}, {quoted: m});
    } else if (command === 'لريك' || command === 'لفويس') {
        link = await (/audio\/mp3|video\/mp4/.test(mime) ? uploadImage : uploadFile)(media);
        conn.sendMessage(m.chat, {audio: {url: link}, ptt: true, mimetype: 'audio/mpeg', fileName: `shawaza_zizo_2024.opp`}, {quoted: m});
    } else if (command === 'لصور') {
        link = await (/sticker/.test(mime) ? uploadImage : uploadFile)(media);
        conn.sendMessage(m.chat, {image: {url: link}, mimetype: 'image/jpeg', fileName: `shawaza_zizo_2024.jpg`}, {quoted: m});
    }
};

handler.help = ['sendmp3 <reply video>', 'sendmp3 <reply audio>'];
handler.tags = ['convert'];
handler.command = /^(لصوت|لريك|لفويس|لصوتي|لصور)$/i;

export default handler;
