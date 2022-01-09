import { ActivatedRoute } from '@angular/router';
import { PodcastsRss } from './podcasts-rss';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  RssData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.GetRssFeedData();
  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    const _url = "https://feeds.soundcloud.com/users/soundcloud:users:881573947/sounds.rss";

    this.http
      .get<any>(
        _url,
        requestOptions
      )
      .subscribe((data) => {
        console.log(data);

        let parseString = xml2js.parseString;
        parseString(data, (err, result: PodcastsRss) => {
          this.RssData = result;
        });
      });
  }
   getDataDiff(endDate: any) {
    let setDate= new Date(endDate).toISOString();
    var diff = (new Date()).getTime() - new Date(setDate).getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    let dayString =  days == 0 ?  "" : days + "days ";
    let hoursString =  hours == 0 ?  "" : hours + "hr ";
    let minutesString =  minutes == 0 ?  "" : minutes + "m ";
    return dayString + hoursString + minutesString;
  }
}
