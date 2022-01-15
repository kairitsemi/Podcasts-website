import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
displayedEpisodes: any;


  constructor(private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.displayedEpisodes = this.podcastService.getEpisodes();
  }






}
