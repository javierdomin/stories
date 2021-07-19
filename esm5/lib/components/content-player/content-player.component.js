import { __decorate } from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Type } from '../../models/Type.enum';
var ContentPlayerComponent = /** @class */ (function () {
    function ContentPlayerComponent() {
        this.typeVideo = Type.Video;
        this.typeImg = Type.Image;
        this.storyPosition = 0;
        this.isPause = false;
        this.storiesChange = new EventEmitter();
    }
    ContentPlayerComponent.prototype.ngOnInit = function () {
    };
    ContentPlayerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        setTimeout(function () {
            if (_this.stories !== undefined) {
                _this.currentStory = _this.stories[_this.storyPosition];
                _this.loop(_this.currentStory);
                console.log(_this.storyContent);
                _this.storyContentWidth = _this.storyContent.nativeElement.offsetWidth;
            }
        }, 50);
    };
    ContentPlayerComponent.prototype.ngAfterViewInit = function () {
    };
    ContentPlayerComponent.prototype.loop = function (story) {
        var _this = this;
        this.startDate = new Date().getTime();
        if (this.storyPosition <= this.stories.length) {
            this.timerId = setInterval(function () {
                if (!_this.isPause) {
                    _this.checkEndStory(_this.startDate);
                }
            }, 1);
        }
    };
    ContentPlayerComponent.prototype.checkEndStory = function (startDate) {
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
    };
    ContentPlayerComponent.prototype.clickEvent = function (event) {
        var x = event.offsetX;
        var tier = this.storyContentWidth / 3;
        if (x < tier) {
            this.previous();
        }
        if (x > this.storyContentWidth - tier) {
            this.next();
        }
    };
    ContentPlayerComponent.prototype.next = function () {
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
    };
    ContentPlayerComponent.prototype.previous = function () {
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
    };
    ContentPlayerComponent.prototype.changeProgressionStory = function (currentStory) {
        for (var index = 0; index < this.stories.length; index++) {
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
    };
    ContentPlayerComponent.prototype.onLongPress = function () {
        this.isPause = true;
        if (this.currentStory.type == this.typeVideo) {
            this.pauseVideo();
        }
    };
    ContentPlayerComponent.prototype.onLongPressEnd = function () {
        if (this.isPause) {
            this.isPause = false;
            if (this.currentStory.type == this.typeVideo) {
                this.playVideo();
            }
        }
    };
    ContentPlayerComponent.prototype.playVideo = function () {
        this.video.nativeElement.play();
    };
    ContentPlayerComponent.prototype.pauseVideo = function () {
        this.video.nativeElement.pause();
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
    return ContentPlayerComponent;
}());
export { ContentPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9yeXNoYXJlLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRlbnQtcGxheWVyL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVM5QztJQW1CRTtRQWpCQSxjQUFTLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQU8xQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2Ysa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSzdCLENBQUM7SUFFakIseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBVUM7UUFUQyxVQUFVLENBQUM7WUFDVCxJQUFHLEtBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFDO2dCQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7YUFDdEU7UUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENB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SUFDeEMsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUNELCtDQUFjLEdBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBOUhRO1FBQVIsS0FBSyxFQUFFOzJEQUFrQjtJQUNoQjtRQUFULE1BQU0sRUFBRTtpRUFBb0M7SUFFbEI7UUFBMUIsU0FBUyxDQUFDLGNBQWMsQ0FBQztnRUFBMEI7SUFDaEM7UUFBbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQzt5REFBbUI7SUFqQjNCLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLCtrQkFBOEM7O1NBRS9DLENBQUM7T0FDVyxzQkFBc0IsQ0E0SWxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVJRCxJQTRJQztTQTVJWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9UeXBlLmVudW0nO1xuaW1wb3J0IHsgU3RvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvU3RvcnknO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb250ZW50LXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlbnQtcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHR5cGVWaWRlbzogVHlwZSA9IFR5cGUuVmlkZW87XG4gIHR5cGVJbWc6IFR5cGUgPSBUeXBlLkltYWdlO1xuICBzdG9yeVBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICBjdXJyZW50U3Rvcnk6IFN0b3J5O1xuICBzdGFydERhdGU6IG51bWJlcjtcbiAgY3VycmVudERhdGU6IG51bWJlcjtcbiAgdGltZXJJZDtcbiAgc3RvcnlDb250ZW50V2lkdGg7XG4gIHByb2dyZXNzUG9zaXRpb246IG51bWJlcjtcbiAgaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHN0b3JpZXM6IFN0b3J5W107XG4gIEBPdXRwdXQoKSBzdG9yaWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJzdG9yeUNvbnRlbnRcIikgc3RvcnlDb250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwidmlkZW9cIikgdmlkZW86IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmKHRoaXMuc3RvcmllcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RvcnkgPSB0aGlzLnN0b3JpZXNbdGhpcy5zdG9yeVBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdG9yeUNvbnRlbnQpO1xuICAgICAgICB0aGlzLnN0b3J5Q29udGVudFdpZHRoID0gdGhpcy5zdG9yeUNvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIH0gICAgXG4gICAgfSwgNTApO1xuICAgIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICB9XG5cbiAgbG9vcChzdG9yeTogU3RvcnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLnN0b3J5UG9zaXRpb24gPD0gdGhpcy5zdG9yaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tFbmRTdG9yeSh0aGlzLnN0YXJ0RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRW5kU3Rvcnkoc3RhcnREYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHJlbWFpbmluZ0R1cmF0aW9uID0gdGhpcy5jdXJyZW50RGF0ZSAtIHN0YXJ0RGF0ZTtcbiAgICBpZiAocmVtYWluaW5nRHVyYXRpb24gPiB0aGlzLmN1cnJlbnRTdG9yeS5kdXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuc3RvcnlQb3NpdGlvbiA8IHRoaXMuc3Rvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2dyZXNzUG9zaXRpb24gPSAocmVtYWluaW5nRHVyYXRpb24gKiAxMDApIC8gdGhpcy5jdXJyZW50U3RvcnkuZHVyYXRpb247XG4gICAgICB0aGlzLnN0b3JpZXNbdGhpcy5zdG9yeVBvc2l0aW9uXS5wcm9ncmVzc2lvbiA9IHRoaXMucHJvZ3Jlc3NQb3NpdGlvbjtcbiAgICAgIHRoaXMuc3Rvcmllc0NoYW5nZS5lbWl0KHRoaXMuc3Rvcmllcyk7XG4gICAgfVxuICB9XG4gIGNsaWNrRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIHZhciB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB2YXIgdGllciA9IHRoaXMuc3RvcnlDb250ZW50V2lkdGggLyAzO1xuICAgIGlmICh4IDwgdGllcikge1xuICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgIH1cbiAgICBpZiAoeCA+IHRoaXMuc3RvcnlDb250ZW50V2lkdGggLSB0aWVyKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICBpZiAodGhpcy5zdG9yeVBvc2l0aW9uIDwgdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc3RvcnlQb3NpdGlvbiA9IHRoaXMuc3RvcnlQb3NpdGlvbiArIDE7XG4gICAgICB0aGlzLmN1cnJlbnRTdG9yeSA9IHRoaXMuc3Rvcmllc1t0aGlzLnN0b3J5UG9zaXRpb25dO1xuICAgICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yeVBvc2l0aW9uID0gdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLmN1cnJlbnRTdG9yeSA9IHRoaXMuc3Rvcmllc1t0aGlzLnN0b3J5UG9zaXRpb25dO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVByb2dyZXNzaW9uU3RvcnkodGhpcy5zdG9yeVBvc2l0aW9uKTtcbiAgfVxuXG4gIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB2YXIgcHJldmlvdXNTdG9yeVBvc2l0aW9uID0gdGhpcy5zdG9yeVBvc2l0aW9uO1xuICAgIGlmICh0aGlzLnN0b3J5UG9zaXRpb24gPiAwKSB7XG4gICAgICB0aGlzLnN0b3J5UG9zaXRpb24gPSB0aGlzLnN0b3J5UG9zaXRpb24gLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3J5UG9zaXRpb24gPSAwO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3Npb25TdG9yeSh0aGlzLnN0b3J5UG9zaXRpb24pO1xuICAgIHRoaXMuY3VycmVudFN0b3J5ID0gdGhpcy5zdG9yaWVzW3RoaXMuc3RvcnlQb3NpdGlvbl07XG4gICAgdGhpcy5sb29wKHRoaXMuY3VycmVudFN0b3J5KTtcbiAgfVxuXG4gIGNoYW5nZVByb2dyZXNzaW9uU3RvcnkoY3VycmVudFN0b3J5OiBudW1iZXIpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0b3JpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoaW5kZXggPCBjdXJyZW50U3RvcnkpIHtcbiAgICAgICAgdGhpcy5zdG9yaWVzW2luZGV4XS5wcm9ncmVzc2lvbiA9IDEwMDtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiBjdXJyZW50U3RvcnkpIHtcbiAgICAgICAgdGhpcy5zdG9yaWVzW2luZGV4XS5wcm9ncmVzc2lvbiA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdG9yeSA9PT0gdGhpcy5zdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnN0b3JpZXNbaW5kZXhdLnByb2dyZXNzaW9uID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3Rvcmllc0NoYW5nZS5lbWl0KHRoaXMuc3Rvcmllcyk7XG4gIH1cblxuICBvbkxvbmdQcmVzcygpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdG9yeS50eXBlID09IHRoaXMudHlwZVZpZGVvKSB7XG4gICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcbiAgICB9XG4gIH1cbiAgb25Mb25nUHJlc3NFbmQoKSB7XG4gICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RvcnkudHlwZSA9PSB0aGlzLnR5cGVWaWRlbykge1xuICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYXlWaWRlbygpIHtcbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICB9XG5cbiAgcGF1c2VWaWRlbygpIHtcbiAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQucGF1c2UoKTtcbiAgfVxufVxuXG4iXX0=