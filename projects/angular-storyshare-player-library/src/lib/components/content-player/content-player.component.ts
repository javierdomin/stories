import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Type } from '../../models/Type.enum';
import { Story } from '../../models/Story';


@Component({
  selector: 'app-content-player',
  templateUrl: './content-player.component.html',
  styleUrls: ['./content-player.component.css']
})
export class ContentPlayerComponent implements OnInit, OnChanges {

  typeVideo: Type = Type.Video;
  typeImg: Type = Type.Image;
  storyPosition: number = 0;
  currentStory: Story;
  startDate: number;
  currentDate: number;
  timerId;
  storyContentWidth;
  progressPosition: number;
  isPause: boolean = false;

  @Input() stories: Story[];
  @Output() storiesChange = new EventEmitter();

  @ViewChild("storyContent") storyContent: ElementRef;
  @ViewChild("video") video: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if(this.stories !== undefined){
        this.currentStory = this.stories[this.storyPosition];
        this.loop(this.currentStory);
        console.log(this.storyContent);
        this.storyContentWidth = this.storyContent.nativeElement.offsetWidth;
      }    
    }, 50);
    
  }

  ngAfterViewInit() {
  }

  loop(story: Story): void {
    this.startDate = new Date().getTime();
    if (this.storyPosition <= this.stories.length) {
      this.timerId = setInterval(() => {
        if (!this.isPause) {
          this.checkEndStory(this.startDate);
        }
      }, 1);
    }
  }

  checkEndStory(startDate: number): void {
    this.currentDate = new Date().getTime();
    var remainingDuration = this.currentDate - startDate;
    if (remainingDuration > this.currentStory.duration) {
      if (this.storyPosition < this.stories.length - 1) {
        this.next();
      }
    } else {
      this.progressPosition = (remainingDuration * 100) / this.currentStory.duration;
      this.stories[this.storyPosition].progression = this.progressPosition;
      this.storiesChange.emit(this.stories);
    }
  }
  clickEvent(event: any) {
    var x = event.offsetX;
    var tier = this.storyContentWidth / 3;
    if (x < tier) {
      this.previous();
    }
    if (x > this.storyContentWidth - tier) {
      this.next();
    }
  }

  next(): void {
    clearInterval(this.timerId);
    if (this.storyPosition < this.stories.length - 1) {
      this.storyPosition = this.storyPosition + 1;
      this.currentStory = this.stories[this.storyPosition];
      this.loop(this.currentStory);
    } else {
      this.storyPosition = this.stories.length - 1;
      this.currentStory = this.stories[this.storyPosition];
    }
    this.changeProgressionStory(this.storyPosition);
  }

  previous(): void {
    clearInterval(this.timerId);
    var previousStoryPosition = this.storyPosition;
    if (this.storyPosition > 0) {
      this.storyPosition = this.storyPosition - 1;
    } else {
      this.storyPosition = 0;
    }

    this.changeProgressionStory(this.storyPosition);
    this.currentStory = this.stories[this.storyPosition];
    this.loop(this.currentStory);
  }

  changeProgressionStory(currentStory: number): void {

    for (let index = 0; index < this.stories.length; index++) {
      if (index < currentStory) {
        this.stories[index].progression = 100;
      } else if (index > currentStory) {
        this.stories[index].progression = 0;
      }
      else {
        if (currentStory === this.stories.length - 1) {
          this.stories[index].progression = 100;
        }
      }
    }
    this.storiesChange.emit(this.stories);
  }

  onLongPress() {
    this.isPause = true;
    if (this.currentStory.type == this.typeVideo) {
      this.pauseVideo();
    }
  }
  onLongPressEnd() {
    if (this.isPause) {
      this.isPause = false;
      if (this.currentStory.type == this.typeVideo) {
        this.playVideo();
      }
    }
  }

  playVideo() {
    this.video.nativeElement.play();
  }

  pauseVideo() {
    this.video.nativeElement.pause();
  }
}

