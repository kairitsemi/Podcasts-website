import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {


  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }



}
