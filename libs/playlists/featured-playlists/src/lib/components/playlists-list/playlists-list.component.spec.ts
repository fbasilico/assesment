import { TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CardItemModule } from '@tt/shared/ui-components';
import * as FeaturedPlaylistsActions from '../../+state/featured-playlists.actions';
import * as FeaturedPlaylistsSelectors from '../../+state/featured-playlists.selectors';
import { PlaylistsListComponent } from './playlists-list.component';

describe('PlaylistsListComponent', () => {
  let spectator: Spectator<PlaylistsListComponent>;
  let mockStore: MockStore;
  const createComponent = createComponentFactory({
    declarations: [],
    component: PlaylistsListComponent,
    imports: [MatGridListModule, CardItemModule, MatProgressSpinnerModule],
    providers: [
      provideMockStore({
        selectors: [
          {
            selector: FeaturedPlaylistsSelectors.getFeaturedPlaylistsIsLoading,
            value: false,
          },
          {
            selector: FeaturedPlaylistsSelectors.getAllFeaturedPlaylists,
            value: [],
          },
        ],
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.query(MatProgressSpinner)).toBeNull();
  });

  it('should dispatch init action', () => {
    const spy = jest.spyOn(mockStore, 'dispatch');

    spectator.component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(FeaturedPlaylistsActions.init());
  });

  it('should show spinner', () => {
    mockStore.overrideSelector(
      FeaturedPlaylistsSelectors.getFeaturedPlaylistsIsLoading,
      true
    );

    mockStore.refreshState();
    spectator.detectComponentChanges();

    expect(spectator.query(MatProgressSpinner)).not.toBeNull();
  });
});
