import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { PlayerVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZGVvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvcGxheWVyLXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXekQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFTL0IsZ0JBQWdCLENBQUM7SUFKakIsYUFBYSxDQUFDLGFBQXNCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0lBQy9CLENBQUM7Q0FLRixDQUFBO0FBVlU7SUFBUixLQUFLLEVBQUU7cURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO2tEQUFZO0FBSFQsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIscWJBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBWWhDO1NBWlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4vbW9kZWxzL1N0b3J5JztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICcuL21vZGVscy9UeXBlLmVudW0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbW9kZWxzL1VzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGxheWVyLXN0b3JpZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxheWVyLXZpZGVvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGxheWVyLXZpZGVvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJWaWRlb0NvbXBvbmVudCB7XG4gIFxuICBASW5wdXQoKSBzdG9yaWVzOiBTdG9yeVtdO1xuICBASW5wdXQoKSB1c2VyOiBVc2VyO1xuICBcbiAgc3Rvcmllc0NoYW5nZSh1cGRhdGVTdG9yaWVzOiBTdG9yeVtdKXtcbiAgICB0aGlzLnN0b3JpZXMgPSB1cGRhdGVTdG9yaWVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBcbn1cbiJdfQ==