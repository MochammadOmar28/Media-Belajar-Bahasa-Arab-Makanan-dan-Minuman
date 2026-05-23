// ── DATA ──────────────────────────────────────
const ISIM=[
  {ar:'طَعَام',lat:'tha\'aam',id:'Makanan',em:'🍽️',kat:'makanan'},
  {ar:'أَكْل',lat:'akl',id:'Makanan (umum)',em:'🥘',kat:'makanan'},
  {ar:'خُبْز',lat:'khubz',id:'Roti',em:'🍞',kat:'makanan'},
  {ar:'أَرُزّ',lat:'aruzz',id:'Nasi/Beras',em:'🍚',kat:'makanan'},
  {ar:'لَحْم',lat:'lahm',id:'Daging',em:'🥩',kat:'makanan'},
  {ar:'دَجَاج',lat:'dajaj',id:'Ayam',em:'🍗',kat:'makanan'},
  {ar:'سَمَك',lat:'samak',id:'Ikan',em:'🐟',kat:'makanan'},
  {ar:'بَيْض',lat:'bayd',id:'Telur',em:'🥚',kat:'makanan'},
  {ar:'فَاكِهَة',lat:'fakiha',id:'Buah-buahan',em:'🍎',kat:'makanan'},
  {ar:'خُضَار',lat:'khudar',id:'Sayuran',em:'🥗',kat:'makanan'},
  {ar:'حَلْوَى',lat:'halwa',id:'Kue/Manisan',em:'🍰',kat:'makanan'},
  {ar:'شُورْبَة',lat:'shurba',id:'Sup',em:'🍲',kat:'makanan'},
  {ar:'سَلَطَة',lat:'salata',id:'Salad',em:'🥙',kat:'makanan'},
  {ar:'جُبْن',lat:'jubn',id:'Keju',em:'🧀',kat:'makanan'},
  {ar:'زَيْت',lat:'zayt',id:'Minyak',em:'🫙',kat:'makanan'},
  {ar:'مِلْح',lat:'milh',id:'Garam',em:'🧂',kat:'makanan'},
  {ar:'مَاء',lat:'ma\'',id:'Air',em:'💧',kat:'minuman'},
  {ar:'شَاي',lat:'shay',id:'Teh',em:'🍵',kat:'minuman'},
  {ar:'قَهْوَة',lat:'qahwa',id:'Kopi',em:'☕',kat:'minuman'},
  {ar:'عَصِير',lat:'asir',id:'Jus',em:'🍹',kat:'minuman'},
  {ar:'حَلِيب',lat:'halib',id:'Susu',em:'🥛',kat:'minuman'},
  {ar:'شَرَاب',lat:'sharab',id:'Minuman',em:'🥤',kat:'minuman'},
  {ar:'لَيْمُون',lat:'laymun',id:'Lemon',em:'🍋',kat:'minuman'},
  {ar:'طَبَق',lat:'tabaq',id:'Piring',em:'🍽️',kat:'peralatan'},
  {ar:'كُوب',lat:'kub',id:'Gelas',em:'🥤',kat:'peralatan'},
  {ar:'مِلْعَقَة',lat:'mil\'aqa',id:'Sendok',em:'🥄',kat:'peralatan'},
  {ar:'شَوْكَة',lat:'shawka',id:'Garpu',em:'🍴',kat:'peralatan'},
  {ar:'سِكِّين',lat:'sikkin',id:'Pisau',em:'🔪',kat:'peralatan'},
  {ar:'إِبْرِيق',lat:'ibriq',id:'Teko',em:'🫖',kat:'peralatan'},
  {ar:'قِدْر',lat:'qidr',id:'Panci',em:'🍲',kat:'peralatan'},
];
const FIIL=[
  {ar:'أَكَلَ',lat:'akala',id:'Makan',em:'😋',forms:[{ar:'يَأْكُلُ',lb:'Mudhari'},{ar:'كُلْ',lb:'Amar'}],contoh:'يَأْكُلُ الطَّالِبُ الأَرُزَّ فِي الْمَطْعَمِ.',tr:'Siswa itu makan nasi di restoran.'},
  {ar:'شَرِبَ',lat:'shariba',id:'Minum',em:'🥤',forms:[{ar:'يَشْرَبُ',lb:'Mudhari'},{ar:'اِشْرَبْ',lb:'Amar'}],contoh:'تَشْرَبُ هِنْدٌ الشَّايَ فِي الصَّبَاحِ.',tr:'Hind minum teh di pagi hari.'},
  {ar:'طَبَخَ',lat:'tabakha',id:'Memasak',em:'👨‍🍳',forms:[{ar:'يَطْبُخُ',lb:'Mudhari'},{ar:'اُطْبُخْ',lb:'Amar'}],contoh:'تَطْبُخُ الأُمُّ الدَّجَاجَ لِلْعَشَاءِ.',tr:'Ibu memasak ayam untuk makan malam.'},
  {ar:'جَاعَ',lat:'ja\'a',id:'Lapar',em:'😩',forms:[{ar:'يَجُوعُ',lb:'Mudhari'},{ar:'جَائِع',lb:'Isim Fail'}],contoh:'أَنَا جَائِعٌ، أُرِيدُ أَنْ آكُلَ الآنَ.',tr:'Aku lapar, aku ingin makan sekarang.'},
  {ar:'شَبِعَ',lat:'shabi\'a',id:'Kenyang',em:'😌',forms:[{ar:'يَشْبَعُ',lb:'Mudhari'},{ar:'شَبْعَان',lb:'Isim Fail'}],contoh:'شَبِعَ أَحْمَدُ بَعْدَ أَكْلِ الطَّعَامِ.',tr:'Ahmad kenyang setelah makan.'},
  {ar:'طَلَبَ',lat:'talaba',id:'Memesan',em:'📋',forms:[{ar:'يَطْلُبُ',lb:'Mudhari'},{ar:'اُطْلُبْ',lb:'Amar'}],contoh:'طَلَبَ الضَّيْفُ كُوبَ مَاءٍ مِنَ النَّادِلِ.',tr:'Tamu memesan segelas air dari pelayan.'},
  {ar:'ذَاقَ',lat:'dhaqa',id:'Mencicipi',em:'👅',forms:[{ar:'يَذُوقُ',lb:'Mudhari'},{ar:'ذُقْ',lb:'Amar'}],contoh:'ذَاقَ الطَّبَّاخُ الشُّورْبَةَ وَأَضَافَ الْمِلْحَ.',tr:'Koki mencicipi sup lalu menambahkan garam.'},
  {ar:'غَسَلَ',lat:'ghasala',id:'Mencuci',em:'🫧',forms:[{ar:'يَغْسِلُ',lb:'Mudhari'},{ar:'اِغْسِلْ',lb:'Amar'}],contoh:'يَغْسِلُ مُحَمَّدٌ الأَطْبَاقَ بَعْدَ الأَكْلِ.',tr:'Muhammad mencuci piring setelah makan.'},
];
const PGQ=[
  {img:'img/aruz.png',em:'🍚',cor:'أَرُزّ',opts:['أَرُزّ','خُبْز','سَمَك','بَيْض'],hint:'Makanan pokok Asia dari beras.'},
  {img:'img/qahwa.png',em:'☕',cor:'قَهْوَة',opts:['شَاي','قَهْوَة','حَلِيب','مَاء'],hint:'Minuman hitam panas dari biji sangrai.'},
  {img:'img/shay.png',em:'🍵',cor:'شَاي',opts:['شَاي','قَهْوَة','عَصِير','شَرَاب'],hint:'Minuman dari daun kering yang diseduh.'},
  {img:'img/halib.png',em:'🥛',cor:'حَلِيب',opts:['مَاء','عَصِير','حَلِيب','شَاي'],hint:'Minuman putih kaya kalsium.'},
  {img:'img/lahm.png',em:'🥩',cor:'لَحْم',opts:['دَجَاج','سَمَك','لَحْم','بَيْض'],hint:'Daging merah dari sapi atau kambing.'},
  {img:'img/milaqah.png',em:'🥄',cor:'مِلْعَقَة',opts:['شَوْكَة','سِكِّين','مِلْعَقَة','كُوب'],hint:'Alat makan cekungan untuk menyendok.'},
  {img:'img/fakiha.png',em:'🍎',cor:'فَاكِهَة',opts:['خُضَار','فَاكِهَة','حَلْوَى','سَلَطَة'],hint:'Tumbuhan manis yang bisa langsung dimakan.'},
  {img:'img/maa.png',em:'💧',cor:'مَاء',opts:['عَصِير','شَرَاب','حَلِيب','مَاء'],hint:'Cairan bening paling penting untuk kehidupan.'},
  {img:'img/milh.png',em:'🧂',cor:'مِلْح',opts:['زَيْت','مِلْح','حَلْوَى','جُبْن'],hint:'Bumbu dasar masakan berwarna putih.'},
  {img:'img/bayd.png',em:'🥚',cor:'بَيْض',opts:['بَيْض','دَجَاج','لَحْم','سَمَك'],hint:'Dihasilkan unggas, bisa digoreng atau direbus.'},
];
const SUSUNQ=[
  {tmpl:['يَأْكُلُ','_A_','الأَرُزَّ','فِي','_B_'],blanks:{_A_:'الطَّالِبُ',_B_:'الْمَطْعَمِ'},choices:['الطَّالِبُ','الأُمُّ','الْمَطْعَمِ','الْبَيْتِ'],tr:'Siswa makan nasi di restoran.',hint:'Subjek: الطَّالِبُ (siswa), tempat: الْمَطْعَمِ'},
  {tmpl:['تَشْرَبُ','_A_','الشَّايَ','_B_','الصَّبَاحِ'],blanks:{_A_:'هِنْدٌ',_B_:'فِي'},choices:['هِنْدٌ','أَحْمَدُ','فِي','عَلَى'],tr:'Hind minum teh di pagi hari.',hint:'Nama: هِنْدٌ, kata depan: فِي (di)'},
  {tmpl:['_A_','الأُمُّ','_B_','لِلْعَشَاءِ'],blanks:{_A_:'تَطْبُخُ',_B_:'الدَّجَاجَ'},choices:['تَطْبُخُ','تَأْكُلُ','الدَّجَاجَ','السَّمَكَ'],tr:'Ibu memasak ayam untuk makan malam.',hint:'Fi\'il: تَطْبُخُ, objek: الدَّجَاجَ (ayam)'},
  {tmpl:['طَلَبَ','_A_','كُوبَ','_B_','مِنَ','النَّادِلِ'],blanks:{_A_:'الضَّيْفُ',_B_:'مَاءٍ'},choices:['الضَّيْفُ','الطَّالِبُ','مَاءٍ','شَايٍ'],tr:'Tamu memesan segelas air dari pelayan.',hint:'Subjek: الضَّيْفُ (tamu), objek: مَاءٍ (air)'},
  {tmpl:['أَنَا','_A_','أُرِيدُ','أَنْ','_B_','الآنَ'],blanks:{_A_:'جَائِعٌ،',_B_:'آكُلَ'},choices:['جَائِعٌ،','شَبْعَانُ،','آكُلَ','أَشْرَبَ'],tr:'Aku lapar, aku ingin makan sekarang.',hint:'Keadaan: جَائِعٌ (lapar), fi\'il: آكُلَ'},
  {tmpl:['_A_','مُحَمَّدٌ','الأَطْبَاقَ','_B_','الأَكْلِ'],blanks:{_A_:'يَغْسِلُ',_B_:'بَعْدَ'},choices:['يَغْسِلُ','يَأْكُلُ','بَعْدَ','قَبْلَ'],tr:'Muhammad mencuci piring setelah makan.',hint:'Fi\'il: يَغْسِلُ (mencuci), waktu: بَعْدَ (setelah)'},
  {tmpl:['_A_','الطَّبَّاخُ','الشُّورْبَةَ','وَأَضَافَ','_B_'],blanks:{_A_:'ذَاقَ',_B_:'الْمِلْحَ'},choices:['ذَاقَ','طَبَخَ','الْمِلْحَ','السُّكَّرَ'],tr:'Koki mencicipi sup lalu menambahkan garam.',hint:'Fi\'il: ذَاقَ (mencicipi), bahan: الْمِلْحَ (garam)'},
  {tmpl:['شَبِعَ','_A_','بَعْدَ','أَكْلِ','_B_'],blanks:{_A_:'أَحْمَدُ',_B_:'الطَّعَامِ'},choices:['أَحْمَدُ','خَالِدٌ','الطَّعَامِ','الشَّرَابِ'],tr:'Ahmad kenyang setelah makan makanan.',hint:'Nama: أَحْمَدُ, kata benda: الطَّعَامِ (makanan)'},
];
const DV={forward:{ar:'أَمَام',id:'Depan',aw:'↑'},back:{ar:'خَلْف',id:'Belakang',aw:'↓'},left:{ar:'يَسَار',id:'Kiri',aw:'←'},right:{ar:'يَمِين',id:'Kanan',aw:'→'}};
function parseM(arr){
  let grid=[],start,end,key;
  for(let r=0;r<arr.length;r++){
    let row=[];
    for(let c=0;c<arr[r].length;c++){
      const ch=arr[r][c];
      if(ch==='S'){start=[r,c];row.push(1);}
      else if(ch==='E'){end=[r,c];row.push(1);}
      else if(ch==='K'){key=[r,c];row.push(1);}
      else if(ch==='#')row.push(0);
      else row.push(1);
    }
    grid.push(row);
  }
  return {grid,start,end,key};
}
const MAZES=[
  {name:'Level 1', ...parseM([
    "#########",
    "#S  #  E#",
    "### # # #",
    "#   # # #",
    "# ### # #",
    "#     # #",
    "##### # #",
    "#K      #",
    "#########"
  ])},
  {name:'Level 2', ...parseM([
    "###########",
    "#S        #",
    "##### ### #",
    "#K  # #   #",
    "# # # # # #",
    "# #   # # #",
    "# ##### # #",
    "#       # #",
    "######### #",
    "#E        #",
    "###########"
  ])},
  {name:'Level 3', ...parseM([
    "#############",
    "#S          #",
    "# ######### #",
    "#         # #",
    "######### # #",
    "#K      # # #",
    "####### # # #",
    "#E    # # # #",
    "##### # # # #",
    "#     # # # #",
    "# ##### ### #",
    "#           #",
    "#############"
  ])}
];

