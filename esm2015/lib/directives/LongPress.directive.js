import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
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
export { LongPressDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9uZ1ByZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9Mb25nUHJlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFHdkIsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFBL0I7UUFFVyxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXRCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3pELFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFXLENBQUMsQ0FBQztJQTBEN0IsQ0FBQztJQXZEQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBR3JDLElBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFHN0MsV0FBVyxDQUFDLEtBQUs7UUFDZiwrQkFBK0I7UUFDL0IsSUFBRyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFHRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBRyxNQUFNLElBQUksTUFBTSxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsS0FBSztRQUNSLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxTQUFTLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUVqQyxDQUFBO0FBcEVVO0lBQVIsS0FBSyxFQUFFO29EQUF3QjtBQUV0QjtJQUFULE1BQU0sRUFBRTt1REFBcUQ7QUFDcEQ7SUFBVCxNQUFNLEVBQUU7MERBQXdEO0FBQ3ZEO0lBQVQsTUFBTSxFQUFFOzBEQUF3RDtBQVNqRTtJQURDLFdBQVcsQ0FBQyxhQUFhLENBQUM7K0NBQ1U7QUFHckM7SUFEQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7bURBQ2M7QUFHN0M7SUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBa0JyQztBQUdEO0lBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQVNyQztBQW1CRDtJQURDLFlBQVksQ0FBQyxTQUFTLENBQUM7bURBQ1E7QUFwRXJCLGtCQUFrQjtJQUQ5QixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUM7R0FDM0Isa0JBQWtCLENBc0U5QjtTQXRFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvbmctcHJlc3NdJyB9KVxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc0RpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDUwMDtcblxuICBAT3V0cHV0KCkgb25Mb25nUHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Mb25nUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Mb25nUHJlc3NFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgcHJlc3Npbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgbG9uZ1ByZXNzaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBtb3VzZVg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbW91c2VZOiBudW1iZXIgPSAwO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJlc3MnKVxuICBnZXQgcHJlc3MoKSB7IHJldHVybiB0aGlzLnByZXNzaW5nOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb25ncHJlc3MnKVxuICBnZXQgbG9uZ1ByZXNzKCkgeyByZXR1cm4gdGhpcy5sb25nUHJlc3Npbmc7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGRvbid0IGRvIHJpZ2h0L21pZGRsZSBjbGlja3NcbiAgICBpZihldmVudC53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5tb3VzZVggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMubW91c2VZID0gZXZlbnQuY2xpZW50WTtcblxuICAgIHRoaXMucHJlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9uZ1ByZXNzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9uZ1ByZXNzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Mb25nUHJlc3MuZW1pdChldmVudCk7XG4gICAgICB0aGlzLmxvb3AoZXZlbnQpO1xuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYodGhpcy5wcmVzc2luZyAmJiAhdGhpcy5sb25nUHJlc3NpbmcpIHtcbiAgICAgIGNvbnN0IHhUaHJlcyA9IChldmVudC5jbGllbnRYIC0gdGhpcy5tb3VzZVgpID4gMTA7XG4gICAgICBjb25zdCB5VGhyZXMgPSAoZXZlbnQuY2xpZW50WSAtIHRoaXMubW91c2VZKSA+IDEwO1xuICAgICAgaWYoeFRocmVzIHx8IHlUaHJlcykge1xuICAgICAgICB0aGlzLmVuZFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9vcChldmVudCkge1xuICAgIGlmKHRoaXMubG9uZ1ByZXNzaW5nKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkxvbmdQcmVzc2luZy5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH1cblxuICBlbmRQcmVzcygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLmxvbmdQcmVzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucHJlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9uTG9uZ1ByZXNzRW5kLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJylcbiAgb25Nb3VzZVVwKCkgeyB0aGlzLmVuZFByZXNzKCk7IH1cblxufSJdfQ==