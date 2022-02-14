import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedLayoutComponent } from './layout.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule],
  declarations: [SharedLayoutComponent],
  exports: [SharedLayoutComponent],
})
export class SharedLayoutModule {}
