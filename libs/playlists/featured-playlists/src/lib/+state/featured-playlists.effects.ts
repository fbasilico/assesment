import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { ENVIRONMENT, Environment } from '@tt/shared/environment';
import { catchError, delay, map, of } from 'rxjs';
import * as FeaturedPlaylistsActions from './featured-playlists.actions';

@Injectable()
export class FeaturedPlaylistsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeaturedPlaylistsActions.init),
      fetch({
        run: (action) =>
          this.http.get<any>(this.env.playlistsApi).pipe(
            // add nice to have spinner with delay

            map(({ featuredPlaylists }) => {
              return FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess({
                featuredPlaylists: featuredPlaylists.content,
              });
            }),
            catchError((error) =>
              of(
                FeaturedPlaylistsActions.loadFeaturedPlaylistsFailure({ error })
              )
            )
          ),
        // Your custom service 'load' logic goes here. For now just return a success action...

        onError: (action, error) => {
          return FeaturedPlaylistsActions.loadFeaturedPlaylistsFailure({
            error,
          });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}
}