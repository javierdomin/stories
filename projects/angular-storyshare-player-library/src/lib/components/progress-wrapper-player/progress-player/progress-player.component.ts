import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-player',
  templateUrl: './progress-player.component.html',
  styleUrls: ['./progress-player.component.css']
})
export class ProgressPlayerComponent implements OnInit {

  @Input() width: any;
  
  constructor() { }

  ngOnInit() {
  }

}