// ── NAVIGATION ────────────────────────────────
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const t=document.getElementById(id);
  if(!t)return;
  t.classList.add('active');
  window.scrollTo(0,0);
  if(id==='s-isim')renderIsim('all');
  if(id==='s-fiil')renderFiil();
  if(id==='s-pg')initPG();
  if(id==='s-susun')initSusun();
  if(id==='s-game')initGameSc();
}

// ── PARTICLES ─────────────────────────────────
(function(){
  const c=document.getElementById('particles');
  for(let i=0;i<28;i++){
    const p=document.createElement('div');p.className='pt';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(7+Math.random()*10)+'s';
    p.style.animationDelay=(Math.random()*10)+'s';
    const sz=2+Math.random()*4;p.style.width=p.style.height=sz+'px';
    c.appendChild(p);
  }
})();

// ── ISIM ──────────────────────────────────────
function renderIsim(kat){
  const g=document.getElementById('isim-grid');if(!g)return;
  const list=kat==='all'?ISIM:ISIM.filter(x=>x.kat===kat);
  g.innerHTML=list.map((x,i)=>`<div class="vcard" onclick='showV(${i},"${kat}")'>
    <div class="vcem">${x.em}</div>
    <div class="vcar">${x.ar}</div>
    <div class="vclat">${x.lat}</div>
    <div class="vcid">${x.id}</div>
    <div class="vctag t${x.kat[0]}">${x.kat}</div>
  </div>`).join('');
}
function filterIsim(kat,btn){
  document.querySelectorAll('.vtab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');renderIsim(kat);
}
function showV(i,kat){
  const list=kat==='all'?ISIM:ISIM.filter(x=>x.kat===kat);
  const x=list[i];
  const kl={makanan:'Makanan',minuman:'Minuman',peralatan:'Peralatan'};
  showModal(`<div style="text-align:center">
    <div style="font-size:3.8rem;margin-bottom:10px">${x.em}</div>
    <div style="font-family:'Amiri',serif;font-size:2.4rem;color:#F0C040;direction:rtl;margin-bottom:4px">${x.ar}</div>
    <div style="font-size:.95rem;color:#D4A017;font-style:italic;margin-bottom:4px">${x.lat}</div>
    <div style="font-size:1.05rem;font-weight:600;color:#F5E6C8;margin-bottom:10px">${x.id}</div>
    <div style="display:inline-block;background:rgba(212,160,23,.14);border:1px solid rgba(212,160,23,.3);color:#D4A017;padding:3px 14px;border-radius:20px;font-size:.78rem">${kl[x.kat]}</div>
    <hr style="border:none;border-top:1px solid rgba(255,255,255,.07);margin:14px 0"/>
    <p style="font-size:.83rem;color:#B89060;line-height:1.6">Isim (kata benda) dalam bahasa Arab.<br/>Hafalkan: ucapkan keras <strong style="color:#F0C040">${x.ar}</strong></p>
  </div>`);
}

