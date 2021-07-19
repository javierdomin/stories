import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var ProgressPlayerComponent = /** @class */ (function () {
    function ProgressPlayerComponent() {
    }
    ProgressPlayerComponent.prototype.ngOnInit = function () {
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
    return ProgressPlayerComponent;
}());
export { ProgressPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy13cmFwcGVyLXBsYXllci9wcm9ncmVzcy1wbGF5ZXIvcHJvZ3Jlc3MtcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJRTtJQUFnQixDQUFDO0lBRWpCLDBDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7MERBQVk7SUFGVCx1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQix1SUFBK0M7O1NBRWhELENBQUM7T0FDVyx1QkFBdUIsQ0FTbkM7SUFBRCw4QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZ3Jlc3MtcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLXBsYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHdpZHRoOiBhbnk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn0iXX0=