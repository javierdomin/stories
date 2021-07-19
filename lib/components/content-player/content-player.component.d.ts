import { OnInit, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Type } from '../../models/Type.enum';
import { Story } from '../../models/Story';
export declare class ContentPlayerComponent implements OnInit, OnChanges {
    typeVideo: Type;
    typeImg: Type;
    storyPosition: number;
    currentStory: Story;
    startDate: number;
    currentDate: number;
    timerId: any;
    storyContentWidth: any;
    progressPosition: number;
    isPause: boolean;
    stories: Story[];
    storiesChange: EventEmitter<any>;
    storyContent: ElementRef;
    video: ElementRef;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    loop(story: Story): void;
    checkEndStory(startDate: number): void;
    clickEvent(event: any): void;
    next(): void;
    previous(): void;
    changeProgressionStory(currentStory: number): void;
    onLongPress(): void;
    onLongPressEnd(): void;
    playVideo(): void;
    pauseVideo(): void;
}