// ── FI'IL ─────────────────────────────────────
function renderFiil(){
  const g=document.getElementById('fiil-grid');if(!g)return;
  g.innerHTML=FIIL.map(f=>`<div class="fcard">
    <div class="fctop"><div class="fcem">${f.em}</div>
      <div><div class="fcar">${f.ar}</div><div class="fclat">${f.lat}</div><div class="fcid">${f.id}</div></div>
    </div>
    <hr class="fcdiv"/><div class="fclbl">Bentuk Fi'il</div>
    <div class="fcfms">${f.forms.map(fm=>`<div style="text-align:center"><div class="fcfm">${fm.ar}</div><div class="fcfml">${fm.lb}</div></div>`).join('')}</div>
    <hr class="fcdiv"/><div class="fclbl">Contoh Kalimat</div>
    <div class="fccont">${f.contoh}</div>
    <div class="fctr">"${f.tr}"</div>
  </div>`).join('');
}

// ── PG QUIZ ───────────────────────────────────
let pgS={q:0,score:0,done:false};
function initPG(){pgS={q:0,score:0,done:false};drawPG();}
function getIsmId(ar){const f=ISIM.find(x=>x.ar===ar);return f?f.id:'';}
function drawPG(){
  const box=document.getElementById('pg-box');if(!box)return;
  if(pgS.q>=PGQ.length){drawPGRes();return;}
  const q=PGQ[pgS.q];
  const pct=(pgS.q/PGQ.length)*100;
  box.innerHTML=`<div class="qpbar"><div class="qpfill" style="width:${pct}%"></div></div>
  <div class="qctr"><span>Soal ${pgS.q+1}/${PGQ.length}</span><span class="qscr">Skor: ${pgS.score}</span></div>
  <div class="pgcard">
    <div class="pgtit">مَا هَذَا؟ — Apa ini?</div>
    <div class="pgimg-wrap"><img src="${q.img}" class="pgimg" alt="Soal"></div>
    <div class="pgq">Pilih mufrodat bahasa Arab yang sesuai dengan gambar:</div>
    <div class="pgopts" id="pgopts">${q.opts.map((o,i)=>`<button class="pgopt" id="po${i}" onclick="chkPG(${i},'${o.replace(/'/g,"\\'")}')">
      <span class="oar">${o}</span></button>`).join('')}</div>
    <div id="pgfb"></div>
    <div class="qrow" id="pgnxt" style="display:none">
      <button class="qbtn qnxt" onclick="nextPG()">${pgS.q+1<PGQ.length?'Soal Berikutnya →':'Lihat Hasil'}</button>
    </div>
  </div>`;
}
function chkPG(i,chosen){
  if(pgS.done)return;pgS.done=true;
  const q=PGQ[pgS.q];
  q.opts.forEach((_,j)=>{
    const b=document.getElementById('po'+j);if(!b)return;
    b.disabled=true;
    if(q.opts[j]===q.cor)b.classList.add('cor');
    else if(j===i)b.classList.add('wrg');
    else b.classList.add('shw');
  });
  const fb=document.getElementById('pgfb');
  if(chosen===q.cor){pgS.score++;fb.innerHTML=`<div class="fbok">✅ صَحِيح! (Benar!) — ${q.hint}</div>`;toast('✅ Benar! +1 poin');}
  else{fb.innerHTML=`<div class="fberr">❌ خَطَأ! Jawaban: <strong>${q.cor}</strong> (${getIsmId(q.cor)}). ${q.hint}</div>`;toast('❌ Salah!');}
  document.getElementById('pgnxt').style.display='flex';
}
function nextPG(){pgS.q++;pgS.done=false;drawPG();}
function drawPGRes(){
  const box=document.getElementById('pg-box');
  const pct=Math.round(pgS.score/PGQ.length*100);
  const[em,msg]=pct>=90?['🏆','Luar biasa! Kamu sangat menguasai mufrodat!']:pct>=70?['⭐','Bagus sekali! Teruslah belajar!']:pct>=50?['📖','Cukup baik! Ulangi mufrodat yang salah.']:['💪','Jangan menyerah! Ulangi materi isim ya.'];
  box.innerHTML=`<div class="rcard"><div class="rem">${em}</div><div class="rtit">نَتِيجَة الاخْتِبَار</div>
  <div class="rscr">${pgS.score}/${PGQ.length}</div><div class="rpct">${pct}%</div>
  <div class="rmsg">${msg}</div>
  <div class="qrow"><button class="qbtn qchk" onclick="initPG()">🔄 Ulangi</button><button class="qbtn qrst" onclick="go('s-latihan')">← Kembali</button></div></div>`;
}

