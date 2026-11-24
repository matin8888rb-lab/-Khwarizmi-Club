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
    "Lost in translation?":"همه‌چیز در ترجمه پیدا می‌شود؟","Greetings matter.":"سلام و احوال‌پرسی مهم‌اند."
  };
  let language=localStorage.getItem("kc-language")==="fa"?"fa":"en";
  const original=new WeakMap();
  function translate(){
    document.documentElement.lang=language;
    document.documentElement.dir=language==="fa"?"rtl":"ltr";
    document.body.dir=language==="fa"?"rtl":"ltr";
    document.querySelectorAll("[data-en][data-fa]").forEach(el=>{el.innerHTML=el.dataset[language]});
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
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
    page.scrollTo({left:0,top:0,behavior:"instant"});
  }
  window.addEventListener("hashchange",showPage);showPage();
  if(menuToggle&&nav)menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))});
  langToggle.addEventListener("click",()=>{language=language==="en"?"fa":"en";localStorage.setItem("kc-language",language);translate()});
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