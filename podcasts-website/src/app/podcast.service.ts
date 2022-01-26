import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor() { }

getLatestEpisodes(amountOfEpisodesToReturn: number) {
  let myClonedArray: any [] = [];

  this.episodes.forEach(val => myClonedArray.push(Object.assign({}, val)));
  let arrangedList = myClonedArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
  let latestEpisodes = arrangedList.slice(arrangedList.length - amountOfEpisodesToReturn).reverse();

  return latestEpisodes;
}

getPopularEpisodes() {
  let myClonedArray: any[] = [];

  this.episodes.forEach(val => myClonedArray.push(Object.assign({}, val)));
  let popularEpisodes = myClonedArray.filter(function(episode) {
    return [50, 55, 6, 32, 64, 10].includes(episode.id);
  })

  return popularEpisodes;
}

getAllEpisodesSortedById() {
  let myClonedArray: any [] = [];

  this.episodes.forEach(val => myClonedArray.push(Object.assign({}, val)));
  let arrangedList = myClonedArray.sort((a, b) => (a.id > b.id) ? 1 : -1);
  let allEpisodes = arrangedList.reverse();

  return allEpisodes;
}

getSingleEpisode(id:number) {
  let episode;

  for( let i = 0; i < this.episodes.length; i++){
    if( this.episodes[i].id == id) {
      episode = this.episodes[i]
    }
  }

  return episode;
}




  episodes = [
    {
      id: 69,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196779675%3Fsecret_token%3Ds-QU5kS0W0nm5&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196779675%3Fsecret_token%3Ds-QU5kS0W0nm5&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Analüüsime Tõnu Toompargiga, kas kinnisvarapidu jätkub ka 2022. aastal?',
      description: '“Kinnisvarajutud” podcasti 69. osas tõttab meile taas appi kinnisvarakonsultant ja koolitaja Tõnu Toompark (Kinnisvarakool.ee), kes aitab meile maalida pildi siinsest kinnisvaraturust. Mis toimus 2021. aastal, mis hakkab juhtuma 2022. aastal ja kas see pidu võib ühel hetkel algaval aastal lihtsalt järsku otsa saada või tuleks ikkagi uued tantsukingad soetada? <br> <br> Kuigi Tõnu ise ütleb enda kohta naljaga, et analüütik on see inimene, kes oskab valesid ennustusi tehes väga veenvalt selgitada, miks kõik asjad täiesti teisiti läksid, siis paremat ekspertteadmist on kohalikult kinnisvaraturult keeruline leida. <br> <br> Nii vaatamegi esmalt otsa 2021. aasta numbritele ning ennustame (loodetavasti väga täpselt) trendidest lähtuvalt 2022. aasta kinnisvaraturu loogikaid. Lõpuks taandusid kõik meie küsimused Tõnule ühele suurele teemale: kas 2022 on hea aasta, et kinnisvarasse investeerida või mitte?'
    },
    {
      id: 68,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196768167%3Fsecret_token%3Ds-sm9qp24rKWj&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196768167&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Eesmärgid, eesmärgid... Selgub, kas Algis ja Siim on vaid jutumehed või sai midagi tehtud ka!',
      description: '“Kinnisvarajutud” podcasti 68. osas keerasime stuudio uksed lukku ja ühtegi külalist sisse ei lubanud, et vaikuses ja rahus suure saladuskatte all analüüsida aasta tagasi 2021. aastaks paika seatud eesmärke ja nende täitumist. Kogemata jäid mikrofonid sisse ja kuulete, kuidas üks meie hulgast oli vist seadnud endale liiga madalad sihid, samas kui teine pidi tõdema, et ei saanud mitte millelegi pihta. Õnneks olid vabandused varnast võtta. <br> <br> Loomulikult seadsime saate teises osas endale alanud 2022. aastaks uued eesmärgid, et siis aasta pärast uuesti stuudios kokku saada ja loodetavasti tõdeda, et jutustama oleme me küll kõvad mehed, aga midagi sai ikka päriselt ka korda saadetud!'
    },
    {
      id: 67,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196758315&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196758315&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tavaline Eesti mees Margo Merigan ja tema 20+ aastat kinnisvaras',
      description: '“Kinnisvarajutud” podcasti 67. osa on igas mõttes täitsa tavaline ja keskmine, kuna meil on külas Margo Merigan, kes enda sissejuhatuseks palus öelda tavaline Eesti mees, kes juhtumise on 20+ aastat tegutsenud ka kinnisvarasse investeerimisega. Kui aga lõpuks saate ära kuulate, siis tuleb kindlasti soov Ansipi kunagist kuulsat väljendit veidi keerates öelda, et kui see on keskmine, siis sellises keskpärasuses ma tahaksingi elada! <br> <br> 1990-ndate lõpus oma esimeste tehingutega kohe korralikult ratta käima lükanud Margo jätkas aastate jooksul rahulikus tempos pidevat toimetamist ning ostnud-müünud-üürinud ning toimetanud suvel oma hoovi saunamajas ka lühiajalise rendiga. Kogemustega kinnisvarainvestor annab saate lõpus ka ühe suurepärase idee, kuidas algajana ilma finantse omamata varvas üüriärisse kogemuste saamiseks sisse pista ja endale selgeks teha, kas ikka meeldib korterite ja üürnikega sehkendamine.'
    },
    {
      id: 66,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525%3Fsecret_token%3Ds-8PrxG5RAgTp&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?',
      description: '"Kinnisvarajutud" podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. <br> <br> Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.'
    },
    {
      id: 65,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184507971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184507971&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas korter Kesklinnas või 300-ne bemm? Markus Haiba teadis juba noorena õiget vastust!',
      description: '"Kinnisvarajutud" podcasti 65. osas läheme taas ujuma koos suuremate kaladega, kui külla tuleb igapäevaselt kinnisvaraga tegelev Markus Haiba. Ennast ise rahavoo investoriks nimetav Markus alustas kinnisvaras 20 aastat tagasi ning on tänaseks jõudnud kohta, kus portfellis on üle 100 üürilepingu ja Tallinnas rohkem kui 6000 m2 üüripinda. <br> <br> Palju maailma näinud Markuse teekond kinnisvaras sai alguse 2001. aastal, kui ettevõtlikul noormehel oli kogunenud mingi hulk raha ning valik oli, kas osta Tallinna Kesklinnas korter või naabrimehelt 300-ne bemm. Mis valiku toona 21-aastane noormees tegi, võite juba ise aimata. Kuna see korter on mehel senini alles, siis saame neid numbreid analüüsides taas kinnitust, kui vägev kaaslane investori jaoks on aeg.'
    },
    {
      id: 64,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1181352823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1181352823&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Mihkel Kukk - mees, kes julgeb meie saates öelda, et kinnisvara on vahend, mitte religioon',
      description: '"Kinnisvarajutud" podcasti 64. osa külaline Mihkel Kukk oli julge mees, kes otsustas visata meile kinda pärast 59. osa kuulamist, kus me paugutasime kinnisvara kaitseks kõik torud tühjaks. Mihkel kirjutas meile, et mehed, hoidke hobuseid ja mõelge natuke laiemalt kui ainult enda lemmik varaklass. Otsustasime, et kutsume Mihkli oma seisukohta stuudiosse kaitsma! Ja ta tuli!'
    },
    {
      id: 63,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171539256&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171539256&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tunne oma kodumaad ehk Birk Oidramiga Märjamaa näitel väikeasulate kinnisvarast',
      description: '"Kinnisvarajutud" podcasti 63. osas paneme meie saatesarja kaardile uue lipukese, kui süveneme sisuliselt täielikult vaid Märjamaa kinnisvaraturu nüanssidesse. Oma lugu on rääkimas investeerimises ennast Hunt Kriimsilmaks nimetav Birk Oidram, kes koos kaaslastega just selles väikeses alevis tegutsemas on. <br> <br> Räägime Märjamaa näitel väikestes kohtades kinnisvarasse investeerimise iseärasustest ja vaatame täpselt üle, millega Birk oma partneritega seni hakkama on saanud. Saates saame ka teada, et Birki käes on kõige kiirema tehingusse mineku mitteametlik Eesti (loe: "Kinnisvarajutud" podcasti) rekord. <br> <br> Kes vähegi tegutseb kinnisvarainvestorina mõnes Eesti väikekohas või plaanib madalama sisenemisläve ja turutunnetuse tõttu seda teha, siis see saade on kohustuslik kuulamine!'
    },
    {
      id: 62,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171532626&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171532626&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Appi, mida teha?! Mul pole teadmisi, mul pole raha ja ma ei leia ühtegi head tehingut',
      description: '"Kinnisvarajutud" podcasti 62. osas palusime eelmise osa kangelasel Jaagol jääda stuudiosse, et võtta kolmekesi järada üks veidi üldisem teemadeplokk, mis päris paljudes meile laekuvates küsimustes ikka ja jälle üles kerkib. <br> <br> Põhimõtteliselt jagasime saate kolme ossa, et proovida vastata küsimustele, mis enamusel alustavatel investoritel pead vaevavad: kuidas alustada füüsilisse kinnisvarasse investeerimist, kui pole teadmisi, puudub piisav kapital ja ei leia ka ühtegi head tehingut?'
    },
    {
      id: 61,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171526941&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1171526941&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Jaago Viitkin - pahviks lööv kinnisvarateekond Miamist New Yorgini ja New Jerseyst Tallinnani',
      description: '"Kinnisvarajutud" podcasti 61. osas saime lõpuks stuudiosse mehe, kellega paljud meie kuulajad on tegelikult juba tuttavad. Oma tegemistest peamiselt ookeani taga kõigi võimaluste maal USA-s rääkis kinnisvaraettevõtja Jaago Viitkin, kes on olnud eestvedaja meie kinnisvaraõhtute korraldamisel ning hiljuti tegi põneva videopäeviku formaadis jooksva ülevaate oma järjekordsest majaflipist USA-s. <br> <br> Pärast ülikooliõpinguid laia maailma rändama läinud Jaago leidis tee kinnisvarasse tänu Brasiilia rikkuritele, kes parkisid inflatsiooni eest oma varasid Miami kinnisvarasse. Esimene korteriflip tehtigi koos sõbraga Miami ligidal ning sealt kõik alguse sai. Sadu erinevaid tehinguid hiljem on Jaago teinud kinnisvaras sisuliselt kõike - flippinud maju, toimetanud kinnisvaraagendina, tegutsenud Airbnb bisnesiga New Yorgis, aidanud suurtel kinnisvaramogulitel teha sadu ostupakkumisi päevas, pannud kokku koguni 186 kinnisvaraagendist koosneva tiimi ja mida kõike veel... <br> <br> Proovime Jaago käest välja uurida, kuidas üks Eesti noormees on suutnud kõike seda võõras riigis teha. Juttu tuleb sellest, kuidas teekonna alguses tuleb oma ego maha suruda ja vajadusel "suurte kalade" alluvuses tasuta tööd teha ja kogemusi hankida, kui võimas edasiviiv jõud on heade partnerlussuhete otsimine ja millised on Jaago plaanid tulevikuks.'
    },
    {
      id: 60,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1166163715&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1166163715&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tiit Trofimov - lugu sellest, kuidas kriisis kõik kaotada ja ikkagi võitjana välja tulla!',
      description: '"Kinnisvarajutud" 60. episoodis räägime tavapäraseid juubelijutte, kuna üks kümnend on taas täis tiksunud. Kuigi laual valitseb ikkagi tühjus, siis vähemalt on lõpuks Algisel ära toimunud häälemurre ja meil õnnestub peaaegu teha saate ajaloo rekord pikima salvestuse osas. <br> <br> Kui üldiselt oleme "Kinnisvarajutud" podcastis rääkinud pigem edulugudest, siis sel korral on stuudios ilmselt paljudele tuttav mees Tiit Trofimov. Tänasel päeval ennast enesearengu teejuhiks nimetav Tiit räägib saates ära loo, kuidas temast sai kohalikus mõistes päris suur kinnisvaraarendaja ning kuidas kogu pidu 2009. aastal järsku totaalse krahhiga läbi sai ja mehe enda täielikku musta auku lükkas, kui vaid antidepressantide abil oli võimalik eksisteerida. <br> <br> 1990-ndate alguse metsikutel aegadel kohati sõna otseses mõttes püstol vöö peal äritegevust alustanud Tiit meenutab üsna detailselt oma tegemisi ja jagab kuulajatega ausalt kõiki oma tehtud eksimusi. Mõtlemapanev on Tiidu tõdemus, et tema jaoks on praegune aeg pea äravahetamiseni sarnane enne suurt majanduskriisi pead tõstnud üüratu eufooriaga, kus hinnad said ainult tõusta, pangad andsid laenu kõigile, kelle hingeõhk peegli uduseks tegi ja müügiks läks kõik, mis vähegi kinnisvara kategooriasse mahtus.'
    },
    {
      id: 59,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153422148&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153422148&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Vihakõne hoiatus! Siim ja Algis viskuvad kinnisvara nimel ambrasuurile!',
      description: '“Kinnisvarajutud” podcasti 59. osas jätsime külalised ukse taha ootama, et kahekesi anda kinnisvara nimel endast kõik olenev. Nimelt sattus kinnisvarasse investeerimine LHV foorumis suure rünnaku alla ning Siim ja Algis otsustasid sõnu relvana kasutades kaitsele asuda.'
    },
    {
      id: 58,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153398163&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153398163&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Astrid Arula - kuidas osta kortermaju ja anda neile uus elu, kui endal raha pole?',
      description: '“Kinnisvarajutud” podcasti 58. osas jätkame loomulikult naisterahvaste lainel, kui siirdume juttudes Eesti suuruselt teise linna Tartusse ning räägime läbi ja lõhki kinnisvarast läbi imbunud Astrid Arulaga tema tegemistest ja teekonnast. <br> <br> Ülikoolis paljude valikute seast enda jaoks just kinnisvaravaldkonna leidnud Arula alustas investeerimisega juba kõrgkooli lõpuaastatel, kui ostis Tartu lähedal 7,5 hektari suuruse maatüki. Teadlik tegevus algas 2011-12 aastatel Tartu väikekorteritest ning sealt edasi sai astutud ülimalt suurte sammudega juba ca 10 korteriga majade renoveerimise juurde. <br> <br> Tartus mitmeid halvas korras puumaju uuele elule aidanud Astridi teekond on seda huvitavam, et esimeste tehingutega sai võetud suuri riske ning kohati kõnnitud lausa noateral. Eriti huvitav on tema juttu kuulata seetõttu, et esimesed majad said ostetud nii, et endal selleks kapitali kas üldse polnud või oli minimaalselt. <br> <br> NB! Pakume oma toetajatele selle osa kuulamise ajal näpuga järje ajamiseks ka visuaalset materjali, kus saatest läbi käivate objektide pildid ja Astridi tegevuste kronoloogia kenasti silme ees. Lisainfo ja fotod leiab siit: www.patreon.com/posts/58267883'
    },
    {
      id: 57,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153370311&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153370311&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Grete Pariis - investor, kelle esimesed üürnikud lahkusid korterist koos radiaatoritega",
      description: '“Kinnisvarajutud” podcasti 57. osas on meil taas külas naisterahvas, kelle toimetamiste kohta kuulates tekib küsimus, kas mõnel inimesel on ööpäevas rohkem kui 24 tundi. Ennast hobiinvestoriks nimetav Grete Pariis jagab oma aega perekonna, ratsutamise ja kinnisvara vahel. <br> <br> Juhuse tahtel juba kooliõpilasena enese teadmata kinnisvaraomanikuks saanud Grete esimesest korterist lahkusid üürnikud koos radiaatoritega, kuid see neidu pikas plaanis ei morjendanud. Vastupidi, Grete on koos elukaaslasega teinud nende kätte sattunud korterites ka renoveerimised oma kätega. <br> <br> Kui Grete investeerimise üheks ajendiks oli soov tegeleda väga kuluka hobi ehk ratsutamisega, siis praeguseks on ta sidumas ka oma tööalast karjääri kinnisvaraga, kuna naisel on käes lõpusirge kinnisvarahindajaks saamisel.'
    },
    {
      id: 56,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146321475&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146321475&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Kinnisvarajurist Evi Hindpere selgitab, kuidas tegelikult (loe: seaduse järgi) üüriäri käib!",
      description: '"Kinnisvarajutud" podcasti 56. osas teeme teoks meie kuulajate poolt ammu soovitu, kui stuudios on Raid & Ko Kinnisvara- ja Õigusbüroo jurist Evi Hindpere, kes aitab selgeks teha, mismoodi praegu kehtiv seadus üürniku ja üürilise omavahelisi suhteid reguleerib. <br> <br>  Puudutame saates erinevaid teemaplokke nagu üürniku taustakontroll, erinevad lepingu osapoolte õigused ja kohustused, üüri tasumine või tasumata jätmine, üüri tõstmine, lepingu muutmine või lõpetamine, üüripinna parendamine ja palju-palju muud. Saame ka teada, kas broneerimislepingul on ka mingi juriidiline jõud või on tegemist lihtsalt täis kirjutatud paberiga? <br> <br> Kui tegeled kasvõi ühe korteriga üüriäris, siis see podcasti osa on lausa kohustuslik kuulamine! Lubame, et pärast seda veidi rohkem kui tundi aega kuulamist oled oluliselt teadlikum üürileandja ning paremal juhul väldid tulevikus kulukaks osutuda võivaid valesamme.'
    },
    {
      id: 55,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1142296054&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1142296054&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Kinnisvaraettevõtja Sergo Viil üürikorteritest, garaažidest, renoveerimisest ja ehitajatest",
      description: '“Kinnisvarajutud” 55. osas oleme taas stuudios kolmekesi, kui meil on külas kinnisvaraettevõtja Sergo Viil. Kaheksa aastat tagasi koos vennaga palgatöö kõrvalt kinnisvaraga toimetama hakanud Sergo on tänaseks jõudnud nii kaugele, et tema põhitegevus ongi kinnisvara. <br> <br> Sergol on koos vennaga portfellis paarkümmend üüri- ja rendipinda (korterid ja garaažid) Haapsalu, Tallinnas ja Tartus ning mõned krundid. Hulk renoveerimisi on tehtud ka otse müügiks ning renoveerimisprojekte on ette võetud ka sõprade-tuttavate palvel. <br> <br> Lisaks teadmistele ja kogemustele annab huvitaval kombel saatesse sattunud Sergo kuulajatele kindlasti ka palju inspiratsiooni ja pealehakkamist, sest ilmselt on isegi läbi raadioeetri kuulda, kuidas mehe silmad kinnisvarast rääkides särasid.'
    },
    {
      id: 54,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141921483&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1141921483&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Rege rauta suvel, vankrit talvel ehk Pärnus läheb suuremaks paugutamiseks!",
      description: '"Kinnisvarajutud" 54. osas jätkavad saatejuhid Siim ja Algis olude sunnil stuudios kahekesi kinnisvarajuttude vestmist. Aga teemasid jagub! <br> <br> Märksõnad, millest saate esimeses pooles juttu tuleb, on maaklerid, külmad kõnedja korterite ostud-müügid. <br> <br> Saate teises osas räägime täpsemalt, mida me Pärnusse tegema läksime. Igatahes notaris on kaks korda käidud ja töö käib. <br> <br> Siinkohal pange kõik kuulajad hoolikalt tähele, saates kõlab ka üks pakkumine vaid "Kinnisvarajutud" podcasti kuulajatele ja Facebooki grupi liikmetele!'
    },
    {
      id: 53,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128487963&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128487963&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Flipist Vaidas, oksjonil käe väristamisest, üllatustulemusest Airbnb-s ja leivast + kapist",
      description: '"Kinnisvarajutud" 53. osas otsustasime jätta kõik külalised stuudio ukse taha järgmiseid salvestusi ootama, sest tahtsime südamelt ära rääkida ka meie enda (kes veel aru ei saanud, siis jutt käib saatejuhtidest Siimust ja Algisest) vahepealsed tegemised. <br> <br> Siimul sai tehtud üks flip Vaidas, mis tõstis sealse müügihinna lati reaalselt 1900+ euro peale ruutmeetri kohta ning oksjonil kätt väristades sai ostetud juba järgmine korter. <br> <br> Algis ja tema äripartner Ken proovisid saatest ja meie Patreoni boonusosadest korduvalt läbi käinud Koidu tänava korteri panna suveks Airbnb-sse ja tulemused olid üllatavad. Algis laobki numbrid letti, kuidas selline lühiajalise rendi mõistes mitte kõige magusamas kohas asuv objekt Airbnb-s töötas. <br> <br> Lõpetuseks avaldame ka šokeeriva uudise, et haarasime veel paar meest kaasa ja panime leivad ühte kappi, et minna vallutama Pärnut! Mis, miks ja kuidas, seda kuula täpsemalt juba saatest.'
    },
    {
      id: 52,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128478456&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128478456&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Kinnisvara ühisrahastusest - mis toimub vaala kõhus ja kuidas see enda kasuks tööle panna?",
      description: '"Kinnisvarajutud" 52. osas räägime ühest võimalusest, kuidas leida finantseeringut enda kinnisvaraprojektide elluviimiseks või teiselt poolt vaadates, kuidas alustada kinnisvarasse investeerimist väikestest summadest, kuid samal ajal pääseda ligi ka "suurte poiste" mängumaale. <br> <br> Meil on külas Estateguru laenuosakonna juht ja ise ka väikeinvestorina kinnisvarapõldu kündev Daniil Aal, kelle abil vaatame sisse protsessile, kuidas käib ühisrahastamise teel kinnisvaraprojektile kapitali kaasamine. Saate jooksul saab üsna hästi selgeks, millised eeldused peaksid raha küsima minemisel olema täidetud ja kellele ja mis olukordades see võimalus üleüldse sobida võiks. <br> <br> Loomulikult ei luba me Daniili stuudiost ära ilma, et mees räägiks ma oma isiklikust investeerimisteekonnast. Saate lõpuks tuleb välja, et Daniil on ka üks väga kaval mees, sest saatejuhid moositakse nii ära, et kui raadio näitaks värve, siis paistaksid ainult Algise punased õhetavad põsed.'
    },
    {
      id: 51,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128468955&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128468955&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Kert Keskpaik - spordimehest flipihunt, kes murrab üksnes oma kodu lähedalt",
      description: '"Kinnisvarajutud" 51. osas oleme juubelipohmellist üle saanud ja võtame taas ette surmtõsised kinnisvarateemad... ei-ei, see oli muidugi nali. Algis on endiselt veel veidi pohmelline, kuid meie seekordne külaline Kert Keskpaik aitab tal saate jooksul sellest üle saada. <br> <br> Mitmekümnekordne Eesti meister rulluisutamises Kert on flipihunt, kes otsustanud hakata murdma vaid enda kodu lähedalt. Teemaks korterite flippimine Põhja-Tallinnas meeste poolt, kes väga täpselt tunnevad oma mängumaad ning tänu sellele suudavad leida häid objekte.'
    },
    {
      id: 50,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115600980&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115600980&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: "Juubilaridel on külas Rahakratt ehk poliitebakorrektne jutt sellest, kuidas mitte olla vaene!",
      description: '"Kinnisvarajutud" podcastil täitub poolsada aastat! Juubel on numbriliselt igati soliidne, aga valisime selle tähistamiseks kõike muud kui soliidse viisi. Nimelt on meil külas Eesti kõike populaarsem ning seejuures ka kõige teravama keele ja sirgema väljaütlemisega rahablogija Rahakratt. <br> <br> Kui Eesti #1 kinnisvarapodcast ja #1 rahablogija saavad kokku, siis peaks justkui häid asju juhtuma? Aga ei juhtunud suurt midagi. Rääkisime majadest ja korteritest, rikkusest ja vaesusest, lollusest ja tarkusest. Ainult ilmast ei rääkinud... või tegelikult, Rahakratt vist korra midagi mainis, et nokk olla ühel päeval kasteveega kokku saanud. <br> <br> Kuula omal vastutusel!!!!'
    },
    {
      id: 49,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115613130&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115613130&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Laia haardega investori Evelin Mägioja tegemised Floridast Tallinna Vanalinna ja Pärnuni',
      description: '"Kinnisvarajutud" podcasti 49. osas jätkame külaliste poolelt õrnema soo esindajatega, kui oma lugu on rääkimas ettevõtja ja investor Evelin Mägioja. <br> <br> Evelini teekonnal on meie saate jaoks seni ainulaadseks nurgaks see, et tal on portfellis kaks korterit USA-s Florida osariigis. Mida on Floridal pakkuda Eesti kinnisvarainvestorile ning mida nii kaugel kodust raha paigutades kindlasti tuleks jälgida. <br> <br> Kodule oluliselt ligemal toimetab Evelin suurte korteritega Tallinna Vanalinnas ja Pärnus, mis on lühiajalisel rendil. Proovime teada saada, kuidas on Vanalinna elu mõjutanud koroonapandeemia ja kas Pärnu on Eestis kõige kuumem koht? <br> <br> Ühe diletandist saatejuhi palvel läheme kohati päris detailseks ka koodlukkude teemal, sest huvitav on ju teada, mis juhtub, kui elekter peaks ära minema.'
    },
    {
      id: 48,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115544091&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115544091&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Eeva Vilson fantoomparketiga korterist, naaberlõbumajast ja pööningu ostmisest',
      description: '"Kinnisvarajutud" podcasti 48. osas sukeldume taas ühe naisterahvast üüriinvestori Eeva Vilsoni abil põnevasse kinnisvaramaailma. <br> <br> Küllalt väheste teadmiste pealt juba ülikoolis esimese korteri ostnud ja selle hiljem kaks korda suurema summa eest maha müünud Eeval on rääkida mitu väga humoorikat lugu. Näiteks parketiga korteri ostmine, kus hiljem selgus, et mida polnud, oli parkett. Samuti on teemaks taas ka lõbumaja. <br> <br> Mitmete julgete otsustega silma paistnud naine organiseeris ühes majas korteriühistu nii kaugele, et oldi nõus pööning maha müüma, et finantseerida maja korrastamist. Pärast mitmeid keerdkäike ostis Vilson lõpuks pööningu ise ära, kasutades selleks üsna tavatut moodust. <br> <br> Eeval on huvitav vaade ka lühiajalisele rendile, olles aastaid töötanud Booking.com Tallinna kontoris ja suhelnud erinevate majutusasutustega, kes sellel platvormil enda teenuseid pakkusid.'
    },
    {
      id: 47,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108327753&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108327753&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas ja kuidas ehk kuulajate küsimused.... õnneks on stuudios ka üks ekspert',
      description: '"Kinnisvarajutud" podcasti 47. osa on üle pika aja taas kuulajate küsimuste päralt. Lisaks tavapärastele saatejuhtidele Siimule ja Algisele on oma kinnisvaraalast ekspertiisi pakkumas ka 1Estate partner Ken Kuber, kellest sai podcasti ajaloo teine inimene, kes teistkordselt külas on. See on umbes sama hea, kui olla teine inimene kuul! <br> <br> Kinnisvarajutud Facebooki grupis tehtud üleskutse peale tuli kokku paarkümmend küsimust, mille selles saates kõik järjepanu ka ette võtame. Teemad on väga laiad - alates sellest, kas praegu on hea hetk kinnisvarasse investeerimiseks ning millist objekti valida, kuni selleni, kas proovida kätt kaasomandis korteriga, kui väikeses majas pole ka kasutuskorda notariaalselt kokku lepitud. <br> <br> Tänu headele küsimustele katame saate jooksul päris palju erinevaid teemasid ja tänu küsijatele võib-olla veidi teistsuguste nurkade alt kui tavapäraselt. Kindlasti tasub seda osa kuulata ka neil, kes ise konkreetset küsimust ei esitanud.'
    },
    {
      id: 46,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108316056&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108316056&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Gerli Toomla-Pähklemäe – garaažridabokselamutest Sõle tänava segipekstud autodeni',
      description: '"Kinnisvarajutud" podcasti 46. osa võib vabalt lülitada uuest kooliaastast päris mitme õppeaine plaani. Ise pakume välja näiteks eesti keele, koduloo, ajaloo ja kõrgematest kooliastmetest kõik vähegi kinnisvaraga seotud õppeained. <br> <br> Miks? Sest meie seekordne külaline koduperenaisest kinnisvarainvestor Gerli Toomla-Pähklemäe juhendamisel õpime seni täiesti tundmatuid sõnu nagu garaažridabokselamu ja garaažstuudiokorter ning sisustame need ka konkreetsete ja väga eripäraste kinnisvaraobjektidega. <br> <br> Ülimalt entusiastliku Gerli teekond kinnisvaramaailmas on olnud piisavalt värvikas, et erinevatest lugudest oleks võinud täis rääkida vähemalt kaks saadet. Pange ennast valmis mõnusaks rännakuks Kristiine garaažide vahelt Sõle tänava purukspekstud autodeni ja tagasi!'
    },
    {
      id: 45,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103624593&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103624593&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas "Siim Vaidast" peaks üldse ise punnitama ehk üürihaldusteenus, kellele ja milleks?',
      description: '"Kinnisvarajutud" podcasti 45. osa võtab arutluse alla teema, mida Algis tunneb samuti läbi ja lõhki nagu Assamalla peatänava Kalevipoja tee iga väiksematki kurvi. Nimelt mida kujutab endast kinnisvara üürihaldusteenus ja kellele seda vaja on? <br> <br> Kas ühe üürikorteriga investoril on mõtet halduri poole pöörduda või peab esialgu ise vaeva nägema, kuni teatava suurusega üürikorterite portfell kokku pandud? Kui palju haldusteenus maksab ning mida selle eest saab?'
    },
    {
      id: 44,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103107750&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103107750&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Maailma kõige pikem saade ühest väikesest üüriäri detailist',
      description: 'Lõpuks õnnestus tippmaakler Algis Liblik ka suvistest ahvatlustest eemale meelitada, mis tähendab, et "Kinnisvarajutud" podcast on lühikeselt pausilt tagasi. Uuest stuudiost ja uue energiaga ründasime sel korral teemast, mis Siimu jaoks oli sel suvel väga aktuaalne: kuidas käituda üürniku vahetuse ajal. <br> <br> Võtsime samm-sammult läbi enamus pisiasju, mida jälgida, kui vana üürnik lahkub ja uus tuleb asemele. Nagu öeldakse, et saatan peitub detailides, siis ka ühe-kahe korteriga väikeinvestor peaks proovima kogu tegevuse läbi viia võimalikult professionaalselt. <br> <br> Et mitte ajada kuiva teooriajuttu, siis läbi saate analüüsisime Siimu sel suvel toimunud kahte üürnikuvahetust, kus mõlemal juhul õppematerjali jagus tublisti.'
    },
    {
      id: 43,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074585706&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074585706&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kadri Koplimäe - kui tunnetad kinnisvaraturgu, siis on vaid taevas piiriks!',
      description: '"Kinnisvarajutud" podcasti 43. osas kutsusime külla ülimalt toimeka naisterahva, kes tegutseb kinnisvarasektoris nii palgatöötaja kui väga eduka investorina. Kadri Koplimäe on arendusettevõtte Endover finantsjuht ning oma kinnisvaraportfelli on ta aja jooksul kogunud neli lühiajalise majutuse korterit, kaks pikaajalise üüri korterit, ühe äripinna, ühe kinnistu looduskaunis kohas ning mõned uusarenduste korterit on momendil ka VÕL-i staatuses. <br> <br> Kõige selle kõrvale on tema käte vahelt läbi käinud 15 korterit flippimise eesmärgil. Neist vaid osad on olnud täisrenoveerimised, kuid päris mitmete puhul on Kadri lihtsalt ära kasutanud pika aja jooksul igapäevaselt kinnisvaraportaalides ringi vaadates tekkinud turutunnetust. Kõige selle kogemuse pealt on Kadril pakkuda suurepäraseid nippe ja nõuandeid nii alustajatele kui juba edasijõudnud kinnisvarainvestoritele. <br> <br> Hoiatus! Saate kuulamise kõrvalnähuna on oht pisikese kadeduse tekkimisele. :)'
    },
    {
      id: 42,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074576022&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1074576022&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kärdla kõige ettevõtlikum noor mees Aivo Jõeleht räägib Hiiumaa üürituru nüanssidest',
      description: '"Kinnisvarajutud" podcasti 42. osas läheme ühele mõnusale seiklusele Eestimaal, kui räägime üüriportfelli loomisest Hiiumaale Kärdlasse tegusa noore ettevõtja ja investori Aivo Jõelehega. Aivo igapäevaseks tegevuseks on oma väikese ehitusfirma vedamine ning suvel on Kärdlas püsti pandud ka kohalik kõige kuumem rannabaar. Selle kõige kõrvalt on mees toimetamas Kärdlas üüriäri. <br> <br> Kui tallinlastele tundub tihti, et pärast pealinna piirist üle sõitmist sureb Eestis elu välja, siis Aivo on taas üks väga hea näide sellest, kuidas väga edukalt on võimalik korralik kinnisvaraportfell kokku panna ka väiksemates kohtades. Kui kohalikku elu-olu tunned, siis tootlusnumbrid on tihtipeale isegi ilusamad ning sisenemislävi oluliselt madalam.'
    },
    {
      id: 41,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1072558897&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1072558897&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Mitmekordne Eesti parim korvpallur Siim-Sander Vene skoorib ka kinnisvaras!',
      description: '"Kinnisvarajutud" podcasti 41. osas naaseme tippspordi maailma, kui külaliseks on Eesti korvpallikoondislane ja korduvalt Eesti parimaks korvpalluriks valitud Siim-Sander Vene. Viimastel hooaegadel Lõuna-Euroopas Hispaanias ja Itaalias erinevates klubides leiba teeninud Vene hobiks on investeerimine ning kinnisvaras on mees peamiselt tegutsemas Haapsalu turul. <br> <br> Esmakordselt meie saate ajaloos räägime pikemalt ka garaažidest, kui Venel on portfellis lisaks korteritele ka paar garaažiboksi. Uurime saates, kuidas korvpallihooaja jooksul pikalt välismaal viibival tippsportlasel on organiseeritud objektide vaatamine ja haldus ning milliste tulevikuplaanidega mees oma investeerimisteekonnal liikumas on. <br> <br> Loomulikult pärime Venelt ka, kui levinud on kinnisvarasse investeerimine Eesti korvpallurite hulgas üldiselt ning milline pilt on tema jaoks avanenud välisklubides mängides, kus tippmängijate palgad kindlasti lubaksid päris hoogsat investeerimist. Saame teada, mis on kõige olulisemad asjad, mida USA-st Euroopasse mängima tulevad pallurid oma esimese palga eest kindlasti ostavad.'
    },
    {
      id: 40,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071488692&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071488692&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Karin Vinkel - juubeliosa kangelanna sära paneb ka karud tantsima ja kinnisvara armastama!',
      description: '"Kinnisvarajutud" podcasti seekordses juubeliosas oli laud stuudios kenasti head ja paremat täis ning tänu meie külalisele tuli taas üks väga äge saade. Jätkates naiselikul lainel, kutsusime oma peadpööritavast arengust rääkima ettevõtja, kinnisvarainvestori ja arendaja Karin Vinkeli. <br> <br> Karini nimi peaks paljudele kinnisvarainvestoritele olema hästi tuttav, sest sisuliselt 7-8 aastaga jõudis ta esimestest väikestest ja mitte kõige õnnestunumatest katsetustest korteritega olukorda, kus arendab suuri üürimaju, mis mõeldud just investoritele. <br> <br> Karini lugu on ülimalt emotsionaalne ja kaasahaarav ning veel emotsionaalsem on tema esinemismaneer, mis lihtsalt tõmbab täielikult endasse ja paneb kuulama. Selliseid inimesi kuulates pole lihtsalt võimalik kinnisvara mitte armastada!'
    },
    {
      id: 39,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071477370&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071477370&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Elena Kuslap - risuhunnikust kaunite üürimajadeni ehk lapsepõlve ebamugavustest eduni',
      description: '"Kinnisvarajutud" podcasti 39. osas pöördume taas motivatsiooni ja ägedate kinnisvaralugude ootuses õrnema soo poole, kui stuudios oli Pärnus tegutsev kinnisvarainvestor Elena Kuslap. Elena huvi kinnisvara vastu sai alguse lapsepõlvest, kui ta kasvas üles väikeses ühiselamutoas ja lubas endale, et tulevikus loob ta endale ja pakub ka teistele hoopis teistsugused elamistingimused. <br> <br> Elena portfelli kroonjuveeliks on kompleks Pärnus, kus toimetatakse lühiajalise rendiga. Krundi väga halvas seisus ostnud Elena nägi kurja vaeva, et lõpuks kerkiksid sinna kaks kaunist üürimaja, kus isegi Algis on Pärnus puhates ööbinud ja rahule jäänud.'
    },
    {
      id: 38,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1070547667&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1070547667&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tristan & Kristina - kuidas investeerida paarina ning tõmmata kaasa ka kogu ülejäänud pere?',
      description: '"Kinnisvarajutud" podcasti 38. osas kutsusime esmakordselt korraga saatesse kaks külalist, kui rääkisime kahe Tartus ja seal lähipiirkonnas tegutseva noore ülimalt ettevõtliku investoriga. Paarina toimetanud spordisõpradele hästi tuntud võidusõitja Tristan Viidas ja tema elukaaslane Kristina Põkk on kinnisvaramaailma tõmmanud ka enamuse oma lähisugulastest ning ehitamisel on üks vägev pereettevõtmine. <br> <br> Esialgne plaan oli saates keskenduda sellele, kuidas elukaaslane/abikaasa endaga kinnisvarateekonnale kaasa tõmmata. Kuigi need jutud said loomulikult räägitud, siis suure osa ajast pidid saatejuhid Siim ja Algis kuulama ja imestama, kui ettevõtlikke ja ägedaid noori Eestis leidub. <br> <br> Lõpuks sai linti üks ülimalt motiveeriv osa nii noorte kui vanade jaoks ning olgu sul peas alles idanemas soov teha oma esimesi rahapaigutusi või taustal tiksumas juba massiivne kinnisvaraportfell, siit saavad indu tegutsemiseks kõik. Hea õppematerjal sellest, kuidas vaatamata erinevatele raskustele ettevõtlikult järjest edasi minna ja probleem probleemi haaval ära lahendades püsida teel, mis viib järjest enam eesmärkide suunas.'
    },
    {
      id: 37,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062176506&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062176506&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Lühiajaline rent - kas praegu on õige aeg ja kuidas meeldida Airbnb algoritmile?',
      description: '"Kinnisvarajutud" podcasti 37. osas võtsime uuesti ja senisest veelgi sügavamalt ette lühiajalise rendi ja seda spetsiifiliselt just läbi Airbnb portaali. Oma ekspertiisi jagas saatejuht Algis, kes läks teemades nii spetsiifiliseks, et episoodist peaksid kasu lõikama nii alles lühiajalise rendiga alustavad investorid kui ka juba edasijõudnud tegijad. <br> <br> Saate esimeses osas puudutasime lühiajalise rendi turgu suve alguses 2021. Kas tulevik on helge või jääb koroonaviiruse tõttu turismisektor pikaks ajaks vinduma? Teises pooles läksime väga konkreetseks, kui näiteks rääkisime pikalt Airbnb portaali algoritmist, mille hingeelu tundes on võimalik oma korter otsingutulemustes kõrgemal kuvama saada. Mida kõike selleks teha tuleb, saab saatest üsna üksikasjalikult teada.'
    },
    {
      id: 36,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062159061&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1062159061&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kikilipsuga kohtutäitur Risto Sepp enampakkumistest, väljatõstmistest ja puukvõlgnikest',
      description: '"Kinnisvarajutud" podcasti 36. osas jätkame igati kirgliku teemaga, kui külas on kohtutäitur Risto Sepp. Kuna investorite poolt on kohtutäiturite poolt müüdav kinnisvara üheks võimalikuks variandiks, kuidas objekte odavamalt kätte saada, siis keskendusime saates just sellele teemale. <br> <br> Ühes Maalehe artiklis kikilipsuga kohtutäituriks ristutud Ristol oli ka meie saate salvestusel kenasti kõnealune kaelaehe kenasti ees ning läbi võetud teemadering oli väga huvitav. Kuna Risto pidi otse stuudiost ruttama tähtsale koosolekule, jäi seekordne osa tavapärasest veidi lühemaks, aga pakkisime veidi rohkem kui 40 minuti sisse päris palju informatsiooni.'
    },
    {
      id: 35,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051666771&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051666771&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Stuudios läheb kuumaks, sest grillime Algist ja Martinit... ehk kogu tõde maakleritest!',
      description: '"Kinnisvarajutud" podcasti 35. osas liigume ülimalt põneva ja paljude jaoks kirgliku teema juurde, kui räägime maakleritest ja nende ametist. Selle jaoks digimuutub tavaliselt saatejuhi rollis olev Algis Liblik külaliseks ning selleks, et kindlam tunne oleks, on Algis endale keerulistele küsimustele vastamisel abiks kutsunud Uus Maa Kinnisvarabüroo Pluss kontori maakleri Martin Vendla. <br> <br> Algis ja Martin vastavad meie kuulajate küsimustele ning avaldavad arvamust ka erinevatel maaklerite kohta käivate linnalegendide kohta. Proovime teada saada, miks maakleritel on üsna nigel reputatsioon, miks maaklerid ikkagi omanikele külmi kõnesid teevad, kuidas maakler müügil siiski ka kõige suuremat skeptikut aidata saab, miks ja kuidas võiks omanik enne lepingu tegemist maaklerile taustauuringu teha jne. Loomulikult vaatame ka maaklerite rahakotti! <br> <br> Usume, et tegemist on ajatu saatega, mida tasub kuulata kõigil, kes kunagi kinnisvara ostnud/müünud või plaanivad osta/müüa. Loodame, et päris mitmed maaklereid puudutavad linnalegendid ja müüdid saavad purustatud ning loomulikult rihmutame ka oma tööd halvasti tegevaid maaklereid ning kiidame neid, kes asja hoole ja südamega teevad.'
    },
    {
      id: 34,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051653886&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051653886&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Peamised probleemid uusarenduste garantiiperioodi lõpus... kuidas avastada ja kes parandab?',
      description: '"Kinnisvarajutud" podcasti 34. osa võib taas nimetada enneolematuks, kui esmakordselt on meil stuudios korduv külaline. Kutsusime tagasi ka meie 8. episoodis rääkimas käinud ehitusspetsialisti Marko Sultsi Ehituskaitse Büroost, kuna toona jäid paljud teemad katmata. <br> <br> Seekordne saade on jagatud laias plaanis kaheks, kus esimeses pooles räägime uusarenduste korteritest ja nende garantiiperioodidest ning teises pooles vaatame vanemate majade suunas. Kuna Marko toob välja mitmeid väga konkreetseid punkte, mida jälgida ja arendajalt/müüjalt küsida, siis on meie hinnangul sellest osast kasu nii kodu ostjal kui ka ükskõik mis tasemel investoril. <br> <br> Hea jutuvestjana on Markol loomulikult taas pakkuda ka mitmeid huvitavaid lugusid päris elust, mis tal laial tööpõllul ette on tulnud.'
    },
    {
      id: 33,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1047763981&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1047763981&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Ekstennisist Markus Kerner ookeaniülesest investeerimisest ja suure raha kaasamisest',
      description: '“Kinnisvarajutud” podcasti 33. osa on rekordiline, sest nii suurte vahemaade tagant pole me seni veel oma saadet teinud. Nimelt tuleb seekordne külaline tänapäeva tehnika kaudu eetrisse ookeani tagant USA-st, Texase osariigist, Dallasest. Selleks meheks on endine profitennisist ja praegu USA-s tennisetreenerina töötav Markus Kerner, kes viimastel aastatel väga aktiivselt kinnisvaramaailma sukeldunud. <br> <br> Markuse teekond kinnisvaras algas mõned aastad tagasi, kuid juba on sihikindel noormees kogunud portfelli üheksa üürikorterit ning eesmärgid on väga võimsad. Nimelt on koos abilistega kogu investeerimistegevust üle ookeani haldav Markus võtnud plaani lükata käima investeerimisfond, mis pakub ameeriklastest investoritele võimalust investeerida Eesti kinnisvarasse. <br> <br> Podcasti lindistuseks suure ajavahe tõttu ennast Dallases väga varakult arvuti taha sättinud Markus räägib saate esimeses osas oma jõudmisest kinnisvara juurde ning isikliku portfelli kasvatamisest. Saate teises pooles sukeldume veidi sügavamalt ka investeerimisfondi teemasse ning uurime täpsemalt, mis staadiumis see idee on ning kui suured on tulevikuplaanid.'
    },
    {
      id: 32,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1043329219&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1043329219&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kogu tõde ettevõttele kinnisvara ostuks laenu saamisest Marko Kiisaga LHV Pangast',
      description: '"Kinnisvarajutud" podcasti 32. osas sukeldume lõpuks teemasse, mille kohta on väga palju küsitud meie Facebooki grupis ning laekunud ka eraviisilisi küsimusi ja sooviavaldusi sel teemal saate jaoks. Nimelt on stuudios LHV Panga jaepanganduse ettevõtete finantseerimise juht Marko Kiisa, kellega räägime väikeettevõtete laenudest. <br> <br> Laenuraha kasutamine on kinnisvarasse investeerimise puhul suurepärane võimalus oma tegevust võimendada. Kuna eraisikuna laenates tuleb kiiresti piir ette, siis peavad investorid üsna kiirelt paika panema plaani, kuidas oma tegevus ettevõtte alla kolida. Marko abiga räägime LHV Panga näitel puust ja punaseks lahti, mida peaks ettevõttele kinnisvara ostuks ärilaenu taotlemisel silmas pidama.'
    },
    {
      id: 31,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038418591&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038418591&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Priit Pedanik - endise raadiohääle kinnisvaraportfell ja jutt "nohusest" soomlasest',
      description: '"Kinnisvarajutud" podcasti 31. osa on vaieldamatult seni üks meeleolukamaid vestlusi vähemalt osalejatele endile. Loodame, et ka meie kuulajad saavad lisaks huvitavale kinnisvarajutule ka törtsu nalja. Seekordseks külaliseks on laialdase meediataustaga ettevõtja Priit Pedanik, kellel aastate jooksul kokku pandud esinduslik 12 korteriga üüriportfell ning lisaks nipet-näpet teisi investeeringuid. <br> <br> Juba 12-aastasena sõna otseses mõttes kogemata raadioeetrisse sattunud mees tegeles pikalt meediavaldkonnas nii raadios, teles kui välimeedias. Tänaseks arvestatava osa oma ajast Võrumaa metsade vahel paiknev Priit alustas kinnisvarasse investeerimist soovist kindlustada oma pensionipõlve. Tasapisi portfelli üles ehitav mees on valinud enda sihtmärgiks heas asukohas 2-toalised korterid, kus ta ise oleks nõus sees elama. Peamiseks piirkonnaks on kujunenud Peetri alevik ning paar korterit on ka Tallinnas ja Tartus. <br> <br> Ennast oprtunistiks nimetav kinnisvarainvestor on heas mõttes tehingunarkomaan ning on valmis sobiva pakkumise korral kogu oma portfelli maha müüma, et siis uusi objekte jahtima hakata. Kuigi Priidul on senine investeerimisteekond kulgenud ülesmäge, siis räägib ta saates mitmeid humoorikaid seikasid seoses üürnikega. Tähelepanu keskmesse tõuseb üks "nohune" soomlane ja nädala sees meie toetajatele ilmavalgust nägevas boonusosas meenutab Priit, kuidas tema korteris peeti salaja lõbumaja, mistõttu mehel tuli lõpuks politseis tõsiselt aru anda.'
    },
    {
      id: 30,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029986353&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029986353&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Ergo Mõttus - Tartu kinnisvaraparuni teekond väikeküla poisist 200+ üürikorterini',
      description: '"Kinnisvarajutud" podcastil täitub järjekordne juubel ehk oleme juba 30 episoodi vanad! Selle tähistamiseks võtsime liinile taaskord ühe ka laiemale üldsusele tuntud investori, Sõbra Kinnisvara asutaja ja tegevjuhi Ergo Mõttuse. <br> <br> Naljaga pooleks võib Ergot nimetada Tartu kinnisvaraparuniks, sest alates 2000-ndate aastate keskpaigast on mees Emajõe äärsel kinnisvaraturul toimetanud ülimalt aktiivselt. Karjääri jooksul arvukalt kinnisvaratehinguid teinud Mõttuse portfelli kuulub momendil 210 üüripinda ning mehe enda sõnul on tema parimad tehingud veel alles tulemas. <br> <br> Ergo räägib saates, kuidas ühest väikeküla poisist sai Tartu üks mõjukaid kinnisvarategelasi ning kui palju tal tuli selleks tööd teha. Lisaks kinnisvarajuttudele puudutame saate teises osas ka finantsvabaduse teemat ning palume Ergol rääkida, milline ta elu välja näeb, kui see eesmärk on käes.'
    },
    {
      id: 29,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029966442&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1029966442&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kadri Mäsak - suured ja šikid Kesklinna korterid ning jõukam kliendisegment',
      description: '"Kinnisvarajutud" podcasti 29. osas oli meil külas rohkem kui 10 aastat kinnisvarasse investeerinud finantskonsultandi taustaga ettevõtja ja MyFinancier tegevjuht Kadri Mäsak. Omal ajal pooleldi juhuse läbi kinnisvarainvestoriks saanud Kadri on tänaseks leidnud endale kindla tegevusniši. <br> <br>  Viimastel aastatel on Kadri võtnud suunaks Tallinnas suuremad väga heas seiskorras Kesklinna korterid. Eesmärgiks on püüda jõukamat kliendisegmenti. Lisaks on Kadri enamuse üüriportfelli haldusest delegeerinud edasi ning soovib jõuda maksimaalse passiivsuseni. <br> <br> Oma teadmisi kasutades on Kadri eesmärk saada võimalikult heade tingimustega laenuvõimendust ning seeläbi parandada omakapitalitootlust. Saates räägibki Kadri nii investeerimise juurde jõudmisest kui selgitab päris detailselt oma investeerimistaktikat.'
    },
    {
      id: 28,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020634189&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020634189&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kardo Kõiv - kriisis kõrvetada saanud ja tuhast tõusnud ööklubi osanik ja kinnisvarainvestor',
      description: '"Kinnisvarajutud" podcasti 28. osas võõrustasime kinnisvarainvestorina 15+ aastat tegutsenud meest, kes eelmise suure kriisi ajal kõvasti kõrvetada sai, kuid võimsalt uuesti tuhast tõusis ja tänaseks Nõmmel üht suurt ja ilusat üürimaja omab. Selleks külaliseks oli ettevõtja ja kinnisvarainvestor ning Venus Clubi osanik ja juhatuse liige Kardo Kõiv. <br> <br> Saate alguses palusime Kardol kohe ära rääkida see ettevõtja pool ehk ülimalt huvitav Venus Clubi osanikuks saamise lugu. Sealt edasi liikusime kinnisvararadadele ning saime teada, kui valusa nähvaka mees eelmise kriisi ajal sai ning kuidas ta sellest vaid mõned aastad hiljem hakkas välja tulema. <br> <br> Kinnisvaras tulevikueesmärgiga 100 üüriühikut toimetav Kardo on oma teekonnal teinud hulganisti flippe ning andnud uue elu ja ilme mitmele põnevale üüriobjektile, millest portfellis hetkel alles 16 korteri ja ühe äripinnaga üürimaja Nõmmel.'
    },
    {
      id: 27,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020613441&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1020613441&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Ken Kuber - mees, kes lõi kinnisvaraäri koos endise ülemusega (Algisega). Mis tal arus oli?',
      description: '"Kinnisvarajutud" podcasti 27. osas kutsusime saatesse mehe, tänu kellele Algis saab saatest saatesse käia ja rääkida oma ägedatest toimetamistest - 1Estate Kinnisvara partner ja tõsise töö tegija Ken Kuber. <br> <br> Ken on ettevõttes see mees, kes sisustab kõik investoritele üle antavad ja haldusportfelli jäävad korterid ning hoiab igapäevaselt objektil olles flippidel asju toimimas. Seetõttu otsustasime keskenduda peamiselt just flippimisele ja korterite sisekujundusele.'
    },
    {
      id: 26,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009988374&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009988374&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas Rendin paneb ka vanamoodsad investorid nutinuppu kasvatama?',
      description: '"Kinnisvarajutud" podcasti 26. osas naaseme uuesti külaliste formaadi juurde ning räägime ühest Eesti idufirmast, mis on võtnud eesmärgiks ühtlustada ja korda teha Eesti ja paljude teiste riikide üüriäri. Räägime ettevõttest Rendin, keda esindab saates kaasasutaja Maiko Saluorg. <br> <br> Kui Algis on maaklerina kümneid ja kümneid kordi Rendini teenust kasutanud, siis "dinosaurus" Siim pole nii kaugele veel jõudnud. Saates räägime, miks nii investorid kui ka üürilevõtjad võiksid Rendini teenuses enda jaoks lisaväärtust ning täiendavat garantiid näha.'
    },
    {
      id: 25,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009973641&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009973641&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Mis toimub kinnisvaraturul ja kuhu suunata veerand miljonit laenuraha?',
      description: '"Kinnisvarajutud" podcastis saab otsa seitsmeosaline järjestikune seeria, kus meil on stuudios külaline. Kuri koroonaviirus otsustas mängida vingerpussi ja vahetult enne salvestuspäeva lükata esiteks karantiini saatejuht Siimu ja teiseks ka meie külalise. Kuna me pole aga papist poisid, siis otsustasime tehnilisi vahendeid kasutades lausa erinevatest linnadest saate ikkagi ära salvestada. <br> <br> Saate teemad võtsime elust enesest ning esimese asjana proovisime veidi sotti saada kinnisvaraturu hetkeolukorrast. Kuigi tervisekriis on hullem kui kunagi varem ja paljud inimesed on kaotanud töö, siis kinnisvaraturul ei suuda pakkumine nõudlusega sammu pidada ja hinnad kerkivad meie silme all. Saate teises pooles võtsime ette kaks kuulajaküsimust, mis meile eraviisiliselt saadeti. Mõlemad küsimused olid sellised, et andsid teemat pikemaks arutluseks ning võimalik, et nendest saavad mõtteianet teisedki meie kuulajad. <br> <br> Küsimus nr1: Alles hiljuti avastasin enda jaoks kinnisvara investeerimise aspektist ning mõtlesin teilt küsida natuke ka personaalselt nõu. Kinnisvarasse investeerimise mõte tekkis umbes pool aastat tagasi ja tegingi esimesed ettevalmistused laenu saamiseks. Praeguseks on 6 kuud möödunud, mille jooksul olen sissetulekuid kunstlikult suurendanud, et saada paremat tulemust pangast. Hetkel on pakkumised 150 000 kuni 250 000 euroni koos lisatagatisega. Siin kohal tahaksingi küsida, millises suunas jätkata? Kas alustada väikselt, näiteks paneelkorteritega või pigem võtta suurem korter paremas piirkonnas? Viimane oleks tootluse mõistes võib-olla väiksem, aga turvalisem. Otsest strateegiat pole siiani paika pannud. <br> <br> Küsimus nr2: Mina siis Rakvere poiss, kes soovib siia osta endale esimest kinnisvara. Kuulasin nädala alguses Kinnisvarajuttude podcasti. Sealt tuligi mõte kirjutada ja nõu küsida konkreetse välja valitud objekti osas. Korteril hindamisakt 91 000 eurot. See oleks minu elu esimene kinnisvaratehing. Igasugune nõu ja arvamus on abiks.'
    },
    {
      id: 24,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998804047&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998804047&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Profijalgpallur Albert Prosa - mees, kes saab üüri alati rohkem, kui esialgu küsib',
      description: '"Kinnisvarajutud" podcasti 24. osas on meil stuudios esmakordselt külaliseks profisportlane, kui oma toimetamistest üürikinnisvara maailmas räägib jalgpallur Albert Prosa. Eesti koondises 7 mängu pidanud ja Rootsi vastu ka ühe värava löönud Prosa jaoks on Tallinna kinnisvaraturul lemmikasukohaks Lasnamägi, millest meie senises saates põhjendamatult vähe oleme rääkinud. Nüüd parandame selle vea. <br> <br> Juba jalgpallurikarjääri algusaastatest suutis Prosa rahatargalt elades kapitali koguda, et ühel hetkel osta oma esimesed korterid. Sellest, kuidas eeldatavast kodust sai üürikorter ja vastupidi, räägib Prosa saates ülimalt humoorikas võtmes loo, kust selgub, mis juhtub siis, kui kuulutuses panna teadmatusest turuhinnast oluliselt madalam üürihind. <br> <br>  Ühtlasi koorub saatest välja ka huvitav põhimõte, et Prosa üürikorterite puhul on sisuliselt alati tekkinud huviliste vahel väike enampakkumine ja lõplik üürisumma kujuneb suuremaks kui on kirjas kuulutuses.'
    },
    {
      id: 23,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998776849&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998776849&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Gretel Kutan - 3-toaline rannakorter päikeselises Hispaanias, jah või ei?',
      description: '"Kinnisvarajutud" podcasti 23. osa oli mitmes mõttes märgiline ja erakordne. Nimelt tegime oma esimese lindistuse läbi tehniliste vahendite hoopis Eestist eemal asuva saatekülalisega ja esmakordselt rääkisime pikemalt välismaa kinnisvarasse investeerimisest. Hispaania lõunaosas asuvast kuulsast Costa del Soli ehk Päikeseranniku tuntud kuurortlinnast Marbellast rääkis meiega turundusvaldkonnas tegutsev väikeinvestor Gretel Kutan. <br> <br> Aastaid Hispaanias elanud Gretel on enda jaoks teinud selgeks Hispaanias kinnisvara soetamise nüansid ning on lahkesti nõus oma teadmisi jagama ka meie podcasti kuulajatega. Hiljuti omandas Gretel Hispaanias imekaunis asukohas rannaäärse 3-toalise korteri, mis ootab renoveerimist ja seejärel läheb lühiajalisele rendile.'
    },
    {
      id: 22,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987606631&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987606631&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Rakvere investori Marko Levtšenko kannapööre pikaajaliselt üürilt külaliskorterite turule',
      description: '"Kinnisvarajutud" podcasti 22. osas liigume taas täielikult Tallinnast välja, kui stuudios on külaliseks Rakveres tegutsev Marko Levtšenko. Igapäevaselt Kundas taekwondo treenerina tegutsev mees on selle kõrvalt kokku pannud muljetavaldava kinnisvaraportfelli, tegutsedes viimased aastad just lühiajalise rendi ja külaliskorterite segmendis. <br> <br> Muuhulgas saame saatest teada, mis meetoditega õnnestus Markol kokku saada oma esimese üürikorteri sissemaksuraha ning millised ohverdused ta selleks pidi tooma. Samm-sammult käime läbi tema kinnisvaraportfelli kasvamise ajas ning keskendume sellele ajahetkele, mil pikaajalises üüris tegutsenud investor tegi kannapöörde ja hakkas pakkuma vaid lühiajalist renti. Tänaseks on mees jõudnud nii kaugele, et plaanis on värskelt soetatud äripinnast ehitada külaliskorteritega üürimaja.'
    },
    {
      id: 21,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987596065&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987596065&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Katrin Vilimaa-Otsing - reaalne näide, kuidas jõuda esimesest korterist oma üürimajani',
      description: '"Kinnisvarajutud" podcasti 21. osas oleme taas pigem pikaajalise üüriinvesteerimise lainel, kui stuudios on külaliseks ettevõtja ja digiturunduse spetsialist Katrin Vilimaa-Otsing. Tänaseks on Vilimaa-Otsing vähem kui kümne aastaga jõudnud esimesest suurepärase tootlusega väikesest üürikorterist juba oma isikliku üürimaja renoveerimiseni.'
    },
    {
      id: 20,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979646668&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979646668&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Universaalnahhaal Jaak Roosaare: ma olen teinud investeerimises erinevaid vigu.... korduvalt',
      description: '"Kinnisvarajutud" podcasti 20. osas oleme taas juubelilainel ning tähistame seda järjekordse nimeka saatekülalisega, kui oma toimetamistest kinnisvaramaailmas pajatab Eesti üks tuntumaid investoreid Jaak Roosaare. <br> <br> "Kinnisvaraga rikkaks saamise õpiku" autor Roosaare meenutab, kuidas ta üldse kinnisvarainvesteeringuteni jõudis, rääkis mitmed värvikad lood, kuidas kohati peale tulnud lohakus on läinud maksma talle suuri summasid ja tekitanud palju probleeme, pakkus mitmeid häid nõuandeid, kuidas algaja investor võiks kinnisvarasse investeerimisest osa saada ning hoiatas edasijõudnumaid investoreid, millistest koostöödest kindlasti tuleks hoiduda. <br> <br> Väga põhjalikult arutame ka hiljuti Eesti investeerimismaastikul laineid löönud väikest skandaalikest, kus Jaak Roosaare osalusega ettevõte ostis ära ärihoone, mida soovis endale miniladude projekti plaaninud teine tuntud väikeinvestor Peeter Pärtel. Kas kaks meest on tänaseks ära leppinud ning mida kummaltki poolelt sellest juhtumist õppida on? Vastuseid kuula saatest! <br> <br> Roosaare tõi meie kuulajatele juubeli puhul kingituseks ka kolm oma raamatut "Kinnisvaraga rikkaks saamise õpik". Ühe raamatutest annab mees ise juba saates talle kõige meeleolukama küsimuse esitanud kuulajale ning ülejäänud kaks leiavad omaniku meie Facebooki grupis Kinnisvarajutud.'
    },
    {
      id: 19,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979641850&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/979641850&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Liina Henning - üle Eesti toimetav flippija, kes jahib eriti jubedaid kortereid',
      description: '"Kinnisvarajutud" podcasti 19. osas suunasime pilgud flippimise suunas ehk uurisime selle valdkonna praktikult, kuidas leida kehvas olukorras objekt, teha seal täisrenoveerimine ning müüa seejärel edasi. Oma senistest flippimistest ja tulevikueesmärkidest rääkis väikeinvestor Liina Henning. <br> <br> Eesti erinevas paigus kortereid flippinud Liina rääkis, kuidas jõuavad temani need turu kõige õudsema väljanägemisega korterid, kuidas leida endale korralikud ehitusmehed, kes sulle mütsi pähe ei tõmbaks, mis imeloomad on emotsionaalne müüja ja emotsionaalne ostja, mille alusel endale sobivaid flippimiskortereid valida ning mismoodi korraldata edukalt ära flippimisprojekt Eesti teises otsas?'
    },
    {
      id: 18,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970884988&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970884988&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Notar Priidu Pärna sularahatehingutest, kinnisvara ostmisest järelmaksuga ja paljust muust',
      description: '"Kinnisvarajutud" podcasti 18. osas purustasime kõik senised rekordid, kui tegime läbi aegade pikima saate ning vaatamata sellele jäid pooled teemad lõpuks katmata. Külas oli notar ja Eesti Omanike Keskliidu esimees Priidu Pärna, kellega kaotasime ennast rohkem kui pooleteiseks tunniks põnevasse notarite maailma. <br> <br> Muuhulgas said küsitud ka paljud meie kuulajate poolt esitatud küsimused ja teemasid ning küsimusi oli tõepoolest palju.'
    },
    {
      id: 17,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970867627&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970867627&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kuidas Siim kõvasti ämbreid kolistas + Algis avab kogu tõe Airbnb-st',
      description: '"Kinnisvarajutud" podcasti 17. osas on teemaks saatejuhtide Siimu ja Algise vahepealsed juhtumised ja sukeldume ka lühiajalise üüri ehk Airbnb maailma. Siim räägib, kuidas tal viimati soetatud korteri remont kulges ja kui keeruline oli Tallinnast välja üüriliste leidmine. Loomulikult ei jäänud selle objektiga ära ka ämbrite kolistamine ning kõik asjad võetakse saates kenasti ette. <br> <br> Saate teine osa on Algise soolo, kui teemaks on lühiajaline rent ehk Airbnb. Üldiselt üritame vastata küsimusele "Lühiajaline üürimine - kellele ja milleks?"'
    },
    {
      id: 16,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961017655&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961017655&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas abikaasa dušikabiinis ja trussikud pesunööril on hea kinnisvarafoto saladuseks?',
      description: '"Kinnisvarajutud" podcasti 16. osas sukeldume kinnisvarafotograafia maailma ning uurime elukutseliselt kinnisvarafotograafilt Liis Reimanilt (vaata veebilehte www.liisreiman.com/), miks peaks oma müügi või üürikuulutuse juurde tegema professionaalsed pildid. Meenutame meie teele ette sattunud kõige ägedamaid fotosid kinnisvarakuulutustest ning loomulikult ei lase käest ka võimalust uurida Liisi enda investeerimisportfelli kohta.'
    },
    {
      id: 15,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961006123&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/961006123&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tõnu Toompark - mis toimub 2021. aastal üüriturul ning kas kinnisvaraturg on krahhi äärel?',
      description: '"Kinnisvarajutud" podcasti 15. osas võõrustame meest, kellest on ajapikku saanud üks tunnustatumaid kinnisvaraeksperte Eestis, kui stuudios on analüütik ja koolitaja Tõnu Toompark. Pikalt kinnisvaravaldkonnas töötanud ja juba aastaid ka koolitajana töötanud Toompark on kindlasti kõigile tuttav mees nii teleekraanilt kui raadioeetrist, sest tihti, kui meediaväljaannetel on vaja kinnisvaraturu hetkeseisu kohta adekvaatset infot, siis pöördutakse just Tõnu poole. <br> <br> Meie saates räägib Tõnu oma tegemistest koolitajana (vaata üle veebileht Kinnisvarakool.ee), analüütikuna ning ka investorina. Saame teada mitu üürikorterit tal endal portfellis on ning Tõnu räägib ka ühe päris hullu loo oma suurimast ämbrist üüriinvestorina.'
    },
    {
      id: 14,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953660530&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953660530&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Stuudios on kutseline hindaja! Kuidas pannakse paika objekti väärtus hindamisaktis?',
      description: '"Kinnisvarajutud" podcasti 14. osa sukeldub väga põnevasse valdkonda, mille kohta meile saatesse ja ka Facebooki gruppi on tulnud palju küsimusi. Stuudios on Domus Kinnisvara kutseline hindaja Anu Alatsei (domus.ee/hindajad/anu-alatsei/), kellelt uurisime, mis hindamisakti seisukohast kinnisvara hinda tõstab ja mis langetab. Küsimusi aitasid koostada meie kuulajad, kes esitasid need Facebooki grupis Kinnisvarajutud.'
    },
    {
      id: 13,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953649271&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953649271&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tormiline ja elumuutev 2020 on läbi. Mida toob 2021?',
      description: '"Kinnisvarajutud" saatesarja 13. osas räägime esmalt selgeks kahe lindistuse vahel toimunud juhtumistest. Seejärel keskendume aastalõpule omaselt meie aasta 2020 juhtumistele läbi kinnisvaraprisma vaadates. Lõpuks vaatasime ka tulevikku ning viskasime õhku eesmärgid 2021. aastaks.'
    },
    {
      id: 12,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943945000&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943945000&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tere tulemast Pärnusse ehk kuidas suvepealinna kinnisvarainvestor jahib 11%-12% tootlust!',
      description: '"Kinnisvarajutud" taskuhäälingu 12. osas teeme ülipõneva põike Tallinnast välja. Kui Eesti kinnisvaraturust suure osa moodustab paratamatult Tallinn, siis ägedaid investoreid leidub ja vägevaid tootlusi tehakse ka pealinnast kaugemal. <br> <br> Kutsusime saatesse meie podcasti püsikuulaja Einar Elbingu, kes väikeettevõtjana ja väikeinvestorina toimetab suvepealinnas Pärnus. Kuulame ära Einari loo, kuidas temast sai pooleldi juhuse tahtel kinnisvarainvestor ning millised on värskelt teise investeerimiskorteri õnnelikuks omanikuks saanud mehe tulevikuplaanid. <br> <br> Loomulikult võrdleme ka Tallinna ja Pärnu kinnisvaraturge ning uurime, millise Pärnus väga levinud strateegiaga Einar oma tootlust maksimeerib. Vastuse saab ka küsimus, kas kõik pealinnas tegutsevad investorid peaksid jalad selga võtma ja Pärnusse tegutsema minema.'
    },
    {
      id: 11,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943935862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943935862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Hoidke piip ja prillid! Kaks tundi kuulajate küsimusi ja vastuseid',
      description: '"Kinnisvarajutud" taskuhäälingu 11. osas tegime oma ajaloo esimese vaid kuulajate küsimustele pühendatud saate. Peaaegu kaks tundi väldanud vastamise tulemusena said puudutatud sisuliselt kõik erinevad kinnisvarainvesteerimise tahud. Saate lõpus andsime välja ka Kristi Saare poolt meie juubeliosas välja hõigatud auhinna. <br> <br> Saates proovisime enda teadmistega läbi närida suurest hulgast väga headest küsimustest. Kõik küsimused, mis saates kõlasid, leiab Rahajutud.ee veebilehelt "Kinnisvarajutud" podcasti 11. osa postituse tekstist.'
    },
    {
      id: 10,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935474932&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935474932&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Investori ja ettevõtja Kristi Saare teekond üürivannist kadestamisväärse kinnisvaraportfellini',
      description: 'Saatesarja esimese suure juubeli ehk kümnenda osa külaliseks kutsusime investori, koolitaja ja ettevõtja Kristi Saare, kes hästi tuntud enamusele Eesti väikeinvestoritele. Kristi Saare on kinnisvaras läbi teinud huvitavad sammud, kui tema esimene objekt oli mikrokorter ühes kurikuulsas Põhja-Tallinna ühiselamus, kuhu pärast kella 21 õhtut eriti julgust minna polnud. <br> <br> Praeguseks on Saare kokku pannud kolmese grupi sarnaselt mõtlevaid sõbrannasid, kes ühiselt on jõudsalt oma kinnisvaraportfelli kasvatamas. Saare jagab hea meelega väga konkreetseid näpunäiteid, mida sellise koostöö puhul tuleks jälgida ja kuidas tööjaotust võiks jagada nii, et kõik lõpuks rahul oleksid. <br> <br> Otse kinnisvarasse investeerimisel on sisenemisbarjäär mitme teise varaklassiga võrreldes suurem ning paljude algajate investorite jaoks seetõttu automaatselt välistatud. Kristi Saare saate ära kuulanuna võiks kindlasti tekkida väike heureka moment, et sobivate kaasteeliste leidmisega on võimalik seda sisenemisbarjääri oluliselt madalamaks tuua. Ühtlasi oleks partneritega koos asja ajades oluliselt julgem tegutseda ning ideede omavahel läbi põrgatamine aitaks teha paremaid otsuseid. <br> <br> Kristi Saare tõi "Kinnisvarajuttudele" juubeli puhul ka väikese kingituse, kui tõi saatejuhtidele oma üsna värskelt käima lükatud kirjastusest WW Print Barbara Corcorani raamatu "Ärihai lugu", kuhu ka motiveeriva pühenduse sisse kirjutas. Täpselt sama raamatu saame Kristi lahkel loal välja panna ka ühele meie kuulajale. Mida selleks tegema peab, saab teada meie Facebooki grupist Kinnisvarajutud!'
    },
    {
      id: 9,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935442094&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/935442094&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kuidas meelitada enda korterisse maailma parim üürnik?',
      description: 'Saatesarja üheksandas osas võtsime ette väga suure ampsu, kui rääkisime üürniku valimisest. Alustasime lausa nii kaugelt, kui üüriobjekti valimisest seda silmas pidades, millist üürnikuprofiili loodetakse haarata. Üritasime vastata saates muuhulgas sellistele küsimustele: <br> <br> Kas hakata ise üürnikku otsima või kasutada maaklerit? <br> Kuidas saada maksimaalne tootlus? <br> Eeltöö ja korteri näitamine. <br> Taustakontroll <br> Mida on oluline lepingu sõlmimisel teada? <br> Üleandmise-vastuvõtmise akt.'
    },
    {
      id: 8,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927288439&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927288439&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Ehitusekspert aitab! Kuidas veenduda, et ei ostaks kinnisvaraturult põrsast kotis?',
      description: 'Podcasti "Kinnisvarajutud" kaheksandas osas on meil külas kogenud ehitusspetsialist Marko Sults Ehituskaitse Büroost. See ettevõte aitab vältida n-ö põrsa kotis ostmist. Ehituskaitse Büroo aitab aru saada, millised vead ja probleemid kaasnevad soetatava kinnisvaraga. Kinnisvara ostuabi ülevaatuse raport võimaldab teha targa valiku - säästa aega ja raha hilisemate probleemide vältimisega. <br> <br> Uurisime saates Markolt erinevaid huvitavaid juhtumisi meie kohalikult kinnisvaraturult ning mehel tuli põnevaid ja kohati uskumatuid lugusid kui varrukast. Aga üldiselt sai ta tõdeda, et aastatega on ehituskvaliteet läinud paremaks ja inimesed saavad üha teadlikumaks.'
    },
    {
      id: 7,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927276916&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/927276916&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kas kinnisvaraturul on hinnas läbirääkimiseks ruumi ja kuidas hinnapakkumist teha?',
      description: 'Saatesarja seitsmendas osas jagasime meile eraldatud stuudioaja kaheks. Esmalt rääkisime veidi tegemistest, millega meil endal salvestamiste vahelisel ajal tuli tegeleda. Vihje: purki sai ka üks notaris käimine ning muljeid sellest kogemusest jagame ka oma kuulajatega. <br> <br> Saate teises pooles võtsime ette sellise teema nagu hinnaläbirääkimised ja pakkumiste tegemine. Vaatasime pakkumiste tegemisele otsa nii investori kui ka müüja seisukohalt ning proovisime vastata paljudele küsimustele'
    },
    {
      id: 6,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921999862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921999862&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kalle Aron - igal investoril on vaja oma Kallet ja kinnisvarahuvilisel oma Jaaku',
      description: 'Podcasti kuuendas osas on meil suur au võõrustada investorit ja Scandium Kinnisvara partnerit Kalle Aronit. Kalle on mees, kes on paljudele investeerimishuvilistele hästi tuttav Jaak Roosaare raamatust "Kinnisvaraga rikkaks saamise õpiku" veergudelt, kus tema ja Roosaare parimad palad omavahelisest kirjavahetusest on täies ilus lugejateni toodud. <br> <br> Kalle Aroniga rääkisime tema teekonnast esimestest sammudest kinnisvarainvestorina kuni Scandium Kinnisvara edulooni. Lisaks pakub Kalle kinnisvarainvestoritele oma pikaaegse kogemuse pealt mitmeid suurepäraseid soovitusi, kuidas pakkuda üürnikele paremat ja mõnusamat üüripinda ning samas ka tõsta oma tootlust. <br> <br> NB! See on saade, mida tasub kuulata rahulikult (ja vajadusel mitu korda) ning võtta kõrvale ka paber-pliiats, et kõik kõlavad tarkuseterad kenasti üles tähendatud saaks.'
    },
    {
      id: 5,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/920376424&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/920376424&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Tragikoomilised juhtumised elust ensesest, finantseerimisest ja kinnisvaraportaalide võrdlus',
      description: 'Podcasti viiendas osas jagasime saateaja kolme suurema teema vahel. Esiteks rääkisime kahe salvestamise vahel meie endaga toimunud huvitavatest juhtumistest ning saime taas tõdeda, et just päriselu pakub kõige põnevamaid jututeemasid. <br> <br> Saate teises osas vaatasime korraks tagasi meie kolmandale saatele, kus rääkisime objektide otsimisest ja valimisest. Toona jäi arutamata, millisest kinnisvaraportaalist peaks otsimisega alustama ja kas silm tuleks peal hoida kõigil kolmel suuremal Eesti portaalil või on uus trend hoopis Facebooki grupid? <br> <br> Lõpetuseks puudutasime veidi erinevaid kinnisvara finantseerimise võimalusi ehk milliseid laenutooteid on olemas. Alates kõige madalama intressiga kodulaenudest, lõpetades kulukate ja äkiliste laenutoodetega, mida kasutada kas sildfinantseeringuks või lühiajaliseks kapitaliks, mis võimalikult kiirelt refinantseeritakse. <br> <br> Nii kinnisvaraportaalide kui erinevate finantseerimisvõimaluste kohta tegi Algis ka kirjaliku kokkuvõtte, mille panime kõigile kuulajatele teema lihtsamaks jälgimiseks siia kirja Rahajutud.ee portaali siia: rahajutud.ee/kinnisvarajutud-tr…ortaalide-vordlus/'
    },
    {
      id: 4,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917986366&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917986366&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Saate ajaloo esimene külaline tutvustab uuenduslikku finantseerimisvõimalust!',
      description: 'Neljandas osas oli meie noore ajaloo jooksul esmakordselt seltsiks külaline - Hoovi.ee kaasasutaja Karl Märka. Hoovi.ee pakub kinnisvaraomanikele võimalust võtta oma tulevane üüritulu ettemaksuna välja ehk siis müüa oma üürilepingute nõudeõigus neile edasi. <br> <br> Hoovi.ee kliendid on kasutanud üüritulu ettemaksu võimalust, et viia läbi hädavajalikud ehitus- või remonditööd või isegi muutnud üüripinna planeeringut ja ka portfelli kasvatamiseks ehk uute objektide rahastamiseks. <br> <br> Saates räägime Karl Märkaga nii tema enda teekonnast ettevõtluses ja investeerimises kui loomulikult uurime Hoovi.ee võimaluste kohta. <br> <br> "Kinnisvarajuttude" ajaloo esimene külaline ei tulnud meie juurde mitte tühjade kätega, vaid tõi kaasa ka ühe pakkumise, kus kõik on võitjad. <br> <br> Kui meie kuulajad kasutavad Hoovi.ee portaalis sooduskoodi KINNISVARAJUTUD2020, siis pääsevad nad lepingutasust, meie podcast saab väikese vahendustasu ja Hoovi.ee saab endale väärt kliendi. Win-win-win! Sellist asja liiga tihti ei kohta. <br> <br> Kuula saade ära ja saad ehk ühe finantseerimisvõimaluse juurde, mida tulevikus sobiva projekti puhul kasutada!'
    },
    {
      id: 3,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/911259802&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/911259802&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Kuidas leida sobiv investeerimiskorter ja mitte lasta endale mütsi pähe tõmmata?',
      description: 'Podcasti kolmandas osas arutasime teemal, kuidas leida endale sobiv investeerimiskorter. Alustasime eeltöö tegemisest ja kinnisvaraportaalide lappamisest, käisime läbi kõik küsimused, mida võiks korterit vaadates küsida ning panime lauale veel mitmed olulised punktid, mida enne tehingu lukkulöömist peaks tegema.'
    },
    {
      id: 2,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903564877&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/903564877&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: '8 põhjust, miks kaaluda kinnisvarasse investeerimist!',
      description: 'Podcasti teise osa esimeses osas tõi Algis välja põhiteemad, mida värskelt toimunud Kinnisvaraseminaril arutati ja mis tuuled kinnisvaras puhuvad. Loomulikult proovisime jõuda arusaamale, kas meil siis on kriis või ei ole. <br> <br> Saate põhiosas tõime välja 8 põhjust, miks tasuks kaaluda kinnisvarasse investeerimist. Et jutt ei läheks üksnes kiidulauluks, siis viskasime peaaegu iga punkti juures õhku ka ühe terava küsimuse.'
    },
    {
      id: 1,
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893725846&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      src2: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893725846&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
      title: 'Uus eestikeelne podcast "Kinnisvarajutud" alustab!',
      description: 'Saatejuhid rääkisid kumbki oma loo, kuidas nad kinnisvaraga seotud on, miks sai ühiselt otsustatud selleteemalist podcasti tegema hakata ja mida täpsemalt saate tulevik endaga kaasa toob. <br> <br> Aastaid maaklerina toimetanud Algiselt küsisime seitse küsimust: <br> <br> Kõige kasulikum kinnisvaratehing? <br> Kõige naljakam kogemus maaklerina? <br>Kõige hullumeelsem või veidram ostu/müügi klient? <br>Kõige negatiivsem kogemus üürnikuga? <br>Suurim möödapanek või eksimus kinnisvaras? <br>Suurim unistus seoses kinnisvaraga? <br>Senine kõige tähtsam õppetund maaklerina? <br> <br> Pikalt arutati üürnike teemadel ning räägiti mitmeid lugusid nii probleemidest üürnikega kui veidrustest korteri näitamistel.'
    }
  ]
}
