import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
episodes: any[] = [];

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {

  }



}
