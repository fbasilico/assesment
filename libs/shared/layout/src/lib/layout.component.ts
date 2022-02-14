import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tt-layout',
  template: `<mat-sidenav-container>
    <mat-sidenav mode="side" opened [fixedInViewport]="true">
      <mat-nav-list>
        <mat-list-item [routerLink]="'/playlists'" routerLinkActive="active">
          PlaylistsUi
        </mat-list-item></mat-nav-list
      >
    </mat-sidenav>

    <mat-sidenav-content>
      <div>
        <router-outlet></router-outlet>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>`,
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLayoutComponent {}
