import { FeaturedPlaylistsEntity } from './featured-playlists.models';
import {
  featuredPlaylistsAdapter,
  FeaturedPlaylistsPartialState,
  initialState,
} from './featured-playlists.reducer';
import * as FeaturedPlaylistsSelectors from './featured-playlists.selectors';

describe('FeaturedPlaylists Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFeaturedPlaylistsId = (it: FeaturedPlaylistsEntity) => it.id;
  const createFeaturedPlaylistsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FeaturedPlaylistsEntity);

  let state: FeaturedPlaylistsPartialState;

  beforeEach(() => {
    state = {
      featuredPlaylists: featuredPlaylistsAdapter.setAll(
        [
          createFeaturedPlaylistsEntity('PRODUCT-AAA'),
          createFeaturedPlaylistsEntity('PRODUCT-BBB'),
          createFeaturedPlaylistsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('FeaturedPlaylists Selectors', () => {
    it('getAllFeaturedPlaylists() should return the list of FeaturedPlaylists', () => {
      const results = FeaturedPlaylistsSelectors.getAllFeaturedPlaylists(state);
      const selId = getFeaturedPlaylistsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = FeaturedPlaylistsSelectors.getSelected(
        state
      ) as FeaturedPlaylistsEntity;
      const selId = getFeaturedPlaylistsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getFeaturedPlaylistsLoaded() should return the current "loaded" status', () => {
      const result =
        FeaturedPlaylistsSelectors.getFeaturedPlaylistsLoaded(state);

      expect(result).toBe(true);
    });

    it('getFeaturedPlaylistsError() should return the current "error" state', () => {
      const result =
        FeaturedPlaylistsSelectors.getFeaturedPlaylistsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
