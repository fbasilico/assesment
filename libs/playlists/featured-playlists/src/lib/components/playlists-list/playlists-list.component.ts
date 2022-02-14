import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FeaturedPlaylistsEntity } from '../../+state/featured-playlists.models';
import { combineLatest, map } from 'rxjs';
import * as FeaturedPlaylistsActions from '../../+state/featured-playlists.actions';
import * as FeaturedPlaylistsSelectors from '../../+state/featured-playlists.selectors';

@Component({
  selector: 'tt-playlists-list',
  template: `
    <ng-container *ngIf="data$ | async as data"
      ><mat-progress-spinner
        color="primary"
        mode="indeterminate"
        *ngIf="data.isLoading"
      ></mat-progress-spinner>
      <ng-container *ngIf="!data.isLoading && data.playlists"
        ><mat-grid-list cols="4" rowHeight="200px" gutterSize="10px">
          <mat-grid-tile
            *ngFor="let item of data.playlists; trackBy: trackByMethod"
          >
            <tt-card-item
              [title]="item.name"
              [imageUrl]="item.artwork"
              [content]="item.name"
            >
            </tt-card-item></mat-grid-tile></mat-grid-list></ng-container
    ></ng-container>
  `,
  styleUrls: ['./playlists-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsListComponent implements OnInit {
  data$ = combineLatest([
    this.store.pipe(select(FeaturedPlaylistsSelectors.getAllFeaturedPlaylists)),
    this.store.pipe(
      select(FeaturedPlaylistsSelectors.getFeaturedPlaylistsIsLoading)
    ),
  ]).pipe(map(([playlists, isLoading]) => ({ playlists, isLoading })));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(FeaturedPlaylistsActions.init());
  }

  trackByMethod(index: number, el: FeaturedPlaylistsEntity): string {
    return el.id;
  }
}
