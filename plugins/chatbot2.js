let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمى بوت عفرتو و بلاڪ ماذا تريد يا أبى لهب و يا سوداء بنت خزاعه 😂🌚*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^الحمدلله$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ادام الله حمدك `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }  
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `شغال ينقم `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حاضر`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `دليك فين ؟ انا متاكد انك ال حرامي 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` عارفين ف اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` وانت من اهل الخير حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }   

 if (/^كيفك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler
