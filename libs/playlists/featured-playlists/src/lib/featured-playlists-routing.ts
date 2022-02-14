import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturedPlaylistsRoutingModule {}
