import { createAction, props } from '@ngrx/store';
import { FeaturedPlaylistsEntity } from './featured-playlists.models';

export const init = createAction('[FeaturedPlaylists Page] Init');

export const loadFeaturedPlaylistsSuccess = createAction(
  '[FeaturedPlaylists/API] Load FeaturedPlaylists Success',
  props<{ featuredPlaylists: FeaturedPlaylistsEntity[] }>()
);

export const loadFeaturedPlaylistsFailure = createAction(
  '[FeaturedPlaylists/API] Load FeaturedPlaylists Failure',
  props<{ error: any }>()
);
