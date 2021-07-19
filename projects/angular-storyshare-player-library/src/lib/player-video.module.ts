import { HeaderComponent } from './components/header/header.component';
import { ProgressWrapperPlayerComponent } from './components/progress-wrapper-player/progress-wrapper-player.component';
import { ContentPlayerComponent } from './components/content-player/content-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerVideoComponent } from './player-video.component';
import { ProgressPlayerComponent } from './components/progress-wrapper-player/progress-player/progress-player.component';
import { HttpClientModule } from '@angular/common/http';
import { LongPressDirective } from './directives/LongPress.directive';
import { User } from './models/User';
import { Story } from './models/Story';
import { Type } from './models/Type.enum';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
    PlayerVideoComponent,
    ContentPlayerComponent,
    ProgressWrapperPlayerComponent,
    ProgressPlayerComponent,
    LongPressDirective,
    HeaderComponent
  ],
  exports:[
    PlayerVideoComponent,
  ],
})
export class PlayerVideoModule { }

