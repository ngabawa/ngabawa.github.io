const $=i=>document.getElementById(i),R=n=>Math.floor(Math.random()*n),cl=v=>Math.max(0,Math.min(100,v));
const N={w:"ဉာဏ်ပညာ",h:"ကျန်းမာရေး",l:"ရုပ်ရည်",s:"စိတ်ခွန်အား",fm:"ဂုဏ်သတင်း",m:"ငွေ",lang:"ဘာသာစကား"},ST=["w","h","l","s","fm"];
const ETH=["ဗမာ","ရှမ်း","ကရင်","ကချင်","ရခိုင်","မွန်","ချင်း","အခြား"],REL=["ဗုဒ္ဓဘာသာ","ခရစ်ယာန်","အစ္စလာမ်","ဟိန္ဒူ"],FAM=["ဆင်းရဲသော","အလတ်စား","ချမ်းသာသော"],RGN=["မြို့ကြီး","ကျေးလက်","ပဋိပက္ခဒေသ"];
const RG=y=>y<1937?"ဗြိတိသျှကိုလိုနီခေတ်":y<1948?"ကိုလိုနီ/ဂျပန်သိမ်းခေတ်":y<1962?"ပါလီမန်ဒီမိုကရေစီခေတ်":y<1988?"မဆလ (ဦးနေဝင်း) ခေတ်":y<2011?"စစ်အစိုးရခေတ်":y<2016?"ပြုပြင်ပြောင်းလဲရေးအစ (USDP)":y<2021?"NLD အစိုးရခေတ်":y<2030?"စစ်ကောင်စီခေတ်":y<2040?"ဖက်ဒရယ်ဒီမိုကရေစီ ပြုပြင်ရေးခေတ် (စိတ်ကူး)":y<2100?"တိုးတက်ရေးပါတီခေတ် (စိတ်ကူး)":"ဖွံ့ဖြိုးသော ဖက်ဒရယ်နိုင်ငံ (စိတ်ကူး)";
const SE=["ဇန်နဝါရီ - လွတ်လပ်ရေးနေ့","ဖေဖော်ဝါရီ - ပြည်ထောင်စုနေ့","မတ် - စာမေးပွဲရာသီ","ဧပြီ - သင်္ကြန်ရေပက်ပွဲ","မေ - ကဆုန်လပြည့်","ဇွန် - မိုးရာသီစ","ဇူလိုင် - ဝါဆိုလပြည့်","ဩဂုတ် - မိုးသည်း","စက်တင်ဘာ - မိုးကုန်ခါနီး","အောက်တိုဘာ - သီတင်းကျွတ်","နိုဝင်ဘာ - တန်ဆောင်မုန်း","ဒီဇင်ဘာ - ဆောင်းရာသီ"];

const MJ=[
  {n:"ဆေးပညာ",s:"s",min:85,d:6,c:1,j:"doc"},
  {n:"အင်ဂျင်နီယာ",s:"s",min:75,d:5,c:1,j:"eng"},
  {n:"ကွန်ပျူတာသိပ္ပံ (CS)",s:"s",min:72,d:4,c:1,j:"cs"},
  {n:"ဗိသုကာပညာ",s:"s",min:70,d:5,c:1,j:"arch"},
  {n:"သိပ္ပံ/စိုက်ပျိုးရေး",s:"s",min:55,d:4,c:1,j:"sci"},
  {n:"ဥပဒေ",s:"a",min:68,d:4,c:1,j:"law"},
  {n:"စီးပွားရေးစီမံခန့်ခွဲမှု (BBA)",s:"a",min:62,d:4,c:1,j:"bba"},
  {n:"နိုင်ငံတကာဆက်ဆံရေး (IR)",s:"a",min:64,d:4,c:1,j:"ir"},
  {n:"ပညာရေး",s:"*",min:50,d:4,j:"tch"},
  {n:"စီးပွားရေး/စီမံခန့်ခွဲမှု",s:"a",min:58,d:4,j:"biz"},
  {n:"ဘာသာစကား/အနုပညာ",s:"a",min:45,d:4,j:"art"}
];

const M_=j=>()=>S.deg&&MJ[S.deg-1].j==j,DG=()=>S.deg,MU=()=>S.mu||S.deg,ANY=()=>1,GV=()=>!(S.cdm==1&&S.y>=2021&&S.y<=2029);

const ABROAD_PLACES={
  "စင်ကာပူ":{uni:"National University of Singapore (NUS)",gov:"Singapore Public Service Division",biz:"Marina Bay Enterprise Pte. Ltd.",sch:"Singapore Trade & Tech Corp"},
  "ဩစတြေးလျ":{uni:"University of Melbourne",gov:"Australian Regional Services Dept",biz:"Southern Cross Solutions Pty Ltd",sch:"Pacific Rim Logistics Ltd"},
  "အမေရိကန်":{uni:"University of Washington",gov:"Municipal Civic Services Dept",biz:"Cascade Innovations Inc.",sch:"Pacific Northwest Works Co."},
  "အင်္ဂလန်":{uni:"University of Manchester",gov:"Local Borough Council Dept",biz:"Albion Commercial Group Ltd",sch:"Thames Valley Enterprises"},
  "ဂျပန်":{uni:"University of Tsukuba",gov:"Prefectural Civic Office",biz:"Sakura Systems K.K.",sch:"Kanto Trading Co., Ltd."},
  "ကိုရီးယား":{uni:"Yonsei University",gov:"Metropolitan Civic Bureau",biz:"Han River Digital Corp.",sch:"Sejong Commercial Co."},
  "ဂျာမနီ":{uni:"Technical University of Munich",gov:"Städtisches Verwaltungsamt",biz:"RheinTech GmbH",sch:"Bavaria Handels AG"},
  "ပြင်သစ်":{uni:"Sorbonne Université",gov:"Direction Municipale",biz:"Lumière Services SAS",sch:"Seine Commerce SA"},
  "တရုတ်":{uni:"Zhejiang University",gov:"Municipal Service Bureau",biz:"Pearl River Tech Co.",sch:"East Sea Trade Ltd."},
  "ထိုင်း":{uni:"Chiang Mai University",gov:"Provincial Civic Office",biz:"Siam Commercial & Services Co.",sch:"Chao Phraya Trading Ltd."}
};

function foreignOrg(type, country){
  let p=ABROAD_PLACES[country]||{uni:`${country} National University`,gov:`${country} Civic Services Dept`,biz:`${country} Global Services Ltd.`,sch:`${country} Commercial Group`};
  if(type==="uni")return p.uni;
  if(type==="gov")return p.gov;
  if(type==="sch")return p.sch;
  return p.biz;
}

function eraOrg(type){
  if(S&&S.ab&&S.ab.d)return foreignOrg(type,S.ab.d);
  let y=(S&&S.y)||1990, t=(S&&S.town)||"ရန်ကုန်";
  if(type==="gov"){
    if(y<1948)return `${t} ခရိုင်အထွေထွေအုပ်ချုပ်ရေးရုံး`;
    if(y<1962)return `${t} မြို့နယ်အုပ်ချုပ်ရေးဌာန`;
    if(y<1988)return `${t} ပြည်သူ့ကောင်စီရုံး`;
    if(y<2011)return `${t} ခရိုင်/မြို့နယ် အထွေထွေအုပ်ချုပ်ရေးဦးစီးဌာန`;
    if(y<2021)return `${t} မြို့နယ်စည်ပင်/အုပ်ချုပ်ရေးရုံး`;
    return `${t} ဒေသအုပ်ချုပ်ရေးနှင့် ဝန်ဆောင်မှုရုံး`;
  }
  if(type==="sch"){
    if(y<1948)return `${t} အစိုးရအထက်တန်းကျောင်း`;
    if(y<1988)return `${t} အမှတ် (၁) အခြေခံပညာအထက်တန်းကျောင်း`;
    return `${t} အခြေခံပညာကျောင်း`;
  }
  if(type==="uni"){
    if(y<1964)return "ရန်ကုန်တက္ကသိုလ် / မန္တလေးကောလိပ်";
    return `${t} တက္ကသိုလ်/ကောလိပ်`;
  }
  if(type==="biz"){
    if(y<1962)return `${t} ကုန်သွယ်ရေးကုမ္ပဏီ`;
    if(y<1988)return `${t} သမဝါယမနှင့် ဝန်ဆောင်မှုလုပ်ငန်း`;
    if(y<2012)return `${t} ပုဂ္ဂလိက ကုန်သွယ်ရေး/ဝန်ဆောင်မှုလုပ်ငန်း`;
    return `${t} ပုဂ္ဂလိက ကုမ္ပဏီ/လုပ်ငန်း`;
  }
  return `${t} ဒေသလုပ်ငန်း`;
}

// cid indices:
// 0: ဆရာဝန်, 1: အင်ဂျင်နီယာ, 2: ကျောင်းဆရာ/ဆရာမ, 3: တက္ကသိုလ်ဆရာ/ဆရာမ,
// 4: မြို့ပြစီမံအုပ်ချုပ်ရေး, 5: အစိုးရဝန်ထမ်း, 6: နိုင်ငံရေး/လူမှုအဖွဲ့အစည်း,
// 7: NGO/INGO ဝန်ထမ်း, 8: စာရင်းကိုင်, 9: အကသင်ကြားသူ, 10: အဆို/အသံနည်းပြ,
// 11: IT နည်းပညာ, 12: ဆေးဝါးကျွမ်းကျင်သူ, 13: သူနာပြု, 14: စားဖိုမှူး,
// 15: သတင်းထောက်/မီဒီယာ, 16: ဂရပ်ဖစ်ဒီဇိုင်နာ, 17: HR ဝန်ထမ်း,
// 18: အရောင်းနှင့် စျေးကွက်, 19: ဟိုတယ်/ဧည့်ဝန်ဆောင်မှု, 20: ခရီးသွားလမ်းညွှန်,
// 21: အိမ်ခြံမြေ ကိုယ်စားလှယ်, 22: ပို့ဆောင်ရေး/ထောက်ပံ့ရေး, 23: အထည်ချုပ်စက်ရုံ,
// 24: လေယာဉ်မှူး, 25: ရေကြောင်းအရာရှိ, 26: တပ်မတော်, 27: ကျောက်မျက်/ရွှေပန်းထိမ်,
// 28: NUG ဝန်ထမ်း (၂၀၂၁-၂၀၂၉), 29: ရှေ့နေ (တရားသူကြီးချုပ် အမြင့်ဆုံး),
// 30: သံရုံးဝန်ထမ်း (နိုင်ငံခြားရေးဝန်ကြီး အမြင့်ဆုံး)
const CAR=[
["ဆရာဝန်","ဆေးပညာလက်ထောက်|လက်ထောက်ဆရာဝန်|ဆေးခန်း/ဆေးရုံတာဝန်ကျဆရာဝန်|အထွေထွေရောဂါကုဆရာဝန်|ဆေးရုံဆရာဝန်ကြီး",M_("doc"),3600,18,1],
["အင်ဂျင်နီယာ","လက်ထောက်အင်ဂျင်နီယာ|ကွင်းဆင်းအင်ဂျင်နီယာ|ဒီဇိုင်း/တည်ဆောက်ရေးအင်ဂျင်နီယာ|အင်ဂျင်နီယာတာဝန်ခံ|စီမံကိန်းအင်ဂျင်နီယာ",()=>M_("eng")()||M_("arch")(),3100,18,0],
["ကျောင်းဆရာ/ဆရာမ","ကျောင်းဆရာ/ဆရာမလောင်း|အလယ်တန်းပြဆရာ/ဆရာမ|အထက်တန်းပြဆရာ/ဆရာမ|ဒုကျောင်းအုပ်|ကျောင်းအုပ်",DG,1600,18,1],
["တက္ကသိုလ်ဆရာ/ဆရာမ","သရုပ်ပြ/နည်းပြ|လက်ထောက်ကထိက|ကထိက|တွဲဖက်ပါမောက္ခ|ပါမောက္ခ",DG,1900,18,1],
["မြို့ပြစီမံအုပ်ချုပ်ရေး","စာရေး/ရုံးဝန်ထမ်း|ဒုတိယဦးစီးမှူး|ဦးစီးမှူး|ရုံးတာဝန်ခံ|ဒေသအုပ်ချုပ်ရေးဝန်ထမ်း",DG,1600,18,1],
["အစိုးရဝန်ထမ်း","ရုံးအကူ/စာရေး|လက်ထောက်ဦးစီးမှူး|ဦးစီးမှူး|ဌာနတာဝန်ခံ|အကြီးတန်းဝန်ထမ်း",DG,1600,18,1],
["လူမှုအဖွဲ့အစည်း","လူငယ်အဖွဲ့ဝင်|ရပ်ရွာကိုယ်စားလှယ်|အဖွဲ့ဝင်|ကော်မတီဝင်|အမှုဆောင်အဖွဲ့ဝင်",ANY,700,18,0],
["NGO ဝန်ထမ်း","ကွင်းဆင်းလက်ထောက်|စီမံကိန်းလက်ထောက်|စီမံကိန်းအရာရှိ|ဒေသတာဝန်ခံ|စီမံကိန်းညှိနှိုင်းရေးမှူး",()=>DG()&&S.lang>=1,2800,18,0],
["စာရင်းကိုင်","စာရင်းကိုင်လက်ထောက်|စာရင်းစစ်/စာရင်းကိုင်|စာရင်းကိုင်|ဘဏ္ဍာရေးစာရင်းကိုင်|အကြီးတန်းစာရင်းကိုင်",()=>M_("biz")()||M_("bba")()||MU(),1800,18,0],
["အကဆရာ","အကအဖွဲ့ဝင်|အကသင်တန်းနည်းပြ|အကဆရာ/ဆရာမ|ယဉ်ကျေးမှုအကညွှန်ကြားသူ|အကစတူဒီယိုနည်းပြ",ANY,950,18,0],
["အဆိုနည်းပြ","အဆိုအဖွဲ့ဝင်|အသံလေ့ကျင့်ရေးနည်းပြ|အသံကျွမ်းကျင်သူ|တေးဂီတနည်းပြ|အသံဖမ်း/အဆိုနည်းပြ",ANY,1100,18,0],
["IT နည်းပညာ","IT အကူဝန်ထမ်း|ကွန်ပျူတာ/ကွန်ရက်ဝန်ထမ်း|စနစ်နည်းပညာရှင်|IT ဝန်ထမ်း|IT စနစ်တာဝန်ခံ",MU,1900,18,0],
["ဆေးဝါးကျွမ်းကျင်သူ","ဆေးဝါးလက်ထောက်|ဆေးဝါးစစ်ဆေးသူ|ဆေးဝါးကျွမ်းကျင်သူ|ဆေးဆိုင်တာဝန်ခံ|ဆေးဝါးထောက်ပံ့ရေးတာဝန်ခံ",M_("sci"),2200,18,0],
["သူနာပြု","သူနာပြုအကူ|လက်ထောက်သူနာပြု|သူနာပြု|ဝဒ်ခန်းသူနာပြု|အကြီးတန်းသူနာပြု",MU,1450,18,1],
["စားဖိုမှူး","မီးဖိုချောင်လက်ထောက်|ပြင်ဆင်ရေးစားဖိုမှူး|စားဖိုမှူး|မီးဖိုချောင်တာဝန်ခံ|အကြီးတန်းစားဖိုမှူး",ANY,1050,18,0],
["သတင်းထောက်","သတင်းထောက်လောင်း|သတင်းထောက်|အကြီးတန်းသတင်းထောက်|သတင်းတည်းဖြတ်သူ|မီဒီယာဝန်ထမ်း",MU,1150,18,0],
["ဂရပ်ဖစ်ဒီဇိုင်နာ","ဒီဇိုင်းလက်ထောက်|ဂရပ်ဖစ်ဒီဇိုင်နာ|အမြင်ဖန်တီးဒီဇိုင်နာ|အကြီးတန်းဒီဇိုင်နာ|ဒီဇိုင်းတာဝန်ခံ",MU,1600,18,0],
["HR ဝန်ထမ်း","HR လက်ထောက်|HR ဝန်ထမ်း|HR အရာရှိ|လူ့စွမ်းအားအရင်းအမြစ်ဝန်ထမ်း|HR တာဝန်ခံ",DG,1900,18,0],
["အရောင်းနှင့် စျေးကွက်","အရောင်းဝန်ထမ်း|စျေးကွက်ရှာဖွေရေးဝန်ထမ်း|အရောင်းအရာရှိ|စျေးကွက်ဝန်ထမ်း|အရောင်းတာဝန်ခံ",MU,1400,18,0],
["ဟိုတယ်/ဧည့်ဝန်ဆောင်မှု","ဧည့်ကြိုဝန်ထမ်း|ဧည့်ဝန်ဆောင်မှုဝန်ထမ်း|ကြီးကြပ်ရေးဝန်ထမ်း|ဧည့်ဝန်ဆောင်မှုတာဝန်ခံ|ဟိုတယ်ဝန်ထမ်း",MU,1300,18,0],
["ခရီးသွားလမ်းညွှန်","လမ်းညွှန်လက်ထောက်|ဒေသတွင်းလမ်းညွှန်|ခရီးသွားလမ်းညွှန်|ခရီးစဉ်ညှိနှိုင်းသူ|အကြီးတန်းလမ်းညွှန်",()=>MU()&&certs()>=1,1150,18,0],
["အိမ်ခြံမြေ ကိုယ်စားလှယ်","အိမ်ခြံမြေလက်ထောက်|အိမ်ခြံမြေအကျိုးဆောင်|အိမ်ခြံမြေအကြံပေး|အိမ်ခြံမြေဝန်ထမ်း|အကြီးတန်းအကျိုးဆောင်",MU,1400,18,0],
["ပို့ဆောင်ရေး/ထောက်ပံ့ရေး","ထောက်ပံ့ရေးလက်ထောက်|ပို့ဆောင်ရေးဝန်ထမ်း|ထောက်ပံ့ရေးညှိနှိုင်းသူ|ပို့ဆောင်ရေးတာဝန်ခံ|ထောက်ပံ့ရေးဝန်ထမ်း",MU,1600,18,0],
["အထည်ချုပ်စက်ရုံ","စက်ချုပ်ဝန်ထမ်း|အရည်အသွေးစစ်ဝန်ထမ်း|လိုင်းကြီးကြပ်သူ|ထုတ်လုပ်မှုဝန်ထမ်း|စက်ရုံတာဝန်ခံ",ANY,900,18,0],
["လေယာဉ်မှူး","လေယာဉ်မှူးသင်တန်းသား|ဒုတိယလေယာဉ်မှူး|လေယာဉ်မှူး|အကြီးတန်းလေယာဉ်မှူး|ပျံသန်းရေးလေယာဉ်မှူး",()=>DG()&&S.lang>=2,4800,18,0],
["ရေကြောင်းအရာရှိ","ရေကြောင်းသင်တန်းသား|လက်ထောက်ရေကြောင်းအရာရှိ|ရေကြောင်းအရာရှိ|အကြီးတန်းရေကြောင်းအရာရှိ|ရေကြောင်းတာဝန်ခံ",MU,2200,18,0],
["တပ်မတော်","တပ်သား|ဒုတပ်ကြပ်|တပ်ကြပ်|အရာခံဗိုလ်|အရာရှိ",ANY,1300,18,1],
["ကျောက်မျက်/ရွှေပန်းထိမ်","ပန်းထိမ်လက်ထောက်|ရွှေ/ကျောက်မျက်ပန်းထိမ်|ကျောက်မျက်သွေး/စစ်ဆေးသူ|ပန်းထိမ်ဆရာ|ကျောက်မျက်ပညာရှင်",ANY,1300,18,0],
["NUG ဝန်ထမ်း (၂၀၂၁-၂၀၂၉)","စေတနာ့ဝန်ထမ်း|အရာရှိ|အကြီးတန်းအရာရှိ|ညွှန်ကြားရေးမှူး|ဌာနမှူး",()=>S.y>=2021&&S.y<=2029&&MU(),950,18,0],
["ရှေ့နေ","ရှေ့နေအလုပ်သင်|အငယ်တန်းရှေ့နေ|အထက်တန်းရှေ့နေ|တရားလွှတ်တော်ရှေ့နေ|တရားသူကြီး|တရားသူကြီးချုပ်",()=>M_("law")()||(DG()&&S.w>=65),2500,18,1],
["သံရုံးဝန်ထမ်း","သံရုံးလက်ထောက်|သံတမန်ရေးရာအရာရှိ|ကောင်စစ်ဝန်/သံမှူး|သံအမတ်ကြီး|နိုင်ငံခြားရေးဝန်ကြီး",()=>DG()&&(M_("ir")()||S.lang>=1||S.ab),2900,18,1]
];

function jobOrgForCid(cid){
  if(S&&S.ab&&S.ab.d){
    if([4,5,26,29,30].includes(cid))return foreignOrg("gov",S.ab.d);
    if(cid===2||cid===3)return foreignOrg("uni",S.ab.d);
    if(cid===7)return `${S.ab.d} Community & Aid Foundation`;
    if(cid===28)return `${S.ab.d} Civic Support Office`;
    return foreignOrg("biz",S.ab.d);
  }
  if(cid===29)return `${(S&&S.town)||"ရန်ကုန်"} တရားရုံးနှင့် ဥပဒေရေးရာဌာန`;
  if(cid===30)return "နိုင်ငံခြားရေးဌာန / သံရုံး";
  if([4,5,26].includes(cid))return eraOrg("gov");
  if(cid===2)return eraOrg("sch");
  if(cid===3)return eraOrg("uni");
  if(cid===7)return `${(S&&S.town)||"ရန်ကုန်"} ဒေသဖွံ့ဖြိုးရေး NGO ရုံး`;
  if(cid===28)return "NUG ပြည်သူ့ဝန်ဆောင်မှုဌာန";
  return eraOrg("biz");
}

const BLD=["တစ်ဦးတည်းလုပ်ငန်းရှင်/Freelance","လုပ်ငန်းငယ်ပိုင်ရှင်","အသေးစားနှင့်အလတ်စားလုပ်ငန်းပိုင်ရှင်/မန်နေဂျင်းဒါရိုက်တာ","ကုမ္ပဏီအုပ်စုအကြီးအကဲ/ဥက္ကဋ္ဌ"];
const jn=(c,l)=>CAR[c][0]+" - "+CAR[c][1].split("|")[l]+" ("+jobOrgForCid(c)+")";
const J=[["လယ်သမား/အလုပ်သမား",()=>1,520],["ဆိုင်ဝန်ထမ်း",()=>S.a>=16,780,16],["အလုပ်သင်",()=>S.a>=16,420,16]].concat(CAR.map(c=>[c[0]+" ("+c[1].split("|")[0]+")",()=>c[2]()&&(!c[5]||GV()),c[3],c[4]]));
const BZ=[["စားသောက်ဆိုင်",3000],["ဆိုင်ကယ်/လျှပ်စစ်ပြင်ဆိုင်",2000],["အွန်လိုင်းရောင်းချရေး",1500]];
let S=null,TB=0,AM=-1,LS=-1,SLOT=1;
const SAVE_KEY=slot=>`mml6_slot_${slot}`;

function isArtCareerName(name){
  if(!name)return false;
  return ["အကဆရာ","အဆို/အသံနည်းပြ","အနုပညာရှင်","ဂီတပညာရှင်","စာရေးဆရာ","Content ဖန်တီးသူ"].some(k=>name.includes(k));
}

function hasDoctorTitle(st){
  if(!st)return false;
  if((st.ad||0)>=3)return true;
  if(st.job&&st.job.cid===0)return true;
  return false;
}
function dispName(nm, st){
  if(!nm)return "";
  let clean=nm.replace(/^ဒေါက်တာ\s+/,"");
  return hasDoctorTitle(st||S)?("ဒေါက်တာ "+clean):clean;
}
function syncDoctorTitle(){
  if(!S||!S.nm)return;
  let clean=S.nm.replace(/^ဒေါက်တာ\s+/,"");
  let wantDr=hasDoctorTitle(S);
  let next=wantDr?("ဒေါက်တာ "+clean):clean;
  if(S.nm!==next){
    S.nm=next;
    if(wantDr)lg(`🎖️ ဂုဏ်ပုဒ် - <b>${S.nm}</b> ဟူသော ဂုဏ်ပုဒ် ချီးမြှင့်ခံရပြီ။`,"y");
  }
}

function showInfoPopup(title, bodyHtml, isUrgent){
  let d=document.createElement("div");
  d.id="md";
  d.onclick=e=>{if(e.target==d)d.remove()};
  d.innerHTML=`<div class="sh"><div class="c ${isUrgent?"r":"y"}"><b>${title}</b><br><br>${bodyHtml}</div><button class="pri" onclick="this.closest('#md').remove()">ဆက်သွားမည်</button></div>`;
  document.body.appendChild(d);
}

function start(){
  S=null;$("hd").innerHTML="";$("st").innerHTML="";$("st").dataset.k="";$("tb").innerHTML="";$("dk").style.display="none";
  let slots=[1,2,3].map(s=>{try{let r=localStorage.getItem(SAVE_KEY(s))||(s===1?localStorage.getItem("mml5"):null);return r?{s,d:JSON.parse(r)}:null}catch(e){return null}}).filter(Boolean);
  let ct=$("ct");
  ct.innerHTML=`<div class="c hero n">${logo(96)}<h2>ငါ့ဘဝ - မြန်မာ</h2><small>၁၉၂၀ မှ ၂၀၂၆ အထိ မြန်မာ့သမိုင်းနဲ့အတူ ဘဝတစ်ခုချင်းစီကို နှစ်စဉ်ရွေးချယ်ပြီး မျိုးဆက်ပေါင်းများစွာ လက်ဆင့်ကမ်းသွားပါ။</small></div>`
    +slots.map(x=>`<button class="pri n" onclick="ld(${x.s})">▶ Slot ${BN(x.s)} ဆက်ကစားမယ် (${dispName(x.d.S.nm,x.d.S)} · အသက် ${BN(x.d.S.a)} · မျိုးဆက် ${BN(x.d.S.gen)})</button>`).join("")
    +`<div class="c n"><small>ဇာတ်ကောင်အမည် (မမွေးဖွားမီ ပြင်နိုင်တယ်)</small><input id="nmIn" maxlength="20" placeholder="အမည်ထည့်ပါ (မထည့်ရင် ကိုယ့်ဟာကိုယ် ရွေးပေးမယ်)"></div>`
    +`<button class="pri n" onclick="init();mus(1)">🪷 ၁၉၂၀ ကနေ ဘဝစမယ်</button>`
    +`<button class="n" onclick="inst()">📲 ဖုန်းထဲ ထည့်သွင်းမယ် (အခမဲ့)</button>`+RULES;
  ct.classList.remove("in");void ct.offsetWidth;ct.classList.add("in");
}

