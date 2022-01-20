import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  displayedEpisodes: any;

  constructor(private podcastService: PodcastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayedEpisodes = this.podcastService.episodes;
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log(id);

    })
  }

}

