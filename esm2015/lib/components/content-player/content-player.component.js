import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Type } from '../../models/Type.enum';
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
export { ContentPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9yeXNoYXJlLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRlbnQtcGxheWVyL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVM5QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQW1CakM7UUFqQkEsY0FBUyxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsWUFBTyxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFPMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdmLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs3QixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7YUFDdEU7UUFDSCxDQUFD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QUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUNELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQTtBQS9IVTtJQUFSLEtBQUssRUFBRTt1REFBa0I7QUFDaEI7SUFBVCxNQUFNLEVBQUU7NkRBQW9DO0FBRWxCO0lBQTFCLFNBQVMsQ0FBQyxjQUFjLENBQUM7NERBQTBCO0FBQ2hDO0lBQW5CLFNBQVMsQ0FBQyxPQUFPLENBQUM7cURBQW1CO0FBakIzQixzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qiwra0JBQThDOztLQUUvQyxDQUFDO0dBQ1csc0JBQXNCLENBNElsQztTQTVJWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9UeXBlLmVudW0nO1xuaW1wb3J0IHsgU3RvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvU3RvcnknO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb250ZW50LXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHR5cGVWaWRlbzogVHlwZSA9IFR5cGUuVmlkZW87XG4gIHR5cGVJbWc6IFR5cGUgPSBUeXBlLkltYWdlO1xuICBzdG9yeVBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICBjdXJyZW50U3Rvcnk6IFN0b3J5O1xuICBzdGFydERhdGU6IG51bWJlcjtcbiAgY3VycmVudERhdGU6IG51bWJlcjtcbiAgdGltZXJJZDtcbiAgc3RvcnlDb250ZW50V2lkdGg7XG4gIHByb2dyZXNzUG9zaXRpb246IG51bWJlcjtcbiAgaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHN0b3JpZXM6IFN0b3J5W107XG4gIEBPdXRwdXQoKSBzdG9yaWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJzdG9yeUNvbnRlbnRcIikgc3RvcnlDb250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwidmlkZW9cIikgdmlkZW86IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKHRoaXMuc3RvcmllcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RvcnkgPSB0aGlzLnN0b3JpZXNbdGhpcy5zdG9yeVBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdG9yeUNvbnRlbnQpO1xuICAgICAgICB0aGlzLnN0b3J5Q29udGVudFdpZHRoID0gdGhpcy5zdG9yeUNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIH0gICAgXG4gICAgfSwgNTApO1xuICAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbG9vcChzdG9yeTogU3RvcnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLnN0b3J5UG9zaXRpb24gPD0gdGhpcy5zdG9yaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRTdG9yeSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRW5kU3Rvcnkoc3RhcnREYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHJlbWFpbmluZ0R1cmF0aW9uID0gdGhpcy5jdXJyZW50RGF0ZSAtIHN0YXJ0RGF0ZTtcbiAgICBpZiAocmVtYWluaW5nRHVyYXRpb24gPiB0aGlzLmN1cnJlbnRTdG9yeS5kdXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuc3RvcnlQb3NpdGlvbiA8IHRoaXMuc3Rvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2dyZXNzUG9zaXRpb24gPSAocmVtYWluaW5nRHVyYXRpb24gKiAxMDApIC8gdGhpcy5jdXJyZW50U3RvcnkuZHVyYXRpb247XG4gICAgICB0aGlzLnN0b3JpZXNbdGhpcy5zdG9yeVBvc2l0aW9uXS5wcm9ncmVzc2lvbiA9IHRoaXMucHJvZ3Jlc3NQb3NpdGlvbjtcbiAgICAgIHRoaXMuc3Rvcmllc0NoYW5nZS5lbWl0KHRoaXMuc3Rvcmllcyk7XG4gICAgfVxuICB9XG4gIGNsaWNrRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIHZhciB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB2YXIgdGllciA9IHRoaXMuc3RvcnlDb250ZW50V2lkdGggLyAzO1xuICAgIGlmICh4IDwgdGllcikge1xuICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgIH1cbiAgICBpZiAoeCA+IHRoaXMuc3RvcnlDb250ZW50V2lkdGggLSB0aWVyKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICBpZiAodGhpcy5zdG9yeVBvc2l0aW9uIDwgdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc3RvcnlQb3NpdGlvbiA9IHRoaXMuc3RvcnlQb3NpdGlvbiArIDE7XG4gICAgICB0aGlzLmN1cnJlbnRTdG9yeSA9IHRoaXMuc3Rvcmllc1t0aGlzLnN0b3J5UG9zaXRpb25dO1xuICAgICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yeVBvc2l0aW9uID0gdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLmN1cnJlbnRTdG9yeSA9IHRoaXMuc3Rvcmllc1t0aGlzLnN0b3J5UG9zaXRpb25dO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVByb2dyZXNzaW9uU3RvcnkodGhpcy5zdG9yeVBvc2l0aW9uKTtcbiAgfVxuXG4gIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB2YXIgcHJldmlvdXNTdG9yeVBvc2l0aW9uID0gdGhpcy5zdG9yeVBvc2l0aW9uO1xuICAgIGlmICh0aGlzLnN0b3J5UG9zaXRpb24gPiAwKSB7XG4gICAgICB0aGlzLnN0b3J5UG9zaXRpb24gPSB0aGlzLnN0b3J5UG9zaXRpb24gLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3J5UG9zaXRpb24gPSAwO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3Npb25TdG9yeSh0aGlzLnN0b3J5UG9zaXRpb24pO1xuICAgIHRoaXMuY3VycmVudFN0b3J5ID0gdGhpcy5zdG9yaWVzW3RoaXMuc3RvcnlQb3NpdGlvbl07XG4gICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgfVxuXG4gIGNoYW5nZVByb2dyZXNzaW9uU3RvcnkoY3VycmVudFN0b3J5OiBudW1iZXIpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0b3JpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoaW5kZXggPCBjdXJyZW50U3RvcnkpIHtcbiAgICAgICAgdGhpcy5zdG9yaWVzW2luZGV4XS5wcm9ncmVzc2lvbiA9IDEwMDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiBjdXJyZW50U3RvcnkpIHtcbiAgICAgICAgdGhpcy5zdG9yaWVzW2luZGV4XS5wcm9ncmVzc2lvbiA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdG9yeSA9PT0gdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnN0b3JpZXNbaW5kZXhdLnByb2dyZXNzaW9uID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3Rvcmllc0NoYW5nZS5lbWl0KHRoaXMuc3Rvcmllcyk7XG4gIH1cblxuICBvbkxvbmdQcmVzcygpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdG9yeS50eXBlID09IHRoaXMudHlwZVZpZGVvKSB7XG4gICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcbiAgICB9XG4gIH1cbiAgb25Mb25nUHJlc3NFbmQoKSB7XG4gICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RvcnkudHlwZSA9PSB0aGlzLnR5cGVWaWRlbykge1xuICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYXlWaWRlbygpIHtcbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICB9XG5cbiAgcGF1c2VWaWRlbygpIHtcbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgfVxufVxuXG4iXX0=