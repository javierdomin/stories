import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var PlayerVideoComponent = /** @class */ (function () {
    function PlayerVideoComponent() {
    }
    PlayerVideoComponent.prototype.storiesChange = function (updateStories) {
        this.stories = updateStories;
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
    return PlayerVideoComponent;
}());
export { PlayerVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZGVvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvcGxheWVyLXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXekQ7SUFTRTtJQUFnQixDQUFDO0lBSmpCLDRDQUFhLEdBQWIsVUFBYyxhQUFzQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7eURBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3NEQUFZO0lBSFQsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIscWJBQTRDOztTQUU3QyxDQUFDO09BQ1csb0JBQW9CLENBWWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3J5IH0gZnJvbSAnLi9tb2RlbHMvU3RvcnknO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJy4vbW9kZWxzL1R5cGUuZW51bSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2RlbHMvVXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wbGF5ZXItc3RvcmllcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXItdmlkZW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wbGF5ZXItdmlkZW8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllclZpZGVvQ29tcG9uZW50IHtcbiAgXG4gIEBJbnB1dCgpIHN0b3JpZXM6IFN0b3J5W107XG4gIEBJbnB1dCgpIHVzZXI6IFVzZXI7XG4gIFxuICBzdG9yaWVzQ2hhbmdlKHVwZGF0ZVN0b3JpZXM6IFN0b3J5W10pe1xuICAgIHRoaXMuc3RvcmllcyA9IHVwZGF0ZVN0b3JpZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIFxufVxuIl19