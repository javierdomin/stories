import { __decorate } from "tslib";
import { HeaderComponent } from './components/header/header.component';
import { ProgressWrapperPlayerComponent } from './components/progress-wrapper-player/progress-wrapper-player.component';
import { ContentPlayerComponent } from './components/content-player/content-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerVideoComponent } from './player-video.component';
import { ProgressPlayerComponent } from './components/progress-wrapper-player/progress-player/progress-player.component';
import { HttpClientModule } from '@angular/common/http';
import { LongPressDirective } from './directives/LongPress.directive';
var PlayerVideoModule = /** @class */ (function () {
    function PlayerVideoModule() {
    }
    PlayerVideoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule
            ],
            providers: [],
            declarations: [
                PlayerVideoComponent,
                ContentPlayerComponent,
                ProgressWrapperPlayerComponent,
                ProgressPlayerComponent,
                LongPressDirective,
                HeaderComponent
            ],
            exports: [
                PlayerVideoComponent,
            ],
        })
    ], PlayerVideoModule);
    return PlayerVideoModule;
}());
export { PlayerVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZGVvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvcGxheWVyLXZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBdUJ0RTtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBbEI3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRTtnQkFDWixvQkFBb0I7Z0JBQ3BCLHNCQUFzQjtnQkFDdEIsOEJBQThCO2dCQUM5Qix1QkFBdUI7Z0JBQ3ZCLGtCQUFrQjtnQkFDbEIsZUFBZTthQUNoQjtZQUNELE9BQU8sRUFBQztnQkFDTixvQkFBb0I7YUFDckI7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc1dyYXBwZXJQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIvcHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC1wbGF5ZXIvY29udGVudC1wbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGxheWVyVmlkZW9Db21wb25lbnQgfSBmcm9tICcuL3BsYXllci12aWRlby5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3Jlc3Mtd3JhcHBlci1wbGF5ZXIvcHJvZ3Jlc3MtcGxheWVyL3Byb2dyZXNzLXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvbmdQcmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9Mb25nUHJlc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IFN0b3J5IH0gZnJvbSAnLi9tb2RlbHMvU3RvcnknO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJy4vbW9kZWxzL1R5cGUuZW51bSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQbGF5ZXJWaWRlb0NvbXBvbmVudCxcbiAgICBDb250ZW50UGxheWVyQ29tcG9uZW50LFxuICAgIFByb2dyZXNzV3JhcHBlclBsYXllckNvbXBvbmVudCxcbiAgICBQcm9ncmVzc1BsYXllckNvbXBvbmVudCxcbiAgICBMb25nUHJlc3NEaXJlY3RpdmUsXG4gICAgSGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6W1xuICAgIFBsYXllclZpZGVvQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJWaWRlb01vZHVsZSB7IH1cblxuIl19