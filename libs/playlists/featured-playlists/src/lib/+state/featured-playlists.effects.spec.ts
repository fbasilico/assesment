import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { ENVIRONMENT } from '@tt/shared/environment';
import { hot } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import * as FeaturedPlaylistsActions from './featured-playlists.actions';
import { FeaturedPlaylistsEffects } from './featured-playlists.effects';

describe('FeaturedPlaylistsEffects', () => {
  let actions$: Actions;
  let spectator: SpectatorService<FeaturedPlaylistsEffects>;
  let effects: FeaturedPlaylistsEffects;
  let httpClient: any;

  const createService = createServiceFactory({
    service: FeaturedPlaylistsEffects,
    imports: [HttpClientModule],
    providers: [
      provideMockActions(() => actions$),
      provideMockStore(),
      {
        provide: ENVIRONMENT,
        useValue: {},
      },
    ],
  });

  beforeEach(() => {
    spectator = createService();
    httpClient = spectator.inject(HttpClient);
  });

  describe('init$', () => {
    it('should return success action', () => {
      jest
        .spyOn(httpClient, 'get')
        .mockReturnValue(of({ featuredPlaylists: { content: [] } }));

      actions$ = hot('a', { a: FeaturedPlaylistsActions.init() });

      const expected = hot('(a)', {
        a: FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess({
          featuredPlaylists: [],
        }),
      });

      expect(spectator.service.init$).toBeObservable(expected);
    });

    it('should return error action', () => {
      const mockedError = new Error('test');
      jest
        .spyOn(httpClient, 'get')
        .mockReturnValue(throwError(() => mockedError));

      actions$ = hot('a', { a: FeaturedPlaylistsActions.init() });

      const expected = hot('(a)', {
        a: FeaturedPlaylistsActions.loadFeaturedPlaylistsFailure({
          error: mockedError,
        }),
      });

      expect(spectator.service.init$).toBeObservable(expected);
    });
  });
});
