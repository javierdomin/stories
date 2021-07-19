import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { ProgressWrapperPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdG9yeXNoYXJlLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRekQsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFHekMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBUFU7SUFBUixLQUFLLEVBQUU7K0RBQWtCO0FBRGYsOEJBQThCO0lBTDFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsMEpBQXVEOztLQUV4RCxDQUFDO0dBQ1csOEJBQThCLENBUTFDO1NBUlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4uLy4uL21vZGVscy9TdG9yeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9ncmVzcy13cmFwcGVyLXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy13cmFwcGVyLXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLXdyYXBwZXItcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1dyYXBwZXJQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzdG9yaWVzOiBTdG9yeVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19