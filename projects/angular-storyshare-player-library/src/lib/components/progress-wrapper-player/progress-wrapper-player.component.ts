import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/Story';

@Component({
  selector: 'app-progress-wrapper-player',
  templateUrl: './progress-wrapper-player.component.html',
  styleUrls: ['./progress-wrapper-player.component.css']
})
export class ProgressWrapperPlayerComponent implements OnInit {
  @Input() stories: Story[];

  constructor() { }

  ngOnInit() {
  }

}
