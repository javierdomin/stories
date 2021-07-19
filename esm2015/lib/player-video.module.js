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
let PlayerVideoModule = class PlayerVideoModule {
};
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
export { PlayerVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZGVvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3RvcnlzaGFyZS1wbGF5ZXIvIiwic291cmNlcyI6WyJsaWIvcGxheWVyLXZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBdUJ0RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUFJLENBQUE7QUFBckIsaUJBQWlCO0lBbEI3QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixZQUFZLEVBQUU7WUFDWixvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLDhCQUE4QjtZQUM5Qix1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLGVBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUM7WUFDTixvQkFBb0I7U0FDckI7S0FDRixDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2dyZXNzV3JhcHBlclBsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy13cmFwcGVyLXBsYXllci9wcm9ncmVzcy13cmFwcGVyLXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFBsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LXBsYXllci9jb250ZW50LXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQbGF5ZXJWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vcGxheWVyLXZpZGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc1BsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy13cmFwcGVyLXBsYXllci9wcm9ncmVzcy1wbGF5ZXIvcHJvZ3Jlc3MtcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9uZ1ByZXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL0xvbmdQcmVzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgU3RvcnkgfSBmcm9tICcuL21vZGVscy9TdG9yeSc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnLi9tb2RlbHMvVHlwZS5lbnVtJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBsYXllclZpZGVvQ29tcG9uZW50LFxuICAgIENvbnRlbnRQbGF5ZXJDb21wb25lbnQsXG4gICAgUHJvZ3Jlc3NXcmFwcGVyUGxheWVyQ29tcG9uZW50LFxuICAgIFByb2dyZXNzUGxheWVyQ29tcG9uZW50LFxuICAgIExvbmdQcmVzc0RpcmVjdGl2ZSxcbiAgICBIZWFkZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czpbXG4gICAgUGxheWVyVmlkZW9Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllclZpZGVvTW9kdWxlIHsgfVxuXG4iXX0=