import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  displayedEpisodes: any;
  genuinevideoUrlsforSingleEpisodes: any;
  displayedEpisode: any;
  idFromRoute: any;

  constructor(private sanitizer: DomSanitizer, private podcastService: PodcastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idFromRoute = params.get('id');
      console.log(this.idFromRoute);
      return this.idFromRoute
    })
    this.displayedEpisodes = this.podcastService.getSingleEpisode(this.idFromRoute);

    for(let i = 0; i < this.podcastService.episodes.length; i++) {
      if( this.podcastService.episodes[i].id == this.idFromRoute) {
        this.displayedEpisode = this.podcastService.episodes[i]
      }
    }

    this.displayedEpisodes = this.podcastService.episodes;

    for(let i = 0; i < this.displayedEpisodes.length; i++) {
      if( this.podcastService.episodes[i].id == this.idFromRoute) {
        let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.displayedEpisodes[i].src);
        this.genuinevideoUrlsforSingleEpisodes = genuinevideoUrl

      }
    }
  }

}

