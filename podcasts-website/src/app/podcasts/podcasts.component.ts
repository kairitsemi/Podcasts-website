import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
newEpisodesToLoad: any = [];
starting: number = 0;
ending: number = 6;
buttonState: boolean = true;


pageYoffset = 0;
@HostListener('window:scroll', ['$event']) onScroll(): void{
  this.pageYoffset = window.pageYOffset;
}


  constructor(private sanitizer: DomSanitizer, private podcastService: PodcastService, private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.displayedEpisodes = this.podcastService.getAllEpisodesSortedById(this.starting, this.ending);

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

  loadMore() {
    let episodeAmountCurrentlyDisplayed = this.displayedEpisodes.length
    this.ending = this.ending + 6;
    this.displayedEpisodes = this.podcastService.getAllEpisodesSortedById(this.starting, this.ending);
    let newEpisodesToLoad = this.displayedEpisodes.slice(episodeAmountCurrentlyDisplayed);

    for(let i = 0; i < newEpisodesToLoad.length; i++) {
      let genuinevideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(newEpisodesToLoad[i].src);
      this.genuinevideoUrlsForAllEpisodes.push(genuinevideoUrl)
    }
  }

  scrollToTop(){
    this.scroller.scrollToPosition([0,0]);
  }

  disableLoadMoreButton() {
    this.buttonState = false;
  }
}
