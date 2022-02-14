import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as FeaturedPlaylistsActions from './featured-playlists.actions';
import { FeaturedPlaylistsEntity } from './featured-playlists.models';

export const FEATURED_PLAYLISTS_FEATURE_KEY = 'featuredPlaylists';

export interface State extends EntityState<FeaturedPlaylistsEntity> {
  selectedId?: string | number; // which FeaturedPlaylists record has been selected
  loaded: boolean; // has the FeaturedPlaylists list been loaded
  error?: string | null; // last known error (if any)
}

export interface FeaturedPlaylistsPartialState {
  readonly [FEATURED_PLAYLISTS_FEATURE_KEY]: State;
}

export const featuredPlaylistsAdapter: EntityAdapter<FeaturedPlaylistsEntity> =
  createEntityAdapter<FeaturedPlaylistsEntity>();

export const initialState: State = featuredPlaylistsAdapter.getInitialState({
  loading: false,
  loaded: false,
});

const featuredPlaylistsReducer = createReducer(
  initialState,
  on(FeaturedPlaylistsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess,
    (state, { featuredPlaylists }) =>
      featuredPlaylistsAdapter.setAll(featuredPlaylists, {
        ...state,
        loaded: true,
      })
  ),
  on(
    FeaturedPlaylistsActions.loadFeaturedPlaylistsFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return featuredPlaylistsReducer(state, action);
}
