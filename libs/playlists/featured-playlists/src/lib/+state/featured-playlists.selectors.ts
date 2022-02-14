import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FEATURED_PLAYLISTS_FEATURE_KEY,
  State,
  featuredPlaylistsAdapter,
} from './featured-playlists.reducer';

// Lookup the 'FeaturedPlaylists' feature state managed by NgRx
export const getFeaturedPlaylistsState = createFeatureSelector<State>(
  FEATURED_PLAYLISTS_FEATURE_KEY
);

const { selectAll, selectEntities } = featuredPlaylistsAdapter.getSelectors();

export const getFeaturedPlaylistsLoaded = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => state.loaded
);

export const getFeaturedPlaylistsError = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => state.error
);

export const getFeaturedPlaylistsIsLoading = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => !state.error && !state.loaded
);

export const getAllFeaturedPlaylists = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => selectAll(state)
);

export const getFeaturedPlaylistsEntities = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFeaturedPlaylistsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFeaturedPlaylistsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
