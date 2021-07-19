import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerVideoModule } from 'projects/angular-storyshare-player-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayerVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
