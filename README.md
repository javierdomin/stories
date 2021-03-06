# angular-storyshare-player

[![NPM version](https://img.shields.io/npm/v/angular-highcharts.svg)](https://npmjs.org/package/angular-storyshare-player)

Storyshare is an Angular component allowing to broadcast stories on the web 🚀
Based in https://github.com/lebiam/angular-storyshare-player.

## Installation

### npm

```bash
npm install git+https://github.com/javierdomin/stories.git
```

## Usage Example

```typescript
// app.module.ts
import { PlayerVideoModule } from 'angular-storyshare-player';

@NgModule({
  imports: [
    PlayerVideoModule // add PlayerVideoModule to your imports
  ]
})
export class AppModule {}
```

```typescript
// Type.enum.ts
export enum Type {
    Image,
    Video
}
```

```typescript
// player.component.ts
import { Story } from 'angular-storyshare-player';
import { User } from 'angular-storyshare-player';

@Component({
  template: `
    <app-player-stories [user]="user" [stories] ="stories"></app-player-stories>
  `
})
export class PlayerComponent {
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
```
