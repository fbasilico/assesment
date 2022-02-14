import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardItemComponent } from './card-item.component';

@NgModule({
  declarations: [CardItemComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardItemComponent],
  providers: [],
})
export class CardItemModule {}
