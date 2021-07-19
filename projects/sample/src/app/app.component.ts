import { Component } from '@angular/core';
import { User } from 'dist/angular-storyshare-player-library/lib/models/User';
import { Story } from 'dist/angular-storyshare-player-library/lib/models/Story';
import { Type } from './models/Type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  user: User = {
    name: 'Antoine Biamouret',
    img: 'https://firebasestorage.googleapis.com/v0/b/stories-b3038.appspot.com/o/me.svg?alt=media&token=523d7e9d-40bc-4866-8637-95d5a74017a8'
  }
 
  stories : Story[] = 
        [
            {
              source : "https://picsum.photos/id/124/1080/1920",
              type : Type.Image,
              duration : 6000,
              progression: 0
            },
            {
              source : "https://picsum.photos/id/125/1080/1920",
              type : Type.Image,
              duration : 6000,
              progression: 0
            },
            {
              source : "https://picsum.photos/id/126/1080/1920",
              type : Type.Image,
              duration : 6000,
              progression: 0
            },
            {
              source : "https://picsum.photos/id/127/1080/1920",
              type : Type.Image,
              duration : 3000,
              progression: 0
            },
            {
              source : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              type : Type.Video,
              duration : 6000,
              progression: 0
            },
            {
              source : "https://picsum.photos/id/128/1080/1920",
              type : Type.Image,
              duration : 3000,
              progression: 0
            },
            {
              source : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
              type : Type.Video,
              duration : 6000,
              progression: 0
            },
            {
              source : "https://picsum.photos/id/129/1080/1920",
              type : Type.Image,
              duration : 3000,
              progression: 0
            }
          ]
}
