(() => {
  const pages=[...document.querySelectorAll(".page")];
  const nav=document.querySelector(".desktop-nav");
  const menuToggle=document.getElementById("menuToggle");
  const langToggle=document.getElementById("langToggle");
  const fa={
    "Magazine":"مجله","English Lab":"آزمایشگاه زبان","Debate":"گفت‌وگو","Events":"رویدادها","Hall of Fame":"تالار افتخار","Mystery English":"معمای انگلیسی",
    "Join the club":"عضویت در باشگاه","Explore the lab":"ورود به آزمایشگاه","Discover our stories":"داستان‌های ما",
    "A SCHOOL LANGUAGE COMMUNITY":"یک جامعه زبانی دانش‌آموزی","The world is":"دنیا،","your classroom.":"کلاس درس توست.",
    "Ideas travel. Voices matter. And learning English should feel like opening a door — not memorising a rulebook.":"ایده‌ها سفر می‌کنند، صداها اهمیت دارند و یادگیری انگلیسی باید شبیه باز کردن یک در باشد؛ نه حفظ کردن یک کتاب قانون.",
    "CURIOUS MINDS. BOLDER VOICES.":"ذهن‌های کنجکاو، صداهای جسورتر.","Not just learning English.":"فقط انگلیسی یاد نمی‌گیریم؛","Living it.":"با آن زندگی می‌کنیم.",
    "A club of many":"باشگاهی با جهان‌های","worlds.":"متفاوت.","SCROLL LESS. DISCOVER MORE.":"کمتر اسکرول کن؛ بیشتر کشف کن.",
    "Stories worth":"داستان‌هایی ارزشمند برای","passing on.":"به‌اشتراک‌گذاشتن.","A space for student writing, curious perspectives and ideas from around the world.":"جایی برای نوشته‌های دانش‌آموزان، دیدگاه‌های کنجکاوانه و ایده‌هایی از سراسر جهان.",
    "The first page is yours.":"صفحه‌ی اول مال توست.","Every great magazine begins with a voice willing to say something. This space will feature stories, reviews, interviews and creative work from our club members.":"هر مجله‌ی بزرگی با صدایی آغاز می‌شود که حرفی برای گفتن دارد. اینجا میزبان داستان‌ها، نقدها، مصاحبه‌ها و آثار خلاقانه‌ی اعضای باشگاه خواهد بود.",
    "Become a contributor ↗":"به جمع نویسندگان بپیوند ↗","THE EDITORIAL DESK IS OPENING":"بخش تحریریه به‌زودی آغاز می‌شود","Student submissions will appear here after editorial review.":"نوشته‌های دانش‌آموزان پس از بررسی در این بخش منتشر می‌شوند.",
    "Welcome to the":"به","English Lab.":"آزمایشگاه انگلیسی خوش آمدی.","Small experiments. Real progress. Give your English a workout.":"آزمایش‌های کوچک، پیشرفت واقعی؛ انگلیسی‌ات را به چالش بکش.",
    "QUICK CHALLENGE / 001":"چالش سریع / ۰۰۱","● INTERACTIVE":"● تعاملی","Choose the correct word.":"واژه‌ی درست را انتخاب کن.","“I have lived here _____ 2022.”":"«من از سال ۲۰۲۲ اینجا زندگی کرده‌ام.»","For":"به‌مدت","Since":"از","During":"در طول","From":"از طرف","One answer is correct. Trust what you know.":"فقط یک پاسخ درست است؛ به دانسته‌هایت اعتماد کن.","TRY AGAIN ↻":"دوباره تلاش کن ↻",
    "WHY IT WORKS":"چرا جواب می‌دهد؟","Good language skills grow through practice, curiosity and feedback. More mini-lessons and listening challenges will be added as the club grows.":"مهارت زبانی با تمرین، کنجکاوی و بازخورد رشد می‌کند. با گسترش باشگاه، درس‌های کوتاه و چالش‌های شنیداری بیشتری اضافه می‌شوند.",
    "Ideas are meant":"ایده‌ها برای","challenged.":"به چالش کشیده شدن‌اند.","Disagree with respect. Support your point. Stay curious.":"محترمانه مخالفت کن، از دیدگاهت دفاع کن و کنجکاو بمان.",
    "TOPIC 001 / OPENING QUESTION":"موضوع ۰۰۱ / پرسش آغازین","Should schools teach more practical life skills?":"آیا مدارس باید مهارت‌های کاربردی زندگی را بیشتر آموزش دهند؟",
    "Think about communication, money management, digital literacy and teamwork. What deserves more room in the classroom?":"به ارتباط مؤثر، مدیریت پول، سواد دیجیتال و کار گروهی فکر کن. کدام‌یک باید جای بیشتری در کلاس داشته باشد؟",
    "01 — MAKE A CLAIM":"۰۱ — یک ادعا مطرح کن","02 — GIVE A REASON":"۰۲ — دلیل بیاور","03 — CONSIDER THE OTHER SIDE":"۰۳ — دیدگاه مخالف را هم ببین","MEMBER DISCUSSIONS · COMING SOON":"گفت‌وگوی اعضا · به‌زودی",
    "A good debate is about the strength of an argument, not the volume of a voice.":"در یک مناظره‌ی خوب، قدرت استدلال مهم است، نه بلندی صدا.",
    "Make room for":"برای","something new.":"یک تجربه‌ی تازه جا باز کن.","Challenges, club sessions and moments worth remembering.":"چالش‌ها، نشست‌های باشگاه و لحظه‌هایی به‌یادماندنی.",
    "Our first club event is on its way.":"نخستین رویداد باشگاه در راه است.","Check back for upcoming activities and announcements.":"برای اطلاع از فعالیت‌ها و خبرهای آینده دوباره سر بزن.",
    "Your voice belongs":"صدای تو","here.":"اینجا جای دارد.","Khwarizmi Club grows when students bring their curiosity, ideas and energy.":"خوارزمی کلاب با کنجکاوی، ایده‌ها و انرژی دانش‌آموزان رشد می‌کند.",
    "Start with a conversation.":"با یک گفت‌وگو شروع کن.","Ask your English teacher or club coordinator how to join. Membership and student contributions will be organised through the school.":"برای عضویت با دبیر انگلیسی یا هماهنگ‌کننده‌ی باشگاه صحبت کن. عضویت و ارسال آثار از طریق مدرسه انجام می‌شود.",
    "Explore the club ↗":"گشت‌وگذار در باشگاه ↗","This public website does not collect personal information. Member accounts and submissions will only be added with a secure, school-approved process.":"این وب‌سایت اطلاعات شخصی جمع‌آوری نمی‌کند. حساب اعضا و ارسال آثار فقط با روشی امن و مورد تأیید مدرسه اضافه خواهد شد.",
    "Learn beyond":"فراتر از","the textbook.":"کتاب درسی بیاموز.","Learn Beyond Limits. Speak Without Borders.":"فراتر از محدودیت‌ها بیاموز؛ بدون مرز سخن بگو.",
    "Through reading, creative projects, practical challenges and thoughtful discussion, we make space for every student to grow.":"با مطالعه، پروژه‌های خلاقانه، چالش‌های کاربردی و گفت‌وگوی سنجیده، برای رشد همه‌ی دانش‌آموزان فضا می‌سازیم.",
    "Every voice":"هر صدا","leaves a":"اثری","mark.":"از خود به‌جا می‌گذارد.","THE HALL OF PROGRESS":"تالار پیشرفت","The Questioners":"پرسشگران","The Makers":"آفرینندگان","The Voices":"صداهای اثرگذار",
    "Mystery":"معمای","English.":"انگلیسی.","CASE FILE / 001":"پرونده / ۰۰۱","● OPEN CASE":"● پرونده‌ی باز","WORD":"واژه","DETECTIVE":"کارآگاه","RIDDLE · VOCABULARY":"معما · واژگان",
    "Reveal the answer ↗":"نمایش پاسخ ↗","HIDE ANSWER ↻":"پنهان‌کردن پاسخ ↻","THE ANSWER: A KEYBOARD.":"پاسخ: صفحه‌کلید","It has keys, a space bar and an Enter key — all language clues!":"صفحه‌کلید دکمه‌های کلید، فاصله و اینتر دارد؛ همه سرنخ‌های زبانی‌اند!",
    "WORD SPOTLIGHT":"واژه‌ی منتخب","Finding something good or useful without looking for it.":"پیدا کردن اتفاقی چیزی خوب یا مفید، بدون آنکه دنبالش باشی.",
    "Ideas deserve":"ایده‌ها شایسته‌ی","a":"یک","platform.":"جایگاه‌اند.","What belongs here?":"چه چیزهایی اینجا جای دارند؟",
    "Book, film and game reviews":"نقد کتاب، فیلم و بازی","Short stories and creative writing":"داستان کوتاه و نوشته‌های خلاقانه","Thoughtful opinions with reasons":"دیدگاه‌های سنجیده همراه با دلیل","Interviews and school-life stories":"مصاحبه و روایت‌های زندگی مدرسه","Language-learning discoveries":"کشف‌های مربوط به یادگیری زبان",
    "Ask how to contribute ↗":"برای همکاری پرس‌وجو کن ↗","One world.":"یک جهان.","Many":"با","stories.":"داستان‌های بسیار.","Explore expressions, traditions and everyday life across cultures — with curiosity and respect.":"با کنجکاوی و احترام، اصطلاحات، سنت‌ها و زندگی روزمره‌ی فرهنگ‌های گوناگون را کشف کن.",
    "Lost in translation?":"همه‌چیز در ترجمه پیدا می‌شود؟","Greetings matter.":"سلام و احوال‌پرسی مهم‌اند.",

    "A little more about us":"کمی بیشتر درباره‌ی ما","01 / THE CLUB":"۰۱ / باشگاه","02 / FIND YOUR SPACE":"۰۲ / فضای مورد علاقه‌ات را پیدا کن",
    "01 / READ":"۰۱ / مطالعه","02 / EXPERIMENT":"۰۲ / تجربه","03 / SPEAK":"۰۳ / گفت‌وگو","Stories, opinions & student voices.":"داستان‌ها، دیدگاه‌ها و صدای دانش‌آموزان.",
    "Play with words. Test what you know.":"با واژه‌ها بازی کن و دانسته‌هایت را بیازمای.","Debate Arena":"میدان گفت‌وگو","Challenge ideas, not people.":"ایده‌ها را به چالش بکش، نه آدم‌ها را.","Student Voices":"صدای دانش‌آموزان","Global Corner":"گوشه‌ی جهان",
    "A THOUGHT TO TAKE WITH YOU":"اندیشه‌ای برای همراه داشتن","“One language sets you in a corridor for life. Two languages open every door along the way.”":"«یک زبان تو را در راهرویی از زندگی قرار می‌دهد؛ دو زبان، درهای مسیر را به رویت می‌گشایند.»","— FRANK SMITH":"— فرانک اسمیت","© 2026 KHWARIZMI CLUB":"© ۲۰۲۶ خوارزمی کلاب",
    "VOL. 01 — THE FIRST ISSUE":"شماره‌ی ۰۱ — نخستین شماره","EDITOR'S PICK · COMING SOON":"انتخاب سردبیر · به‌زودی","01 / THE STUDENT EDIT":"۰۱ / نشریه‌ی دانش‌آموزی",
    "02 / EXPERIMENT · EXPLORE · IMPROVE":"۰۲ / تجربه · کشف · پیشرفت","03 / THINK OUT LOUD":"۰۳ / بلند فکر کن","to be":"به","challenged.":"چالش کشیده شوند.","04 / WHAT'S HAPPENING":"۰۴ / چه خبر؟","NEXT CHAPTER / 001":"فصل بعدی / ۰۰۱","05 / BE PART OF IT":"۰۵ / بخشی از ما باش",
    "MEMBER":"عضو","ABOUT KHWARIZMI CLUB":"درباره‌ی خوارزمی کلاب","06 / CELEBRATING GROWTH":"۰۶ / جشن گرفتن پیشرفت","01 / CURIOSITY":"۰۱ / کنجکاوی","02 / CREATIVITY":"۰۲ / خلاقیت","03 / COURAGE":"۰۳ / شجاعت",
    "For asking thoughtful questions and exploring ideas beyond the lesson.":"برای پرسیدن سؤال‌های سنجیده و کشف ایده‌هایی فراتر از درس.","For turning language into stories, projects, performances and original work.":"برای تبدیل زبان به داستان، پروژه، اجرا و آثار خلاقانه.","For sharing ideas, trying something new and helping others feel welcome.":"برای به‌اشتراک‌گذاشتن ایده‌ها، تجربه‌های تازه و همراه کردن دیگران.",
    "07 / THINK · DECODE · DISCOVER":"۰۷ / فکر کن · رمزگشایی کن · کشف کن","Clues, wordplay and language puzzles. Read carefully — the answer is hiding in plain sight.":"سرنخ‌ها، بازی با کلمات و معماهای زبانی. با دقت بخوان؛ پاسخ درست جلوی چشم توست.",
    "I have keys, but no locks. I have space, but no room. You can enter, but you cannot go outside. What am I?":"کلید دارم، اما قفل ندارم. فاصله دارم، اما اتاق نیستم. می‌توانی وارد شوی، اما نمی‌توانی از من بیرون بروی. من چه هستم؟",
    "/ˌser.ənˈdɪp.ə.ti/ · noun":"/ˌser.ənˈdɪp.ə.ti/ · اسم","Example: Finding a brilliant book by accident was pure serendipity.":"مثال: پیدا کردن اتفاقی یک کتاب فوق‌العاده، نمونه‌ای از خوش‌اقبالی است.",
    "08 / STUDENT VOICES":"۰۸ / صدای دانش‌آموزان","“Your perspective is the part no one else can write.”":"«دیدگاه تو بخشی از داستان است که هیچ‌کس جز خودت نمی‌تواند بنویسد.»",
    "Submissions will be reviewed by the club editors before publication. Please do not include phone numbers, home addresses or other private information in a submission.":"نوشته‌ها پیش از انتشار توسط دبیران باشگاه بررسی می‌شوند. لطفاً شماره تلفن، نشانی خانه یا اطلاعات خصوصی را در نوشته‌ها قرار نده.",
    "09 / GLOBAL CORNER":"۰۹ / گوشه‌ی جهان","LANGUAGE NOTE / 001":"نکته‌ی زبانی / ۰۰۱","Some expressions carry cultural meaning that a word-for-word translation cannot capture. Context is part of language.":"برخی اصطلاحات بار فرهنگی دارند و با ترجمه‌ی کلمه‌به‌کلمه منتقل نمی‌شوند. بافت و موقعیت بخشی از زبان است.",
    "TRY THIS: What does “break the ice” really mean?":"امتحان کن: اصطلاح «break the ice» واقعاً چه معنایی دارد؟","TRAVEL THROUGH WORDS / 002":"سفر در دنیای واژه‌ها / ۰۰۲",
    "Greetings can show respect, warmth, distance or familiarity. The right phrase depends on the person and the situation.":"سلام و احوال‌پرسی می‌تواند احترام، صمیمیت یا فاصله را نشان دهد. عبارت مناسب به شخص و موقعیت بستگی دارد.",
    "THINK ABOUT: How do greetings change between formal and informal settings?":"فکر کن: احوال‌پرسی در موقعیت رسمی و غیررسمی چه تفاوتی دارد؟",
    "THINK":"فکر کن","GLOBAL":"جهانی","SPEAK":"سخن بگو","BRAVE":"جسور باش","Aa":"الف‌ـ‌الف","THE":"","STUDENT":"دانش‌آموز","EDIT":"نشریه","TRY":"تلاش کن","REPEAT":"تکرار کن","YOUR":"تو","VOICE":"صدا","MATTERS.":"اهمیت دارد."
  };
  let language="en";
  try{language=localStorage.getItem("kc-language")==="fa"?"fa":"en"}catch(_){}
  const original=new WeakMap();
  function translate(){
    document.documentElement.lang=language;
    document.documentElement.dir=language==="fa"?"rtl":"ltr";
    document.body.dir=language==="fa"?"rtl":"ltr";
    document.querySelectorAll("[data-en][data-fa]").forEach(el=>{el.innerHTML=el.dataset[language]});
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(node.parentElement?.closest("[data-en][data-fa]"))return;
      const raw=original.get(node)??node.nodeValue;
      if(!original.has(node))original.set(node,raw);
      const key=raw.trim();
      if(!key)return;
      if(language==="fa"&&fa[key])node.nodeValue=raw.replace(key,fa[key]);
      else node.nodeValue=raw;
    });
    langToggle.textContent=language==="en"?"فارسی":"English";
    langToggle.setAttribute("aria-label",language==="en"?"Switch to Persian":"Switch to English");
    document.title=language==="fa"?"خوارزمی کلاب — فراتر از محدودیت‌ها":"Khwarizmi Club — Learn Beyond Limits";
  }
  function showPage(){
    const id=(location.hash||"#home").slice(1);
    const page=pages.find(p=>p.id===id)||pages[0];
    pages.forEach(p=>p.classList.toggle("active",p===page));
    if(!pages.some(p=>p.id===id))history.replaceState(null,"","#home");
    if(nav)nav.classList.remove("open");
    if(menuToggle)menuToggle.setAttribute("aria-expanded","false");
    window.scrollTo({top:0,left:0,behavior:"instant"});
  }
  window.addEventListener("hashchange",showPage);showPage();
  document.documentElement.classList.add("js");
  if(menuToggle&&nav)menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))});
  if(langToggle)langToggle.addEventListener("click",()=>{language=language==="en"?"fa":"en";try{localStorage.setItem("kc-language",language)}catch(_){}translate()});
  translate();
  const options=[...document.querySelectorAll(".quiz-option")],feedback=document.getElementById("quizFeedback");
  options.forEach(option=>option.addEventListener("click",()=>{
    options.forEach(o=>{o.disabled=true;o.classList.remove("correct","wrong")});
    if(option.dataset.answer==="since"){option.classList.add("correct");feedback.textContent=language==="fa"?"آفرین! برای نقطه‌ی شروع در زمان از since استفاده می‌کنیم: since 2022.":"Exactly! Use “since” with a starting point in time: since 2022."}
    else{option.classList.add("wrong");options.find(o=>o.dataset.answer==="since").classList.add("correct");feedback.textContent=language==="fa"?"نه دقیقاً؛ since زمان شروع یک اتفاق را نشان می‌دهد.":"Not quite. “Since” introduces the point when something began."}
  }));
  document.getElementById("resetQuiz").addEventListener("click",()=>{options.forEach(o=>{o.disabled=false;o.classList.remove("correct","wrong")});feedback.textContent=language==="fa"?"فقط یک پاسخ درست است؛ به دانسته‌هایت اعتماد کن.":"One answer is correct. Trust what you know."});
  const reveal=document.getElementById("revealMystery"),answer=document.getElementById("mysteryAnswer"),hide=document.getElementById("newMystery");
  if(reveal&&answer&&hide){reveal.addEventListener("click",()=>{answer.hidden=false;reveal.disabled=true;reveal.textContent=language==="fa"?"پرونده حل شد ✓":"CASE SOLVED ✓"});hide.addEventListener("click",()=>{answer.hidden=true;reveal.disabled=false;reveal.textContent=language==="fa"?"نمایش پاسخ ↗":"Reveal the answer ↗"})}
  if("serviceWorker"in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",async()=>{try{const registration=await navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"});await registration.update().catch(()=>{});window.setInterval(()=>registration.update().catch(()=>{}),120000);let refreshing=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(refreshing)return;refreshing=true;window.location.reload()})}catch(_){}});
})();