function init(){
  let g=R(2),e=R(8),r=R(10)<7?0:1+R(3),f=R(3),rg=R(10)<4?0:R(10)<7?1:2,y=1920+R(3),d=(e?1:0)+(r?1:0)+(f==0?1:0)+(rg?1:0);
  S={
    y,y0:y,a:0,g,e,r,f,rg,sys:y<2012?10:12,sk:R(3),d,
    w:50+R(21)-d*3,h:60+R(31),l:30+R(61),s:50+R(21)-d*2,fm:null,m:0,fw:[300,2000,10000][f],
    c:0,k:0,sc:0,dr:0,uni:0,deg:0,mar:0,ma:0,role:"",rgm:"",st:"",mu:0,mk:0,mj:0,uy:0,
    job:null,lastJob:null,lang:0,ex:0,T:5,ev:null,L:[],kids:[],sr:50,ef:0,mf:0,rr:0,vr:0,trips:0,
    hb:{},dt:0,cz:{},lg:LGI(),gold:0,car:0,house:0,rt:0,pp:0,pa:0,ab:null,fr:[],co:[],
    pt:null,inl:null,dy:0,bh:[],yb:null,yi:0,dep:0,cdm:0,gv:0,lsy:{},ins:{},sm:{},
    lf:{h:f?1:0,d:f?1:0,c:f?1:0},
    lfMult:{h:1,d:1,c:1},
    ad:0,ae:0,ct:[],exc:{},pe:0,usedNews:[],ach:[],
    nm:(($("nmIn")&&$("nmIn").value.trim())||pn(g,y,1,e,1)),
    gen:(LIN.gen=1),end:0
  };
  S.par=[
    {n:"ဦး"+pn(0,y-30,1,0,1),r:"ဖခင်",by:y-22-R(10),rel:70,al:1,g:0},
    {n:"ဒေါ်"+pn(1,y-28,1,0,1),r:"မိခင်",by:y-20-R(8),rel:75,al:1,g:1}
  ];
  S.town=town(e,rg);
  lg(`<b>မွေးဖွားတယ်</b> · ${g?"အမျိုးသမီး":"အမျိုးသား"} · ${ETH[e]} · ${REL[r]} · ${FAM[f]}အိမ်ထောင်စု · ${S.town} (${RGN[rg]}) · မွေးနှစ် ${y} · ခက်ခဲမှု ${"⭐".repeat(d+1)} · ${S.sys}တန်းစနစ်`);
  TB=0;view();
}

function lg(t,c){if(S.L.length>200)S.L.shift();S.L.push(`<div class="${c||""}">${t}</div>`)}
function ap(fx, reason){
  fx=typeof fx=="function"?fx():fx;
  let o=[],bad=0,good=0;
  for(let k in fx){
    let v=fx[k];
    if(k=="f")k="fm";
    if(k=="fm"&&S.fm===null)continue;
    if(k=="m"&&v){
      if(S.a<16)S.fw=Math.max(0,(S.fw||0)+v);
      else mv(v,reason||"လုပ်ဆောင်ချက်/ဖြစ်ရပ်");
    }else{
      S[k]=(S[k]||0)+v;
      if(ST.includes(k))S[k]=cl(S[k]);
    }
    if(v<0)bad++;
    if(v>0)good++;
    if(N[k]&&v)o.push(k=="m"?"ငွေ "+(v>0?"+":"")+K(v):N[k]+(v>0?" +":" ")+v);
  }
  syncDoctorTitle();
  if(bad>=2&&$("app"))$("app").classList.add("shake"),setTimeout(()=>$("app")&&$("app").classList.remove("shake"),400);
  else if(good>=2&&$("hd"))$("hd").classList.add("flash-gold"),setTimeout(()=>$("hd")&&$("hd").classList.remove("flash-gold"),650);
  return o.join("၊ ");
}
window.alert=m=>{let d=document.createElement("div");d.className="ts";d.textContent=m;document.body.appendChild(d);setTimeout(()=>d.remove(),2200)};
function noTurns(){
  sfx("outofturns");
  if($("dk"))$("dk").classList.add("shake"),setTimeout(()=>$("dk")&&$("dk").classList.remove("shake"),400);
  alert("ဒီနှစ် လှုပ်ရှားမှု ကုန်သွားပြီ");
  return false;
}
const BN=n=>String(n).replace(/\d/g,d=>"၀၁၂၃၄၅၆၇၈၉"[d]);
const K=v=>{let k=Math.round(v*1000),s=k<0?"-":"";k=Math.abs(k);if(k<100000)return s+BN(k.toLocaleString("en-US"))+" ကျပ်";let l=Math.floor(k/100000),t=Math.floor(k%100000/10000);return s+BN(l.toLocaleString("en-US"))+"သိန်း"+(t?" "+BN(t)+"သောင်း":"")};
function mv(v,l){S.m+=v;if(S.yb){S.yb.it[l]=(S.yb.it[l]||0)+v;if(v>0&&["လုပ်ခလစာ","လုပ်ငန်းအမြတ်","ပြည်ပလုပ်ခ"].includes(l))S.yi=(S.yi||0)+v}}
function fin(){if(S.yb&&S.a>=16){let sum=Object.values(S.yb.it).reduce((a,b)=>a+b,0),net=S.m-S.yb.m0;S.bh.push({a:S.a,y:S.y,it:S.yb.it,ot:net-sum,net});if(S.bh.length>40)S.bh.shift()}S.yb={m0:S.m,it:{}};S.yi=0;S.lsy={}}
function sheet(h){let d=document.createElement("div");d.id="md";d.onclick=e=>{if(e.target==d)d.remove()};d.innerHTML=`<div class="sh">${h}<button onclick="this.closest('#md').remove()">ပိတ်မယ်</button></div>`;document.body.appendChild(d)}
function bud(){
  if(S.a<16)return sheet(`<div class="c">အသက် ၁၆ မပြည့်သေးတော့ ကိုယ့်ဘာသာ ငွေမကိုင်ရသေးဘူး။ မိဘဆီက တောင်းသုံးရတယ်။</div>`);
  let cur=S.yb?{a:S.a,y:S.y,it:S.yb.it,net:S.m-S.yb.m0,ot:S.m-S.yb.m0-Object.values(S.yb.it).reduce((a,b)=>a+b,0)}:null,L=(cur?[cur]:[]).concat(S.bh.slice().reverse().slice(0,15));
  sheet(`<b>💰 ငွေစာရင်း</b><div class="c">လက်ကျန်ငွေ ${K(S.m)}<br>စုစုပေါင်း ပိုင်ဆိုင်မှု ${K(NW(S))}</div>`+L.map((r,i)=>`<div class="c"><b>${r.y} (အသက် ${r.a})${i==0&&cur?" - ဒီနှစ်":""}</b> · ${r.net>=0?"+":""}${K(r.net)}`+Object.entries(r.it).map(([k,v])=>`<br><small>${k}: ${v>=0?"+":""}${K(v)}</small>`).join("")+(Math.abs(r.ot)>=1?`<br><small>အခြား (လုပ်ဆောင်ချက်/ဖြစ်ရပ်/ဝယ်ယူမှု): ${r.ot>=0?"+":""}${K(r.ot)}</small>`:"")+`</div>`).join(""));
}
let DP=null;addEventListener("beforeinstallprompt",e=>{e.preventDefault();DP=e});
function inst(){if(DP){DP.prompt();DP=null}else sheet(`<b>📲 ဖုန်းထဲ ထည့်သွင်းနည်း</b><div class="c">iPhone/iPad - Safari ရဲ့ Share ခလုတ် → "Add to Home Screen"<br>Android - Chrome ရဲ့ ⋮ menu → "Install app" (သို့မဟုတ် "Add to Home screen")<br>ကွန်ပျူတာ - လိပ်စာဘားက Install အိုင်ကွန်ကို နှိပ်ပါ</div>`)}
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));

function cart(z, stObj){
  let st=stObj||S;
  let a=st.a,k=Math.min(1,.5+a/24),old=a>60,m=!st.g,sk=["#f2c9a0","#e0a874","#c98a56"][st.sk||0],hc=old?"#e8e8e8":"#222",ad=a>=18,sd=st.s>60?"M42 58q8 9 16 0":st.s<30?"M43 62q7-6 14 0":"M44 60h12",ck=m?"#f6a8a0":"#f3e9a0";
  let topCol=st.job&&st.job.cid===0?"#f8fafc":(m?"#fff":"#e0457b");
  let body=`<rect x="44" y="64" width="12" height="12" fill="${sk}"/><path d="M22 100q0-26 28-26t28 26z" fill="${topCol}"/><rect x="26" y="88" width="48" height="12" fill="${m?"#2f6f4f":"#8e44ad"}"/>`+[0,1,2,3,4].map(i=>`<rect x="${30+i*9}" y="88" width="2" height="12" fill="${m?"#1e4d8c":"#f1c40f"}"/>`).join("");
  let glasses=(st.w>=72||a>=52)?`<circle cx="42" cy="44" r="6.2" fill="none" stroke="#3b230c" stroke-width="1.3"/><circle cx="58" cy="44" r="6.2" fill="none" stroke="#3b230c" stroke-width="1.3"/><line x1="48.2" y1="44" x2="51.8" y2="44" stroke="#3b230c" stroke-width="1.3"/>`:"";
  let face=`<circle cx="50" cy="46" r="22" fill="${sk}"/><circle cx="29" cy="48" r="4" fill="${sk}"/><circle cx="71" cy="48" r="4" fill="${sk}"/><circle cx="42" cy="44" r="3.2" fill="#222"/><circle cx="58" cy="44" r="3.2" fill="#222"/><circle cx="43" cy="43" r="1" fill="#fff"/><circle cx="59" cy="43" r="1" fill="#fff"/>${glasses}<path d="${sd}" stroke="#a33" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="36" cy="54" r="4.5" fill="${ck}" opacity=".85"/><circle cx="64" cy="54" r="4.5" fill="${ck}" opacity=".85"/>`+(old?'<path d="M38 35q12-5 24 0" stroke="#bbb" stroke-width="2" fill="none"/>':"");
  let hair=m?(ad?`<ellipse cx="50" cy="28" rx="23" ry="11" fill="#f4a6c0"/><circle cx="73" cy="22" r="7" fill="#f4a6c0"/>`:`<path d="M27 40q0-22 23-22t23 22q-8-12-23-12t-23 12z" fill="${hc}"/>`):`<path d="M26 44q-2-26 24-26t24 26q-6-14-24-14t-24 14z" fill="${hc}"/><circle cx="50" cy="14" r="9" fill="${hc}"/><circle cx="58" cy="12" r="4" fill="#ff3b7a"/>`;
  let gradCap=(st.deg&&a>=21&&a<=26)?`<polygon points="50,10 24,20 50,28 76,20" fill="#1e1b18"/><rect x="44" y="22" width="12" height="5" fill="#1e1b18"/><line x1="72" y1="21" x2="72" y2="32" stroke="#eab43c" stroke-width="1.8"/>`:"";
  return `<svg width="${z}" height="${z}" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="#ffe3a8" stroke="#c8961e" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><g transform="translate(50 100) scale(${k}) translate(-50 -100)">${body}${face}${hair}${gradCap}</g></svg>`;
}

const MILESTONES=[
  ["phd_doc","🎖️ ဒေါက်တာဘွဲ့/ဆရာဝန်",()=>hasDoctorTitle(S)],
  ["abroad","🌏 နိုင်ငံခြားအတွေ့အကြုံ",()=>Boolean(S.ab||S.rt)],
  ["schol","🎓 နိုင်ငံတကာ Scholarship",()=>Boolean(S.schol)],
  ["tycoon","💎 သိန်း ၅၀၀+ ကြွယ်ဝမှု",()=>NW(S)>=50000],
  ["polyglot","🗣️ ဘာသာစကား ၂ မျိုး+",()=>Object.values(S.lg||{}).filter(x=>x.lv>=1).length>=2],
  ["legacy3","🪷 မျိုးဆက် ၃ ဆက်+",()=>(S.gen||1)>=3],
  ["clean","⚖️ သမာဓိရှင် (အသက် ၆၀+)",()=>S.a>=60&&!S.c&&!S.k]
];

function checkMilestones(){
  if(!S)return;
  S.ach=S.ach||[];
  LIN.ach=LIN.ach||[];
  MILESTONES.forEach(([id,label,cond])=>{
    if(!S.ach.includes(id)&&cond()){
      S.ach.push(id);
      if(!LIN.ach.includes(id))LIN.ach.push(id);
      sfx("levelup");
      lg(`🏅 <b>အောင်မြင်မှုမှတ်တိုင်သစ်:</b> ${label}`,"y");
    }
  });
}

function pf(){
  let d=document.createElement("div");d.id="md";d.onclick=e=>{if(e.target==d)d.remove()};
  let ed=S.deg?MJ[S.deg-1].n+" ဘွဲ့ရ":S.uni?MJ[S.mj-1].n+" ကျောင်းသား":S.dr?"ကျောင်းထွက်":S.mu?"အခြေခံပညာအောင်":"ကျောင်းသား/ကလေး";
  let unlocked=MILESTONES.filter(m=>(LIN.ach||[]).includes(m[0])||(S.ach||[]).includes(m[0]));
  let badgeHtml=unlocked.length?`<div class="c"><b>🏅 မျိုးဆက်အောင်မြင်မှုများ</b><div class="badge-grid">${unlocked.map(m=>`<span class="badge-pill">${m[1]}</span>`).join("")}</div></div>`:"";
  d.innerHTML=`<div class="sh"><div style="text-align:center">${cart(150)}<br><b style="font-size:20px">${dispName(S.nm)}</b><br><small>မျိုးဆက် ${BN(S.gen)} · အသက် ${BN(S.a)} · ${BN(S.y)}</small></div><div class="c">${S.g?"အမျိုးသမီး":"အမျိုးသား"} · ${ETH[S.e]} · ${REL[S.r]}<br>${FAM[S.f]}အိမ်ထောင်စု · ${S.ab?S.ab.d+" (နိုင်ငံခြား)":(S.town||"")+" ("+RGN[S.rg]+")"}<br>ခက်ခဲမှု ${"⭐".repeat(S.d+1)}</div><div class="c">📚 ${ed}<br>💼 ${S.job?S.job.n:"အလုပ်မရှိ"}${S.role?" · "+S.role:""}<br>🎓 Scholarship: ${S.schol?`ရရှိပြီး (${BN(S.scholLeft||0)} နှစ်ကျန် · ဘွဲ့တစ်ခုစာ)`:(S.ab&&S.ab.sc?"လျှောက်ထားနိုင်သည်":"မရှိသေး")}<br>🗣️ အင်္ဂလိပ် ${S.lg?S.lg.EN.lv:0}<br>💰 ${S.a<16?"မိဘဆီက တောင်းသုံးရတယ်":K(S.m)}<br>🏠 ${S.house?"အိမ်ပိုင်ရှိ":"အိမ်မရှိ"} · 🚗 ${S.car?"ကားရှိ":"ကားမရှိ"} · 🥇 ${K(S.gold||0)}<br>💍 ${S.mar?"အိမ်ထောင်ရှိ":"လူပျို/အပျို"} · 👶 သားသမီး ${BN(S.kids.length)}</div>${badgeHtml}<div class="c"><small>${RG(S.y)}</small></div><button onclick="this.closest('#md').remove()">ပိတ်မယ်</button></div>`;
  document.body.appendChild(d);
}

const RULES=`<div class="c n"><b>📜 ကစားနည်းစည်းမျဉ်း</b><br><small>မီတာ ၄ ခု (ကျန်းမာရေး၊ ရုပ်ရည်၊ စိတ်ခွန်အား၊ ဉာဏ်ပညာ) ကို ၅၀% အောက် မကျအောင် ထိန်းပါ။<br>• အသက် ၆၀ ကျော်လျှင် အလုပ်အများစု ပင်စင်ယူရပြီး ကိုယ်ပိုင်လုပ်ငန်းနှင့် အနုပညာလုပ်ငန်းများသာ လုပ်နိုင်ပါမည်။<br>• ဆရာဝန်နှင့် ပါရဂူဘွဲ့ရများကို "ဒေါက်တာ" ဂုဏ်ပုဒ် ချီးမြှင့်သည်။<br>• သားသမီးနဲ့ ချစ်ခင်မှု ၈၀% ကျော်မှ နောက်မျိုးဆက်အဖြစ် ဆက်ကစားလို့ ရမယ်။ မဟုတ်ရင် ၁၉၂၀ ကနေ ပြန်စရမယ်။</small></div>`;
const logo=z=>`<div style="display:inline-flex;align-items:center;justify-content:center;width:${z}px;height:${z}px;border-radius:26%;background:linear-gradient(135deg,#b8293d 0%,#3a1610 55%,#d49422 100%);border:2px solid var(--gold2);font-size:${Math.round(z*.48)}px">🪷</div>`;
function ibar(){try{if(!matchMedia("(display-mode: standalone)").matches&&!navigator.standalone)$("ib").hidden=false}catch(e){}}

function bars(){
  let C={w:"#ff9f0a",h:"#34c759",l:"#af52de",s:"#0a84ff",fm:"#ff375f"},ks=ST.filter(k=>k!="fm"||S.fm!==null),key=ks.join(),st=$("st");
  $("hd").innerHTML=`<div class="av" onclick="pf()">${cart(52)}</div><div class="nm"><b>${dispName(S.nm)}</b><small>မျိုးဆက် ${BN(S.gen)} · အသက် ${BN(S.a)} · ${BN(S.y)}</small><small>${S.ab?S.ab.d+" · ":""}${RG(S.y)}</small></div><span class="m" onclick="bud()">${S.a<16?"👪 မိဘပံ့ပိုး":"💰 "+K(S.m)} ›</span>`;
  if(st.dataset.k!=key||st.innerHTML==""){st.dataset.k=key;st.innerHTML=ks.map(k=>`<div class="b" data-k="${k}"><span>${N[k]}</span><i><u style="background:${C[k]};width:0"></u></i><em></em></div>`).join("");void st.offsetWidth}
  ks.forEach(k=>{let r=st.querySelector(`[data-k="${k}"]`),v=Math.round(S[k]);r.querySelector("u").style.width=v+"%";r.querySelector("em").textContent=BN(v)+"%";r.classList.toggle("lo",v<50)});
}

function view(an){
  bars();
  $("tb").style.setProperty("--i",TB);
  $("tb").innerHTML=[["ဘဝ","📜"],["ပညာ/အလုပ်","💼"],["လုပ်ဆောင်ချက်","⚡"],["လူမှုရေး","👥"],["ဆက်တင်","⚙️"]].map((x,i)=>`<b class="${TB==i?"on":""}" onclick="TB=${i};AM=-1;LS=-1;TV='';ED='';view(1)"><span>${x[1]}</span>${x[0]}</b>`).join("");
  let ct=$("ct");ct.innerHTML=[feed,t3,acts,fam,sett][TB]();
  if(an){ct.classList.remove("in");void ct.offsetWidth;ct.classList.add("in")}
  $("dk").style.display=TB==0?"flex":"none";dock();
  if(TB==0)ct.scrollTop=ct.scrollHeight;
  sv();
}

function dock(){
  $("dk").innerHTML=`<div class="bs"><b>ဒီနှစ် လှုပ်ရှားမှု ${BN(S.T)}/၅</b><br><small>${S.ev?"ဖြစ်လာတဲ့ကိစ္စကို အရင်ဆုံးဖြတ်ပါ":S.end?"ဘဝ ပြီးဆုံးသွားပြီ":"အသက် +၁ နှိပ်ပြီး နောက်တစ်နှစ်သွားမယ်"}</small></div><button class="ag" ${S.ev||S.end?"disabled":""} onclick="next()">+<small>အသက်</small></button>`;
}