// ── SUSUN KALIMAT ─────────────────────────────
let susS={q:0,score:0,filled:{},chk:false};
function initSusun(){susS={q:0,score:0,filled:{},chk:false};drawSusun();}
function drawSusun(){
  const box=document.getElementById('susun-box');if(!box)return;
  if(susS.q>=SUSUNQ.length){drawSusunRes();return;}
  const q=SUSUNQ[susS.q];susS.filled={};susS.chk=false;
  const pct=(susS.q/SUSUNQ.length)*100;
  const bks=q.tmpl.filter(p=>p.startsWith('_')&&p.endsWith('_'));
  let sent='';
  q.tmpl.forEach(p=>{
    if(p.startsWith('_')&&p.endsWith('_')){const sid=p.replace(/_/g,'X');sent+=`<span class="sblk" id="bl${sid}" onclick="unblk('${p}')" data-key="${p}">?</span> `;}
    else sent+=`<span>${p}</span> `;
  });
  box.innerHTML=`<div class="qpbar"><div class="qpfill" style="width:${pct}%"></div></div>
  <div class="qctr"><span>Soal ${susS.q+1}/${SUSUNQ.length}</span><span class="qscr">Skor: ${susS.score}</span></div>
  <div class="scard">
    <div style="font-size:.82rem;color:#B89060;margin-bottom:8px">Lengkapi kalimat berikut:</div>
    <div class="ssent">${sent}</div>
    <div style="font-size:.8rem;color:#B89060;font-style:italic;margin-bottom:14px">🌐 "${q.tr}"</div>
    <div style="font-size:.76rem;color:#B89060;margin-bottom:8px">Pilih kata pengisi:</div>
    <div class="schs" id="schs">${q.choices.map((c,i)=>`<button class="schb" id="sch${i}" onclick="fillBlk('${c}',${i})" data-w="${c}">${c}</button>`).join('')}</div>
    <div id="sufb"></div>
    <div class="qrow">
      <button class="qbtn qchk" id="suchk" onclick="chkSusun()">✔ Periksa</button>
      <button class="qbtn qrst" onclick="rstSusun()">↺ Reset</button>
      <button class="qbtn qnxt" id="sunxt" style="display:none" onclick="nextSusun()">${susS.q+1<SUSUNQ.length?'Soal Berikutnya →':'Lihat Hasil'}</button>
    </div>
  </div>`;
}
function fillBlk(word,idx){
  if(susS.chk)return;
  const q=SUSUNQ[susS.q];
  const bks=q.tmpl.filter(p=>p.startsWith('_')&&p.endsWith('_'));
  const empty=bks.find(k=>!susS.filled[k]);
  if(!empty){toast('Semua kotak sudah terisi!');return;}
  susS.filled[empty]=word;
  const sid=empty.replace(/_/g,'X');
  const bl=document.getElementById('bl'+sid);
  if(bl){bl.textContent=word;bl.classList.add('fil');}
  const btn=document.getElementById('sch'+idx);
  if(btn)btn.classList.add('used');
}
function unblk(key){
  if(susS.chk)return;
  const word=susS.filled[key];if(!word)return;
  delete susS.filled[key];
  const sid=key.replace(/_/g,'X');
  const bl=document.getElementById('bl'+sid);
  if(bl){bl.textContent='?';bl.classList.remove('fil','cor','wrg');}
  const q=SUSUNQ[susS.q];
  const idx=q.choices.indexOf(word);
  const btn=document.getElementById('sch'+idx);
  if(btn)btn.classList.remove('used');
}
function rstSusun(){
  if(susS.chk)return;
  const q=SUSUNQ[susS.q];
  q.tmpl.filter(p=>p.startsWith('_')&&p.endsWith('_')).forEach(k=>{
    const bl=document.getElementById('bl'+k.replace(/_/g,'X'));
    if(bl){bl.textContent='?';bl.classList.remove('fil','cor','wrg');}
  });
  q.choices.forEach((_,i)=>{const b=document.getElementById('sch'+i);if(b)b.classList.remove('used');});
  susS.filled={};document.getElementById('sufb').innerHTML='';
}
function chkSusun(){
  if(susS.chk)return;
  const q=SUSUNQ[susS.q];
  const bks=q.tmpl.filter(p=>p.startsWith('_')&&p.endsWith('_'));
  if(bks.some(k=>!susS.filled[k])){toast('⚠️ Isi semua kotak dulu!');return;}
  susS.chk=true;let ok=true;
  bks.forEach(k=>{
    const bl=document.getElementById('bl'+k.replace(/_/g,'X'));
    if(susS.filled[k]===q.blanks[k])bl&&bl.classList.add('cor');
    else{bl&&bl.classList.add('wrg');ok=false;}
  });
  const fb=document.getElementById('sufb');
  if(ok){susS.score++;fb.innerHTML=`<div class="fbok">✅ صَحِيح! Semua benar!<br><small>${q.hint}</small></div>`;toast('✅ Benar! +1 poin');}
  else{const ans=bks.map(k=>`<span style="color:#F0C040;font-family:'Amiri',serif">${q.blanks[k]}</span>`).join(' / ');fb.innerHTML=`<div class="fberr">❌ Ada yang salah. Jawaban benar: ${ans}<br><small>${q.hint}</small></div>`;toast('❌ Ada yang salah!');}
  document.getElementById('suchk').style.display='none';
  document.getElementById('sunxt').style.display='inline-flex';
}

// ── MINI GAME ─────────────────────────────────
let gLv=0,gS=null;
function initGameSc(){
  document.getElementById('gwrap').innerHTML=`<div class="gst">
    <h3>لُعْبَةُ الاتِّجَاهَات</h3>
    <p>Jelajahi lorong menggunakan tombol arah Bahasa Arab!<br/>Temukan pintu keluar tanpa menabrak dinding.<br/><strong style="color:#F0C040">Salah arah = nyawa berkurang!</strong></p>
    <div class="dvprev">${Object.entries(DV).map(([k,v])=>`<div class="dvp"><div style="font-size:1.4rem">${v.aw}</div><div><div class="dvpar">${v.ar}</div></div></div>`).join('')}</div>
    <button class="gbtnst" onclick="startGame(0)">▶ Mulai Permainan</button>
  </div>`;
}
function exitGame(){gS=null;go('s-home');}

let A=null;
function initA(){if(!A)A=new(window.AudioContext||window.webkitAudioContext)();}
function playT(f,t,d,v){
  initA();if(A.state==='suspended')A.resume();
  const o=A.createOscillator(),g=A.createGain();
  o.type=t;o.frequency.setValueAtTime(f,A.currentTime);
  g.gain.setValueAtTime(v,A.currentTime);g.gain.exponentialRampToValueAtTime(0.01,A.currentTime+d);
  o.connect(g);g.connect(A.destination);
  o.start();o.stop(A.currentTime+d);
}
function sStep(){playT(150,'triangle',0.1,0.5);}
function sBump(){playT(80,'sawtooth',0.3,0.8);}
function sKey(){playT(800,'sine',0.1,0.5);setTimeout(()=>playT(1200,'sine',0.3,0.5),100);}
function sWin(){[523,659,783,1046].forEach((f,i)=>setTimeout(()=>playT(f,'square',0.2,0.3),i*150));}
function sLose(){[300,280,260,200].forEach((f,i)=>setTimeout(()=>playT(f,'sawtooth',0.3,0.5),i*200));}
function sClick(){playT(600,'sine',0.05,0.1);}

let rec=null, isRec=false;
function toggleV(){
  if(!window.SpeechRecognition && !window.webkitSpeechRecognition){toast('Browser tidak mendukung suara!');return;}
  if(isRec){rec.stop();return;}
  if(!rec){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    rec=new SR();rec.lang='ar-SA';rec.continuous=true;rec.interimResults=false;
    rec.onresult=(e)=>{
      const t=e.results[e.results.length-1][0].transcript.trim().toLowerCase();
      if(t.includes('أمام')) moveP('forward');
      else if(t.includes('خلف')) moveP('back');
      else if(t.includes('يسار')) moveP('left');
      else if(t.includes('يمين')) moveP('right');
    };
    rec.onstart=()=>{isRec=true;const b=document.getElementById('vbtn');if(b){b.style.background='#E05555';b.innerText='🔴 Mendengarkan...';}};
    rec.onend=()=>{isRec=false;const b=document.getElementById('vbtn');if(b){b.style.background='#5AA0E0';b.innerText='🎤 Kontrol Suara Arab';}};
  }
  rec.start();
}

function startGame(lv){
  gLv=lv;const l=MAZES[lv%MAZES.length];
  gS={grid:l.grid.map(r=>[...r]),rows:l.grid.length,cols:l.grid[0].length,pos:[...l.start],facing:0,steps:0,lives:3,end:[...l.end],key:l.key?[...l.key]:null,hasKey:!l.key,name:l.name,fl:0,fc:null,over:false,won:false};
  renderGame();
}
function renderGame(){
  const w=document.getElementById('gwrap');
  w.innerHTML=`<div class="ghud"><div class="hliv">${'❤️'.repeat(gS.lives)}</div><div class="hlvl">🗺️ ${gS.name}</div><div class="hstp">👣 ${gS.steps}</div></div>
  <div class="ccont"><canvas id="gc"></canvas><div class="mmwrap"><canvas id="mm" width="88" height="88"></canvas></div></div>
  <button id="vbtn" onclick="toggleV()" style="width:100%;padding:12px;margin-bottom:8px;background:#5AA0E0;border:none;border-radius:8px;color:#fff;font-family:inherit;font-weight:bold;font-size:1.1rem;cursor:pointer">🎤 Kontrol Suara Arab</button>
  <div class="dhint">Arah tersedia: <span class="hdirs" id="hdirs">—</span></div>
  <div class="dbtns">${Object.entries(DV).map(([k,v])=>`<button class="dbtn" data-dir="${k}" onclick="moveP('${k}')">
    <span class="darr">${v.aw}</span><span class="dar">${v.ar}</span></button>`).join('')}</div>`;
  const c=document.getElementById('gc');
  if(c){const p=c.parentElement;c.width=p.clientWidth;c.height=Math.round(p.clientWidth*.75);}
  updDirBtns();drawAll();
}
const WD=[[-1,0],[0,1],[1,0],[0,-1]];
const ANG=[Math.PI*1.5,0,Math.PI*.5,Math.PI];
function r2w(rel){return(gS.facing+{forward:0,right:1,back:2,left:3}[rel])%4;}
function canMv(wd){
  const[r,c]=gS.pos,[dr,dc]=WD[wd],nr=r+dr,nc=c+dc;
  if(nr<0||nr>=gS.rows||nc<0||nc>=gS.cols)return false;
  if(nr===gS.end[0]&&nc===gS.end[1]&&!gS.hasKey)return false;
  return gS.grid[nr][nc]!==0;
}
function moveP(rel){
  if(!gS||gS.over||gS.won)return;
  const wd=r2w(rel);gS.steps++;
  if(canMv(wd)){
    const[dr,dc]=WD[wd];gS.pos[0]+=dr;gS.pos[1]+=dc;gS.facing=wd;gS.fl=8;gS.fc='rgba(76,175,122,.32)';
    sStep();
    if(gS.key&&!gS.hasKey&&gS.pos[0]===gS.key[0]&&gS.pos[1]===gS.key[1]){gS.hasKey=true;sKey();toast('🔑 Kunci Didapat!');gS.fc='rgba(240,192,64,.4)';}
    if(gS.pos[0]===gS.end[0]&&gS.pos[1]===gS.end[1]){gS.won=true;sWin();setTimeout(showWin,450);}
  }else{
    gS.lives--;gS.fl=14;gS.fc='rgba(224,85,85,.38)';sBump();
    const isD=gS.pos[0]+WD[wd][0]===gS.end[0]&&gS.pos[1]+WD[wd][1]===gS.end[1];
    toast(isD?`🔒 Cari kunci dulu!`:`💥 Buntu! ${DV[rel].ar}`);
    if(gS.lives<=0){gS.over=true;sLose();setTimeout(showLose,550);}
  }
  updDirBtns();drawAll();
}
function updDirBtns(){
  if(!gS)return;let av=[];
  Object.keys(DV).forEach(rel=>{
    const b=document.querySelector(`.dbtn[data-dir="${rel}"]`);if(!b)return;
    b.classList.remove('blk','val');
    if(!canMv(r2w(rel)))b.classList.add('blk');
    else{b.classList.add('val');av.push(`${DV[rel].ar}`);}
  });
  const h=document.getElementById('hdirs');if(h)h.textContent=av.length?av.join(' | '):'Tidak ada jalan!';
}
function drawAll(){drawGC();drawMM();}
function drawGC(){
  const cv=document.getElementById('gc');if(!cv)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  const sk=ctx.createLinearGradient(0,0,0,H*.5);sk.addColorStop(0,'#0A0300');sk.addColorStop(1,'#1A0800');
  ctx.fillStyle=sk;ctx.fillRect(0,0,W,H*.5);
  const fl=ctx.createLinearGradient(0,H*.5,0,H);fl.addColorStop(0,'#2A1200');fl.addColorStop(1,'#080300');
  ctx.fillStyle=fl;ctx.fillRect(0,H*.5,W,H*.5);
  if(gS.fl>0&&gS.fc){ctx.fillStyle=gS.fc;ctx.fillRect(0,0,W,H);gS.fl--;}
  const FOV=Math.PI/2.4,RAYS=Math.floor(W/2),pa=ANG[gS.facing];
  for(let i=0;i<RAYS;i++){
    const ra=pa-FOV/2+(i/RAYS)*FOV;
    const res=castR(gS.pos,ra,gS.grid,gS.rows,gS.cols,gS.end);
    if(!res.hit) continue;
    const cd=res.d*Math.cos(ra-pa);
    const wH=Math.min(H,H/(cd+.0001)*1.3),wT=(H-wH)/2;
    const br=Math.max(20,Math.min(240,240/(cd+.4)));
    if(res.t==='door'){
      const b=res.s?br*.8:br;
      if(!gS.hasKey) ctx.fillStyle=`rgb(${Math.floor(b*.8)},0,0)`;
      else ctx.fillStyle=`rgb(0,${Math.floor(b*.8)},${Math.floor(b*.4)})`;
      if(br>140&&gS.hasKey)ctx.fillStyle='#4CAF7A';
    }else{
      const b=res.s?br*.65:br;
      ctx.fillStyle=`rgb(${Math.floor(b*.72)},${Math.floor(b*.32)},0)`;
    }
    ctx.fillRect(i*2,wT,2,wH);
    ctx.fillStyle='rgba(0,0,0,.6)';
    ctx.fillRect(i*2,wT,2,Math.max(2,wH*.03));
    ctx.fillRect(i*2,wT+wH-Math.max(2,wH*.03),2,Math.max(2,wH*.03));
    if(res.t==='wall' && (res.r*7+res.c*13)%11===0 && br>80){
       ctx.fillStyle='rgba(255,255,255,0.8)';ctx.fillRect(i*2,wT+wH*.3,2,wH*.4);
    }
  }
  if(gS.key&&!gS.hasKey){
    const dx=gS.key[1]-gS.pos[1],dy=gS.key[0]-gS.pos[0];
    const dist=Math.sqrt(dx*dx+dy*dy);
    let ang=Math.atan2(dy,dx)-pa;
    while(ang<-Math.PI)ang+=Math.PI*2;while(ang>Math.PI)ang-=Math.PI*2;
    if(Math.abs(ang)<FOV/2){
       let los=true;
       for(let s=0;s<dist;s+=0.2){
         const r=Math.floor(gS.pos[0]+.5+Math.sin(Math.atan2(dy,dx))*s);
         const c=Math.floor(gS.pos[1]+.5+Math.cos(Math.atan2(dy,dx))*s);
         if(gS.grid[r]&&gS.grid[r][c]===0){los=false;break;}
       }
       if(los){
         const x=(ang+FOV/2)/FOV*W;
         const size=Math.min(H*.4,H/dist*.6);
         ctx.font=`${size}px Arial`;ctx.textAlign='center';
         ctx.fillText('🔑',x,H/2+size/3);
       }
    }
  }
  const[pr,pc]=gS.pos,[er,ec]=gS.end;
  if(Math.abs(pr-er)+Math.abs(pc-ec)<=2&&gS.hasKey){ctx.fillStyle='rgba(76,175,122,.25)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#4CAF7A';ctx.font=`bold ${Math.floor(H*.07)}px Amiri,serif`;ctx.textAlign='center';ctx.fillText('الْخُرُوج — EXIT!',W/2,H*.22);}
}
function castR(pos,angle,grid,rows,cols,end){
  let x=pos[1]+.5,y=pos[0]+.5,dx=Math.cos(angle)*.02,dy=Math.sin(angle)*.02,d=0;
  for(let s=0;s<200;s++){
    x+=dx;y+=dy;d+=.02;
    const gc=Math.floor(x),gr=Math.floor(y);
    if(gr<0||gr>=rows||gc<0||gc>=cols) return {d:d,hit:false};
    const isS=(Math.abs(x-Math.floor(x)-.5)>Math.abs(y-Math.floor(y)-.5));
    if(grid[gr][gc]===0) return {d:d,hit:true,t:'wall',s:isS,r:gr,c:gc};
    if(gr===end[0]&&gc===end[1]) return {d:d,hit:true,t:'door',s:isS,r:gr,c:gc};
  }
  return {d:d,hit:false};
}
function drawMM(){
  const cv=document.getElementById('mm');if(!cv)return;
  const ctx=cv.getContext('2d'),W=88,H=88;ctx.fillStyle='rgba(0,0,0,.7)';ctx.fillRect(0,0,W,H);
  const{grid,rows,cols,pos,end,key}=gS,cw=W/cols,ch=H/rows;
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){ctx.fillStyle=grid[r][c]===0?'#0E0500':'#3A1800';ctx.fillRect(c*cw+.5,r*ch+.5,cw-1,ch-1);}
  ctx.fillStyle=gS.hasKey?'#4CAF7A':'#E05555';ctx.fillRect(end[1]*cw+1,end[0]*ch+1,cw-2,ch-2);
  if(key&&!gS.hasKey){ctx.fillStyle='#F0C040';ctx.font='8px Arial';ctx.fillText('🔑',key[1]*cw,key[0]*ch+8);}

  ctx.save();ctx.translate((pos[1]+.5)*cw,(pos[0]+.5)*ch);ctx.rotate(ANG[gS.facing]);
  ctx.fillStyle='#F0C040';ctx.beginPath();
  const sz=Math.min(cw,ch)*.5;
  ctx.moveTo(sz,0);ctx.lineTo(-sz,sz*.8);ctx.lineTo(-sz*.3,0);ctx.lineTo(-sz,-sz*.8);
  ctx.closePath();ctx.fill();ctx.restore();
}
function showWin(){
  const w=document.getElementById('gwrap');const nx=(gLv+1)<MAZES.length;
  w.innerHTML=`<div class="gend"><div class="gend-em">🎉</div><h3>وَصَلْتَ! — Berhasil!</h3>
  <p>Kamu keluar dari lorong! Kosakata arahmu sudah bagus!</p>
  <div class="gendst"><div class="gst2"><div class="gsn">${gS.steps}</div><div class="gsl">Langkah</div></div><div class="gst2"><div class="gsn">${gS.lives}</div><div class="gsl">Nyawa Sisa</div></div></div>
  ${nx?`<button class="grep" onclick="startGame(${gLv+1})">▶ Level Berikutnya</button><br/>`:'<p style="color:#F0C040;margin-bottom:16px">🏆 Semua level selesai!</p>'}
  <button class="grep gh" onclick="startGame(0)" style="margin-top:8px">🔄 Mulai Ulang</button></div>`;
}
function showLose(){
  const w=document.getElementById('gwrap');
  w.innerHTML=`<div class="gend"><div class="gend-em">💔</div><h3>انْتَهَى! — Game Over!</h3>
  <p>Terlalu banyak menabrak dinding. Ingat lagi arah bahasa Arab!</p>
  <div class="dvprev">${Object.entries(DV).map(([k,v])=>`<div class="dvp"><div style="font-size:1.4rem">${v.aw}</div><div><div class="dvpar">${v.ar}</div></div></div>`).join('')}</div>
  <div class="gendst"><div class="gst2"><div class="gsn">${gS.steps}</div><div class="gsl">Langkah</div></div></div>
  <button class="grep" onclick="startGame(${gLv})">🔄 Coba Lagi</button></div>`;
}

// ── MODAL & TOAST ─────────────────────────────
function showModal(html){document.getElementById('mc').innerHTML=html;document.getElementById('modal').classList.add('open');}
function closeModal(){document.getElementById('modal').classList.remove('open');}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
let _tt=null;
function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.style.display='block';if(_tt)clearTimeout(_tt);_tt=setTimeout(()=>el.style.display='none',2000);}

document.body.addEventListener('click', (e) => {
  if(e.target.closest('button, .opt, .sblk')) sClick();
});
