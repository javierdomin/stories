import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], HeaderComponent.prototype, "name", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "img", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        template: "<div class=\"container-header\">\n  <img id=\"logo\" src={{img}}>\n  <p id=\"name\">{{name}}</p>\n</div>\n",
        styles: [".container-header{display:flex;flex-direction:row;align-items:center;margin-top:10px}#logo{height:35px;width:35px;padding:0 10px;border-radius:50%}#name{font-size:14px;color:#fdfdfd;font-family:Arial,Helvetica,sans-serif}"]
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUsxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs2Q0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzRDQUFhO0FBSFYsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixzSEFBc0M7O0tBRXZDLENBQUM7R0FDVyxlQUFlLENBVTNCO1NBVlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltZzogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=