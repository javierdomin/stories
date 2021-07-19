import { EventEmitter } from '@angular/core';
export declare class LongPressDirective {
    duration: number;
    onLongPress: EventEmitter<any>;
    onLongPressing: EventEmitter<any>;
    onLongPressEnd: EventEmitter<any>;
    private pressing;
    private longPressing;
    private timeout;
    private mouseX;
    private mouseY;
    get press(): boolean;
    get longPress(): boolean;
    onMouseDown(event: any): void;
    onMouseMove(event: any): void;
    loop(event: any): void;
    endPress(): void;
    onMouseUp(): void;
}
