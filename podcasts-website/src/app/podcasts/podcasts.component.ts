import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { PodcastService } from '../podcast.service';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
displayedEpisodes: any = [];
latestEpisodes: any = [];
popularEpisodes: any = [];
genuinevideoUrlsForAllEpisodes: any = [];
genuinevideoUrlsForLatestEpisodes: any = [];
genuinevideoUrlsForPopularEpisodes: any = [];

  constructor(private sanitizer: DomSanitizer, private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.displayedEpisodes = this.podcastService.getAllEpisodesSortedById();

    this.latestEpisodes = this.podcastService.getLatestEpisodes(6);

    this.popularEpisodes = this.podcastService.getPopularEpisodes();

    for(let i = 0; i < this.displayedEpisodes.length; i++) {
      let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.displayedEpisodes[i].src);
      this.genuinevideoUrlsForAllEpisodes.push(genuinevideoUrl)
    }

    for(let i = 0; i < this.latestEpisodes.length; i++) {
      let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl( this.latestEpisodes[i].src);
    this.genuinevideoUrlsForLatestEpisodes.push(genuinevideoUrl)
    }

    for(let i = 0; i < this.popularEpisodes.length; i++) {
      let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl( this.popularEpisodes[i].src);
    this.genuinevideoUrlsForPopularEpisodes.push(genuinevideoUrl)
    }

  }

  }


