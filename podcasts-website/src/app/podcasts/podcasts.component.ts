import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { PodcastService } from '../podcast.service';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
displayedEpisodes: any;
genuinevideoUrls: any = [];

  constructor(private sanitizer: DomSanitizer, private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.displayedEpisodes = this.podcastService.episodes;

    for(let i = 0; i < this.displayedEpisodes.length; i++) {
      let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.displayedEpisodes[i].src);
      this.genuinevideoUrls.push(genuinevideoUrl)
    }

  }
}
