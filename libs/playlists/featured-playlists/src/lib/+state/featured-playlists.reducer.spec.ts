import { Action } from '@ngrx/store';

import * as FeaturedPlaylistsActions from './featured-playlists.actions';
import { FeaturedPlaylistsEntity } from './featured-playlists.models';
import { State, initialState, reducer } from './featured-playlists.reducer';

describe('FeaturedPlaylists Reducer', () => {
  const createFeaturedPlaylistsEntity = (
    id: string,
    name = ''
  ): FeaturedPlaylistsEntity => ({
    id,
    name: name || `name-${id}`,
    artwork: '',
    curator_name: '',
    kind: '',
    url: '',
  });

  describe('valid FeaturedPlaylists actions', () => {
    it('loadFeaturedPlaylistsSuccess should return the list of known FeaturedPlaylists', () => {
      const featuredPlaylists = [
        createFeaturedPlaylistsEntity('PRODUCT-AAA'),
        createFeaturedPlaylistsEntity('PRODUCT-zzz'),
      ];
      const action = FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess({
        featuredPlaylists,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
