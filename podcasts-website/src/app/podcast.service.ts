import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor() { }

  // getEpisodes() {

  //   // for(let i = 0; i < this.episodes.length; i++) {
  //   // }
  //     return this.episodes;
  // }



  episodes = [
    {
      id: 69,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196779675%3Fsecret_token%3Ds-QU5kS0W0nm5&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Analüüsime Tõnu Toompargiga, kas kinnisvarapidu jätkub ka 2022. aastal?',
      description: '“Kinnisvarajutud” podcasti 69. osas tõttab meile taas appi kinnisvarakonsultant ja koolitaja Tõnu Toompark (Kinnisvarakool.ee), kes aitab meile maalida pildi siinsest kinnisvaraturust. Mis toimus 2021. aastal, mis hakkab juhtuma 2022. aastal ja kas see pidu võib ühel hetkel algaval aastal lihtsalt järsku otsa saada või tuleks ikkagi uued tantsukingad soetada? Kuigi Tõnu ise ütleb enda kohta naljaga, et analüütik on see inimene, kes oskab valesid ennustusi tehes väga veenvalt selgitada, miks kõik asjad täiesti teisiti läksid, siis paremat ekspertteadmist on kohalikult kinnisvaraturult keeruline leida. Nii vaatamegi esmalt otsa 2021. aasta numbritele ning ennustame (loodetavasti väga täpselt) trendidest lähtuvalt 2022. aasta kinnisvaraturu loogikaid. Lõpuks taandusid kõik meie küsimused Tõnule ühele suurele teemale: kas 2022 on hea aasta, et kinnisvarasse investeerida või mitte?'
    },
    {
      id: 68,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196768167%3Fsecret_token%3Ds-sm9qp24rKWj&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Eesmärgid, eesmärgid... Selgub, kas Algis ja Siim on vaid jutumehed või sai midagi tehtud ka!',
      description: '“Kinnisvarajutud” podcasti 68. osas keerasime stuudio uksed lukku ja ühtegi külalist sisse ei lubanud, et vaikuses ja rahus suure saladuskatte all analüüsida aasta tagasi 2021. aastaks paika seatud eesmärke ja nende täitumist. Kogemata jäid mikrofonid sisse ja kuulete, kuidas üks meie hulgast oli vist seadnud endale liiga madalad sihid, samas kui teine pidi tõdema, et ei saanud mitte millelegi pihta. Õnneks olid vabandused varnast võtta. Loomulikult seadsime saate teises osas endale alanud 2022. aastaks uued eesmärgid, et siis aasta pärast uuesti stuudios kokku saada ja loodetavasti tõdeda, et jutustama oleme me küll kõvad mehed, aga midagi sai ikka päriselt ka korda saadetud!'
    },
    {
      id: 67,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196758315&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Tavaline Eesti mees Margo Merigan ja tema 20+ aastat kinnisvaras',
      description: '“Kinnisvarajutud” podcasti 67. osa on igas mõttes täitsa tavaline ja keskmine, kuna meil on külas Margo Merigan, kes enda sissejuhatuseks palus öelda tavaline Eesti mees, kes juhtumise on 20+ aastat tegutsenud ka kinnisvarasse investeerimisega. Kui aga lõpuks saate ära kuulate, siis tuleb kindlasti soov Ansipi kunagist kuulsat väljendit veidi keerates öelda, et kui see on keskmine, siis sellises keskpärasuses ma tahaksingi elada! 1990-ndate lõpus oma esimeste tehingutega kohe korralikult ratta käima lükanud Margo jätkas aastate jooksul rahulikus tempos pidevat toimetamist ning ostnud-müünud-üürinud ning toimetanud suvel oma hoovi saunamajas ka lühiajalise rendiga. Kogemustega kinnisvarainvestor annab saate lõpus ka ühe suurepärase idee, kuidas algajana ilma finantse omamata varvas üüriärisse kogemuste saamiseks sisse pista ja endale selgeks teha, kas ikka meeldib korterite ja üürnikega sehkendamine.'
    },
    {
      id: 66,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525%3Fsecret_token%3Ds-8PrxG5RAgTp&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: 'Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?',
      description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    },
    {
      id: 65,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184507971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: 'Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!',
      desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    },
    {
      id: 64,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1181352823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: 'Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon',
      desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    },
    {
      id: 63,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171539256&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast',
      description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    },
    {
      id: 62,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171532626&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Appi, mida teha?! Mul pole teadmisi, mul pole raha ja ma ei leia ühtegi head tehingut',
      description: '"Kinnisvarajutud" podcasti 62. osas palusime eelmise osa kangelasel Jaagol jääda stuudiosse, et võtta kolmekesi järada üks veidi üldisem teemadeplokk, mis päris paljudes meile laekuvates küsimustes ikka ja jälle üles kerkib. Põhimõtteliselt jagasime saate kolme ossa, et proovida vastata küsimustele, mis enamusel alustavatel investoritel pead vaevavad: kuidas alustada füüsilisse kinnisvarasse investeerimist, kui pole teadmisi, puudub piisav kapital ja ei leia ka ühtegi head tehingut?'
    },
    {
      id: 61,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171526941&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Jaago Viitkin - pahviks lööv kinnisvarateekond Miamist New Yorgini ja New Jerseyst Tallinnani',
      desciption: '"Kinnisvarajutud" podcasti 61. osas saime lõpuks stuudiosse mehe, kellega paljud meie kuulajad on tegelikult juba tuttavad. Oma tegemistest peamiselt ookeani taga kõigi võimaluste maal USA-s rääkis kinnisvaraettevõtja Jaago Viitkin, kes on olnud eestvedaja meie kinnisvaraõhtute korraldamisel ning hiljuti tegi põneva videopäeviku formaadis jooksva ülevaate oma järjekordsest majaflipist USA-s. Pärast ülikooliõpinguid laia maailma rändama läinud Jaago leidis tee kinnisvarasse tänu Brasiilia rikkuritele, kes parkisid inflatsiooni eest oma varasid Miami kinnisvarasse. Esimene korteriflip tehtigi koos sõbraga Miami ligidal ning sealt kõik alguse sai. Sadu erinevaid tehinguid hiljem on Jaago teinud kinnisvaras sisuliselt kõike - flippinud maju, toimetanud kinnisvaraagendina, tegutsenud Airbnb bisnesiga New Yorgis, aidanud suurtel kinnisvaramogulitel teha sadu ostupakkumisi päevas, pannud kokku koguni 186 kinnisvaraagendist koosneva tiimi ja mida kõike veel... Proovime Jaago käest välja uurida, kuidas üks Eesti noormees on suutnud kõike seda võõras riigis teha. Juttu tuleb sellest, kuidas teekonna alguses tuleb oma ego maha suruda ja vajadusel "suurte kalade" alluvuses tasuta tööd teha ja kogemusi hankida, kui võimas edasiviiv jõud on heade partnerlussuhete otsimine ja millised on Jaago plaanid tulevikuks.'
    },
    {
      id: 60,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1166163715&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Tiit Trofimov - lugu sellest, kuidas kriisis kõik kaotada ja ikkagi võitjana välja tulla!',
      desciption: '"Kinnisvarajutud" 60. episoodis räägime tavapäraseid juubelijutte, kuna üks kümnend on taas täis tiksunud. Kuigi laual valitseb ikkagi tühjus, siis vähemalt on lõpuks Algisel ära toimunud häälemurre ja meil õnnestub peaaegu teha saate ajaloo rekord pikima salvestuse osas. Kui üldiselt oleme "Kinnisvarajutud" podcastis rääkinud pigem edulugudest, siis sel korral on stuudios ilmselt paljudele tuttav mees Tiit Trofimov. Tänasel päeval ennast enesearengu teejuhiks nimetav Tiit räägib saates ära loo, kuidas temast sai kohalikus mõistes päris suur kinnisvaraarendaja ning kuidas kogu pidu 2009. aastal järsku totaalse krahhiga läbi sai ja mehe enda täielikku musta auku lükkas, kui vaid antidepressantide abil oli võimalik eksisteerida. 1990-ndate alguse metsikutel aegadel kohati sõna otseses mõttes püstol vöö peal äritegevust alustanud Tiit meenutab üsna detailselt oma tegemisi ja jagab kuulajatega ausalt kõiki oma tehtud eksimusi. Mõtlemapanev on Tiidu tõdemus, et tema jaoks on praegune aeg pea äravahetamiseni sarnane enne suurt majanduskriisi pead tõstnud üüratu eufooriaga, kus hinnad said ainult tõusta, pangad andsid laenu kõigile, kelle hingeõhk peegli uduseks tegi ja müügiks läks kõik, mis vähegi kinnisvara kategooriasse mahtus.'
    },
    {
      id: 59,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153422148&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Vihakõne hoiatus! Siim ja Algis viskuvad kinnisvara nimel ambrasuurile!',
      description: '“Kinnisvarajutud” podcasti 59. osas jätsime külalised ukse taha ootama, et kahekesi anda kinnisvara nimel endast kõik olenev. Nimelt sattus kinnisvarasse investeerimine LHV foorumis suure rünnaku alla ning Siim ja Algis otsustasid sõnu relvana kasutades kaitsele asuda.'
    },
    {
      id: 58,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153398163&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: 'Astrid Arula - kuidas osta kortermaju ja anda neile uus elu, kui endal raha pole?',
      desciption: '“Kinnisvarajutud” podcasti 58. osas jätkame loomulikult naisterahvaste lainel, kui siirdume juttudes Eesti suuruselt teise linna Tartusse ning räägime läbi ja lõhki kinnisvarast läbi imbunud Astrid Arulaga tema tegemistest ja teekonnast. Ülikoolis paljude valikute seast enda jaoks just kinnisvaravaldkonna leidnud Arula alustas investeerimisega juba kõrgkooli lõpuaastatel, kui ostis Tartu lähedal 7,5 hektari suuruse maatüki. Teadlik tegevus algas 2011-12 aastatel Tartu väikekorteritest ning sealt edasi sai astutud ülimalt suurte sammudega juba ca 10 korteriga majade renoveerimise juurde. Tartus mitmeid halvas korras puumaju uuele elule aidanud Astridi teekond on seda huvitavam, et esimeste tehingutega sai võetud suuri riske ning kohati kõnnitud lausa noateral. Eriti huvitav on tema juttu kuulata seetõttu, et esimesed majad said ostetud nii, et endal selleks kapitali kas üldse polnud või oli minimaalselt. NB! Pakume oma toetajatele selle osa kuulamise ajal näpuga järje ajamiseks ka visuaalset materjali, kus saatest läbi käivate objektide pildid ja Astridi tegevuste kronoloogia kenasti silme ees. Lisainfo ja fotod leiab siit: www.patreon.com/posts/58267883'
    },
    {
      id: 57,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153370311&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
      desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    },
    {
      id: 56,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146321475&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    },
    {
      id: 55,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1142296054&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
      description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    },
    {
      id: 54,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141921483&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
      desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    },
    {
      id: 53,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128487963&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
      desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    },
    {
      id: 52,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128478456&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    },
    {
      id: 51,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128468955&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
      description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    },
    {
      id: 50,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115600980&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
      desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    },
    // {
    //   id: 49,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115613130&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 48,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115544091&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 47,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108327753&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 46,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108316056&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 45,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103624593&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 44,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103107750&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 43,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074585706&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 42,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074576022&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 41,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1072558897&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 40,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071488692&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 39,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071477370&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 38,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1070547667&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 37,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062176506&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 36,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062159061&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 35,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051666771&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 34,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051653886&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 33,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1047763981&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 32,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1043329219&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 31,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038418591&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 30,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029986353&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 29,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029966442&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 28,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020634189&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 27,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020613441&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 26,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009988374&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 25,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009973641&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 24,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998804047&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 23,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998776849&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 22,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987606631&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 21,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987596065&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 20,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979646668&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 19,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979641850&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 18,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970884988&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 17,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970867627&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 16,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961017655&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 15,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961006123&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 14,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953660530&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 13,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953649271&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 12,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943945000&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 11,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943935862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 10,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935474932&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 9,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935442094&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 8,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927288439&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 7,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927276916&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 6,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921999862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 5,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/920376424&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // },
    // {
    //   id: 4,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917986366&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast",
    //   description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    // },
    // {
    //   id: 3,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/911259802&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon!",
    //   desciption: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    // },
    // {
    //   id: 2,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903564877&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!",
    //   desciption: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    // },
    // {
    //   id: 1,
    //   src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893725846&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    //   title: "Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
    //   description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    // }
  ]
}
