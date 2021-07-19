import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var ProgressWrapperPlayerComponent = /** @class */ (function () {
    function ProgressWrapperPlayerComponent() {
    }
    ProgressWrapperPlayerComponent.prototype.ngOnInit = function () {
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
    return ProgressWrapperPlayerComponent;
}());
export { ProgressWrapperPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9yeXNoYXJlLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRekQ7SUFHRTtJQUFnQixDQUFDO0lBRWpCLGlEQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7bUVBQWtCO0lBRGYsOEJBQThCO1FBTDFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsMEpBQXVEOztTQUV4RCxDQUFDO09BQ1csOEJBQThCLENBUTFDO0lBQUQscUNBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL1N0b3J5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2dyZXNzLXdyYXBwZXItcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzV3JhcHBlclBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHN0b3JpZXM6IFN0b3J5W107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=