function sv(f){
  try{
    if(S&&(f||!S.ev)){
      S.L=S.L.slice(-120);
      localStorage.setItem(SAVE_KEY(SLOT),JSON.stringify({S,LIN,BGM_STYLE,MO,MV,SO,savedAt:Date.now()}));
      localStorage.setItem("mml6_active",String(SLOT));
    }
  }catch(e){}
}
function ld(slot){
  try{
    SLOT=slot||Number(localStorage.getItem("mml6_active"))||1;
    let raw=localStorage.getItem(SAVE_KEY(SLOT))||localStorage.getItem("mml5");
    if(!raw)return start();
    let d=JSON.parse(raw);
    S=d.S;LIN=d.LIN||LIN;
    if(d.BGM_STYLE!==undefined)BGM_STYLE=d.BGM_STYLE;
    if(d.MO!==undefined)MO=d.MO;
    if(d.MV!==undefined)MV=d.MV;
    if(d.SO!==undefined)SO=d.SO;
    S.lf=S.lf||{h:1,d:1,c:1};
    S.lfMult=S.lfMult||{h:1,d:1,c:1};
    S.usedNews=S.usedNews||[];
    S.ach=S.ach||[];
    syncDoctorTitle();
    S.eo=null;TB=0;AM=-1;LS=-1;if(MO)mus(1);view();
  }catch(e){start()}
}
function exportSave(){
  if(!S)return;
  let blob=new Blob([JSON.stringify({S,LIN,BGM_STYLE,MO,MV,SO})],{type:"application/json"});
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=`ngar-bawa-gen${S.gen}-${S.y}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function buildObituaryData(){
  let ed=S.deg?MJ[S.deg-1].n+" ဘွဲ့ရ"+(S.ad>=3?" (ပါရဂူ)":""):S.mu?"အခြေခံပညာအောင်":"ပညာရေးခရီး ဖြတ်သန်းခဲ့သူ";
  let lifeSummary=[];
  lifeSummary.push(`${BN(S.y0)} ခုနှစ်တွင် ${S.town||"မြန်မာပြည်"}၌ မွေးဖွားခဲ့ပြီး ${BN(S.y)} ခုနှစ်၊ အသက် ${BN(S.a)} နှစ်တွင် ဘဝတစ်ပါးသို့ ကူးပြောင်းခဲ့သည်။`);
  lifeSummary.push(`ပညာရေးအနေဖြင့် ${ed} ဖြစ်ခဲ့ပြီး ${S.job?`နောက်ဆုံးတာဝန်မှာ ${S.job.n} ဖြစ်သည်`:`လွတ်လပ်စွာ ဘဝခရီးကို ဖြတ်သန်းခဲ့သည်`}။`);
  if(S.mar&&S.pt)lifeSummary.push(`အိမ်ထောင်ဖက် ${S.pt.n} နှင့် ဘဝကို မျှဝေဖြတ်သန်းခဲ့ပြီး သားသမီး ${BN(S.kids.length)} ဦး ထွန်းကားခဲ့သည်။`);
  else lifeSummary.push(`သားသမီး ${BN(S.kids.length)} ဦး ရှိခဲ့ပြီး မိသားစုနှင့် ပတ်ဝန်းကျင်အပေါ် စေတနာထားခဲ့သည်။`);
  if(S.c>0||S.k>0)lifeSummary.push(`ဘဝလမ်းခရီးတွင် အမှားအယွင်းနှင့် ဥပဒေ/သိက္ခာဆိုင်ရာ စိန်ခေါ်မှုအချို့လည်း ကြုံတွေ့ခဲ့ရသည်။`);
  else lifeSummary.push(`သမာဓိနှင့် ကြိုးစားအားထုတ်မှုတို့ဖြင့် ဘဝကို ရပ်တည်ခဲ့သူတစ်ဦး ဖြစ်သည်။`);
  return {
    name:dispName(S.nm),
    age:BN(S.a),
    years:`${BN(S.y0)} – ${BN(S.y)}`,
    gen:BN(S.gen),
    bio:lifeSummary.join(" ")
  };
}

function obituaryCard(){
  let o=buildObituaryData();
  return `<div class="funeral-card n">
    <div class="funeral-badge">🕊️ အသုဘဖိတ်စာ · ဘဝမှတ်တမ်း</div>
    <div style="margin:6px auto">${cart(96)}</div>
    <div class="funeral-title">${o.name}</div>
    <div class="funeral-sub">အသက် (${o.age}) နှစ် · ${o.years} · မျိုးဆက် (${o.gen})</div>
    <div class="funeral-bio">${o.bio}</div>
    <div class="funeral-quote">“ကောင်းမွန်သော အမှတ်တရများနှင့် မျိုးဆက်သစ်များ၏ ခြေလှမ်းများထဲတွင် ဆက်လက်ရှင်သန်နေပါစေ။”</div>
  </div>`;
}

function feed(){
  let L=S.L.slice(-60),b=S.L.length-L.length,h=L.map((x,i)=>b+i>=(S.rn||0)?x.replace('<div class="','<div class="n '):x).join("");S.rn=S.L.length;
  if(S.end){
    h+=obituaryCard();
    let ok=S.kids.map((k,i)=>[k,i]).filter(x=>x[0].rel>80);
    h+=ok.length
      ?ok.map(x=>`<button class="pri" onclick="hr(${x[1]})">▶ ဆက်ခံသူ - ${x[0].n} အဖြစ် ဆက်ကစားမယ် (အသက် ${BN(S.y-x[0].by)} · ❤️${Math.round(x[0].rel)}%)</button>`).join("")
      :'<button class="pri" onclick="start()">↺ ဆက်ခံသူမရှိပါ · ၁၉၂၀ ကနေ ပြန်စမယ်</button>';
  }else if(S.ev){
    h+=`<div class="c n"><b>${S.ev.t}</b></div>`+S.ev.o.map((x,i)=>`<button onclick="pk(${i})">${x[0]}</button>`).join("");
  }
  return h;
}

function acts(){
  if(AM==3)return lgui();
  if(AM==7)return lfui();
  if(AM<0)return `<div class="c">ဒီနှစ် လှုပ်ရှားမှု <b>${BN(S.T)}/၅</b><br><small>ကိုယ့်အသက်နဲ့ လိုက်တဲ့ လုပ်ဆောင်ချက်တွေပဲ ပေါ်မယ်</small></div>`+ACT.map((c,i)=>(i==3?S.a>=10:c[2].some(x=>S.a>=x[2]))&&(!c[1].startsWith("NUG")||(S.y>=2021&&S.y<=2029))?`<button onclick="AM=${i};view()">${c[0]} ${c[1]} ›</button>`:"").join("");
  let c=ACT[AM];
  return `<button onclick="AM=-1;view()">‹ နောက်သို့</button><div class="c"><b>${c[0]} ${c[1]}</b> · ဒီနှစ် လှုပ်ရှားမှု ${BN(S.T)}/၅</div>`+c[2].map((x,j)=>{
    if(S.a<x[2])return "";
    let free=(AM==7&&j<=6);
    let dis=(!free&&S.T<=0)?"disabled":"";
    return `<button ${dis} onclick="use(ACT[${AM}][2][${j}][1],ACT[${AM}][2][${j}][0],${free})">${x[0]}${free?'<small class="req">လှုပ်ရှားမှု အမှတ် မကုန်ပါ</small>':""}</button>`;
  }).join("");
}

function haveChildNow(){
  if(!S.mar||!S.pt)return alert("အိမ်ထောင်ရှိမှ သားသမီးယူလို့ရမယ်");
  if(S.a<18)return alert("အသက် ၁၈ ကျော်မှ သားသမီးယူလို့ရမယ်");
  if(S.kids.length>=4)return alert("သားသမီး အများဆုံး အရေအတွက် ပြည့်နေပြီ");
  if(S.T<=0)return noTurns();
  if(S.m<500)return alert("ကလေးမွေးဖွား/ပြုစုစရိတ် ငွေမလောက်ဘူး");
  let g=R(2), n=pn(g,S.y,0,0,1);
  S.kids.push({n,g,by:S.y,rel:75,q:50,edu:0,kidMar:0,kidHasChild:0});
  S.T--;
  mv(-500,"သားသမီးယူခြင်း ကုန်ကျစရိတ်");
  S.s=cl(S.s+3);
  sfx("levelup");
  lg(`👶 ${n} မွေးဖွားလာပြီ။`,"y");
  setTimeout(()=>nameKid(S.kids.length-1),350);
  view();
}

function urgeKidMarry(i){
  let k=S.kids[i]; if(!k)return;
  if(S.T<=0)return noTurns();
  let age=S.y-k.by;
  if(age<20)return alert("သားသမီး အသက် ၂၀ ကျော်မှ အိမ်ထောင်ပြုရန် တိုက်တွန်းလို့ရမယ်");
  S.T--;
  if(k.kidMar){
    k.rel=cl(k.rel+2);
    lg(`💍 ${k.n} က အိမ်ထောင်ပြုပြီးသား ဖြစ်နေပါတယ်။`,"y");
  }else if(R(100)<65+(k.rel-50)*.4){
    k.kidMar=1;
    k.rel=cl(k.rel+4);
    S.s=cl(S.s+2);
    sfx("levelup");
    lg(`💍 မိဘတိုက်တွန်းမှုကြောင့် ${k.n} (${BN(age)} နှစ်) အိမ်ထောင်ပြုလိုက်ပြီ။`,"y");
  }else{
    k.rel=cl(k.rel-4);
    S.s=cl(S.s-2);
    sfx("bad");
    lg(`💬 ${k.n} ကို အိမ်ထောင်ပြုဖို့ တိုက်တွန်းပေမဲ့ အချိန်ယူဦးမယ်လို့ ပြောတယ်။`,"r");
  }
  view();
}

function urgeKidChild(i){
  let k=S.kids[i]; if(!k)return;
  if(S.T<=0)return noTurns();
  let age=S.y-k.by;
  if(age<20)return alert("သားသမီး အသက် ၂၀ ကျော်မှ သားသမီးယူရန် တိုက်တွန်းလို့ရမယ်");
  S.T--;
  if(!k.kidMar)k.kidMar=1;
  if(R(100)<60+(k.rel-50)*.4){
    k.kidHasChild=(k.kidHasChild||0)+1;
    k.rel=cl(k.rel+5);
    S.s=cl(S.s+3);
    sfx("levelup");
    lg(`👶 မိဘတိုက်တွန်းမှုကြောင့် ${k.n} တို့ မိသားစုမှာ မြေးလေးတစ်ယောက် ထပ်မံရရှိလာပြီ။`,"y");
  }else{
    k.rel=cl(k.rel-3);
    sfx("bad");
    lg(`💬 ${k.n} ကို သားသမီးယူဖို့ တိုက်တွန်းပေမဲ့ အခြေအနေ စောင့်ကြည့်ဦးမယ်လို့ ဆိုတယ်။`,"r");
  }
  view();
}

function fam(){
  let h=`<div class="c"><b>👪 မိဘများ</b></div>`,P=S.pt;
  (S.par||[]).forEach((p,i)=>{
    let a=S.y-p.by;
    h+=p.al
      ?`<div class="c">${p.r} ${p.n} · ${BN(a)} နှစ်<br>❤️ ချစ်ခင်မှု ${Math.round(p.rel)}%</div><button onclick="pa(${i})">အချိန်ပေး ဂရုစိုက်မယ်</button>`
      :`<div class="c">🕯️ ${p.r} ${p.n} (ကွယ်လွန်)</div>`;
  });
  if(S.a>=16){
    if(P){
      h+=`<div class="c"><b>${P.st=="m"?"💑 ဇနီး/ခင်ပွန်း":P.st=="e"?"💍 စေ့စပ်ထားသူ":"❤️ ချစ်သူ"}</b> ${P.n}${P.nat!="မြန်မာ"?` (${P.nat}နိုင်ငံသား)`:""}<br>ချစ်ခင်မှု ${Math.round(S.sr)}%</div><button onclick="pt(0)">အချိန်ပေးမယ်</button>`;
      if(P.st=="d"&&S.sr>=60&&S.a>=18)h+=S.g?`<small>ချစ်ခင်မှုများရင် သူ့ဘက်က လက်ထပ်ဖို့ ပြောလာနိုင်တယ်။</small>`:`<button onclick="pt(1)">💍 လက်ထပ်ခွင့်တောင်းမယ် (လက်စွပ်နဲ့ စေ့စပ်ခ ${K(2000)})</button>`;
      if(P.st=="e")h+=`<button onclick="pt(5)">🎊 မင်္ဂလာပွဲ လုပ်မယ်${S.g?"":" ("+K(1000)+")"}</button>`;
      if(P.st=="m"&&S.a>=18&&S.kids.length<4)h+=`<button class="pri" onclick="haveChildNow()">👶 သားသမီးယူရန် (${K(500)})</button>`;
      h+=P.st=="m"?`<button onclick="pt(3)">ကွာရှင်းမယ်</button>`:`<button onclick="pt(4)">လမ်းခွဲမယ်</button>`;
      if(P.st=="m"&&S.inl)h+=`<div class="c">👵 ယောက္ခမအိမ်ထောင်စု ❤️ ${Math.round(S.inl.rel)}%</div><button onclick="pt(2)">အချိန်ပေးမယ်</button>`;
    }else h+=`<button onclick="dt()">💘 ချစ်သူရှာမယ် (တစ်နှစ်တစ်ခါ · ~${BN(dc())}%)</button>`;
  }
  S.kids.forEach((k,i)=>{
    let a=S.y-k.by;
    let stTxt=(k.kidMar?"💍 အိမ်ထောင်ရှိ":"")+(k.kidHasChild?` · 👶 မြေး ${BN(k.kidHasChild)} ဦး`:"");
    h+=`<div class="c"><b>${k.g?"👧":"👦"} ${k.n}</b> · ${BN(a)} နှစ်${stTxt?` (${stTxt})`:""}<br>❤️ ချစ်ခင်မှု ${Math.round(k.rel)}% · 🧠 ${Math.round(k.q)}% · 📚 ပညာ ${BN(Math.floor(k.edu))}</div><button onclick="ka(${i},0)">အချိန်ပေးမယ်</button><button onclick="ka(${i},1)">စကားပြော နားထောင်ပေးမယ်</button>`+(a>=5&&a<=22?`<button onclick="ka(${i},2)">ကျောင်းစရိတ် ထောက်ပံ့မယ် (ငွေ -800)</button>`:"")+(a>=20?`<button onclick="urgeKidMarry(${i})">💍 အသက် ၂၀ ကျော် သားသမီးကို အိမ်ထောင်ပြုရန် တိုက်တွန်းမယ်</button><button onclick="urgeKidChild(${i})">👶 အသက် ၂၀ ကျော် သားသမီးကို သားသမီးယူရန် တိုက်တွန်းမယ်</button>`:"");
  });
  h+=`<div class="c"><b>🧑‍🤝‍🧑 သူငယ်ချင်းများ</b></div>`+(S.fr.length?S.fr.map((f,i)=>`<button onclick="fa(${i})">${f.n} ❤️${Math.round(f.rel)}% · အချိန်ပေးမယ်</button>`).join(""):"<small>သူငယ်ချင်း မရှိသေးဘူး</small>");
  if(S.co.length)h+=`<div class="c"><b>💼 လုပ်ဖော်ကိုင်ဖက်များ</b></div>`+S.co.map((f,i)=>`<button onclick="ca(${i})">${f.n} ❤️${Math.round(f.rel)}% · အတူထမင်းစားမယ်</button>`).join("");
  return h+`<div class="c r">💡 ကိုယ်ဆုံးသွားရင် သားသမီးနဲ့ ချစ်ခင်မှု ၈၀% ကျော်မှ နောက်မျိုးဆက် ဆက်ကစားလို့ရပြီး အမွေ ${K(NW(S)*.9)} ရမယ်။ မဟုတ်ရင် ၁၉၂၀ ကနေ ပြန်စရမယ်။</div>`;
}

function ka(i,t){if(S.T<=0)return noTurns();if(t==2&&S.m<800)return alert("ငွေမလောက်ဘူး");let k=S.kids[i];if(t==0){k.rel=cl(k.rel+6);k.q=cl(k.q+1)}if(t==1){k.rel=cl(k.rel+4);k.q=cl(k.q+3)}if(t==2){k.edu=Math.min(10,k.edu+1);k.q=cl(k.q+1)}use(t==2?{m:-800}:{s:1},k.n+" - "+["အချိန်ပေး","စကားပြောနားထောင်","ပညာရေးထောက်ပံ့"][t])}
function fa(i){
  if(S.T<=0)return noTurns();
  let f=S.fr[i];
  f.rel=cl(f.rel+8);
  let note="";
  if(S.mar&&S.pt&&f.g!==undefined&&f.g!==S.g){
    S.sr=cl(S.sr-5);
    note=" · အိမ်ထောင်ဖက် ချစ်ခင်မှု -5%";
  }
  use({s:2},f.n+" နဲ့ အချိန်ပေး"+note);
}
function ca(i){if(S.T<=0)return noTurns();S.co[i].rel=cl(S.co[i].rel+8);use({s:1},S.co[i].n+" နဲ့ အတူထမင်းစား")}
const NATS=["ထိုင်း","ဂျပန်","ကိုရီးယား","စင်ကာပူ","ဩစတြေးလျ","အမေရိကန်","အင်္ဂလန်"];
const dc=()=>Math.max(5,Math.min(80,Math.round(70-(S.a-16)*1.6+S.l*.2+S.s*.1-(S.l<50?20:0))));
function dt(){if(S.dy==S.y)return alert("ဒီနှစ် ချစ်သူရှာပြီးပြီ");S.dy=S.y;if(R(100)>=dc()){sfx("bad");lg("💔 ဒီနှစ်တော့ ဖူးစာမဆုံသေးဘူး။ အသက်ကြီးလာရင် အခွင့်အလမ်း ပိုနည်းလာတတ်တယ်။");return view()}let ss=R(100)<(S.y>=2100?12:S.y>=2040?8:0),g=ss?S.g:(S.g?0:1),fo=S.ab?R(10)<7:R(10)<1,nat=fo?(S.ab?S.ab.d:NATS[R(NATS.length)]):"မြန်မာ";S.pt={n:pn(g,S.y-S.a+R(7)-3,0,0,nat=="မြန်မာ"),g,nat,st:"d"};S.sr=50+R(25);sfx("good");lg(`💘 ${S.pt.n} ${nat!="မြန်မာ"?"("+nat+"နိုင်ငံသား) ":""}နဲ့ ချစ်သူဖြစ်သွားပြီ။`,"r");view()}
function pt(t){
  let P=S.pt;if(!P)return;
  if(t==0||t==2){if(S.T<=0)return noTurns();if(t==0){S.sr=cl(S.sr+8);return use({s:2},P.n+" နဲ့ အချိန်ပေး")}S.inl.rel=cl(S.inl.rel+8);return use({s:1},"ယောက္ခမအိမ်ထောင်စုနဲ့ အချိန်ပေး")}
  if(t==1){if(S.m<2000)return alert("စေ့စပ်စရိတ် ငွေမလောက်ဘူး");mv(-2000,"လက်စွပ်နဲ့ စေ့စပ်စရိတ်");if(R(100)<S.sr*.9+(S.m>8000?5:0)){P.st="e";S.sr=cl(S.sr+5);sfx("levelup");lg(`💍 ${P.n} က လက်ခံလိုက်ပြီ။ စေ့စပ်ပြီးပြီ`,"r")}else{S.sr=cl(S.sr-15);sfx("bad");lg(`💔 ${P.n} က ငြင်းလိုက်တယ်။`,"r");if(R(10)<3)S.pt=null}return view()}
  if(t==5){if(!S.g){if(S.m<1000)return alert("မင်္ဂလာပွဲစရိတ် ငွေမလောက်ဘူး");mv(-1000,"မင်္ဂလာပွဲစရိတ်")}P.st="m";S.mar=1;S.ma=S.a;S.inl={rel:S.a>=18&&S.a<=23?40:60};if(S.a>=18&&S.a<=23)(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel-10)));S.sr=cl(S.sr+8);sfx("levelup");lg(`🎊 ${P.n} နဲ့ လက်ထပ်လိုက်ပြီ။`,"r");return view()}
  if(t==4){S.pt=null;lg("လမ်းခွဲလိုက်တယ်။");sfx("bad");ap({s:-4});return view()}
  if(t==3)divorce(0);
}
function divorce(a){
  mv(-Math.round(S.m*.3),"ကွာရှင်းမှု ဥစ္စာခွဲဝေ");
  S.kids.forEach(k=>k.rel=cl(k.rel-20));
  S.s=cl(S.s-30);
  S.mar=0;S.pt=null;S.inl=null;
  sfx("bad");
  lg(a?"💔 အိမ်ထောင်ကွဲသွားလို့ စိတ်ခွန်အား -30% နဲ့ သားသမီးချစ်ခင်မှု -20% ထိခိုက်သွားတယ်။":"💔 ကွာရှင်းလိုက်တယ်။ စိတ်ခွန်အား -30% နဲ့ သားသမီးချစ်ခင်မှု -20% လျော့ကျသွားတယ်။","r");
  view();
}
function pa(i){if(S.T<=0)return noTurns();let p=S.par[i];p.rel=cl(p.rel+6);use({s:1},p.r+"နဲ့ အချိန်ပေး")}

const BGM_MODES=[
  {id:0,name:"ဆိုင်းဝိုင်း / ပတ်မဟန်",desc:"မြန်မာ့ဆိုင်းဝိုင်း စည်းချက်နဲ့ ကြေးမောင်းဟန်"},
  {id:1,name:"စောင်းကောက် ငြိမ့်ညောင်းဟန်",desc:"တည်ငြိမ်အေးချမ်းတဲ့ ကြိုးတပ်တူရိယာ ဟန်"},
  {id:2,name:"နှဲ / ပလွေ ကျေးလက်ဟန်",desc:"လေပြည်ညင်းနဲ့အတူ ကျေးလက်တေးသံ ဟန်"},
  {id:3,name:"မင်္ဂလာ / ကြည်နူးဟန်",desc:"ရွှင်လန်းကြည်နူးဖွယ် ပွဲတော်ဟန်"}
];
const SC=[261.63,293.66,329.63,392.00,440.00,523.25,587.33];
const MEL=[0,2,3,4,5,4,3,2,1,2,3,4,3,2,1,0];
const BS=[0,3,4,0];

function sett(){
  return `<div class="c n"><b>💾 ဂိမ်းသိမ်းဆည်းမှု Slot များ (လက်ရှိ: Slot ${BN(SLOT)})</b><br><small>Slot ၃ ခုအထိ ခွဲသိမ်းနိုင်ပြီး JSON အဖြစ်လည်း သိမ်းဆည်းနိုင်ပါတယ်</small></div>`
    +[1,2,3].map(s=>`<button class="${SLOT==s?"pri":""}" onclick="SLOT=${s};sv(1);alert('Slot ${BN(s)} မှာ သိမ်းပြီးပါပြီ');view()">${SLOT==s?"✔ ":""}💾 Slot ${BN(s)} မှာ သိမ်းမယ်</button>`).join("")
    +`<button onclick="exportSave()">📤 Save ဖိုင် (JSON) ထုတ်ယူမယ်</button>`
    +`<div class="c n"><b>🎵 မြန်မာ့ရိုးရာ နောက်ခံတီးလုံး (၄ မျိုး)</b><br><small>ကိုယ်နှစ်သက်တဲ့ တီးလုံးဟန်ကို ရွေးချယ်နားဆင်နိုင်ပါတယ်</small></div>`
    +BGM_MODES.map(m=>`<button class="${BGM_STYLE==m.id?"pri":""}" onclick="setBgmMode(${m.id});view()">${BGM_STYLE==m.id?"✔ ":"🎶 "}${m.name} <small style="display:block;font-weight:400;opacity:.85">${m.desc}</small></button>`).join("")
    +`<button onclick="mus(!MO);view()">${MO?"🔊 နောက်ခံတီးလုံး ပိတ်မယ်":"🔈 နောက်ခံတီးလုံး ဖွင့်မယ်"}</button>`
    +`<div class="c">အသံအတိုးအကျယ် <input type="range" min="0" max="100" value="${Math.round(MV*100)}" oninput="vol(this.value)" style="width:75%"></div>`
    +`<button onclick="SO=!SO;view()">${SO?"🔔 Sound Effect ပိတ်မယ်":"🔕 Sound Effect ဖွင့်မယ်"}</button>`
    +`<button class="pri" onclick="inst()">📲 ဖုန်းထဲ ထည့်သွင်းမယ်</button>`
    +`<button onclick="start()">🆕 ဂိမ်းအသစ် (၁၉၂၀ ကနေ)</button>`+RULES;
}

function pk(i){let x=S.ev.o[i],s=ap(x[1],x[0]);lg("➜ "+x[0]+(s?` (${s})`:""));if(x[2])lg(x[2],"r");sfx(/\+/.test(s||"")&&!/ -/.test(s||"")?"good":/ -/.test(s||"")?"bad":"click");S.ev=null;checkMilestones();view()}
function use(fx,l,noTurnCost){
  if(!noTurnCost&&S.T<=0)return noTurns();
  let r=typeof fx=="function"?fx():fx;
  if(r===false)return;
  if(!noTurnCost)S.T--;
  if(r.f>0)S.gd=(S.gd||0)+1;
  let s=ap(r,l);
  lg("• "+l+(s?` (${s})`:""));
  sfx(r.m&&Math.abs(r.m)>=500?"cash":/\+/.test(s||"")&&!/ -/.test(s||"")?"good":"click");
  checkMilestones();
  view();
}
let TV="",ED="";
const GATE={0:{3:2,4:3},2:{3:1},3:{2:2,3:3,4:3,5:4},29:{3:2,4:3},30:{2:1,3:2,4:3}};
const STD=950;
function pay(cid,l){let c=CAR[cid],n=c[1].split("|").length,f=Math.min(1.6,Math.max(.7,c[3]/2000));return l<n-3?Math.round(STD*1.1):Math.round(STD*[1.5,2.2,3.1][l-(n-3)]*f)}
const ADV=[["ဘွဲ့လွန်လက်မှတ် (PGD)",1,500,1],["မဟာဘွဲ့",2,1500,2],["ပါရဂူဘွဲ့ (PhD)",4,1200,3],["ဘွဲ့လွန်သုတေသန (Postdoc)",2,500,4]];
const CERTS=[["စာရင်းကိုင်လက်မှတ်သင်တန်း",1,300,"acc"],["IT လက်မှတ်သင်တန်း",1,400,"it"],["သူနာပြုသင်တန်း",2,500,"nurse"],["သတင်းမီဒီယာသင်တန်း",1,300,"media"],["ဂရပ်ဖစ်ဒီဇိုင်းသင်တန်း",1,350,"design"],["ဟိုတယ်/ဧည့်ဝန်ဆောင်သင်တန်း",1,300,"hotel"],["ခရီးသွားလမ်းညွှန်လိုင်စင်သင်တန်း",1,300,"tour"],["ရေကြောင်းသင်တန်း",2,600,"sea"],["ချက်ပြုတ်ရေးသင်တန်း",1,250,"chef"]];
const HM=(...k)=>()=>S.deg&&k.includes(MJ[S.deg-1].j),CT=id=>()=>(S.ct||[]).includes(id),OR=(...f)=>()=>f.some(x=>x());
CAR[2][2]=HM("tch");
CAR[8][2]=OR(HM("biz","bba"),CT("acc"));
CAR[11][2]=OR(HM("sci","eng","cs"),CT("it"));
CAR[13][2]=CT("nurse");
CAR[15][2]=OR(HM("art"),CT("media"));
CAR[16][2]=OR(HM("art","arch"),CT("design"));
CAR[17][2]=HM("biz","bba");
CAR[19][2]=OR(MU,CT("hotel"));
CAR[20][2]=CT("tour");
CAR[24][2]=()=>HM("sci","eng")()&&S.lang>=2;
CAR[25][2]=OR(CT("sea"),HM("eng"));

const LF={
  h:[["အခန်းငယ်ငှားနေမယ်",650],["တိုက်ခန်းငှားနေမယ်",1650],["အိမ်ကောင်းငှားနေမယ်",3900]],
  d:[["ရိုးရိုးစားမယ်",420],["ပုံမှန်စားမယ်",780],["ကောင်းကောင်းစားမယ်",1450]],
  c:[["ရိုးရိုးဝတ်မယ်",140],["ပုံမှန်ဝတ်မယ်",340],["လှလှပပဝတ်မယ်",760]]
};

function applyLifestyleYearly(){
  S.lf=S.lf||{h:1,d:1,c:1};
  S.lfMult=S.lfMult||{h:1,d:1,c:1};
  let L=S.lf, e=EM();
  let rates=[0.95, 0.99, 1.02];

  ["h","d","c"].forEach(k=>{
    let idx=L[k]||0;
    S.lfMult[k]=Math.max(0.25, Math.min(3.5, (S.lfMult[k]||1) * rates[idx]));
  });

  let hBase=S.house?[120,260,520][L.h||0]:LF.h[L.h||0][1];
  let hCost=Math.round(hBase * e * S.lfMult.h);
  let dCost=Math.round(LF.d[L.d||0][1] * e * S.lfMult.d);
  let cCost=Math.round(LF.c[L.c||0][1] * e * S.lfMult.c);
  let f=(S.ab?1+.25*S.ab.mu:1) * ((S.uni&&S.a<26)?.55:1);
  let tot=Math.round((hCost+dCost+cCost)*f);
  mv(-tot,S.house?"လူနေစရိတ် (အိမ်ပိုင်သက်သာ)":"လူနေစရိတ် (နေထိုင်မှုအလိုက်)");

  let hIdx=L.h||0;
  let hBondDelta=hIdx===0?-3:hIdx===1?1:4;
  let hMoodDelta=hIdx===0?-2:hIdx===1?1:3;
  S.s=cl(S.s+hMoodDelta);
  (S.par||[]).forEach(p=>{if(p.al)p.rel=cl(p.rel+hBondDelta)});
  S.kids.forEach(k=>{k.rel=cl(k.rel+hBondDelta)});
  if(S.pt)S.sr=cl(S.sr+hBondDelta);

  let dIdx=L.d||0;
  let healthDelta=dIdx===0?-3:dIdx===1?1:3;
  S.h=cl(S.h+healthDelta);

  let cIdx=L.c||0;
  let lookDelta=cIdx===0?-2:cIdx===1?1:3;
  let fameDelta=cIdx===0?-2:cIdx===1?0:2;
  S.l=cl(S.l+lookDelta);
  if(S.fm!==null)S.fm=cl(S.fm+fameDelta);
}

function living(){
  applyLifestyleYearly();
  let e=EM();
  if(S.mar&&S.pt){
    mv(Math.round(680*e),"အိမ်ထောင်ဖက် ဝင်ငွေ");
    mv(-Math.round(520*e),"အိမ်ထောင်ဖက် စျေးဖိုး/အိမ်စားရိတ်");
  }
  S.kids.forEach(k=>{
    let age=S.y-k.by;
    if(age<22)mv(-Math.round((age<6?380:540)*e),"ကလေး စျေးဖိုး/အိမ်စားရိတ်");
  });
  if(S.a>=25)(S.par||[]).forEach(p=>{if(p.al&&S.y-p.by>60)mv(-Math.round(280*e),"မိဘထောက်ပံ့စရိတ်")});
}

function eduYear(){
  let m=S.ab?2*(S.ab.sc&&S.schol?.35:1):1,c;
  if(S.uni&&S.a>=16){
    let t=Math.round(520*EM()*m);
    if(S.ab&&S.ab.sc&&S.schol&&(S.scholLeft||0)>0){
      S.scholLeft--;
      mv(Math.round(550*EM()),"Scholarship ပညာသင်ထောက်ပံ့ကြေး");
      if(S.scholLeft<=0){
        S.schol=0;
        lg("🎓 Scholarship နှစ်အကန့်အသတ် ပြည့်သွားပြီ။ ဘွဲ့သစ်/ထပ်လိုပါက ထပ်လျှောက်နိုင်ပါတယ်။","r");
      }
    }else if(!S.ab&&S.a<26&&S.fw>=t){
      S.fw-=t;
    }else{
      mv(-t,"တက္ကသိုလ်စရိတ်");
    }
  }
  let e=S.ae;
  if(e){
    c=e.k=="a"?ADV[e.i]:CERTS[e.i];
    mv(-Math.round(c[2]*EM()*m),"သင်တန်းစရိတ် - "+c[0]);
    e.n++;S.w=cl(S.w+1);
    if(e.n>=c[1]){
      if(e.k=="a"){
        if(S.w<50&&R(100)<40){e.n--;sfx("bad");lg("စာမေးပွဲကျလို့ တစ်နှစ်ထပ်တက်ရတယ်။","r")}
        else{
          S.ad=Math.max(S.ad,c[3]);S.ae=0;syncDoctorTitle();
          sfx("levelup");lg(`🎓 ${c[0]} ရရှိပြီ။`,"r");
        }
      }else{
        S.ct.push(c[3]);S.ae=0;sfx("levelup");lg(`📜 ${c[0]} ပြီးသွားပြီ။`,"r");
      }
    }
  }
}

function aenr(k,i){
  if(S.a>=50)return alert("အသက် ၅၀ ကျော်ချိန်မှာ သင်တန်းအသစ် တက်ရန် မသင့်တော်တော့ပါ");
  if(S.ae)return alert("လက်ရှိသင်တန်းကို အရင်ပြီးအောင် တက်ပါ");
  if(S.uni)return alert("တက္ကသိုလ်ကို အရင်ပြီးအောင် တက်ပါ");
  let c=k=="a"?ADV[i]:CERTS[i];
  if(k=="a"){
    if(!S.deg)return alert("ရိုးရိုးဘွဲ့ ရပြီးမှ တက်လို့ရမယ်");
    if(S.job)return alert("ပညာသင်ဖို့ အလုပ်ကနေ အရင်ထွက်ပါ");
    if(S.ad<[0,0,2,3][i])return alert("အရင်အဆင့်ဘွဲ့ လိုတယ်");
    if(S.ad>=c[3])return alert("ဒီဘွဲ့ ရပြီးသား ဖြစ်နေပြီ");
  }else{
    if(S.ct.includes(c[3]))return alert("ဒီလက်မှတ် ရပြီးသား ဖြစ်နေပြီ");
    if(c[3]=="nurse"&&!S.mu)return alert("ဆယ်တန်းအောင်မှ တက်လို့ရမယ်");
  }
  if(S.m<c[2]*EM()*(S.ab?2*(S.ab.sc&&S.schol?.35:1):1))return alert("သင်တန်းစရိတ် ငွေမလောက်ဘူး");
  S.ae={k,i,n:0};sfx("good");lg(`📚 ${c[0]} စတက်ပြီ။`,"r");view();
}

function cvCard(){
  return `<div class="c"><b>📄 ကိုယ်ရေးရာဇဝင် (CV)</b><br>ပညာ - ${S.deg?MJ[S.deg-1].n+" ဘွဲ့"+(S.ad?" · "+["","ဘွဲ့လွန်လက်မှတ်","မဟာဘွဲ့","ပါရဂူဘွဲ့","ပါရဂူလွန်သုတေသန"][S.ad]:""):S.mu?"အခြေခံပညာအောင်":"မအောင်သေး"}<br>သင်တန်းလက်မှတ် - ${(S.ct||[]).length?CERTS.filter(c=>S.ct.includes(c[3])).map(c=>c[0]).join("၊ "):"မရှိ"}<br>အလုပ်အတွေ့အကြုံ ${BN(S.ex)} နှစ် · နိုင်ငံခြားအတွေ့အကြုံ ${S.rt?"ရှိ":"မရှိ"}<br>တူရိယာ - ${INS.filter(x=>insLv(x[0])>0).map(x=>x[1]+" အဆင့် "+BN(insLv(x[0]))).join("၊ ")||"မရှိ"}<br>လူမှုကွန်ယက် ကြည့်ရှုသူ ${BN(smTotal())}<br>ဘာသာစကား - ${LG.filter(g=>S.lg[g[1]].lv).map(g=>S.lg[g[1]].best).join("၊ ")||"လက်မှတ်မရှိ"}</div>`;
}
function bachUI(){
  if(S.a>=45)return `<div class="c">အသက် ၄၅ ကျော်နေပြီဖြစ်၍ တက္ကသိုလ်ဘွဲ့သစ် လျှောက်ထားရန် မသင့်တော်တော့ပါ။</div>`;
  if(S.deg)return `<div class="c">ရိုးရိုးဘွဲ့ ရပြီးသားပါ။ မဟာဘွဲ့/ပါရဂူကို နောက်မီနူးမှာ ရွေးပါ။</div>`;
  if(S.uni)return `<div class="c">တက္ကသိုလ် တက်နေတုန်းပါ။</div>`;
  if(!S.mu)return `<div class="c">ဆယ်တန်း/ဆယ့်နှစ်တန်း အောင်မှ လျှောက်လို့ရမယ်။</div>`;
  return `<div class="c"><b>ဘာသာရပ်ရွေးရန်</b> (စာမေးပွဲရမှတ် ${BN(S.mk)}/၆၀၀)<br><small>🏙️ မြို့ကြီးတက္ကသိုလ်ဆိုရင် နယ်ကလာသူအတွက် စရိတ်ပိုများတယ်။</small></div>`+MJ.map((m,i)=>`<button onclick="ua(${i})">${m.n} (အနည်းဆုံး ${BN(Math.round((m.min-(S.y>=2030?5:0))*6))}/၆၀၀)${m.c?" 🏙️":""}</button>`).join("");
}
function mastUI(){
  if(S.a>=50)return `<div class="c">အသက် ၅၀ ကျော်ချိန်မှာ ဘွဲ့လွန်ပညာ ဆက်တက်ရန် မဖြစ်နိုင်တော့ပါ။</div>`;
  if(!S.deg)return `<div class="c">ရိုးရိုးဘွဲ့ ရပြီးမှ ဘွဲ့လွန် တက်လို့ရမယ်။</div>`;
  let m=S.ab?2*(S.ab.sc&&S.schol?.35:1):1;
  return `<div class="c"><b>🏛️ ဘွဲ့လွန်ပညာ</b><br><small>ဘွဲ့မြင့်လေ ရာထူးတိုးဖို့ အားသာလေပဲ။ ကျောင်းတက်နေတုန်းတော့ အလုပ်မလုပ်ရဘူး။</small></div>`+ADV.map((c,i)=>`<button onclick="aenr('a',${i})">${S.ad>=c[3]?"✔ ":""}${c[0]} (${BN(c[1])} နှစ်၊ တစ်နှစ် ${K(c[2]*EM()*m)})</button>`).join("");
}
function certUI(){
  let m=S.ab?2*(S.ab.sc&&S.schol?.35:1):1;
  return `<div class="c"><b>📜 လက်မှတ်သင်တန်းများ</b><br><small>အလုပ်တချို့ လျှောက်ဖို့ ဒီလက်မှတ်တွေ လိုတယ်။ အလုပ်လုပ်ရင်း တက်လို့ရတယ်။</small></div>`+CERTS.map((c,i)=>`<button onclick="aenr('c',${i})">${S.ct.includes(c[3])?"✔ ":""}${c[0]} (${BN(c[1])} နှစ်၊ တစ်နှစ် ${K(c[2]*EM()*m)})</button>`).join("");
}

function getReapplyJobLabel(j, i){
  if(!S.lastJob||S.lastJob.jIdx!==i)return j[0];
  let downLvl=Math.max(0,(S.lastJob.lvl||0)-1);
  if(i>=3){
    let cid=i-3;
    return `${CAR[cid][0]} (${CAR[cid][1].split("|")[downLvl]} · ယခင်ရာထူးထက် တစ်ဆင့်နိမ့်)`;
  }
  return j[0];
}

function isSeniorArtJob(jIdx){
  if(jIdx<3)return false;
  let cid=jIdx-3;
  return isArtCareerName(CAR[cid][0]);
}

function jobUI(){
  let a=S.a;
  if(a<16)return `<div class="c">အသက် ၁၆ နှစ်ကျော်မှ အချိန်ပိုင်း/အလုပ်သင်၊ ၁၈ နှစ်ကျော်မှ အမြဲတမ်းအလုပ် လုပ်လို့ရမယ်။</div>`;
  if(S.job)return `<div class="c">လက်ရှိအလုပ် - ${S.job.n}<br><small>အလုပ်ပြောင်းချင်ရင် အရင်ထွက်ပြီးမှ လျှောက်ပါ။</small></div>`;
  let isRetired=a>=60;
  let ok=J.map((j,i)=>[j,i]).filter(([j,i])=>{
    if(!j[1]()||a<(j[3]||18))return false;
    if(isRetired)return isSeniorArtJob(i);
    return true;
  });
  let prevNote=S.lastJob?`<br><small>📌 ယခင်ထွက်ခဲ့သောအလုပ်: ${S.lastJob.title} (ပြန်လျှောက်လျှင် တစ်ဆင့်နိမ့် ရာထူးမှ စတင်နိုင်သည်)</small>`:"";
  let retireNote=isRetired?`<br><small>🧓 အသက် ၆၀ ကျော် ပင်စင်စည်းမျဉ်းအရ အစိုးရနှင့် အလုပ်အများစု ပင်စင်ယူရပြီး ကိုယ်ပိုင်လုပ်ငန်းနှင့် အနုပညာလုပ်ငန်းများသာ လုပ်နိုင်ပါမည်။</small>`:"";
  return `<div class="c"><b>💼 အလုပ်လျှောက်ရန်</b><br><small>ခေတ်ကာလနဲ့ ${S.ab?S.ab.d:S.town} ဒေသအခြေအနေအရ သက်ဆိုင်ရာ ဌာန/ကျောင်း/ကုမ္ပဏီများသို့ လျှောက်ထားနိုင်ပါတယ်။</small>${retireNote}${prevNote}</div>`
    +ok.map(([j,i])=>{
      let lbl=getReapplyJobLabel(j,i);
      return `<button onclick="ja(${i},0)">${lbl} (ရနိုင်ခြေ ~${BN(Math.max(5,ch(i,0)-(S.ab?20:0)))}%)</button>`;
    }).join("")
    +(!isRetired?ok.filter(([j,i])=>i>2&&a>=18).map(([j,i])=>`<button onclick="ja(${i},1)">${getReapplyJobLabel(j,i)} - လာဘ်ပေးပြီး လျှောက်</button>`).join(""):"")
    +(a>=18&&!S.ab?`<div class="c"><b>🏪 ကိုယ်ပိုင်လုပ်ငန်း ထောင်မယ်</b></div>`+BZ.map((b,i)=>`<button onclick="bz(${i})">${b[0]} (ရင်းနှီး ${K(b[1])})</button>`).join(""):"");
}
function foreignUI(){
  let a=S.a,x="";if(a<18)return `<div class="c">အသက် ၁၈ နှစ်ပြည့်မှ ပတ်စပို့ လျှောက်လို့ရမယ်။</div>`;
  x+=`<div class="c"><b>🛂 ပတ်စပို့</b><br>`+(S.pp?(ppv()?`သက်တမ်း ${BN(S.pe)} ခုနှစ်အထိ`:"သက်တမ်းကုန်သွားပြီ"):S.pa?"လျှောက်ထားပြီး စောင့်နေတုန်း":"မရှိသေးဘူး")+`</div>`;
  if(!S.pp&&!S.pa)x+=`<button onclick="pp0()">ပတ်စပို့ လျှောက်မယ် (၁သိန်း ၅သောင်း)</button>`;
  if(!S.pp&&S.pa)x+=`<button onclick="pp1()">လာဘ်ပေးပြီး အမြန်ထုတ်မယ်</button>`;
  if(S.pp&&!ppv())x+=`<button onclick="pp2()">ပတ်စပို့ သက်တမ်းတိုးမယ် (၆သောင်း)</button>`;
  if(S.ab)return x+abPanel();
  if(ppv()){
    x+=`<div class="c"><b>✈️ နိုင်ငံခြားသွားမယ်</b></div>`;
    DS.forEach((d,i)=>{
      x+=`<button onclick="trip(${i})">အပျော်ခရီး - ${d[0]} (${K(d[1]*.6)} · ဗီဇာ ~${BN(vz(i,'t'))}%)</button>`;
      if(ok2(d)&&a<60){
        x+=`<button onclick="go(${i},'w')">အလုပ်သွားမယ် - ${d[0]} (${K(d[1])} · ဗီဇာ ~${BN(vz(i,'w'))}%)</button>`;
        if(i&&a<=35)x+=`<button onclick="go(${i},'s')">ပညာတော်သင် သွားမယ် - ${d[0]} (ဗီဇာ ~${BN(vz(i,'s'))}%)</button>`;
      }else if(!ok2(d)&&a<60)x+=`<small>${d[0]} - ဘာသာစကားလက်မှတ် လိုတယ်</small>`;
    });
  }
  return x;
}
const ppv=()=>S.pp&&S.y<S.pe;
function pp2(){if(S.m<60)return alert("ငွေမလောက်ဘူး");mv(-60,"ပတ်စပို့ သက်တမ်းတိုးခ");S.pe=S.y+5;sfx("good");lg("🛂 ပတ်စပို့ သက်တမ်း ၅ နှစ် တိုးပြီးသွားပြီ။");view()}

function t3(){
  let a=S.a,h='<div class="c"><b>အခြေအနေ</b><br>';
  if(a>=6&&!S.mu&&!S.dr)h+=`ကျောင်းသား - ${S.mf?"စာမေးပွဲ ပြန်ဖြေဖို့ ပြင်နေတယ်":"အတန်း "+BN(Math.min(a-5,S.sys))}${S.st?" · "+(S.st=="s"?"သိပ္ပံတွဲ":"ဝိဇ္ဇာတွဲ"):""}`;
  else if(S.uni)h+=`တက္ကသိုလ်ကျောင်းသား - ${MJ[S.mj-1].n} (${BN(S.uy)}/${BN(MJ[S.mj-1].d)} နှစ်)${S.schol?` · 🎓 Scholarship (${BN(S.scholLeft||0)} နှစ်ကျန်)`:""}`;
  else h+=S.deg?"ဘွဲ့ရ - "+MJ[S.deg-1].n:S.dr?"ကျောင်းထွက်":S.mu?"ဆယ်တန်း/ဆယ့်နှစ်တန်းအောင်":"ကလေးဘဝ";
  if(S.ae){let c=S.ae.k=="a"?ADV[S.ae.i]:CERTS[S.ae.i];h+=`<br>📚 ${c[0]} (${BN(S.ae.n)}/${BN(c[1])} နှစ်)`}
  h+=`<br>💼 ${S.job?S.job.n+(S.job.b?"":" ("+K(S.job.s*EM())+"/နှစ်)"):"အလုပ်မရှိ"}${S.ab?"<br>🌏 "+S.ab.d+"မှာ ရောက်နေတယ်":""}</div>`;
  if(TV=="")return h+(a>=6&&!S.mu&&!S.dr?["စာကြိုးစားမယ်","ကျူရှင်တက်မယ် (-၂သိန်း)","ကျောင်းပြင်ပ လှုပ်ရှားမယ်","ကျောင်းထွက်မယ်"].concat(S.mf?["စာမေးပွဲ ပြန်ဖြေမယ် (နောက်နှစ်)"]:[]).map(x=>`<button onclick='sch("${x}")'>${x}</button>`).join(""):S.uni?["စာကြိုးစားမယ်","အလုပ်သင်လုပ်မယ် (+၃သိန်း)","ကလပ်/လူမှုရေး လုပ်မယ်","စာမေးပွဲမှာ လာဘ်ပေးမယ်"].map((x,i)=>`<button onclick="un(${i})">${x}</button>`).join(""):"" )+(S.dr&&!S.mu&&a<=30?`<button onclick="reschool()">📚 ကျောင်းပြန်တက်မယ်</button>`:"")+(S.job?`<button onclick="jw(0)">အလုပ်ကြိုးစားမယ်</button><button onclick="jw(1)">အလုပ်ထွက်မယ်</button>`:"")+cvCard()+`<button class="pri" onclick="TV='edu';view(1)">🎓 ပညာရေး ›</button><button class="pri" onclick="TV='job';view(1)">💼 အလုပ်အကိုင် ›</button><button class="pri" onclick="TV='abr';view(1)">✈️ နိုင်ငံခြား ›</button>`;
  let bk=`<button onclick="${TV=="edu"&&ED?"ED=''":"TV=''"};view(1)">‹ နောက်သို့</button>`;
  if(TV=="job")return bk+cvCard()+jobUI();if(TV=="abr")return bk+cvCard()+foreignUI();
  if(ED=="b")return bk+bachUI();if(ED=="m")return bk+mastUI();if(ED=="c")return bk+certUI();
  return bk+`<button class="pri" onclick="ED='b';view(1)">🎓 ရိုးရိုးဘွဲ့ (တက္ကသိုလ်) ›</button><button class="pri" onclick="ED='m';view(1)">🏛️ မဟာဘွဲ့ / ပါရဂူ ›</button><button class="pri" onclick="ED='c';view(1)">📜 လက်မှတ်သင်တန်းများ ›</button>`+cvCard();
}

function sch(l){if(l.startsWith("စာမေးပွဲ ပြန်ဖြေမယ်")){S.rr=1;lg("နောက်နှစ် စာမေးပွဲ ပြန်ဖြေဖို့ စာရင်းသွင်းလိုက်ပြီ။");return view()}if(l.startsWith("ကျောင်းထွက်မယ်")){S.dr=1;sfx("bad");lg("ကျောင်းထွက်လိုက်ပြီ။ ပညာမရှိရင် ခရီးဝေးဖို့ ခက်တတ်တယ်။","r");return view()}let m={"စာကြိုးစားမယ်":{w:2,sc:2},"ကျူရှင်တက်မယ် (-၂သိန်း)":{w:3,sc:2,m:-200},"ကျောင်းပြင်ပ လှုပ်ရှားမယ်":{s:2,l:1}}[l];if(S.T>0&&m.sc)S.ef++;use(m,l)}
function un(i){let f=[{w:3,sc:1},{m:300,s:1},{s:2,f:1},{c:1,m:-300}][i];if(i==3){sfx("bad");lg("လာဘ်ပေးလိုက်လို့ ဂုဏ်သိက္ခာ ကျသွားတယ်။","r")}use(f,["စာလေ့လာ","အလုပ်သင်","လူမှုရေး","လာဘ်ပေး"][i])}
function ua(i){let m=MJ[i],fd=S.y>=2030,q=m.min-(fd?5:0);if(m.s!="*"&&m.s!=S.st)return alert("ကိုယ့်တွဲ (သိပ္ပံ/ဝိဇ္ဇာ) နဲ့ မကိုက်ဘူး။");if(m.c&&S.rg&&S.m<4000&&!fd&&!S.ab)return alert("မြို့ကြီးတက္ကသိုလ် ပြောင်းတက်ဖို့ ငွေမလောက်ဘူး။");if(S.mk/6<q){sfx("bad");lg(`${m.n} - အမှတ်မမီလို့ လျှောက်လွှာ ပယ်ချခံရတယ်။`,"r");return view()}S.uni=1;S.mj=i+1;S.uy=0;S.m-=m.c&&S.rg?800:300;sfx("levelup");lg(`🎓 ${m.n} (${eraOrg("uni")}) ဝင်ခွင့်ရပြီ။`);view()}

function ja(i,b){
  let j=J[i],p=ch(i,b)-(S.ab?20:0);if(b){S.c++;S.m-=500}
  if(R(100)<p){
    let cid=i>=3?i-3:-1;
    let startLvl=(S.lastJob&&S.lastJob.jIdx===i)?Math.max(0,(S.lastJob.lvl||0)-1):0;
    if(cid>=0){
      let maxL=CAR[cid][1].split("|").length-1;
      startLvl=Math.min(maxL,startLvl);
    }
    let orgName=cid>=0?jobOrgForCid(cid):eraOrg("biz");
    S.job={
      cid,jIdx:i,lvl:startLvl,y:0,p:0,abroad:S.ab?1:0,gov:cid>=0?CAR[cid][5]:0,
      s:Math.round((cid>=0?pay(cid,startLvl):j[2])*(S.a<18?.5:1)*(S.ab?S.ab.mu*.85:1)),
      n:(S.ab?S.ab.d+" - ":"")+(cid>=0?jn(cid,startLvl):j[0]+" ("+orgName+")"+(S.a<18?" (အချိန်ပိုင်း)":""))
    };
    if(S.lastJob&&S.lastJob.jIdx===i)S.lastJob=null;
    S.co=[];if(cid>=0&&CAR[cid][6]&&S.fm===null)S.fm=20;
    syncDoctorTitle();
    sfx("levelup");lg("✅ "+S.job.n+" အလုပ်ရပြီ။");
  }else{sfx("bad");lg("❌ "+j[0]+" လျှောက်တာ မအောင်မြင်ဘူး။","r")}
  view();
}
function bz(i){let b=BZ[i];if(S.m<b[1])return alert("ရင်းနှီးငွေ မလောက်ဘူး။");mv(-b[1],"လုပ်ငန်းရင်းနှီးမြှုပ်နှံ");S.job={n:b[0]+" - "+BLD[0]+" ("+eraOrg("biz")+")",s:0,b:1,cap:b[1],lvl:0,pf:0};S.co=[];sfx("levelup");lg("🏪 "+b[0]+" လုပ်ငန်းစထောင်ပြီ။");view()}
function jw(q){
  if(q){
    if(S.job&&!S.job.b){
      S.lastJob={jIdx:S.job.jIdx,lvl:S.job.lvl||0,title:S.job.n};
    }
    sfx("bad");lg("အလုပ်ထွက်လိုက်ပြီ။");S.job=null;S.co=[];return view();
  }
  if(S.T<=0)return noTurns();S.T--;S.job.p++;S.w=cl(S.w+1);sfx("good");lg("• အလုပ်မှာ ကြိုးစားလုပ်ကိုင်တယ်။");view();
}

const H={
1920:{t:"ရန်ကုန်တက္ကသိုလ်အက်ဥပဒေကို ကျောင်းသားတွေ ကန့်ကွက်ပြီး သပိတ်မှောက်နေကြတယ်။",o:[["သပိတ်ထဲ ပါဝင်မယ်",{s:4,f:2}],["စာဆက်လေ့လာမယ်",{w:3}]]},
1930:{t:"ကျေးလက်မှာ စီးပွားပျက်ကပ်နဲ့အတူ ဆရာစံ ပုန်ကန်မှု ဖြစ်နေတယ်။",o:[["ရွာမှာ အဆင်ပြေသလို လုပ်ကိုင်မယ်",{m:-200}],["မြို့တက်ပြီး အလုပ်ရှာမယ်",{m:-300,s:-2}]]},
1942:{t:"ဂျပန်တပ်တွေ ဝင်လာပြီး စစ်ဒဏ်ကြောင့် ပတ်ဝန်းကျင်တစ်ခုလုံး ထိခိုက်ပျက်စီးနေတယ်။",o:[["ရွာတောဘက် ရှောင်တိမ်းမယ်",{h:-4,s:2}],["မြို့မှာ ဆက်နေမယ်",{h:-8,m:-300}]]},
1948:{t:"၁၉၄၈ ဇန်နဝါရီ ၄ ရက် လွတ်လပ်ရေး ရပြီ။ ဒါပေမဲ့ ပြည်တွင်းပဋိပက္ခတွေလည်း စနေတယ်။",o:[["တိုင်းပြည်ပြန်ထူထောင်ဖို့ ကြိုးစားမယ်",{s:5,f:2}],["မိသားစုကိုပဲ ကြည့်မယ်",{m:100}]]},
1962:{t:"၁၉၆၂ မတ်လမှာ စစ်တပ်က အာဏာသိမ်းပြီး စီးပွားရေးကို နိုင်ငံပိုင်သိမ်းလိုက်တယ်။",o:[["အခြေအနေအတိုင်း လိုက်နေမယ်",{m:-300}],["ပညာကို ဆက်လေ့လာမယ်",{w:3,m:-200}]]},
1974:{t:"ဦးသန့်ဈာပနအရေး ကျောင်းသားအရေးအခင်း ဖြစ်ပေါ်နေတယ်။",o:[["အရေးအခင်းမှာ ပါဝင်မယ်",{s:3,h:-6,f:3}],["စာကိုပဲ အာရုံစိုက်မယ်",{w:3}]]},
1988:{t:"၈၈၈၈ ဒီမိုကရေစီအရေးတော်ပုံ ဖြစ်ပြီး စစ်တပ်က ဖြိုခွင်းတယ်။ တက္ကသိုလ်တွေလည်း ပိတ်ထားတယ်။",o:[["ဒီမိုကရေစီအရေးမှာ ပါဝင်မယ်",{s:5,h:-10,f:3}],["ကျောင်းပိတ်တုန်း စာဖတ်မယ်",{w:3}],["အိမ်ရှောင်နေမယ်",{s:-3}]]},
1990:{t:"ရွေးကောက်ပွဲမှာ NLD အနိုင်ရပေမဲ့ အာဏာမလွှဲဘူး။",o:[["မျှော်လင့်ချက်မပျက်ဘဲ ကြိုးစားမယ်",{s:4}],["စိတ်ပျက်ပြီး နေမယ်",{s:-5}]]},
1996:{t:"ကျောင်းသားဆန္ဒပြမှုတွေကြောင့် တက္ကသိုလ်တွေ မကြာခဏ ပိတ်ခံရတယ်။",o:[["ကိုယ့်ဟာကိုယ် စာလေ့လာမယ်",{w:3}],["အချိန်ကုန်ခံလိုက်မယ်",{w:-2,s:-2}]]},
2007:{t:"သံဃာတော်တွေ ဦးဆောင်တဲ့ ရွှေဝါရောင်တော်လှန်ရေး ဖြစ်ပွားတယ်။",o:[["ထောက်ခံအလှူ ထည့်မယ်",{s:3,m:-150}],["စောင့်ကြည့်နေမယ်",{}]]},
2008:{t:"မေလမှာ နာဂစ်မုန်တိုင်း တိုက်ခတ်ပြီး ဧရာဝတီတိုင်း အကြီးအကျယ် ပျက်စီးသွားတယ်။",o:[["ကူညီကယ်ဆယ်ရေးမှာ ပါဝင်မယ်",{s:5,f:3,m:-200}],["ကိုယ့်မိသားစုကိုပဲ ကာကွယ်မယ်",{h:1}]]},
2011:{t:"ပြုပြင်ပြောင်းလဲရေး စတင်ပြီး လွတ်လပ်ခွင့်တွေ နည်းနည်းပွင့်လာတယ်။",o:[["အခွင့်အလမ်းကို ဖမ်းဆုပ်မယ်",{m:300,s:3}],["သတိထား စောင့်ကြည့်မယ်",{}]]},
2015:{t:"ရွေးကောက်ပွဲမှာ NLD အပြတ်အသတ် အနိုင်ရသွားတယ်။",o:[["မျှော်လင့်ချက်နဲ့ ကြိုးစားမယ်",{s:4,m:200}]]},
2020:{t:"ကိုဗစ်-၁၉ ကူးစက်ရောဂါကြောင့် ကျောင်းတွေပိတ်ပြီး စီးပွားရေးလည်း ထိခိုက်တယ်။",o:[["စာအုပ်/အွန်လိုင်းကနေ လေ့လာမယ်",{w:5,m:-100}],["ဖုန်းပဲ ကစားနေမယ်",{w:-6,s:-2}],["မိသားစုအလုပ် ဝိုင်းကူမယ်",{m:200,h:-3}]]},
2021:{t:"၂၀၂၁ ဖေဖော်ဝါရီ ၁ ရက်မှာ စစ်တပ်က အာဏာသိမ်းလိုက်တယ်။ ပညာရေးနဲ့ စီးပွားရေးလည်း ယိုင်နဲ့သွားတယ်။",o:[["အခက်အခဲကြားက ပညာဆက်ရှာမယ်",{w:4,s:3,m:-300}],["ဒုက္ခရောက်သူတွေကို ကူညီမယ်",{s:5,m:-200,f:3}],["စီးပွားရေးကိုပဲ အာရုံစိုက်မယ်",{m:200,s:-3}]]},
2022:{t:"လက်နက်ကိုင်ပဋိပက္ခတွေ ပြင်းထန်လာပြီး လူအများ နေရပ်စွန့်ခွာနေရတယ်။",o:[["လုံခြုံတဲ့မြို့ကို ပြောင်းမယ်",{m:-500,h:3}],["ရပ်ရွာမှာ ဆက်နေမယ်",{h:-8,s:3}],["နိုင်ငံခြားထွက်ဖို့ ကြိုးစားမယ်",{m:-1500,w:2}]]},
2023:{t:"မေလမှာ မိုခါဆိုင်ကလုန်း တိုက်ခတ်ပြီး ရခိုင်ဒေသ ပျက်စီးဆုံးရှုံးတယ်။",o:[["အလှူ/လူအားနဲ့ ကူညီမယ်",{s:5,m:-200,f:3}],["မိသားစုကိုပဲ ကာကွယ်မယ်",{h:2}]]},
2024:{t:"စက်တင်ဘာမှာ ယာဂီတိုင်ဖုန်းကြောင့် ရေကြီးမှု ကြီးကြီးမားမား ဖြစ်ပွားတယ်။",o:[["အိမ်နီးချင်းတွေကို ဝိုင်းကူမယ်",{s:4,f:3,m:-300}],["ပိုင်ဆိုင်မှုကိုပဲ စောင့်မယ်",{h:-6,m:-500}]]},
2025:{t:"မတ် ၂၈ ရက်မှာ စစ်ကိုင်းအနီး ငလျင်ကြီး လှုပ်ခတ်ပြီး ပျက်စီးမှုများစွာ ဖြစ်သွားတယ်။",o:[["ကယ်ဆယ်ရေးမှာ ပါဝင်မယ်",{s:5,h:-3,f:4}],["လှူဒါန်းမယ်",{m:-300,s:3,f:2}],["ကိုယ့်ကိုယ်ကိုပဲ ကာကွယ်မယ်",{h:1}]]},
2026:{t:"ရေကြီးမှု ထပ်ဖြစ်ပြန်တယ်။",o:[["ရပ်ရွာနဲ့အတူ ပြန်ထူထောင်မယ်",{s:4,f:3,m:-200}],["ကိုယ်ပိုင်အကာအကွယ်ပဲ လုပ်မယ်",{h:-2}]]},
2030:{t:"ဖက်ဒရယ်ဒီမိုကရေစီ ပြုပြင်ရေးခေတ် စတင်ပြီ။ (စိတ်ကူးဇာတ်လမ်း)",o:[["ပညာနဲ့အတူ တိုင်းပြည်ပြန်တည်ဆောက်မယ်",{s:6,w:3,f:3}]]}
};

function mk(t,o){return{t,o}}
const E=[
{a:[25,58],c:()=>S.job&&!S.job.b&&S.a<60,t:"အလုပ်ခွင်မှာ လာဘ်ယူဖို့ အခွင့်အရေးပေါ်လာတယ်။",o:[["ငြင်းပယ်မယ်",{s:4,f:3}],["လက်ခံမယ်",{m:3200,c:1,f:-15}]]},
{a:[14,32],t:"သူငယ်ချင်းတွေက ရိုက်ပွဲ/မူးယစ်ဆေး/ခိုးယူမှုထဲ ပါဖို့ ခေါ်နေတယ်။",o:[["ငြင်းမယ်",{s:3,w:1}],["ပါဝင်မယ်",{k:1,h:-8,s:-8,m:400},"ပြစ်မှုလမ်းက ဘဝကို ချောက်ထဲဆွဲချတတ်တယ်။"]]},
{a:[24,65],c:()=>S.job&&S.job.cid>=0&&CAR[S.job.cid][6],wt:2,t:"လူထုက ယုံကြည်လို့ အလှူငွေ ကိုင်တွယ်ခွင့်ရတယ်။",o:[["ရိုးရိုးသားသား ဝန်ဆောင်မယ်",{f:8,s:3}],["ကိုယ်ကျိုးအတွက် သုံးမယ်",{m:2200,c:1,f:-25}]]},
{a:[60,105],t:"အသက်ကြီးပိုင်း ရောက်လာပြီ။",o:[["ကျန်းမာရေးကို ဂရုစိုက်မယ်",{h:5}],["မြေးတွေကို စာသင်ပေးမယ်",{s:4,w:1}]]},
{a:[18,55],c:()=>S.y>=2030,wt:3,t:"ပြုပြင်ပြောင်းလဲရေးကာလမှာ နိုင်ငံပြန်တည်ဆောက်ဖို့ အခွင့်အလမ်းတွေ ပေါ်လာတယ်။",o:[["ကျွမ်းကျင်မှုနဲ့ ပါဝင်မယ်",()=>S.deg?{m:2200,s:5,f:3}:{m:950,s:3,f:1},"ပညာရှိသူအတွက် အခွင့်အလမ်း ပိုများတယ်။"],["စေတနာ့ဝန်ထမ်း/စာသင်မယ်",{s:6,f:5}]]},
{a:[18,32],c:()=>S.y>=2024&&S.y<2030&&(S.g==0||S.a<=27),wt:2,t:"စစ်မှုထမ်းဥပဒေအရ ခေါ်ယူမှုနဲ့ ကြုံလာရတယ်။",o:[["ပုန်းရှောင်နေမယ်",{m:-1000,s:-5}],["နိုင်ငံခြားထွက်ဖို့ ကြိုးစားမယ်",{m:-2500}],["ကျောင်းဆက်တက်ပြီး ရွှေ့ဆိုင်းမယ်",{w:3,m:-500}]]}
];

function yt(){
  let opts=[
    ["ငွေမလောက်လို့ အခွင့်အရေးတစ်ခု လက်လွတ်သွားတယ်။",[["ဆက်သွားမယ်",{m:-1500,s:-5}]]]
  ];
  if(S.a>=20&&S.a<=42&&S.mar){
    opts.push(["ကလေးပြုစုရေးနဲ့ အလုပ်/ဘဝကြား ချိန်ညှိရခက်နေတယ်။",[["ဆက်သွားမယ်",()=>({m:-1000,w:-2,s:S.g?-5:-2})]]]);
  }
  if(S.a>=20&&S.a<=50&&S.mar){
    opts.push(["အိမ်ထောင်ရေးမှာ စကားများပြီး နားလည်မှု လွဲနေတယ်။",[["ဝန်ခံပြီး ပြင်မယ်",{s:-3}],["ဖုံးကွယ်ထားမယ်",{s:-8,l:-2}]]]);
  }
  if(S.a>=20&&S.a<=45&&S.mar&&S.inl){
    opts.push(["ယောက္ခမနဲ့ အတူနေရင်း စကားများမိတယ်။",[["သည်းခံမယ်",{s:-4}],["ခွဲနေမယ်",{m:-800}]]]);
  }
  return opts[R(opts.length)];
}
function pick(){
  let ma=S.sys==10?16:17;
  if(S.job&&S.job.gov&&S.y>=2021&&S.y<=2029&&!S.cdm)return cdmEv();
  if(S.pt&&S.pt.st=="m"&&S.sr<30&&R(100)<25)return chEv();
  if(S.pt&&S.pt.st=="m"&&S.pt.nat!="မြန်မာ"&&!S.ab&&R(100)<25)return fpEv();
  if(S.c>=3&&!S.ar)return mk("အဂတိတိုက်ဖျက်ရေးက ဖမ်းလိုက်ပြီ။ အလုပ်၊ ငွေနဲ့ ဂုဏ်သိက္ခာပါ ပျက်စီးသွားတယ်။",[["ဆက်သွားမယ်",()=>{S.ar=1;S.m=0;S.job=null;if(S.fm!==null)S.fm=0;return{s:-30,h:-10}},"လာဘ်စားမှုက ဂုဏ်သိက္ခာကို သုညအထိ ဆွဲချတယ်။"]]);
  if(S.k>=2){S.k=0;return mk("ပြစ်မှုကျူးလွန်မိလို့ ထောင်ကျသွားတယ်။",[["ဆက်သွားမယ်",()=>{S.job=null;return{h:-15,s:-20,w:-5,m:-1000,l:-5}},"ပြစ်မှုလမ်းက ဘဝကို ခက်ခဲစေတယ်။"]])}
  if(S.a==ma-2&&!S.dr&&!S.st)return mk("တွဲရွေးရမယ့်အချိန် ရောက်ပြီ။",[["သိပ္ပံတွဲ",()=>{S.st="s";return{}}],["ဝိဇ္ဇာတွဲ",()=>{S.st="a";return{}}]]);
  if(S.rg==1&&S.f==0&&S.a>=8&&S.a<=ma&&!S.dr&&R(10)<2)return mk("ဆင်းရဲတဲ့ ကျေးလက်မိသားစုမှာ ကျောင်းစရိတ် ခက်ခဲလာတယ်။",[["မိသားစုကို ကူရင်း ဆက်တက်မယ်",{m:200,h:-2,w:1}],["ကျောင်းထွက်မယ်",()=>{S.dr=1;return{m:300}}]]);
  if(H[S.y])return hv(H[S.y]);
  let dz=R(100)<16?dis():null;if(dz)return dz;
  let hb=(S.a>=12&&S.a<=55&&R(100)<18)?habEv():null;if(hb)return hb;
  let L=E.filter(e=>S.a>=e.a[0]&&S.a<=e.a[1]&&(!e.c||e.c())),p=[];
  L.forEach(e=>{for(let i=0;i<(e.wt||1);i++)p.push(e)});
  if(!p.length||R(10)<4)return null;
  let e=p[R(p.length)];return e.id=="yt"?yt():e;
}

function next(){
  let ma=S.sys==10?16:17;fin();sfx("age");S.a++;S.y++;S.T=(S.rg==2&&S.y>=2021&&S.y<2030)?4:5;era();
  let rg=RG(S.y);if(rg!=S.rgm){S.rgm=rg;lg("🏛️ "+rg,"r")}
  lg(`အသက် ${BN(S.a)} (${BN(S.y)}) · ${SE[R(12)]}`,'y');yearly();
  if(S.a>=6&&!S.mu&&!S.dr){S.sc++;S.w=cl(S.w+1);if(S.rg==2&&S.y>=2021&&S.y<2030&&R(10)<4){S.sc--;lg("ကျောင်းပိတ်ခံရတယ်။","r")}}
  if(S.a==ma&&!S.dr)matric();if(S.rr&&!S.mu&&!S.dr){S.rr=0;matric()}
  if(S.uni){
    if([1988,1996,2000,2021].includes(S.y))lg("တက္ကသိုလ်ပိတ်ထားလို့ ပညာသင်နှစ် မတိုးဘူး။","r");
    else{S.uy++;S.w=cl(S.w+2)}
    if(S.uy>=MJ[S.mj-1].d&&S.w<50&&R(100)<50){S.uy--;lg("စာမေးပွဲကျလို့ တစ်နှစ်ထပ်တက်ရတယ်။","r")}
    else if(S.uy>=MJ[S.mj-1].d){S.deg=S.mj;S.uni=0;S.schol=0;S.scholLeft=0;sfx("levelup");lg("🎓 ဘွဲ့ရပြီ။")}
  }
  if(S.a>=60&&S.job&&!S.job.b&&!isArtCareerName(S.job.n)){
    lg(`🧓 အသက် ${BN(S.a)} ပြည့်ပြီဖြစ်၍ ${S.job.n} တာဝန်မှ ပင်စင်ယူပြီး အနားယူလိုက်ပြီ။`,"r");
    S.job=null;S.co=[];
  }
  if(S.job)jobYear();
  if(S.a>=18)living();else applyLifestyleYearly();
  upkeep();
  if(S.m<0)S.m=0;if(S.m<=0&&S.a>=18)S.s=cl(S.s-3);
  let y=S.y;if(y<1948)S.s=cl(S.s-1);if(y>=1948&&y<1962)S.s=cl(S.s+1);if(y>=1962&&y<2011)mv(-Math.round(S.m*.03),"ငွေတန်ဖိုးကျ");if(y>=2021&&y<2030){mv(-Math.round(S.m*.07),"ငွေတန်ဖိုးကျ (ဈေးနှုန်းတက်)");S.s=cl(S.s-1)}if(y>=2030)S.s=cl(S.s+2);
  if(S.a>45)S.l=cl(S.l-1);if(S.a>55)S.h=cl(S.h-1);
  rules();depr();checkMilestones();
  if(S.h<=0||(S.a>70&&R(100)<(S.a-70)*4)||S.a>105)return end();
  S.ev=pick()||kidEv();if(S.ev&&S.ev.o.length>1)S.ev.o=shuf(S.ev.o.slice());if(S.ev)setTimeout(()=>sfx("event"),240);if(!S.ev)lg("ဒီနှစ်တော့ အေးအေးဆေးဆေး ကုန်ဆုံးသွားတယ်။");view();
}

let LIN={gen:1,max:0};
const NM=[[1950,"ဘသင် ဘမောင် တင်ဦး ကျော်စိန် မြင့်သိန်း ရွှေကျော် စံရွှေ သိန်းဖေ အောင်ကျော် ဘိုးကျော် လှမောင် သန်းထွန်း စိန်ဝင်း ဘခင် မောင်လှ ဘစိန်".split(" "),"ခင်မေ မြမြ အေးအေး ရွှေစင် ကြည်ကြည် ခင်ညွန့် ညွန့်ညွန့် စန်းစန်း တင်တင် ခင်စု ဝင်းဝင်း မိုးမိုး သန်းသန်း ခင်ခင်ကြီး အေးမြင့် မြင့်မြင့်".split(" ")],
[1980,"မြင့်ဦး စိုးမင်း ဝင်းဇော် သန့်ဇင် ကျော်သူ ဇော်မင်း ထွန်းထွန်း လှိုင် ဝင်းမောင် အောင်သူ ကျော်ထွန်း စောလွင် မျိုးမင်း သူရိန် ဇော်ဇော် ကျော်ကျော်".split(" "),"မိုးမိုး ဝါဝါ နီနီ ခင်မာလာ နွယ်နွယ် သန်းသန်းအေး ရွှေရည် ဖြူဖြူ သီတာ မေမေ ခင်ခင် ကြည်ကြည်ဝင်း မြင့်မြင့်ခိုင် ခင်သူ ထားထား အိအိ".split(" ")],
[2005,"ကျော်ဇင်ဝင်း နေလင်း ထက်ထက် ဘုန်းမြတ် အောင်ကိုကို သီဟ မင်းထက် ဇေယျာ ဝေယံ ကိုကို စိုးသူ ရဲထက် မင်းနိုင် ဘုန်းနိုင် ဇော်လင်း ဟိန်းထက်".split(" "),"ဖြိုးဖြိုး သဇင် မေသန္တာ နန်းခင် ဇင်မာ ရတနာ မြတ်သူဇာ ပိုင်ပိုင် နန်းမေ ကေသီ စုမွန် ဝတ်ရည် ချိုချို ခိုင်ခိုင် မေဇင် အိမွန်".split(" ")],
[2029,"မျိုးမြတ် ဟိန်းလင်း နေဘုန်း ကောင်းထက် ရဲမြတ် သန့်စင် အာကာ ဘုန်းမြင့် ဇင်မင်း ထင်လင်း လင်းလက် မင်းခန့် အောင်ထက် ဇေယျာသူ ပိုင်ထက် သုခ".split(" "),"ရတနာဝင်း ချမ်းမြေ့ ကြယ်စင် ဝတ်ရည် နီလာ သူဇာ ဇွန်မွန် မေမြတ် ခင်ပိုင် ချိုမြတ် ပန်းပွင့် အိမ်စံ ကေသီခိုင် သီရိ နှင်းဆီ မြတ်နိုး".split(" ")],
[9999,"ဖြိုးမင်းသူ ရှင်သန့် ပိုင်ဇင် ကောင်းမြတ် ထက်လင်း နေလင်းထက် မြတ်သူရိန် ဝေဟင် သဒ္ဓါ ပီယ ဇော်လတ် အောင်ဝေ နိုင်ဇော် ဘုန်းလတ် သူရ အရွှေ".split(" "),"နှင်းဆီ သီရိ ရတီ စန္ဒာ မေဇင် ဝေလ ပန်းခိုင် မိုးသက် ခိုင်နွယ် ရွှေဥဒေါင်း သစ္စာ နှင်းနု ဇာဇာ မြတ်မွန် ချမ်းချမ်း ဖူးစာ".split(" ")]];
const pre=(g,e,peer)=>{
  if(peer){
    if(e==1)return g?"နန်း":"စိုင်း";
    if(e==2)return g?"နော်":"စော";
    return g?"မ ":"ကို ";
  }
  return e==1?(g?"နန်း":"စိုင်း"):e==2?(g?"နော်":"စော"):"";
};
const usedN=()=>{if(!S)return new Set();return new Set([S.nm,S.pt&&S.pt.n,...(S.fr||[]).map(x=>x.n),...(S.co||[]).map(x=>x.n),...(S.kids||[]).map(x=>x.n),...(S.par||[]).map(x=>x.n)].filter(Boolean))};
function pn(g,by,nu,e,noPeer){
  by=by||(S?S.y-S.a:1990);
  e=e===undefined?(S?S.e:0):e;
  let peer=!noPeer&&nu!==1;
  let L=NM.find(x=>by<=x[0]),A=g?L[2]:L[1],u=nu?new Set():usedN(),n,i=0;
  do{n=pre(g,e,peer)+A[R(A.length)];i++}while(u.has(n)&&i<20);
  if(u.has(n)){let k=2;while(u.has(n+" "+BN(k)))k++;n=n+" "+BN(k)}
  return n;
}
const TW={c:["ရန်ကုန်","မန္တလေး","နေပြည်တော်","ပဲခူး","မော်လမြိုင်","ပုသိမ်"],r:["ပျဉ်းမနား","မိတ္ထီလာ","ပခုက္ကူ","ရွှေဘို","မုံရွာ","တောင်ငူ","ပြည်","မကွေး"],x:["မြဝတီ","လိုင်ဇာ","ဖလမ်း","ကျိုင်းတုံ","မြောက်ဦး","ဘူးသီးတောင်"]};
const ETW={1:["တောင်ကြီး","လားရှိုး","ကျိုင်းတုံ"],2:["ဖားအံ","မြဝတီ","ကော့ကရိတ်"],3:["မြစ်ကြီးနား","ဗန်းမော်","ပူတာအို"],4:["စစ်တွေ","ကျောက်ဖြူ","မြောက်ဦး"],5:["မော်လမြိုင်","ရေး","သထုံ"],6:["ဟားခါး","ဖလမ်း","ထန်တလန်"]};
const town=(e,rg)=>{let a=(e>0&&e<7&&R(10)<7)?ETW[e]:(rg==0?TW.c:rg==1?TW.r:TW.x);return a[R(a.length)]};
const EA=[[1920,"",1],[2030,"ဖက်ဒရယ်ဒီမိုကရေစီ ပြုပြင်ရေးခေတ် စတင်လာပြီ။ (စိတ်ကူးဇာတ်လမ်း)",1.1],[2040,"တိုးတက်ရေးပါတီခေတ် စတင်လာပြီ။ (စိတ်ကူးဇာတ်လမ်း)",1.8],[2050,"အာဆီယံတွင် တည်ငြိမ်ငြိမ်းချမ်းသော နိုင်ငံအဖြစ် ရပ်တည်လာပြီ။",3],[2100,"အခြေခံအဆောက်အအုံနှင့် နည်းပညာ ဖွံ့ဖြိုးတိုးတက်လာပြီ။",5.5],[2200,"ဘက်မလိုက် ငြိမ်းချမ်းသော နိုင်ငံအဖြစ် ဆက်လက်ရပ်တည်နေသည်။",4.2],[2300,"ငြိမ်းချမ်းပြည့်စုံသော နိုင်ငံတစ်ခု ဖြစ်လာပြီ။",6.5]];
const EM=()=>{let m=1;EA.forEach(e=>{if(S.y>=e[0])m=e[2]});return m};
function era(){let e=EA.filter(e=>S.y>=e[0]).pop();if(e&&e!=S.eo){S.eo=e;if(e[1])lg("🌏 "+e[1],"r")}S.kids.forEach(k=>{k.rel=cl(k.rel-1);let g=S.y-k.by;if(g>=6&&g<=17)k.edu=Math.min(10,k.edu+(S.f>=1||S.m>3000?.6:.3))});S.sr=cl(S.sr-1);parents()}

const KV=[["စာမေးပွဲရလဒ် မကောင်းဘဲ ပြန်လာတယ်။",[["ကြိုးစားထားတာကို ချီးကျူးပြီး အကြောင်းရင်းကို အတူရှာမယ်",8,5,"ကြိုးစားအားထုတ်မှုကို အသိအမှတ်ပြုပေးရင် ကလေးက စိတ်ဓာတ်တက်တယ်။"],["ဆူပြီး တခြားကလေးနဲ့ နှိုင်းယှဉ်မယ်",-10,-3,"နှိုင်းယှဉ်ခံရရင် ကလေးက ကိုယ့်ကိုယ်ကို ယုံကြည်မှု လျော့တတ်တယ်။"],["မမေးဘဲ ဒီအတိုင်း ထားလိုက်မယ်",-4,-1,"ဂရုမစိုက်မိရင် ကလေးနဲ့ ဝေးကွာသွားတတ်တယ်။"]]],
["ကလေးက လိမ်ညာထားတာ သိလိုက်ရတယ်။",[["အေးအေးဆေးဆေး မေးပြီး အမှန်ပြောခွင့်ပေးမယ်",7,4,"ကြောက်အောင်ခြောက်တာထက် ယုံကြည်မှု တည်ဆောက်ပေးတာ ပိုကောင်းတယ်။"],["ရိုက်မယ်",-15,-5,"ရိုက်နှက်ရင် ကြောက်စိတ်ပဲ ကျန်ပြီး ဆက်ဆံရေး ထိခိုက်တယ်။"],["မသိချင်ယောင် ဆောင်နေမယ်",-3,-2,"လွှတ်ထားလိုက်ရင် အကျင့်ဆိုး ဖြစ်သွားနိုင်တယ်။"]]],
["ကလေးက ဖုန်းကို အရမ်းကစားနေတယ်။",[["အတူတူ စည်းကမ်းလုပ်ပြီး ကိုယ်တိုင်လည်း လိုက်နာမယ်",6,4,"ကလေးတွေက လူကြီးလုပ်ပုံကို အတုယူတတ်တယ်။"],["ဖုန်းကို ချက်ချင်း သိမ်းလိုက်မယ်",-8,0,"အကြောင်းမရှင်းဘဲ သိမ်းလိုက်ရင် ပိုဆန့်ကျင်ချင်လာတယ်။"]]],
["ကလေးက စိတ်ဆိုးပြီး ငိုနေတယ်။",[["ကြားဖြတ်မပြောဘဲ နားထောင်ပေးပြီး ခံစားချက်ကို နားလည်ပေးမယ်",8,4,"နားထောင်ပေးတာက နားလည်မှုရဖို့ အကောင်းဆုံးလမ်းပဲ။"],["\"ငြိမ်ငြိမ်နေ\" လို့ ပြောမယ်",-6,-2,"ခံစားချက်ကို ဖိထားရင် စိတ်ပိုပင်ပန်းစေတယ်။"]]],
["ကျောင်းစရိတ် ပိုခက်ခဲလာတယ်။",[["ကိုယ့်အသုံးစရိတ်လျှော့ပြီး ကလေးပညာရေးကို ထောက်ပံ့မယ်",3,2,"ပညာရေးက ကလေးရဲ့ အနာဂတ်ကို ပြောင်းလဲပေးနိုင်တယ်။",{m:-1000}],["ကျောင်းဆက်မထားနိုင်တော့ဘူးလို့ ပြောမယ်",-6,-3,"ပညာမရှိရင် ခရီးဝေးဖို့ ခက်တတ်တယ်။"]]],
["ဆယ်ကျော်သက်အရွယ်မှာ ချစ်သူရပြီး ကျောင်းထွက်ချင်နေတယ်။",[["နားထောင်ပေးပြီး အနာဂတ်အတွက် အတူတူ စဉ်းစားကြည့်မယ်",8,4,"ကြင်ကြင်နာနာ ရှင်းပြတာက အတင်းတားတာထက် ပိုထိရောက်တယ်။"],["တားပြီး စကားမပြောတော့ဘူး",-14,-4,"စကားမပြောဘဲ နေလိုက်ရင် ကလေးက ပိုဝေးသွားတတ်တယ်။"]]]];
function kidEv(){let ks=S.kids.filter(k=>S.y-k.by>=3&&S.y-k.by<=19);if(!ks.length||R(10)<4)return null;let k=ks[R(ks.length)],T=KV[R(KV.length)];return {t:`${k.n} (${BN(S.y-k.by)} နှစ်) - ${T[0]}`,o:T[1].map(x=>[x[0],()=>{k.rel=cl(k.rel+x[1]);k.q=cl(k.q+x[2]);return x[4]||{}},x[3]])}}
E.push({a:[20,42],c:()=>S.mar&&S.kids.length<3&&(S.y<2300||R(10)<3),wt:2,t:"သားသမီးယူဖို့ အချိန်ကျလာပြီ။",o:[["ကလေးယူမယ်",()=>{let g=R(2),n=pn(g,S.y,0,0,1);S.kids.push({n,g,by:S.y,rel:70,q:50,edu:0,kidMar:0,kidHasChild:0});sfx("levelup");lg("👶 "+n+" မွေးလာပြီ။");setTimeout(()=>nameKid(S.kids.length-1),400);return{m:-500,s:2}}],["နောက်မှ စဉ်းစားမယ်",{}]]});
H[1938]={t:"၁၃၀၀ ပြည့် အရေးတော်ပုံ - ရေနံမြေလုပ်သားတွေနဲ့ ကျောင်းသားတွေ သပိတ်မှောက်နေကြတယ်။",o:[["ထောက်ခံမယ်",{s:3,f:2}],["မိသားစုကိုပဲ ကြည့်မယ်",{m:100}]]};
H[1947]={t:"၁၉၄၇ ပင်လုံစာချုပ် လက်မှတ်ထိုးပြီးနောက် ဗိုလ်ချုပ်အောင်ဆန်း လုပ်ကြံခံလိုက်ရတယ်။",o:[["ပြည်ထောင်စုအတွက် မျှော်လင့်မယ်",{s:3}],["စိုးရိမ်ပူပန်မယ်",{s:-3}]]};
H[1987]={t:"၁၉၈၇ မှာ ငွေစက္ကူတွေ တရားမဝင် ကြေညာခံရလို့ စုထားတဲ့ငွေတွေ ဆုံးရှုံးသွားတယ်။",o:[["လက်ခံပြီး အစကနေ ပြန်စမယ်",()=>({m:-Math.round(S.m*.5),s:-3})]]};

function end(){
  S.end=1;LIN.max=Math.max(LIN.max,S.y);sfx("bad");
  lg(`⚰️ ${dispName(S.nm)} - အသက် ${BN(S.a)} နှစ်မှာ ဘဝခရီး ပြီးဆုံးသွားပြီ။ (${BN(S.y)})`,"y");
  TB=0;view();
  let o=buildObituaryData();
  showInfoPopup(
    "⚰️ ဘဝခရီး ပြီးဆုံးခြင်း အသိပေးချက်",
    `<b>${o.name}</b> (အသက် ${o.age} နှစ် · ${o.years}) သည် ဘဝခရီးကို ပြီးဆုံးသွားခဲ့ပါပြီ။<br><br><small>${o.bio}</small>`,
    true
  );
}

function hr(i){
  let k=S.kids[i],p=S,a=p.y-k.by,e=Math.floor(k.edu),inh=Math.round(NW(p)*(k.rel>=50?.9:.45)),q=k.q;LIN.gen++;
  S=Object.assign({},p,{
    a,g:k.g,nm:k.n,
    w:cl(Math.round(30+q*.4+e*3)),h:cl(65+R(25)),l:30+R(60),s:cl(Math.round(35+q*.3+k.rel*.2)),
    fm:null,m:a>=16?inh:0,f:inh>8000?2:inh>2000?1:0,c:0,k:0,ar:0,sc:e*2,
    dr:a>=12&&e<2?1:0,mu:a>=17&&e>=3?1:0,mk:Math.min(580,200+e*40),ef:e*2,
    mf:(a>=17&&e==2)?1:0,rr:0,vr:0,trips:0,st:R(2)?"s":"a",uni:0,schol:0,scholLeft:0,
    deg:a>=22&&e>=6?1+R(11):0,mj:0,uy:0,mar:k.kidMar?1:0,ma:k.kidMar?Math.max(18,a-1):0,sr:50,role:"",job:null,lastJob:null,lang:0,
    hb:{},dt:0,cz:{},lg:LGI(),gold:0,car:0,house:0,rt:0,pp:0,pa:0,ab:null,
    fw:inh,ins:{},sm:{},town:p.town,
    lf:{h:inh>2000?1:0,d:inh>2000?1:0,c:inh>2000?1:0},
    lfMult:{h:1,d:1,c:1},
    ad:0,ae:0,ct:[],exc:{},pe:0,usedNews:[],fr:[],co:[],pt:null,inl:null,dy:0,bh:[],yb:null,yi:0,
    dep:0,cdm:0,gv:0,lsy:{},ex:0,T:5,ev:null,L:[],kids:[],end:0,
    par:[
      {n:dispName(p.nm,p),r:p.g?"မိခင်":"ဖခင်",by:p.y-p.a,rel:k.rel,al:0,g:p.g},
      {n:(p.g?"ဦး":"ဒေါ်")+pn(p.g?0:1,p.y-p.a-28,1,0,1),r:p.g?"ဖခင်":"မိခင်",by:p.y-p.a+R(4)-2,rel:60,al:R(2),g:p.g?0:1}
    ],
    gen:LIN.gen,sk:R(3),sys:k.by<2012?10:12,rgm:""
  });
  syncDoctorTitle();
  sfx("levelup");lg(`🪷 ${dispName(S.nm)} အဖြစ် ဆက်ကစားပြီ - မျိုးဆက် ${BN(S.gen)}`,"y");lg(`အသက် ${BN(a)} · အမွေ ${K(inh)} ရရှိတယ်။`);TB=0;view();
}

const BUY=(c,f)=>()=>S.m<c?(alert("ငွေမလောက်ဘူး"),false):f(c);
const NG=f=>()=>(S.y<2021||S.y>2029)?(alert("ဒီကာလမှာ မရှိဘူး"),false):(typeof f=="function"?f():f);
const ACT=[
["🥗","အစားအသောက်",[["ဟင်းသီးဟင်းရွက်၊ ငါး၊ ပဲ စားမယ်",()=>{S.dt++;return{h:3,m:-150}},1],["ရေများများ သောက်မယ်",{h:1},1],["ဆီကြော်/မုန့်တွေ စားမယ်",()=>{S.dt--;return{h:-2,s:1,m:-80}},1]]],
["🏃","လေ့ကျင့်ခန်း",[["လမ်းလျှောက်မယ်",{h:2,l:1,s:1},2],["ကွင်းထဲ ပြေးကစားမယ်",{h:3,s:1},3],["ယောဂ/ကိုယ်လက်လှုပ်ရှား လုပ်မယ်",{h:2,s:2},8],["ဘောလုံး/အားကစား လုပ်မယ်",{h:3,l:2,s:1},8],["ကျန်းမာရေး စစ်ဆေးမယ်",{h:2,m:-300},1],["အကျင့်ဆိုး ဖြတ်ဖို့ ကြိုးစားမယ်",()=>{let ks=Object.keys(S.hb).filter(k=>S.hb[k]);if(!ks.length)return alert("ဖြတ်စရာ အကျင့်ဆိုး မရှိဘူး"),false;if(R(100)<30+S.s*.5){S.hb[ks[0]]=0;sfx("good");lg("အကျင့်ဆိုး ဖြတ်နိုင်သွားပြီ ✅","r")}else{sfx("bad");lg("မအောင်မြင်သေးဘူး ❌","r")}return{s:1}},12]]],
["🧠","စိတ်နဲ့ဉာဏ်",[["စာဖတ်မယ်",{w:2},4],["ပုံဆွဲ/ဂီတ လေ့ကျင့်မယ်",{w:1,s:2},4],["ပဟေဠိ/ဉာဏ်စမ်း ကစားမယ်",{w:2},5],["တရားထိုင်မယ်",{s:4},7]]],
["🗣️","ဘာသာစကား",[]],
["💄","ရုပ်ရည်",[["သနပ်ခါးလိမ်း၊ ကိုယ်လက်သန့်ရှင်းမယ်",{l:3,m:-60},10],["ဆံပင်/အဝတ်အစား ပြင်ဆင်မယ်",{l:3,m:-150},13]]],
["👥","လူမှုရေး",[["သူငယ်ချင်းနဲ့ တွေ့မယ်",{s:3},10],["ဘုန်းကြီးကျောင်း/ဘုရား လှူမယ်",{s:3,f:2,m:-100},10],["စေတနာ့ဝန်ထမ်း လုပ်မယ်",{s:2,f:3},14]]],
["💰","ငွေရေးကြေးရေး",[["အချိန်ပိုင်းအလုပ် လုပ်မယ်",{m:320,h:-1},16],["ရွှေ/ဘဏ်မှာ စုမယ် (၅%)",()=>({m:Math.round(S.m*.05)}),16],["ရင်းနှီးမြှုပ်နှံမယ် (အန္တရာယ်ရှိ)",()=>R(2)?{m:Math.round(S.m*.15)}:{m:-Math.round(S.m*.1)},18]]],
["🏠","နေထိုင်မှုနဲ့ ပိုင်ဆိုင်မှု",[["ရွှေဝယ်မယ် (၅သိန်း)",BUY(500,c=>{S.gold=(S.gold||0)+500;return{m:-c}}),16],["ရွှေရောင်းမယ်",()=>{let g=S.gold||0;if(!g)return alert("ရွှေမရှိဘူး"),false;S.gold=0;return{m:g}},16],["လက်ဝတ်ရတနာ ဝယ်မယ် (၃သိန်း)",BUY(300,c=>({m:-c,l:3,s:1})),16],["ကားဝယ်မယ် (၆၀သိန်း)",BUY(6000,c=>{if(S.car)return alert("ကားရှိပြီးသားပဲ"),false;S.car=1;return{m:-c,s:3}}),18],["ကားရောင်းမယ်",()=>{if(!S.car)return alert("ကားမရှိဘူး"),false;S.car=0;return{m:4000}},18],["အိမ်ခြံဝယ်မယ် (၁၅၀သိန်း)",BUY(15000,c=>{if(S.house)return alert("အိမ်ရှိပြီးသားပဲ"),false;S.house=1;return{m:-c,s:5}}),18],["အိမ်ခြံရောင်းမယ်",()=>{if(!S.house)return alert("အိမ်မရှိဘူး"),false;S.house=0;return{m:12000}},18]]],
["🕊️","NUG နဲ့ ရပ်ရွာလှုပ်ရှားမှု",[["NUG ပညာရေး/ကျန်းမာရေးမှာ စေတနာ့ဝန်ထမ်း လုပ်မယ်",NG(()=>R(100)<5?{h:-10,s:-8}:{s:3,f:3,w:1,m:-100}),16],["NUG ရန်ပုံငွေ လှူမယ်",NG({m:-300,s:2,f:2}),16],["CDM ဝန်ထမ်းတွေကို ကူညီမယ်",NG({m:-200,s:3,f:2}),16],["အွန်လိုင်းကနေ ကလေးတွေကို စာသင်ပေးမယ်",NG({w:1,s:3,f:2}),16]]]
];

const NW=p=>(p.m||0)+(p.gold||0)+(p.house?15000:0)+(p.car?3000:0);
const LG=[["အင်္ဂလိပ် (IELTS)","EN","IELTS",[],0],["အင်္ဂလိပ် (TOEFL)","E2","TOEFL",[],1990],["ဂျပန်","JP","JLPT",[],1990],["ကိုရီးယား","KR","TOPIK",[],2000],["တရုတ်","CN","HSK",[],1990],["ပြင်သစ်","FR","DELF",[],0],["ဂျာမန်","DE","Goethe",[],1990],["ထိုင်း","TH","ထိုင်းစာ",[],0]];
const LGI=()=>({EN:{p:0,lv:0},JP:{p:0,lv:0},KR:{p:0,lv:0},CN:{p:0,lv:0},FR:{p:0,lv:0},DE:{p:0,lv:0},E2:{p:0,lv:0},TH:{p:0,lv:0}});
const certs=()=>Object.values(S.lg||{}).reduce((a,x)=>a+x.lv,0);
const ch=(i,b)=>Math.max(5,Math.min(95,Math.round(20+S.w*.25+Math.min(S.ex,5)*2+Math.min((S.exc[i-3]||0)*4,20)+Math.min(certs()*3,9)+S.ad*3+(S.deg?15:S.mu?6:0)+(S.rt?10:0)+(i<3?25:0)+(b?35:0))));
const INFO={EN:"IELTS ရမှတ် ၃.၅–၈.၀",E2:"TOEFL iBT ၀–၁၂၀",JP:"JLPT N5–N1",KR:"TOPIK I–II",CN:"HSK ၁–၆",FR:"DELF A1–B2",DE:"Goethe A1–B2",TH:"ထိုင်းစာ အဆင့် ၁–၃"};
const EX={EN:{s:1,min:3.5,max:8,st:.5,tr:[5,6.5,7.5],fee:300},E2:{s:1,min:0,max:120,st:1,tr:[72,94,105],fee:280},JP:{t:[["N5",180,80,0,1],["N4",180,90,8,1],["N3",180,95,16,2],["N2",180,90,24,2],["N1",180,100,32,3]],fee:150},KR:{t:[["TOPIK I",200,80,0,1],["TOPIK II",300,120,16,2]],fee:150},CN:{t:[["HSK ၁",200,120,0,1],["HSK ၂",200,120,6,1],["HSK ၃",300,180,12,2],["HSK ၄",300,180,18,2],["HSK ၅",300,180,26,3],["HSK ၆",300,180,34,3]],fee:150},FR:{t:[["A1",100,50,0,1],["A2",100,50,6,1],["B1",100,50,14,2],["B2",100,50,22,3]],fee:200},DE:{t:[["A1",100,60,0,1],["A2",100,60,6,1],["B1",100,60,14,2],["B2",100,60,22,3]],fee:200},TH:{t:[["အခြေခံ",100,60,0,1],["အလယ်",100,60,12,2],["အဆင့်မြင့်",100,60,24,3]],fee:100}};
const perf=(s,df)=>Math.max(0,Math.min(100,15+s.p*5+S.w*.3+R(15)-7-(S.w<50?10:0)-df));
function lgui(){if(LS<0)return `<button onclick="AM=-1;view()">‹ နောက်သို့</button><div class="c"><b>🗣️ ဘာသာစကားများ</b></div>`+LG.map((g,i)=>`<button onclick="LS=${i};view()">${g[0]} · ${S.lg[g[1]].best||"လက်မှတ်မရှိ"}</button>`).join("");let g=LG[LS],s=S.lg[g[1]],E=EX[g[1]],h=`<button onclick="LS=-1;view()">‹ ဘာသာစကားများ</button><div class="c"><b>${g[0]}</b> · ${s.best||"လက်မှတ်မရှိ"} · လေ့လာမှု ${BN(Math.floor(s.p))}<br><small>${INFO[g[1]]}</small></div><button onclick="ls(${LS})">📖 လေ့လာမယ်</button>`;if(E.s)return h+`<button class="pri" onclick="ex(${LS},0)">📝 စာမေးပွဲဖြေမယ် (${K(E.fee)})</button>`;return h+E.t.map((t,j)=>`<button onclick="ex(${LS},${j})">${s.ps&&s.ps[t[0]]?"✔ ":""}${t[0]} ဖြေမယ် (အောင်မှတ် ${BN(t[2])}/${BN(t[1])} · ${K(E.fee)})</button>`).join("")}
function ls(i){if(S.T<=0)return noTurns();let k=LG[i][1];S.lsy=S.lsy||{};let f=Object.keys(S.lsy),m=(f.length==0||f[0]==k)?1:.2;S.lsy[k]=1;if(S.lg[k].lv==0&&LG.filter(g=>S.lg[g[1]].lv>=1).length>=3)m*=.2;S.lg[k].p+=m;use({w:1},LG[i][0]+" လေ့လာ")}
function ex(i,ti){if(S.T<=0)return noTurns();let g=LG[i],k=g[1],s=S.lg[k],E=EX[k];if((S.a<16?S.fw:S.m)<E.fee)return alert("ငွေမလောက်ဘူး");S.T--;ap({m:-E.fee});s.ps=s.ps||{};if(E.s){let p=perf(s,0),sc=Math.max(E.min,Math.min(E.max,Math.round((E.min+(E.max-E.min)*p/100)/E.st)*E.st)),f=E.st<1?sc.toFixed(1):sc;if(!s.sc||sc>s.sc){s.sc=sc;s.best=g[2]+" "+f}let tr=E.tr.filter(x=>sc>=x).length;if(tr>s.lv)s.lv=tr;lg(`📝 ${g[2]} ရမှတ် ${f} / ${E.max}`,"r");if(sc>=E.tr[0])sfx("good");else sfx("bad")}else{let t=E.t[ti],sc=Math.round(perf(s,t[3])/100*t[1]),pass=sc>=t[2],tr=t[4];if(k=="KR"&&ti==1&&sc>=190)tr=3;if(pass){s.ps[t[0]]=1;if(tr>=s.lv)s.best=g[2]+" "+t[0];if(tr>s.lv)s.lv=tr}lg(`📝 ${g[2]} ${t[0]} ရမှတ် ${BN(sc)}/${BN(t[1])} - ${pass?"အောင်ပြီ 🏅":"မအောင်ဘူး ❌"}`,"r");sfx(pass?"good":"bad")}S.lang=Math.max(S.lg.EN.lv,S.lg.E2.lv);view()}

const DS=[
  ["ထိုင်း",300,1.3,null],
  ["ဂျပန်",1200,3,["JP",1]],
  ["ကိုရီးယား",1000,3,["KR",1]],
  ["စင်ကာပူ",800,4,["EN",2]],
  ["ဩစတြေးလျ",1600,4.2,["EN",2]],
  ["အမေရိကန်",1800,4.5,["EN",2]],
  ["အင်္ဂလန်",1700,4.3,["EN",2]],
  ["ဂျာမနီ",1500,3,["DE",2]],
  ["ပြင်သစ်",1500,3,["FR",1]],
  ["တရုတ်",900,2.5,["CN",1]]
];
const ok2=d=>!d[3]||(d[3][0]=="EN"?S.lang:S.lg[d[3][0]].lv)>=d[3][1];
function pp0(){if(S.m<150)return alert("ငွေမလောက်ဘူး");S.m-=150;S.pa=S.y;S.pd=S.y>=2030?0:(S.e?1:0)+(S.r?1:0)+(S.y>=2021?1:0)+R(2);lg("🛂 ပတ်စပို့ လျှောက်ထားလိုက်ပြီ။");if(!S.pd){S.pp=1;S.pe=S.y+5;sfx("levelup");lg("🛂 ပတ်စပို့ ရပြီ။")}else sfx("cash");view()}
function pp1(){if(S.m<400)return alert("ငွေမလောက်ဘူး");S.m-=400;S.c++;S.pp=1;S.pe=S.y+5;sfx("bad");lg("🛂 လာဘ်ပေးပြီး ပတ်စပို့ ထုတ်လိုက်တယ်။","r");view()}
const vz=(i,t)=>{let d=DS[i],c=(t=="t"?70:t=="w"?55:45)+(certs()>=2?10:0)+(S.deg?10:0)+(S.trips>0?8:0)+(S.m>=d[1]*3?10:0)-Math.min(S.vr*10,30);return Math.max(10,Math.min(95,c))};
function visa(i,t,fee){if(S.m<fee)return alert("ဗီဇာကြေး ငွေမလောက်ဘူး"),false;S.m-=fee;if(R(100)<vz(i,t))return true;S.vr++;sfx("bad");lg(`🛂 ${DS[i][0]} ဗီဇာ ကျသွားတယ်။`,"r");view();return false}
function trip(i){let d=DS[i],c=d[1]*.6;if(!ppv())return alert("ပတ်စပို့ သက်တမ်းကုန်နေပြီ");if(S.m<c+80)return alert("ငွေမလောက်ဘူး");if(!visa(i,"t",80))return;sfx("levelup");lg(`🧳 ${d[0]}ကို အပျော်ခရီး ထွက်လိုက်တယ် (${ap({m:-c,s:8,h:2})})`);S.trips++;view()}
function go(i,t){
  let d=DS[i];if(!ppv())return alert("ပတ်စပို့ သက်တမ်းကုန်နေပြီ");if(S.job)return alert("လက်ရှိအလုပ်ကနေ အရင်ထွက်ပါ");if(S.uni||S.ae)return alert("ကျောင်း/သင်တန်းကို အရင်ပြီးအောင် တက်ပါ");
  if(t=="s"){
    if(!S.mu)return alert("အခြေခံပညာ အောင်မှ လျှောက်လို့ရမယ်");
    let p=20+S.w*.4+certs()*6+S.mk/6*.3;
    if(R(100)>=p){sfx("bad");lg(`❌ ${d[0]} ပညာတော်သင် ဝင်ခွင့် မရခဲ့ဘူး။`,"r");return view()}
    if(!visa(i,"s",100))return;
    S.ab={d:d[0],n:0,mu:d[2],sc:1};
    S.schol=0;S.scholLeft=0;
    sfx("levelup");lg(`🎓 ${d[0]} (${foreignOrg("uni",d[0])}) ပညာတော်သင်နဲ့ ဗီဇာ ရပြီ! နိုင်ငံခြားမှာ Scholarship လျှောက်နိုင်ပြီ။`,"r");
    return view();
  }
  if(S.m<d[1]+120)return alert("ငွေမလောက်ဘူး");if(!visa(i,"w",120))return;S.m-=d[1];S.ab={d:d[0],n:0,mu:d[2]};S.job={cid:-1,lvl:0,y:0,p:0,abroad:1,gov:0,s:Math.round(950*d[2]),n:d[0]+" - အခြေခံလုပ်သား ("+foreignOrg("sch",d[0])+")"};S.co=[];sfx("levelup");lg(`✈️ ${d[0]}ကို အလုပ်ဗီဇာနဲ့ ထွက်လာပြီ။`,"r");view()
}
function applyScholarship(){
  if(!S.ab||!S.ab.sc)return alert("နိုင်ငံခြား ပညာတော်သင် ခရီးစဉ်မှာသာ လျှောက်လို့ရမယ်");
  if(S.schol&&(S.scholLeft||0)>0)return alert("လက်ရှိဘွဲ့အတွက် Scholarship ရရှိပြီးသား ဖြစ်ပါတယ်");
  let chance=Math.max(15,Math.min(92,Math.round(35+S.w*.45+(S.mk/6)*.25+certs()*6)));
  if(R(100)<chance){
    S.schol=1;
    S.scholLeft=3;
    let mjName=S.mj?MJ[S.mj-1].n:"သက်ဆိုင်ရာ မေဂျာ";
    let uniName=foreignOrg("uni",S.ab.d);
    sfx("levelup");
    lg(`🏆 ဂုဏ်ယူပါတယ်! ${uniName} မှာ ${mjName} အတွက် Scholarship ရရှိသွားပြီ — ကျောင်းလခ သက်သာပြီး နှစ်စဉ် ပညာသင်ထောက်ပံ့ကြေး (၃ နှစ်အထိ/ဘွဲ့တစ်ခုစာ) ရရှိပါမည်။`,"y");
    showInfoPopup("🎓 Scholarship ရရှိခြင်း",`<b>${uniName}</b> (${S.ab.d}) ရှိ သက်ဆိုင်ရာ <b>${mjName}</b> မေဂျာအတွက် <b>Scholarship</b> ရရှိသွားပါပြီ။<br><br>• ကျောင်းလခ သက်သာ/ထောက်ပံ့မှု ရရှိမည်<br>• နှစ်စဉ် ပညာသင်ထောက်ပံ့ကြေး ရရှိမည် (<b>၃ နှစ် အကန့်အသတ် · ဘွဲ့တစ်ခုစာ</b>)`,false);
  }else{
    sfx("bad");
    lg(`📄 ${S.ab.d} Scholarship လျှောက်လွှာ ယခုနှစ် မအောင်မြင်သေးပါ။ နောက်နှစ် ထပ်ကြိုးစားနိုင်ပါတယ်။`,"r");
  }
  view();
}
function abPanel(){
  let b=S.ab,fm=S.mar||S.kids.length;
  let canApplySch=b.sc&&(!S.schol||(S.scholLeft||0)<=0);
  let schBtn=canApplySch?`<button class="pri" onclick="applyScholarship()">🎓 Scholarship လျှောက်မယ် (၃ နှစ်အကန့်အသတ် · ဘွဲ့တစ်ခုစာ)</button>`:"";
  return `<div class="c"><b>🌏 ${b.d}မှာ နေနေတယ်</b><br>နေတာ ${BN(b.n)} နှစ်ရှိပြီ · မိသားစု ${b.fam?"အတူနေတယ်":"မြန်မာပြည်မှာ ကျန်ခဲ့တယ်"}${b.sc?`<br>🎓 Scholarship အခြေအနေ: ${S.schol?`ရရှိပြီး (${BN(S.scholLeft||0)} နှစ်ကျန် · ဘွဲ့တစ်ခုစာ)`:"မလျှောက်ရသေး / နှစ်ကုန်သွားပြီ"}`:""}</div>`
    +schBtn
    +`<button onclick="rmt(0)">📞 မိသားစုကို ဗီဒီယိုခေါ်မယ်</button><button onclick="rmt(1)">💸 မိသားစုဆီ ငွေလွှဲမယ် (၃သိန်း)</button>`+(fm&&!b.fam?`<button onclick="fv()">👪 မိသားစုကို ခေါ်မယ် (ဗီဇာ + ၅သိန်း)</button>`:"")+`<button onclick="ret()">🏠 မြန်မာပြည် ပြန်လာမယ်</button>`+(b.n>=5?`<button onclick="cit()">🛂 ${b.d} နိုင်ငံသားခံယူမယ် (ဂိမ်းပြီးမယ်)</button>`:`<small>နိုင်ငံသားခံယူခွင့်က ၅ နှစ်နေပြီးမှ ရမယ်</small>`)
}
function rmt(t){use(()=>{let v=t?8:6;S.kids.forEach(k=>k.rel=cl(k.rel+v));S.sr=cl(S.sr+v);(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel+v)));return t?{m:-300,s:1}:{s:2}},t?"မိသားစုဆီ ငွေလွှဲ":"ဗီဒီယိုခေါ်")}
function fv(){if(S.m<500)return alert("ငွေမလောက်ဘူး");S.m-=500;let c=60+(S.ab.t=="w"?10:0)+(S.deg?10:0);if(R(100)<c){S.ab.fam=1;sfx("levelup");lg("👪 မိသားစုဗီဇာ ရလို့ အတူနေရပြီ။","r")}else{sfx("bad");lg("❌ မိသားစုဗီဇာ ကျသွားတယ်။","r")}view()}
function ret(){S.ab=null;S.schol=0;S.scholLeft=0;S.rt=1;if(S.job&&S.job.abroad)S.job=null;sfx("good");lg(`🏠 မြန်မာပြည် ပြန်ရောက်ပြီ (${ap({s:5})})။`,"r");view()}
function cit(){S.end=1;S.kids=[];sfx("levelup");lg("🌏 နိုင်ငံခြားမှာ နိုင်ငံသား ခံယူလိုက်ပြီ။","r");view()}

const HB={smoke:["ဆေးလိပ်သောက်ဖို့",{h:-2,m:-120},"ဆေးလိပ်"],alc:["အရက်သောက်ဖို့",{h:-2,s:-1,m:-200},"အရက်"],gam:["ကံစမ်းမဲ/လောင်းကစားလုပ်ဖို့",{m:-400,s:-1},"လောင်းကစား"],drug:["မူးယစ်ဆေးသုံးဖို့",{h:-5,m:-500,s:-3},"မူးယစ်ဆေး"]};
function habEv(){let ks=Object.keys(HB).filter(k=>!S.hb[k]);if(!ks.length)return null;let k=ks[R(ks.length)],h=HB[k];return {t:`သူငယ်ချင်း/အသိုင်းအဝိုင်းက ${h[0]} တိုက်တွန်းနေတယ်။`,o:[["ငြင်းပြီး ရှောင်မယ်",{s:2}],["စမ်းကြည့်မယ်",()=>{S.hb[k]=1;if(k=="drug")S.k++;return{s:1}}]]}}
const DZ=[["သွေးလွန်တုပ်ကွေး","a",()=>1,300,3],["ငှက်ဖျား","a",()=>S.rg>0,200,3],["တီဘီ (ဆေး ၆ လ ပုံမှန်သောက်ရမယ်)","a",()=>S.a>=8,500,6],["သွေးတိုးရောဂါ","c",()=>S.a>=35&&R(100)<30+(S.dt<-2?25:0)-(S.dt>3?15:0)+(S.hb.smoke?10:0)],["ဆီးချိုရောဂါ","c",()=>S.a>=35&&R(100)<25+(S.dt<-2?30:0)-(S.dt>3?15:0)],["အဆုတ်ရောဂါ (ဆေးလိပ်ကြောင့်)","c",()=>S.hb.smoke&&S.a>=35],["အသည်းရောဂါ (အရက်ကြောင့်)","c",()=>S.hb.alc&&S.a>=30],["နှလုံးရောဂါ","c",()=>S.a>=50&&R(100)<40]];
function dis(){S.cz=S.cz||{};let L=DZ.filter(d=>(d[1]=="a"||S.cz[d[0]]===undefined)&&d[2]());if(!L.length)return null;let d=L[R(L.length)],n=d[0];if(d[1]=="a")return {t:`🤒 ${n} ဝင်နေတယ်။`,o:[["ချက်ချင်း ဆေးကုမယ်",{h:-2,m:-d[3]}],["အိမ်မှာပဲ စောင့်ကြည့်မယ်",()=>R(100)<d[4]*5?{h:-25,m:-d[3]*5}:{h:-6}]]};return {t:`🩺 ${n} ရှိနေတာ စစ်တွေ့ရတယ်။`,o:[["ဆေးပုံမှန်သောက်ပြီး ထိန်းမယ်",()=>{S.cz[n]=1;return{m:-200,h:-1}}],["မကုဘဲ ဒီအတိုင်းနေမယ်",()=>{S.cz[n]=0;return{}}]]}}

function upkeep(){
  soc();eduYear();
  if(S.a==16){mv(Math.round(S.fw*.05),"မိသားစုပေးငွေ");lg("💰 အသက် ၁၆ ပြည့်ပြီ - ကိုယ့်ဘာသာ ငွေစကိုင်ရပြီ။","r")}
  if(S.fw<0)S.fw=0;if(S.gold)S.gold=Math.round(S.gold*1.03);if(S.car)mv(-150,"ကားထိန်းသိမ်းစရိတ်");
  for(let k in S.hb)if(S.hb[k])lg(`🚬 ${HB[k][2]} ကြောင့် စရိတ်ကုန်ပြီး ကျန်းမာရေး ထိခိုက်နေတယ် (${ap(HB[k][1])})`,"r");
  for(let n in S.cz){if(S.cz[n]){ap({m:-100});lg(`🩺 ${n} - ဆေးသောက်ပြီး ထိန်းထားတယ်။`)}else{lg(`🩺 ${n} - မကုဘဲ ထားလို့ ပိုဆိုးလာတယ် (${ap({h:-3})})`,"r");if(R(100)<4){S.h=cl(S.h-25);lg(`⚠️ ${n} ပြင်းထန်လာပြီ။`,"r")}}}
  if(S.pa&&!S.pp&&S.y>=S.pa+S.pd){S.pp=1;S.pe=S.y+5;lg("🛂 ပတ်စပို့ ထွက်လာပြီ။","r")}
  if(S.ab){let b=S.ab;b.n++;ap({s:-1,w:1});if(S.pp&&!ppv())ap({s:-2});if(b.fam)mv(-Math.round(450*EM()),"မိသားစု နိုင်ငံခြားနေထိုင်စရိတ်");S.kids.forEach(k=>k.rel=cl(k.rel-(b.fam?0:4)));S.sr=cl(S.sr-(b.fam?0:4));(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel-2)));lg(`🌏 ${b.d}မှာ နေနေတာ ${BN(b.n)} နှစ်ရှိပြီ`)}
  taxes();
}

E.push({a:[18,80],wt:2,c:()=>S.ab,t:"နိုင်ငံခြားမှာ မိသားစုကို အရမ်းလွမ်းနေမိတယ်။",o:[["မိသားစုဆီ ငွေလွှဲပြီး ဖုန်းဆက်မယ်",()=>{(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel+8)));return{m:-500,s:2}}],["သည်းခံပြီး အလုပ်ဆက်လုပ်မယ်",{s:-3}]]});

const NEWS=[
  ["n1",1920,1947,"ရန်ကုန်နှင့် နယ်မြို့များတွင် လမ်းပန်းဆက်သွယ်ရေးနှင့် ကုန်စည်စီးဆင်းမှု အပြောင်းအလဲများ ရှိနေသည်။",{m:-60},0],
  ["n2",1920,1947,"ကျေးလက်စိုက်ပျိုးရေးလုပ်ငန်းများတွင် မိုးလေဝသအပေါ် မှီခိုနေရပြီး အထွက်နှုန်း ကွာခြားနေသည်။",{s:-1},0],
  ["n3",1925,1947,"မြို့ပြစာသင်ကျောင်းနှင့် စာပေအသင်းများတွင် ခေတ်ပညာရေးအပေါ် စိတ်ဝင်စားမှု တိုးလာသည်။",{w:2},6],
  ["n4",1948,1961,"လွတ်လပ်ရေးရပြီးနောက် နိုင်ငံပြန်လည်ထူထောင်ရေးနှင့် ပညာရေးကဏ္ဍ ကြိုးပမ်းမှုများ ရှိနေသည်။",{s:2,w:1},6],
  ["n5",1948,1961,"မြို့ပြနှင့် ကျေးလက်အကြား ကုန်သွယ်ရေးလမ်းကြောင်းများ ပြန်လည်ဖွင့်လှစ်လာသည်။",{m:80},16],
  ["n6",1962,1987,"စီးပွားရေးစနစ်ပြောင်းလဲမှုကြောင့် ကုန်ပစ္စည်းအချို့ ရှားပါးပြီး တန်းစီဝယ်ယူရမှုများ ရှိနေသည်။",{m:-80,s:-2},0],
  ["n7",1962,1987,"စာတတ်မြောက်ရေးနှင့် အခြေခံပညာသင်ကြားရေး လှုပ်ရှားမှုများ ဆက်လက်ဆောင်ရွက်နေသည်။",{w:2},6],
  ["n8",1988,2010,"ဆက်သွယ်ရေးနှင့် နိုင်ငံတကာအချက်အလက် ရရှိမှု အကန့်အသတ်များအကြား လူငယ်များ ကိုယ်ပိုင်လေ့လာနေကြသည်။",{w:1,s:-1},10],
  ["n9",1995,2010,"ပုဂ္ဂလိကကျူရှင်နှင့် ဘာသာစကားသင်တန်းများ မြို့ကြီးများတွင် ပိုမိုများပြားလာသည်။",{w:2},12],
  ["n10",2011,2020,"မိုဘိုင်းဖုန်းနှင့် အင်တာနက်အသုံးပြုမှု ကျယ်ပြန့်လာပြီး သတင်းအချက်အလက် ပိုမိုမြန်ဆန်လာသည်။",{w:2,s:1},8],
  ["n11",2012,2020,"ခရီးသွားလာမှုနှင့် စီးပွားရေးကဏ္ဍသစ်များ ဖွံ့ဖြိုးလာပြီး အလုပ်အကိုင်အခွင့်အလမ်း တိုးလာသည်။",{m:120},16],
  ["n12",2021,2029,"ကုန်ဈေးနှုန်းနှင့် ငွေကြေးဖောင်းပွမှုကြောင့် အိမ်ထောင်စုအသုံးစရိတ်များ ပိုမိုဖိအားများလာသည်။",{m:-150,s:-2},0],
  ["n13",2021,2029,"အွန်လိုင်းပညာရေး၊ Remote အလုပ်နှင့် ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုများ တွင်ကျယ်လာသည်။",{w:2},14],
  ["n14",2030,2400,"ပညာရေးနှင့် ကျွမ်းကျင်မှုအခြေပြု အလုပ်အကိုင်ကဏ္ဍများ တိုးတက်လာပြီး မျှော်လင့်ချက်သစ်များ ပေါ်လာသည်။",{w:2,s:2,m:120},12]
];

function hv(e){if(S.a>=14&&S.a<=70)return e;return mk(`📜 ${BN(S.y)} - ${e.t}`,[["ဆက်သွားမယ်",{s:-2}]])}

function personalLine(){
  let loc=S.ab?S.ab.d:(S.town||"ရပ်ရွာ"), a=S.a, j=S.job?S.job.n:"";
  if(S.ab){
    if(S.ab.sc)return `${loc} မှာ နိုင်ငံခြားပညာတော်သင်အဖြစ် ကျောင်းစာနဲ့ ယဉ်ကျေးမှုအသစ်တွေကြား ကြိုးစားဖြတ်သန်းနေတယ်။`;
    return `${loc} မှာ အလုပ်ခွင်နဲ့ နိုင်ငံခြားနေထိုင်မှုဘဝကို အံဝင်ခွင်ကျဖြစ်အောင် ရပ်တည်နေတယ်။`;
  }
  if(a<6)return `${loc} မှာ ငယ်ဘဝကို လွတ်လပ်ပျော်ရွှင်စွာ ဖြတ်သန်းရင်း အနီးအနားက အရာတွေကို စူးစမ်းနေတယ်။`;
  if(a<18)return `${loc} မှာ ${S.dr?"ဘဝရပ်တည်မှုအတွက်":"ကျောင်းစာတွေနဲ့အတူ"} အသက် ${BN(a)} နှစ်အရွယ် ဖြတ်သန်းမှုတွေကို ကြုံတွေ့နေတယ်။`;
  if(S.job&&!S.job.b)return `${loc} မှာ ${j} တာဝန်ကို ထမ်းဆောင်ရင်း လုပ်ငန်းခွင်အတွေ့အကြုံတွေ ရရှိနေတယ်။`;
  if(S.job&&S.job.b)return `${loc} မှာ ${j} လုပ်ငန်းကို ဦးစီးရင်း ဖောက်သည်တွေနဲ့ ဈေးကွက်အခြေအနေကို လေ့လာနေတယ်။`;
  if(a>=60)return `${loc} မှာ အသက် ${BN(a)} နှစ်အရွယ် အေးချမ်းစွာ အနားယူရင်း ဖြတ်သန်းခဲ့တဲ့ ဘဝအတွေ့အကြုံတွေကို ပြန်သုံးသပ်နေတယ်။`;
  return `${loc} မှာ အသက် ${BN(a)} နှစ်အရွယ် ကိုယ့်ဘဝလမ်းကြောင်းအတွက် ဆုံးဖြတ်ချက်တွေ ချမှတ်နေတယ်။`;
}

function familyLine(){
  let loc=S.ab?`${S.ab.d} မှတစ်ဆင့် ${S.town||"မိသားစု"}`:(S.town||"မိသားစု"), a=S.a;
  let alivePar=(S.par||[]).filter(p=>p.al);
  if(S.mar&&S.pt&&S.kids.length)return `${loc} မှာ အိမ်ထောင်ဖက် ${S.pt.n} နဲ့ သားသမီး ${BN(S.kids.length)} ဦးအတွက် နေ့စဉ်စားဝတ်နေရေးနဲ့ အနာဂတ်ကို အတူစီစဉ်နေတယ်။`;
  if(S.mar&&S.pt)return `${loc} မှာ အိမ်ထောင်ဖက် ${S.pt.n} နဲ့အတူ အိမ်ထောင်ရေးခရီးကို အပြန်အလှန် နားလည်မှုနဲ့ ဖြတ်သန်းနေတယ်။`;
  if(alivePar.length)return `${loc} မှာ ${alivePar.map(p=>p.r).join("နဲ့")}တို့နဲ့အတူ မိသားစုအရေးနဲ့ အသက် ${BN(a)} နှစ်အရွယ် အခြေအနေတွေ မျှဝေပြောဆိုဖြစ်တယ်။`;
  return `${loc} မှာ ဆွေမျိုးမိတ်ဆွေတွေနဲ့ အပြန်အလှန် ဖေးမကူညီရင်း မိသားစုဆက်ဆံရေးကို ထိန်းသိမ်းနေတယ်။`;
}

function yearly(){
  S.usedNews=S.usedNews||[];
  let N1=NEWS.filter(n=>S.y>=n[1]&&S.y<=n[2]&&S.a>=(n[5]||0)&&!S.usedNews.includes(n[0]));
  if(!N1.length){
    let pool=NEWS.filter(n=>S.y>=n[1]&&S.y<=n[2]&&S.a>=(n[5]||0));
    if(pool.length){
      S.usedNews=S.usedNews.filter(id=>!pool.some(p=>p[0]===id));
      N1=pool;
    }
  }
  if(N1.length){
    let n=N1[R(N1.length)];
    S.usedNews.push(n[0]);
    let s=ap(n[4]);
    lg(`📰 သတင်း - ${n[3]}${s?` (${s})`:""}`);
  }
  if(R(10)<7){
    let pFx=S.a>=18?{s:1}:{w:1,s:1};
    let s=ap(pFx);
    lg(`🧑 ကိုယ်တွေ့ (${BN(S.a)} နှစ်) - ${personalLine()}${s?` (${s})`:""}`);
  }
  if(R(10)<6&&((S.par||[]).some(p=>p.al)||S.kids.length||S.mar)){
    let s=ap({s:2});
    lg(`👪 မိသားစု - ${familyLine()}${s?` (${s})`:""}`);
  }
}

function parents(){
  (S.par||[]).forEach(p=>{
    if(!p.al)return;
    p.rel=cl(p.rel-1);
    let a=S.y-p.by;
    if(a>62&&R(100)<(a-62)*3){
      p.al=0;
      S.s=cl(S.s-15);
      sfx("bad");
      lg(`🕯️ ${p.r} ${p.n} ကွယ်လွန်သွားပြီ။ စိတ်ခွန်အား -15% ကျသွားတယ်။`,"r");
      let inhMsg="";
      if(p.rel>=50){let v=[300,1500,6000][S.f];mv(v,"အမွေ");lg("အမွေ +"+K(v));inhMsg=`<br>💰 ရရှိသော အမွေ: <b>${K(v)}</b>`}
      showInfoPopup(
        `🕯️ ${p.r} ကွယ်လွန်ခြင်း သတင်း`,
        `<b>${p.r} ${p.n}</b> (အသက် ${BN(a)} နှစ်) သည် ${BN(S.y)} ခုနှစ်တွင် ကွယ်လွန်သွားခဲ့ပါသည်။<br><br>• စိတ်ခွန်အား <b>-15%</b> ကျဆင်းသွားသည်${inhMsg}`,
        true
      );
    }
  });
}

E.push({a:[18,80],wt:2,c:()=>S.ab,t:"နိုင်ငံခြားမှာ မိသားစုကို အရမ်းလွမ်းနေမိတယ်။",o:[["မိသားစုဆီ ငွေလွှဲပြီး ဖုန်းဆက်မယ်",()=>{(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel+8)));return{m:-500,s:2}}],["သည်းခံပြီး အလုပ်ဆက်လုပ်မယ်",{s:-3}]]});

/* မြန်မာ့ရိုးရာ နောက်ခံတီးလုံး (၄ မျိုး) + Sound Effects */
let AU=null, MG=null, SG=null, SO=1, MV=.5, MO=1, MT=null, BT=0, BGM_STYLE=0, NEXT_NOTE_TIME=0, RAF_BGM=null;

function au(){
  if(!AU){
    AU=new(window.AudioContext||window.webkitAudioContext)();
    MG=AU.createGain();MG.gain.value=MV*.65;MG.connect(AU.destination);
    SG=AU.createGain();SG.gain.value=.72;SG.connect(AU.destination);
  }
  if(AU.state=="suspended")AU.resume();
}

function vol(v){MV=v/100;if(MG)MG.gain.value=MV*.65}
function setBgmMode(id){BGM_STYLE=id;if(MO){mus(1);sfx("good")}}
function mus(on){
  MO=on?1:0;
  if(RAF_BGM){cancelAnimationFrame(RAF_BGM);RAF_BGM=null;}
  if(!MO)return;
  try{
    au();
    NEXT_NOTE_TIME=AU.currentTime+0.05;
    const loop=()=>{
      if(!MO||!AU)return;
      let stepSec=(BGM_STYLE===1?460:BGM_STYLE===2?420:BGM_STYLE===3?340:370)/1000;
      if(NEXT_NOTE_TIME<AU.currentTime-0.5)NEXT_NOTE_TIME=AU.currentTime+0.05;
      while(NEXT_NOTE_TIME<AU.currentTime+0.18){
        tkAt(NEXT_NOTE_TIME);
        NEXT_NOTE_TIME+=stepSec;
      }
      RAF_BGM=requestAnimationFrame(loop);
    };
    RAF_BGM=requestAnimationFrame(loop);
  }catch(e){}
}

function tone(f,t,d,v,ty,slideTo){
  let o=AU.createOscillator(),g=AU.createGain();
  o.type=ty||"sine";o.frequency.setValueAtTime(f,t);
  if(slideTo)o.frequency.exponentialRampToValueAtTime(slideTo,t+d);
  g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);
  o.connect(g);g.connect(SG);o.start(t);o.stop(t+d+.05);
}

function sfx(k){
  if(!SO)return;
  try{
    au();let t=AU.currentTime;
    let m={
      click:()=>{let base=740+(R(9)-4)*26;tone(base,t,.055,.11,"sine",base*1.2);tone(base*1.5,t+.015,.035,.04,"triangle")},
      event:()=>{[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,t+i*.07,.26,.16,"triangle"))},
      good:()=>{[523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,t+i*.065,.28,.16,"triangle"))},
      levelup:()=>{[392,523.25,659.25,783.99,1046.5,1567.98].forEach((f,i)=>tone(f,t+i*.06,.36,.18,"triangle"))},
      cash:()=>{tone(987.77,t,.09,.15,"sine");tone(1318.51,t+.075,.22,.16,"triangle")},
      bad:()=>{tone(220,t,.24,.18,"sawtooth",135);tone(155.56,t+.08,.32,.15,"triangle",98)},
      age:()=>{tone(392,t,.42,.15,"sine",440);tone(587.33,t+.09,.55,.12,"triangle")},
      outofturns:()=>{tone(190,t,.14,.18,"sawtooth",140);tone(150,t+.15,.18,.18,"sawtooth",110)}
    };
    m[k]&&m[k]();
  }catch(e){}
}

function env(o,t,p,d){let g=AU.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(p,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(MG);o.start(t);o.stop(t+d+.1)}
function pat(f,t,v){let o=AU.createOscillator(),o2=AU.createOscillator();o.type="triangle";o.frequency.value=f;o2.frequency.value=f*3;env(o,t,.2*v,.9);env(o2,t,.05*v,.25)}
function saung(f,t,v){let o=AU.createOscillator();o.type="sine";o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*1.008,t+1.1);env(o,t,.24*v,1.2)}
function flute(f,t,d){let o=AU.createOscillator();o.type="sine";o.frequency.value=f;env(o,t,.14,d)}
function gong(f,t){[[1,1],[2.76,.3],[5.4,.1]].forEach(x=>{let o=AU.createOscillator();o.frequency.value=f*x[0];env(o,t,.14*x[1],2.2)})}
function hne(f,t,d){let o=AU.createOscillator(),b=AU.createBiquadFilter(),l=AU.createOscillator(),lq=AU.createGain(),g=AU.createGain();o.type="sawtooth";o.frequency.value=f;b.type="bandpass";b.frequency.value=1100;b.Q.value=3;l.frequency.value=5.5;lq.gain.value=5;l.connect(lq);lq.connect(o.frequency);l.start(t);l.stop(t+d+.1);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.09,t+.25);g.gain.linearRampToValueAtTime(.0001,t+d);o.connect(b);b.connect(g);g.connect(MG);o.start(t);o.stop(t+d+.1)}
function drum(t,v){let o=AU.createOscillator();o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(55,t+.18);env(o,t,.22*v,.28)}
function clk(t){let b=AU.createBuffer(1,1800,AU.sampleRate),d=b.getChannelData(0);for(let i=0;i<1800;i++)d[i]=(Math.random()*2-1)*(1-i/1800);let s=AU.createBufferSource(),f=AU.createBiquadFilter(),g=AU.createGain();s.buffer=b;f.type="highpass";f.frequency.value=3500;g.gain.value=.1;s.connect(f);f.connect(g);g.connect(MG);s.start(t)}

function tkAt(t){
  if(!AU||AU.state!="running")return;
  let i=BT%MEL.length,n=SC[MEL[i]];BT++;
  if(BGM_STYLE===0){
    if(R(10)<9){if(R(4)==0)pat(SC[Math.min(6,MEL[i]+1)],Math.max(AU.currentTime,t-.07),.5);pat(n,t,1)}
    if(i%4==0)gong(SC[BS[(i/4|0)%4]]/2,t);
    if(i%8==0)drum(t,1);else if(i%8==4)drum(t,.5);
    if(i%4==2)clk(t);
    if(i%16==0)hne(n,t,2.4);
  }else if(BGM_STYLE===1){
    saung(n,t,.85);
    if(i%2==0)saung(SC[(MEL[i]+2)%7]/2,t+.12,.45);
    if(i%8==0)gong(SC[BS[(i/8|0)%4]]/2,t);
  }else if(BGM_STYLE===2){
    flute(n,t,.55);
    if(i%4==0)drum(t,.45);
    if(i%4==2)clk(t);
    if(i%8==0)saung(SC[BS[(i/8|0)%4]]/2,t,.35);
  }else{
    pat(n,t,.9);
    pat(SC[(MEL[i]+2)%7],t+.14,.55);
    if(i%4==0){gong(SC[BS[(i/4|0)%4]]/2,t);drum(t,.7)}
    if(i%2==1)clk(t);
  }
}

function matric(){let g=S.sys==10?"ဆယ်တန်း":"ဆယ့်နှစ်တန်း";S.mk=Math.max(60,Math.min(580,Math.round(100+S.w*1.9+Math.min(S.ef,25)*12+R(41)-20-(S.w<50?60:0))));if(S.mk>=240){S.mu=1;S.mf=0;sfx("levelup");lg(`📝 ${g} စာမေးပွဲ ရမှတ် ${BN(S.mk)}/၆၀၀ - အောင်ပြီ 🎉`,"r")}else{S.mf=1;sfx("bad");lg(`📝 ${g} စာမေးပွဲ ရမှတ် ${BN(S.mk)}/၆၀၀ - ကျသွားပြီ ❌`,"r")}}
E.push({a:[18,55],wt:2,c:()=>S.ab&&!S.ab.fam&&S.kids.length,t:"နိုင်ငံခြားရောက်နေတုန်း မြန်မာပြည်က ကလေးက လွမ်းလို့ ငိုနေတယ်။",o:[["ဗီဒီယိုခေါ်ပြီး ချော့ပြောမယ်",()=>{S.kids.forEach(k=>k.rel=cl(k.rel+8));return{s:-1}}],["အလုပ်မအားဘူးလို့ ပြောမယ်",()=>{S.kids.forEach(k=>k.rel=cl(k.rel-10));return{}}]]});
E.push({a:[25,75],wt:2,c:()=>S.ab&&(S.par||[]).some(p=>p.al&&S.y-p.by>=60),t:"မြန်မာပြည်က မိဘ နေမကောင်းဘူးလို့ ကြားရတယ်။",o:[["အမြန်ပြန်လာမယ်",()=>{S.ab=null;S.schol=0;S.scholLeft=0;S.rt=1;S.par.forEach(p=>p.al&&(p.rel=cl(p.rel+12)));return{m:-300,s:2}}],["ငွေပို့ပြီး ဟိုမှာပဲ ဆက်နေမယ်",()=>{S.par.forEach(p=>p.al&&(p.rel=cl(p.rel+4)));return{m:-500,s:-3}}]]});

function jobYear(){
  let j=S.job;
  if(j.b){
    let win=R(100)<40+S.w*.25+S.s*.2-(S.y>=2021&&S.y<2030?15:0),v=Math.round(j.cap*(win?.3+R(5)/10:-.3));
    mv(v,v>0?"လုပ်ငန်းအမြတ်":"လုပ်ငန်းအရှုံး");j.pf=(j.pf||0)+v;
    let nl=Math.min(3,Math.floor(Math.max(0,j.pf)/(j.cap*2)));
    if(nl>(j.lvl||0)){j.lvl=nl;j.n=j.n.split(" - ")[0]+" - "+BLD[nl]+" ("+eraOrg("biz")+")";sfx("levelup");lg(`📈 ${BLD[nl]} အဆင့် ရောက်လာပြီ။`,"r")}
    else if(v>0)sfx("cash");
    lg(`လုပ်ငန်း ${v>0?"အမြတ်":"ရှုံး"} ${K(v)}`);return;
  }
  let domMult=(j.abroad&&S.ab)?1:0.78;
  mv(Math.round(j.s*EM()*domMult*(S.rt?1.15:1)),"လုပ်ခလစာ");S.ex++;if(j.cid>=0)S.exc[j.cid]=(S.exc[j.cid]||0)+1;j.y=(j.y||0)+1;
  if(j.cid>=0){
    let c=CAR[j.cid],mx=c[1].split("|").length-1,cr=S.co.length?S.co.reduce((a,x)=>a+x.rel,0)/S.co.length:0;
    if(S.w>=50&&j.lvl<mx&&j.y>=2&&S.ad>=((GATE[j.cid]||{})[j.lvl+1]||0)&&(j.p>=1||R(100)<30+S.w*.2+S.ad*4+(cr>=60?10:0))){
      j.lvl++;j.y=0;j.p=0;j.s=Math.round(pay(j.cid,j.lvl)*(j.abroad&&S.ab?S.ab.mu*.85:1));
      j.n=(j.abroad&&S.ab?S.ab.d+" - ":"")+jn(j.cid,j.lvl);
      if(c[6])ap({f:8});syncDoctorTitle();
      sfx("levelup");lg(`📈 ရာထူးတိုးပြီ → ${j.n}`,"r");
    }
  }else if(j.p>=2){j.s=Math.round(j.s*1.1);j.p=0;sfx("cash");lg("လစာတိုးလာပြီ။")}
}

function taxes(){if(S.a<16)return;let i=S.yi||0,j=S.job,t=0;if(i>0)t=Math.round(i*(j&&j.b?.22:i>3000?.1:i>1500?.05:.02));if(t)mv(-t,"အခွန်");let p=(S.house?100:0)+(S.car?20:0);if(p)mv(-p,"ပိုင်ဆိုင်မှုအခွန်")}
function depr(){if(S.s<20&&!S.dep){S.dep=1;sfx("bad");lg("😞 စိတ်ဓာတ် အရမ်းကျပြီး စိတ်ကျရောဂါ ဝင်လာပြီ။","r")}if(S.dep&&S.s>=50){S.dep=0;sfx("good");lg("🌤️ စိတ်ဓာတ် ပြန်ကောင်းလာပြီ။","r")}if(S.dep){let f=S.fr.filter(x=>x.rel>=60).length>=2?5:10;S.h=cl(S.h-f);S.w=cl(S.w-f);S.l=cl(S.l-f);if(S.fm!==null)S.fm=cl(S.fm-f);lg(`😞 စိတ်ကျရောဂါကြောင့် မီတာတွေ ${BN(f)}% စီ လျော့သွားတယ်။`,"r")}}

function soc(){
  if(S.y==2030){
    if(S.cdm==2&&S.job&&S.job.gov){S.job=null;S.co=[];ap({s:-50});sfx("bad");lg("🏛️ ၂၀၃၀ ပြောင်းလဲမှုမှာ CDM မပါခဲ့လို့ အလုပ်ပြုတ်သွားတယ်။","r")}
    if(S.cdm==1){ap({s:10,f:3});sfx("levelup");lg("🕊️ CDM ပါဝင်ခဲ့သူတွေကို ပြန်လည်အသိအမှတ်ပြု ဂုဏ်ပြုလိုက်ပြီ။","r")}
  }
  S.fr.forEach(f=>f.rel=cl(f.rel-3));
  S.fr=S.fr.filter(f=>{if(f.rel<20){lg(`🧑‍🤝‍🧑 ${f.n} နဲ့ အဆက်အသွယ်ပြတ်သွားတယ်။`,"r");return false}return true});
  if(S.a>=5&&R(100)<(S.a>=6&&S.a<=17&&!S.dr?(S.l<50?10:18):(S.l<50?4:8))&&S.fr.length<6){
    let fg=R(2);
    S.fr.push({n:pn(fg,S.y-S.a+R(5)-2,0,S.e,false),rel:50,g:fg});lg("🧑‍🤝‍🧑 သူငယ်ချင်းအသစ်တစ်ယောက် ရလာတယ်။");
  }
  if(S.fr.some(f=>f.rel>=60))ap({s:2});
  if(!S.fr.length&&S.a>=5)ap({s:-3});
  S.co.forEach(f=>f.rel=cl(f.rel-2));
  if(S.job&&!S.job.b&&R(100)<50&&S.co.length<6){
    let cg=R(2);
    S.co.push({n:pn(cg,S.y-S.a+R(7)-3,0,S.e,false),rel:50,g:cg});lg("💼 လုပ်ဖော်ကိုင်ဖက်အသစ် ရလာတယ်။");
  }
  if(S.pt){
    if(S.pt.st!="m"&&S.sr<20){lg(`💔 ${S.pt.n} နဲ့ ချစ်ခင်မှုနည်းလာလို့ လမ်းခွဲလိုက်ကြတယ်။`,"r");S.pt=null}
    else if(S.pt.st=="m"){
      if(S.sr<30&&R(100)<12)divorce(1);
      else if(S.inl){S.inl.rel=cl(S.inl.rel-2);if(S.inl.rel<50){lg(`👵 ယောက္ခမအိမ်ထောင်စုက ပြဿနာရှာနေတယ် (${ap({s:-6})})`,"r");S.sr=cl(S.sr-3)}}
    }
  }
}

function cdmEv(){return mk("၂၀၂၁ အာဏာသိမ်းပြီးနောက် CDM (အာဏာဖီဆန်ရေး) ပါမလား ဆုံးဖြတ်ရမယ့်အချိန် ရောက်လာပြီ။",[["CDM ပါပြီး အလုပ်ထွက်မယ်",()=>{S.cdm=1;S.job=null;S.co=[];return{m:-300,s:4,f:3}}],["အလုပ်ဆက်လုပ်မယ်",()=>{S.cdm=2;return{s:-2}}]])}
function chEv(){return mk("အိမ်ထောင်ဖက်နဲ့ ချစ်ခင်မှု နည်းလာပြီး ဖောက်ပြန်နေတာ သိလိုက်ရတယ်။",[["ခွင့်လွှတ်ပြီး ပြန်ညှိမယ်",()=>{S.sr=cl(S.sr+12);return{s:-6}}],["ကွာရှင်းမယ်",()=>{divorce(0);return{}}],["မသိချင်ယောင် ဆောင်နေမယ်",()=>{S.sr=cl(S.sr-5);return{s:-8}}]])}
function fpEv(){return mk("နိုင်ငံခြားသား အိမ်ထောင်ဖက်ရဲ့ နေထိုင်ခွင့်/ဥပဒေပိုင်း ပြဿနာ ကြုံလာတယ်။",[["ရှေ့နေငှားပြီး လျှောက်မယ်",{m:-500,s:-1}],["ရင်ဆိုင်ကြိုးစားမယ်",()=>{S.sr=cl(S.sr-8);return{s:-5}}]])}
E.push({a:[18,45],wt:2,c:()=>S.g&&S.pt&&S.pt.st=="d"&&S.sr>=60,t:"ချစ်သူက လက်စွပ်ထိုးပေးပြီး လက်ထပ်ဖို့ တောင်းဆိုလာတယ်။",o:[["လက်ခံမယ်",()=>{S.pt.st="e";S.sr=cl(S.sr+5);sfx("levelup");return{s:3}}],["ငြင်းမယ်",()=>{S.sr=cl(S.sr-15);if(R(10)<3){S.pt=null;lg("ချစ်သူက လမ်းခွဲသွားတယ်။","r")}return{s:-2}}]]});
DZ.push(["နာတာရှည်ရောဂါ (ကျန်းမာရေး အားနည်းလို့ ဖြစ်တာ)","c",()=>S.h<50&&R(100)<35]);

function rules(){
  if(S.h<50){let x=Math.round(150*Math.sqrt(EM()));if(S.a>=16)mv(-x,"ဆေးကုသစရိတ်");else S.fw=Math.max(0,S.fw-x)}
  if(S.s<50&&S.a>=5){[S.fr,S.co,S.kids].forEach(a=>a.forEach(f=>f.rel=cl(f.rel-10)));(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel-10)));if(S.pt)S.sr=cl(S.sr-10);lg("😔 စိတ်ခွန်အား ၅၀% အောက်ကျသွားလို့ သူငယ်ချင်းနဲ့ မိသားစု ချစ်ခင်မှု ၁၀% စီ လျော့သွားတယ်။","r")}
  if(S.a>65&&!S.pt&&!S.kids.length)ap({s:-2});
  if((S.c>0||S.k>0||Object.values(S.hb).some(x=>x))&&R(100)<25){let e=[["ခိုးခံရ/လိမ်ခံရလို့ ပစ္စည်းတွေ ဆုံးရှုံးသွားတယ်။",{m:-300,s:-4}],["မတော်တဆ ထိခိုက်မိလို့ ဒဏ်ရာရသွားတယ်။",{h:-10,m:-300}],["နာမည်ပျက်သွားလို့ မိတ်ဆွေတွေ ဝေးကွာသွားတယ်။",()=>{S.fr.forEach(f=>f.rel=cl(f.rel-15));return{s:-5}}]][R(3)];lg("⚖️ အကျိုးဆက် - "+e[0],"r");ap(e[1])}
  if((S.gd||0)>=3&&R(100)<20){let e=[["မမျှော်လင့်ဘဲ လူကြီးတစ်ယောက်က ကူညီပေးလိုက်တယ်။",{m:300,s:3}],["ကောင်းမှုလုပ်ခဲ့လို့ ရပ်ရွာက ချီးကျူးကြတယ်။",{s:4,f:2}]][R(2)];lg("🍀 ကောင်းမှုအကျိုး - "+e[0],"r");ap(e[1])}
  S.gd=Math.max(0,(S.gd||0)-.3);if(S.fm!==null&&!(S.job&&S.job.cid>=0&&CAR[S.job.cid][6])&&smTotal()<5000)S.fm=cl(S.fm-2);let t=smTotal();if(t>=1000&&S.a>=14)mv(Math.round(t/300),"လူမှုကွန်ယက်ဝင်ငွေ");
}

function lfui(){
  S.lf=S.lf||{h:1,d:1,c:1};
  S.lfMult=S.lfMult||{h:1,d:1,c:1};
  let L=S.lf, e=EM();
  let effLabel=["ဈေးအသက်သာဆုံး (-5%/နှစ်)","အလယ်အလတ် (-1%/နှစ်)","ဈေးအကြီးဆုံး (+2%/နှစ်)"];
  let meterInfo={
    h:"နေအိမ် → မိသားစုဝင် ချစ်ခင်မှု + စိတ်ခွန်အား",
    d:"အစားအသောက် → ကျန်းမာရေး",
    c:"အဝတ်အစား → ရုပ်ရည် + ဂုဏ်သတင်း"
  };
  return `<button onclick="AM=-1;view()">‹ နောက်သို့</button>`
    +`<div class="c"><b>🏠 နေထိုင်မှုပုံစံ</b><br><small>ဈေးအသက်သာဆုံးက နှစ်စဉ် -5%၊ အလယ်အလတ်က -1%၊ ဈေးအကြီးဆုံးက +2% ပြောင်းလဲပြီး နှစ်စဉ်ကုန်ကျစရိတ်ကို နေထိုင်သည့်အတိုင်း တိုးစေပါတယ်။ ${S.house?"(အိမ်ပိုင်ရှိသဖြင့် အိမ်ငှားခ သက်သာပါသည်)":""}</small></div>`
    +[["h","🏠 နေအိမ်"],["d","🍚 အစားအသောက်"],["c","👘 အဝတ်အစား"]].map(([k,t])=>{
      return `<div class="c"><b>${t}</b> · <small>${meterInfo[k]}</small></div>`
        +LF[k].map((x,j)=>{
          let baseVal=(k=="h"&&S.house)?[120,260,520][j]:x[1];
          let cCost=Math.round(baseVal*e*(S.lfMult[k]||1));
          return `<button class="${L[k]==j?"pri":""}" onclick="S.lf.${k}=${j};view()">${L[k]==j?"✔ ":""}${x[0]} (${K(cCost)}/နှစ်) · ${effLabel[j]}</button>`;
        }).join("");
    }).join("")
    +`<div class="c"><b>🏦 ပိုင်ဆိုင်မှု</b><br><small>အိမ်ခြံ ${S.house?"ရှိ":"မရှိ"} · ကား ${S.car?"ရှိ":"မရှိ"} · ရွှေ ${K(S.gold||0)} · စုစုပေါင်း ${K(NW(S))}</small></div>`
    +ACT[7][2].map((x,j)=>S.a>=x[2]?`<button onclick="use(ACT[7][2][${j}][1],ACT[7][2][${j}][0],true)">${x[0]}</button>`:"")
}

const shuf=a=>{for(let i=a.length-1;i>0;i--){let j=R(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
function nameKid(i){let k=S.kids[i];if(!k)return;let sg=pn(R(2),S.y,0,0,1);sheet(`<b>👶 ကလေးအမည်ပေးမယ်</b><div class="c">${S.pt?S.pt.n:"အိမ်ထောင်ဖက်"} အကြံပြုတဲ့နာမည် - <b>${sg}</b></div><button class="pri" onclick="nk(${i},'${sg}',1)">${sg} လို့ပဲ ပေးမယ်</button><div class="c"><input id="kn" maxlength="20" placeholder="ကိုယ်ပိုင်နာမည် ရိုက်ထည့်ပါ"></div><button onclick="nk(${i},'',0)">ကိုယ်ပိုင်နာမည် ပေးမယ်</button>`)}
function nk(i,sg,ok){let k=S.kids[i];if(ok){k.n=sg;S.sr=cl(S.sr+3);sfx("good");lg(`👶 ကလေးနာမည်ကို ${sg} လို့ ပေးလိုက်တယ်။`)}else{let v=$("kn").value.trim();if(!v)return alert("နာမည်ရိုက်ထည့်ပါ");if(R(100)<Math.max(25,Math.min(95,60+(S.sr-50)*.6))){k.n=v;sfx("good");lg(`👶 ကလေးနာမည် ${v} ကို အိမ်ထောင်ဖက် သဘောတူလိုက်တယ်။`)}else{let s2=pn(R(2),S.y,0,0,1);k.n=s2;S.sr=cl(S.sr-4);sfx("bad");lg(`👶 ${v} ကို သဘောမတူလို့ ${s2} လို့ ပေးလိုက်ရတယ်။`,"r")}}let m=$("md");if(m)m.remove();view()}

E.push({a:[18,40],wt:2,c:()=>!S.mar&&(S.par||[]).some(p=>p.al)&&(!S.pt||S.pt.st=="d"),t:"မိဘတွေက အိမ်ထောင်ပြုဖို့ တိုက်တွန်းနေတယ်။",o:[["မိဘစကားနားထောင်ပြီး ကြိုးစားကြည့်မယ်",()=>{if(R(100)<50){if(S.pt){S.pt.st="e";S.sr=cl(S.sr+5);lg(`💍 ${S.pt.n} နဲ့ စေ့စပ်ဖို့ သဘောတူလိုက်ပြီ။`,"r")}else{let g=S.g?0:1;S.pt={n:pn(g,S.y-S.a+R(7)-3,0,0,1),g,nat:"မြန်မာ",st:"e"};S.sr=55+R(15);lg(`💍 မိဘတွေ မိတ်ဆက်ပေးတဲ့ ${S.pt.n} နဲ့ စေ့စပ်ဖို့ သဘောတူလိုက်ပြီ။`,"r")}}else lg("မိဘဖြစ်စေချင်သလိုတော့ ဖြစ်မလာခဲ့ဘူး။");return{s:-1}}],["အခုတော့ လက်မထပ်သေးဘူးလို့ ရှင်းပြမယ်",()=>{(S.par||[]).forEach(p=>p.al&&(p.rel=cl(p.rel-4)));return{s:1}}]]});

if(document.addEventListener){
  document.addEventListener("pointerdown",e=>{
    try{au()}catch(_){}
    let t=e.target;
    if(t&&t.closest&&t.closest("button,#tb b,.av,.m")){
      rip(e);
      sfx("click");
    }
  },true);
}

function reschool(){let ma=S.sys==10?16:17;if(S.job)return alert("အလုပ်ကနေ အရင်ထွက်ပါ");S.dr=0;S.mf=S.a>ma?1:0;sfx("good");lg("📚 ကျောင်းပြန်တက်ဖို့ ဆုံးဖြတ်လိုက်ပြီ။","r");view()}
const INS=[["piano","စန္ဒယား"],["guitar","ဂစ်တာ"],["drum","ဒရမ်"],["saung","စောင်း"],["pattala","ပတ္တလား"],["violin","တယော"],["vocal","အဆိုပညာ"]];
const insLv=k=>Math.min(5,Math.floor(((S.ins||{})[k]||0)/4)),instMax=()=>Math.max(0,...INS.map(x=>insLv(x[0])));
function practice(k,n){S.ins=S.ins||{};let b=insLv(k);S.ins[k]=(S.ins[k]||0)+1+(S.w>=70?.5:0);let a=insLv(k);lg(`🎵 ${n} လေ့ကျင့်တယ် (အဆင့် ${BN(a)})${a>b?" - အဆင့်တက်သွားပြီ!":""}`,a>b?"r":"");if(a>b)sfx("levelup");return{s:2,w:1,m:-100}}
const SMP=[["fb","Facebook",2012],["yt","YouTube",2012],["ig","Instagram",2014],["tt","TikTok",2019]];
const smTotal=()=>Object.values(S.sm||{}).reduce((a,b)=>a+b,0);
function post(k,n,y0){if(S.y<y0)return alert(`${n} ကို ${BN(y0)} ခုနှစ်နောက်ပိုင်းမှ သုံးလို့ရမယ်`),false;S.sm=S.sm||{};let g=Math.round(20+R(60)+S.l*.5+S.w*.3),vir=R(100)<8;if(vir)g*=30+R(120);S.sm[k]=(S.sm[k]||0)+g;let t=smTotal();if(S.fm===null&&t>=5000)S.fm=15;lg(`📱 ${n} မှာ Content တင်တယ် - ${vir?"လူတွေ ဝိုင်းရှယ်ကြလို့ လူသိများသွားပြီ! ":""}ကြည့်ရှုသူ စုစုပေါင်း ${BN(t)}`,vir?"r":"");if(vir)sfx("levelup");return R(10)<1?{s:-2}:{s:1,f:t>=5000?1:0}}

ACT.push(["🎵","တူရိယာနဲ့ အဆိုပညာ",INS.map(x=>[x[1]+" လေ့ကျင့်မယ်",()=>practice(x[0],x[1]),5])]);
ACT.push(["📱","လူမှုကွန်ယက်",SMP.map(x=>[x[1]+" မှာ Content တင်မယ်",()=>post(x[0],x[1],x[2]),14])]);
ACT[5][2].push(["အသင်း/ပွဲတော်မှာ လူသစ်တွေနဲ့ မိတ်ဆက်မယ်",()=>{if(R(100)<(S.l<50?25:40)&&S.fr.length<6){let fg=R(2);S.fr.push({n:pn(fg,S.y-S.a+R(5)-2,0,S.e,false),rel:45,g:fg});lg("🧑‍🤝‍🧑 သူငယ်ချင်းအသစ်တစ်ယောက် ရလာတယ်။")}return{s:2}},10]);

const NEWC=[
["ဘာသာရေးခေါင်းဆောင်","ဘာသာရေးအကူ|ဘာသာရေးဆရာ|ဘာသာရေးခေါင်းဆောင်ငယ်|ဘာသာရေးခေါင်းဆောင်|ဘာသာရေးအကြီးအကဲ",()=>S.a>=20,900,18,0,1],
["ရပ်ရွာခေါင်းဆောင်","အသင်းအဖွဲ့ဝင်|ရပ်ကွက်/ကျေးရွာ လူကြီး|အသင်းဥက္ကဋ္ဌ|ရပ်ရွာအကြီးအကဲ|ဒေသလူထုခေါင်းဆောင်",()=>S.a>=25,900,18,0,1],
["အနုပညာရှင် (ရုပ်ရှင်/ဇာတ်ခုံ)","အားမွေးအနုပညာရှင်|ဇာတ်ပို့အနုပညာရှင်|နာမည်ရအနုပညာရှင်|ထင်ရှားတဲ့အနုပညာရှင်|ထိပ်တန်းအနုပညာရှင်",()=>S.l>=50||instMax()>=1,1050,18,0,1],
["ဂီတပညာရှင်","လမ်းဘေးတီးမှုတ်သူ|ပွဲတီးဝိုင်းဝင်|ဂီတအဖွဲ့ဝင်|နာမည်ရဂီတပညာရှင်|ထိပ်တန်းဂီတပညာရှင်",()=>instMax()>=2,1050,18,0,1],
["စာရေးဆရာ","စာမူရေးသူ|ဝတ္ထုတိုရေးသူ|ဝတ္ထုရှည်စာရေးဆရာ|နာမည်ကြီးစာရေးဆရာ|စာပေဆုရ စာရေးဆရာ",MU,1050,18,0,1],
["Content ဖန်တီးသူ (Vlogger)","ဝါသနာအလိုက် ဖန်တီးသူ|နာမည်ရ Content Creator|လူကြိုက်များ Vlogger|ထိပ်တန်း Influencer|မီဒီယာကုမ္ပဏီပိုင်ရှင်",()=>smTotal()>=20000,750,18,0,1]
];
NEWC.forEach(c=>{CAR.push(c);J.push([c[0]+" ("+c[1].split("|")[0]+")",()=>c[2]()&&(!c[5]||GV()),c[3],c[4]])});
CAR[6][6]=1;CAR[10][2]=()=>insLv("vocal")>=2;
const gt=(i,y1,cy)=>{let f=CAR[i][2];CAR[i][2]=()=>f()&&S.y>=y1&&(S.rg==0||S.y>=cy)};
gt(7,1995,2008);gt(11,1995,2010);gt(16,1995,2010);gt(19,1950,1995);gt(20,1988,1995);gt(21,1990,2010);gt(22,1960,2000);gt(23,1990,1995);gt(24,1948,9999);gt(25,1950,9999);
gt(29,1948,1960);gt(30,1948,1962);

function rip(e){let s=document.createElement("span");s.className="rp";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";document.body.appendChild(s);setTimeout(()=>s.remove(),650)}
ibar();
start();
Analysing
