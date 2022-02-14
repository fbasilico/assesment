import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tt-card-item',
  template: `
    <ng-container *ngIf="title">
      <mat-card class="my-card">
        <mat-card-header>
          <mat-card-title>{{ title }}</mat-card-title></mat-card-header
        >
        <img
          mat-card-md-image
          [src]="imageUrl"
          [alt]="title"
          *ngIf="imageUrl"
        />
        <mat-card-content>
          <p>{{ content }}</p>
        </mat-card-content>
      </mat-card>
    </ng-container>
  `,
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() imageUrl?: string = undefined;
  @Input() content = '';
  @Input() title = '';
}
