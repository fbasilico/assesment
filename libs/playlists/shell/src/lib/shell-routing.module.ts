import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from '@tt/shared-layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SharedLayoutComponent,
    children: [
      {
        path: 'playlists',
        loadChildren: () =>
          import('@tt/playlists/featured-playlists').then(
            (m) => m.PlaylistsFeaturedPlaylistsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PlaylistsShellRoutingModule {}
