import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutModule } from '@tt/shared-layout';
import { PlaylistsShellRoutingModule } from './shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    SharedLayoutModule,    
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    PlaylistsShellRoutingModule,
  ],
})
export class PlaylistsShellModule {}
