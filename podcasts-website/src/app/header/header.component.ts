import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goToLatest() {
    this.scroller.scrollToAnchor("latestEpisodes");
  }

  goToPopular() {
    this.scroller.scrollToAnchor("popularEpisodes");
  }

  goToAll() {
    this.scroller.scrollToAnchor("allEpisodes");
  }
}
