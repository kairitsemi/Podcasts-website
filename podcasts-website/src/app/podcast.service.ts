import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor() { }

  getEpisodes() {
    return this.episodes;
  }

  episodes = [
    {
      id: 1,
      imagePath: 'https://i1.sndcdn.com/avatars-OMKMLdNDyZVYyPkG-INZz2g-original.jpg',
      src: "https://soundcloud.com/user-79516917/66-heigo-kriibi-kuidas-palgatootajana-ilma-omafinantseeringuta-uuriportfellile-alus-panna",
      title: "1Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: "podcasti 66. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.",
      name: "Kinnisvarajutud"

    },
    {
      id: 2,
      imagePath: 'assets/podcast-cover/66.jpg',
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525%3Fsecret_token%3Ds-8PrxG5RAgTp&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: "2Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: "podcasti 67. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.",
      name: "Kinnisvarajutud"

    },
    {
      id: 3,
      imagePath: 'assets/podcast-cover/66.jpg',
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525%3Fsecret_token%3Ds-8PrxG5RAgTp&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: "3Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: "podcasti 68. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.",
      name: "Kinnisvarajutud"

    },{
      id: 4,
      imagePath: 'assets/podcast-cover/66.jpg',
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1184518525%3Fsecret_token%3Ds-8PrxG5RAgTp&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      title: "4Heigo Kriibi - kuidas palgatöötajana ilma omafinantseeringuta üüriportfellile alus panna?",
      description: "podcasti 69. osas liigume tagasi juurte juurde ehk räägime järjekordse päriselulise loo, kuidas igapäevaste tegemiste kõrvalt hakata tasapisi oma üüriportfelli üles ehitama. Oma loo räägib ennast palgatöötajast investoriks nimetav Heigo Kriibi, kes nakatus kinnisvarapisikuga tänu pruudile, kellega kiirelt pandi nii portfelli mõttes kui eluliselt leivad ühte kappi. Tänaseks päevaks Tartusse kolinud Heigo alustas üüriäriga 2014. aastal Tallinnas kuulsas Stroomi Residentsi majas ning mehe esimesed tehingud said teoks sisuliselt ilma oma raha kaasamata. Saate üheks läbivaks teemaks ongi, kuidas eraisikuna pangast võimalikult edukalt laenu kaasata. Heigo räägib ka tagantjärele humoorika ja õpetliku loo, mis aga tegelikult oleks võinud tema investeerimiskarjäärile kohe eos fataalse hoobi anda.",
      name: "Kinnisvarajutud"

    }
  ]
}
