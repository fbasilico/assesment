import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardItemModule } from '@tt/shared/ui-components';
import { FeaturedPlaylistsEffects } from './+state/featured-playlists.effects';
import * as fromFeaturedPlaylists from './+state/featured-playlists.reducer';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { FeaturedPlaylistsRoutingModule } from './featured-playlists-routing';

@NgModule({
  imports: [
    CommonModule,
    FeaturedPlaylistsRoutingModule,
    StoreModule.forFeature(
      fromFeaturedPlaylists.FEATURED_PLAYLISTS_FEATURE_KEY,
      fromFeaturedPlaylists.reducer
    ),
    EffectsModule.forFeature([FeaturedPlaylistsEffects]),
    MatProgressSpinnerModule,

    CardItemModule,
    MatGridListModule,
  ],
  declarations: [PlaylistsListComponent],
})
export class PlaylistsFeaturedPlaylistsModule {}
