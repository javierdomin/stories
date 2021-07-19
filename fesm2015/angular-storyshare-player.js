import { __decorate } from 'tslib';
import { Input, Component, EventEmitter, Output, ViewChild, HostBinding, HostListener, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

let PlayerVideoComponent = class PlayerVideoComponent {
    constructor() { }
    storiesChange(updateStories) {
        this.stories = updateStories;
    }
};
__decorate([
    Input()
], PlayerVideoComponent.prototype, "stories", void 0);
__decorate([
    Input()
], PlayerVideoComponent.prototype, "user", void 0);
PlayerVideoComponent = __decorate([
    Component({
        selector: 'app-player-stories',
        template: "<div class=\"container\">\n    <div class=\"container-top-player\">\n        <app-progress-wrapper-player class=\"component\" id=\"progress\" [stories]=\"stories\"></app-progress-wrapper-player>\n        <app-header [img]=\"user.img\" [name]=\"user.name\"></app-header>\n    </div>\n    <app-content-player id=\"content-player\" [stories]=\"stories\" (storiesChange)=\"storiesChange($event)\" ></app-content-player>\n</div>\n",
        styles: [".container{width:393.75px;height:700px;margin-top:20px;position:relative}.container-top-player{display:flex;flex-direction:column;margin-top:15px;z-index:1;position:absolute;left:0;top:0;width:100%}"]
    })
], PlayerVideoComponent);

let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], HeaderComponent.prototype, "name", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "img", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        template: "<div class=\"container-header\">\n  <img id=\"logo\" src={{img}}>\n  <p id=\"name\">{{name}}</p>\n</div>\n",
        styles: [".container-header{display:flex;flex-direction:row;align-items:center;margin-top:10px}#logo{height:35px;width:35px;padding:0 10px;border-radius:50%}#name{font-size:14px;color:#fdfdfd;font-family:Arial,Helvetica,sans-serif}"]
    })
], HeaderComponent);

let ProgressWrapperPlayerComponent = class ProgressWrapperPlayerComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ProgressWrapperPlayerComponent.prototype, "stories", void 0);
ProgressWrapperPlayerComponent = __decorate([
    Component({
        selector: 'app-progress-wrapper-player',
        template: "<div class=\"wrapper\">\n  <app-progress-player [width]=\"story.progression\" *ngFor=\"let story of stories\"></app-progress-player>\n</div>\n",
        styles: [".wrapper{display:flex;flex-direction:row;width:100%}app-progress-player{width:100%;margin-left:2px;margin-right:2px}"]
    })
], ProgressWrapperPlayerComponent);

var Type;
(function (Type) {
    Type[Type["Image"] = 0] = "Image";
    Type[Type["Video"] = 1] = "Video";
})(Type || (Type = {}));

