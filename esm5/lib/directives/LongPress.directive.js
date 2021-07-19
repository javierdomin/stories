import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        this.duration = 500;
        this.onLongPress = new EventEmitter();
        this.onLongPressing = new EventEmitter();
        this.onLongPressEnd = new EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: function () { return this.pressing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "longPress", {
        get: function () { return this.longPressing; },
        enumerable: true,
        configurable: true
    });
    LongPressDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1)
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.longPressing = false;
        this.timeout = setTimeout(function () {
            _this.longPressing = true;
            _this.onLongPress.emit(event);
            _this.loop(event);
        }, this.duration);
        this.loop(event);
    };
    LongPressDirective.prototype.onMouseMove = function (event) {
        if (this.pressing && !this.longPressing) {
            var xThres = (event.clientX - this.mouseX) > 10;
            var yThres = (event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    LongPressDirective.prototype.loop = function (event) {
        var _this = this;
        if (this.longPressing) {
            this.timeout = setTimeout(function () {
                _this.onLongPressing.emit(event);
                _this.loop(event);
            }, 50);
        }
    };
    LongPressDirective.prototype.endPress = function () {
        clearTimeout(this.timeout);
        this.longPressing = false;
        this.pressing = false;
        this.onLongPressEnd.emit(true);
    };
    LongPressDirective.prototype.onMouseUp = function () { this.endPress(); };
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
    return LongPressDirective;
}());
export { LongPressDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9uZ1ByZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9Mb25nUHJlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFHdkI7SUFBQTtRQUVXLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFFdEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLekQsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBMEQ3QixDQUFDO0lBdkRDLHNCQUFJLHFDQUFLO2FBQVQsY0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUdyQyxzQkFBSSx5Q0FBUzthQUFiLGNBQWtCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRzdDLHdDQUFXLEdBQVgsVUFBWSxLQUFLO1FBRGpCLGlCQWtCQztRQWhCQywrQkFBK0I7UUFDL0IsSUFBRyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDeEIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUdELHdDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QyxJQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRCxJQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRCxJQUFHLE1BQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtTQUNGO0lBQ0gsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxLQUFLO1FBQVYsaUJBT0M7UUFOQyxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRCxzQ0FBUyxHQUFULGNBQWMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQWxFdkI7UUFBUixLQUFLLEVBQUU7d0RBQXdCO0lBRXRCO1FBQVQsTUFBTSxFQUFFOzJEQUFxRDtJQUNwRDtRQUFULE1BQU0sRUFBRTs4REFBd0Q7SUFDdkQ7UUFBVCxNQUFNLEVBQUU7OERBQXdEO0lBU2pFO1FBREMsV0FBVyxDQUFDLGFBQWEsQ0FBQzttREFDVTtJQUdyQztRQURDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt1REFDYztJQUc3QztRQURDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5REFrQnJDO0lBR0Q7UUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7eURBU3JDO0lBbUJEO1FBREMsWUFBWSxDQUFDLFNBQVMsQ0FBQzt1REFDUTtJQXBFckIsa0JBQWtCO1FBRDlCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQztPQUMzQixrQkFBa0IsQ0FzRTlCO0lBQUQseUJBQUM7Q0FBQSxBQXRFRCxJQXNFQztTQXRFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2xvbmctcHJlc3NdJyB9KVxuZXhwb3J0IGNsYXNzIExvbmdQcmVzc0RpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlciA9IDUwMDtcblxuICBAT3V0cHV0KCkgb25Mb25nUHJlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Mb25nUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Mb25nUHJlc3NFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgcHJlc3Npbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgbG9uZ1ByZXNzaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBtb3VzZVg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgbW91c2VZOiBudW1iZXIgPSAwO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJlc3MnKVxuICBnZXQgcHJlc3MoKSB7IHJldHVybiB0aGlzLnByZXNzaW5nOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb25ncHJlc3MnKVxuICBnZXQgbG9uZ1ByZXNzKCkgeyByZXR1cm4gdGhpcy5sb25nUHJlc3Npbmc7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGRvbid0IGRvIHJpZ2h0L21pZGRsZSBjbGlja3NcbiAgICBpZihldmVudC53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5tb3VzZVggPSBldmVudC5jbGllbnRYO1xuICAgIHRoaXMubW91c2VZID0gZXZlbnQuY2xpZW50WTtcblxuICAgIHRoaXMucHJlc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9uZ1ByZXNzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9uZ1ByZXNzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Mb25nUHJlc3MuZW1pdChldmVudCk7XG4gICAgICB0aGlzLmxvb3AoZXZlbnQpO1xuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYodGhpcy5wcmVzc2luZyAmJiAhdGhpcy5sb25nUHJlc3NpbmcpIHtcbiAgICAgIGNvbnN0IHhUaHJlcyA9IChldmVudC5jbGllbnRYIC0gdGhpcy5tb3VzZVgpID4gMTA7XG4gICAgICBjb25zdCB5VGhyZXMgPSAoZXZlbnQuY2xpZW50WSAtIHRoaXMubW91c2VZKSA+IDEwO1xuICAgICAgaWYoeFRocmVzIHx8IHlUaHJlcykge1xuICAgICAgICB0aGlzLmVuZFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9vcChldmVudCkge1xuICAgIGlmKHRoaXMubG9uZ1ByZXNzaW5nKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkxvbmdQcmVzc2luZy5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5sb29wKGV2ZW50KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH1cblxuICBlbmRQcmVzcygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLmxvbmdQcmVzc2luZyA9IGZhbHNlO1xuICAgIHRoaXMucHJlc3NpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9uTG9uZ1ByZXNzRW5kLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJylcbiAgb25Nb3VzZVVwKCkgeyB0aGlzLmVuZFByZXNzKCk7IH1cblxufSJdfQ==