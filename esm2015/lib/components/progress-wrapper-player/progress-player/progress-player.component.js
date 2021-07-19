import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { ProgressPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy13cmFwcGVyLXBsYXllci9wcm9ncmVzcy1wbGF5ZXIvcHJvZ3Jlc3MtcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFJbEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBUFU7SUFBUixLQUFLLEVBQUU7c0RBQVk7QUFGVCx1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQix1SUFBK0M7O0tBRWhELENBQUM7R0FDVyx1QkFBdUIsQ0FTbkM7U0FUWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2dyZXNzLXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1wbGF5ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzUGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB3aWR0aDogYW55O1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59Il19