let ContentPlayerComponent = class ContentPlayerComponent {
    constructor() {
        this.typeVideo = Type.Video;
        this.typeImg = Type.Image;
        this.storyPosition = 0;
        this.isPause = false;
        this.storiesChange = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        setTimeout(() => {
            if (this.stories !== undefined) {
                this.currentStory = this.stories[this.storyPosition];
                this.loop(this.currentStory);
                console.log(this.storyContent);
                this.storyContentWidth = this.storyContent.nativeElement.offsetWidth;
            }
        }, 50);
    }
    ngAfterViewInit() {
    }
    loop(story) {
        this.startDate = new Date().getTime();
        if (this.storyPosition <= this.stories.length) {
            this.timerId = setInterval(() => {
                if (!this.isPause) {
                    this.checkEndStory(this.startDate);
                }
            }, 1);
        }
    }
    checkEndStory(startDate) {
        this.currentDate = new Date().getTime();
        var remainingDuration = this.currentDate - startDate;
        if (remainingDuration > this.currentStory.duration) {
            if (this.storyPosition < this.stories.length - 1) {
                this.next();
            }
        }
        else {
            this.progressPosition = (remainingDuration * 100) / this.currentStory.duration;
            this.stories[this.storyPosition].progression = this.progressPosition;
            this.storiesChange.emit(this.stories);
        }
    }
    clickEvent(event) {
        var x = event.offsetX;
        var tier = this.storyContentWidth / 3;
        if (x < tier) {
            this.previous();
        }
        if (x > this.storyContentWidth - tier) {
            this.next();
        }
    }
    next() {
        clearInterval(this.timerId);
        if (this.storyPosition < this.stories.length - 1) {
            this.storyPosition = this.storyPosition + 1;
            this.currentStory = this.stories[this.storyPosition];
            this.loop(this.currentStory);
        }
        else {
            this.storyPosition = this.stories.length - 1;
            this.currentStory = this.stories[this.storyPosition];
        }
        this.changeProgressionStory(this.storyPosition);
    }
    previous() {
        clearInterval(this.timerId);
        var previousStoryPosition = this.storyPosition;
        if (this.storyPosition > 0) {
            this.storyPosition = this.storyPosition - 1;
        }
        else {
            this.storyPosition = 0;
        }
        this.changeProgressionStory(this.storyPosition);
        this.currentStory = this.stories[this.storyPosition];
        this.loop(this.currentStory);
    }
    changeProgressionStory(currentStory) {
        for (let index = 0; index < this.stories.length; index++) {
            if (index < currentStory) {
                this.stories[index].progression = 100;
            }
            else if (index > currentStory) {
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
};
__decorate([
    Input()
], ContentPlayerComponent.prototype, "stories", void 0);
__decorate([
    Output()
], ContentPlayerComponent.prototype, "storiesChange", void 0);
__decorate([
    ViewChild("storyContent")
], ContentPlayerComponent.prototype, "storyContent", void 0);
__decorate([
    ViewChild("video")
], ContentPlayerComponent.prototype, "video", void 0);
ContentPlayerComponent = __decorate([
    Component({
        selector: 'app-content-player',
        template: "<div long-press (onLongPress)=\"onLongPress()\" (onLongPressEnd)=\"onLongPressEnd()\" class=\"content\" #storyContent (click)=\"clickEvent($event)\">\n  <video *ngIf=\"currentStory!==undefined && currentStory.type === typeVideo\" width=\"100%\" height=\"100%\" autoplay=\"true\" muted=\"false\" #video>\n    <source src={{currentStory.source}} type=\"video/mp4\">\n    Sorry, your browser doesn't support embedded videos.\n  </video>\n  <img *ngIf=\"currentStory!==undefined && currentStory.type === typeImg\" width=\"100%\" height=\"100%\" src={{currentStory.source}}>\n</div>\n",
        styles: [".content{height:100%;width:100%}"]
    })
], ContentPlayerComponent);

let ProgressPlayerComponent = class ProgressPlayerComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ProgressPlayerComponent.prototype, "width", void 0);
ProgressPlayerComponent = __decorate([
    Component({
        selector: 'app-progress-player',
        template: "<div class=\"progress-bar first\">\n  <div [ngStyle]=\"{'width.%':width}\" class=\"progress-bar second\">\n  </div>\n</div>",
        styles: [".first{width:100%;background-color:#eee}.second{background-color:#b5c0c4}.progress-bar{border-radius:16px;height:2px}"]
    })
], ProgressPlayerComponent);

let LongPressDirective = class LongPressDirective {
    constructor() {
        this.duration = 500;
        this.onLongPress = new EventEmitter();
        this.onLongPressing = new EventEmitter();
        this.onLongPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() { return this.pressing; }
    get longPress() { return this.longPressing; }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1)
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.longPressing = false;
        this.timeout = setTimeout(() => {
            this.longPressing = true;
            this.onLongPress.emit(event);
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.longPressing) {
            const xThres = (event.clientX - this.mouseX) > 10;
            const yThres = (event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.longPressing) {
            this.timeout = setTimeout(() => {
                this.onLongPressing.emit(event);
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.longPressing = false;
        this.pressing = false;
        this.onLongPressEnd.emit(true);
    }
    onMouseUp() { this.endPress(); }
};
__decorate([
    Input()
], LongPressDirective.prototype, "duration", void 0);
__decorate([
    Output()
], LongPressDirective.prototype, "onLongPress", void 0);
__decorate([
    Output()
], LongPressDirective.prototype, "onLongPressing", void 0);
__decorate([
    Output()
], LongPressDirective.prototype, "onLongPressEnd", void 0);
__decorate([
    HostBinding('class.press')
], LongPressDirective.prototype, "press", null);
__decorate([
    HostBinding('class.longpress')
], LongPressDirective.prototype, "longPress", null);
__decorate([
    HostListener('mousedown', ['$event'])
], LongPressDirective.prototype, "onMouseDown", null);
__decorate([
    HostListener('mousemove', ['$event'])
], LongPressDirective.prototype, "onMouseMove", null);
__decorate([
    HostListener('mouseup')
], LongPressDirective.prototype, "onMouseUp", null);
LongPressDirective = __decorate([
    Directive({ selector: '[long-press]' })
], LongPressDirective);

let PlayerVideoModule = class PlayerVideoModule {
};
PlayerVideoModule = __decorate([
    NgModule({
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
        exports: [
            PlayerVideoComponent,
        ],
    })
], PlayerVideoModule);

class User {
}

/*
 * Public API Surface of angular-storyshare-player-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PlayerVideoComponent, PlayerVideoModule, Type, User, ContentPlayerComponent as ɵa, ProgressWrapperPlayerComponent as ɵb, ProgressPlayerComponent as ɵc, LongPressDirective as ɵd, HeaderComponent as ɵe };
//# sourceMappingURL=angular-storyshare-player.js.map
