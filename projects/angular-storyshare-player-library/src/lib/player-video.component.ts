import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from './models/Story';
import { Type } from './models/Type.enum';
import { User } from './models/User';

@Component({
  selector: 'app-player-stories',
  templateUrl: './player-video.component.html',
  styleUrls: ['./player-video.component.css']
})
export class PlayerVideoComponent {
  
  @Input() stories: Story[];
  @Input() user: User;
  
  storiesChange(updateStories: Story[]){
    this.stories = updateStories;
  }

  constructor() { }

  
}
