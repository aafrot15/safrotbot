let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*بل التكت بتاعها 😹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🐤', key: m.key } })
  }

   if (/^عبيط|يا عبيط$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بطل تنمر يسطا 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🥺💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو سفروت الكبير طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمي فوكس*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
await conn.sendMessage(m.chat, { react: { text: '🐤', key: m.key } })
}

 if (/^يابوت|يا بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*قولت اسمي فوكس🧚🏻‍♂️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '😒', key: m.key } })
 } 

   if (/^فوكس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*قلب فوكس*',m) //wm, null, [['Menu', '#menu']], m) botones :v
await conn.sendMessage(m.chat, { react: { text: '💗', key: m.key } })
   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *🗿 دزها يلا انا عمك*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بحبك اكتر 😔💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^خخخ|خخخخ|خخخخخ|خخخخخخ|خخخخخخخi.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*خوخ ومنجا وسوق العبور 🦦*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^مصر/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ام الدنيا 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هزعلك لو هزرت معايا تاني 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*معرفش انت تعرف؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*شغال يحب لسه مموتش🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بلعب بليه* 😹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*نورت البيت😂❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*من انت علشان تسكتني😒*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^متيجي|لف$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `مليش في الخشن😹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عارفين ف اسكت احسن لك🥱*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^انا مبضون$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اكتر منك😔💗`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الشارع الي وراه 😹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*الحمد لله و انت ☺️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 if (/^تعرف سفروت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صديق لايت الروح بل الروح ☺️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 }
  
 } 
 return !0 } 
 export default handler
