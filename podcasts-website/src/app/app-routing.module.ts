import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EpisodeComponent } from './episode/episode.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'podcasts', component: PodcastsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: '**', redirectTo: 'podcasts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
