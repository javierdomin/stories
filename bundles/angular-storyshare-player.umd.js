(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('angular-storyshare-player', ['exports', '@angular/core', '@angular/common', '@angular/common/http'], factory) :
    (global = global || self, factory(global['angular-storyshare-player'] = {}, global.ng.core, global.ng.common, global.ng.common.http));
}(this, (function (exports, core, common, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var PlayerVideoComponent = /** @class */ (function () {
        function PlayerVideoComponent() {
        }
        PlayerVideoComponent.prototype.storiesChange = function (updateStories) {
            this.stories = updateStories;
        };
        __decorate([
            core.Input()
        ], PlayerVideoComponent.prototype, "stories", void 0);
        __decorate([
            core.Input()
        ], PlayerVideoComponent.prototype, "user", void 0);
        PlayerVideoComponent = __decorate([
            core.Component({
                selector: 'app-player-stories',
                template: "<div class=\"container\">\n    <div class=\"container-top-player\">\n        <app-progress-wrapper-player class=\"component\" id=\"progress\" [stories]=\"stories\"></app-progress-wrapper-player>\n        <app-header [img]=\"user.img\" [name]=\"user.name\"></app-header>\n    </div>\n    <app-content-player id=\"content-player\" [stories]=\"stories\" (storiesChange)=\"storiesChange($event)\" ></app-content-player>\n</div>\n",
                styles: [".container{width:393.75px;height:700px;margin-top:20px;position:relative}.container-top-player{display:flex;flex-direction:column;margin-top:15px;z-index:1;position:absolute;left:0;top:0;width:100%}"]
            })
        ], PlayerVideoComponent);
        return PlayerVideoComponent;
    }());

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        HeaderComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "img", void 0);
        HeaderComponent = __decorate([
            core.Component({
                selector: 'app-header',
                template: "<div class=\"container-header\">\n  <img id=\"logo\" src={{img}}>\n  <p id=\"name\">{{name}}</p>\n</div>\n",
                styles: [".container-header{display:flex;flex-direction:row;align-items:center;margin-top:10px}#logo{height:35px;width:35px;padding:0 10px;border-radius:50%}#name{font-size:14px;color:#fdfdfd;font-family:Arial,Helvetica,sans-serif}"]
            })
        ], HeaderComponent);
        return HeaderComponent;
    }());

    var ProgressWrapperPlayerComponent = /** @class */ (function () {
        function ProgressWrapperPlayerComponent() {
        }
        ProgressWrapperPlayerComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], ProgressWrapperPlayerComponent.prototype, "stories", void 0);
        ProgressWrapperPlayerComponent = __decorate([
            core.Component({
                selector: 'app-progress-wrapper-player',
                template: "<div class=\"wrapper\">\n  <app-progress-player [width]=\"story.progression\" *ngFor=\"let story of stories\"></app-progress-player>\n</div>\n",
                styles: [".wrapper{display:flex;flex-direction:row;width:100%}app-progress-player{width:100%;margin-left:2px;margin-right:2px}"]
            })
        ], ProgressWrapperPlayerComponent);
        return ProgressWrapperPlayerComponent;
    }());


    (function (Type) {
        Type[Type["Image"] = 0] = "Image";
        Type[Type["Video"] = 1] = "Video";
    })(exports.Type || (exports.Type = {}));

    var ContentPlayerComponent = /** @class */ (function () {
        function ContentPlayerComponent() {
            this.typeVideo = exports.Type.Video;
            this.typeImg = exports.Type.Image;
            this.storyPosition = 0;
            this.isPause = false;
            this.storiesChange = new core.EventEmitter();
        }
        ContentPlayerComponent.prototype.ngOnInit = function () {
        };
        ContentPlayerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            setTimeout(function () {
                if (_this.stories !== undefined) {
                    _this.currentStory = _this.stories[_this.storyPosition];
                    _this.loop(_this.currentStory);
                    console.log(_this.storyContent);
                    _this.storyContentWidth = _this.storyContent.nativeElement.offsetWidth;
                }
            }, 50);
        };
        ContentPlayerComponent.prototype.ngAfterViewInit = function () {
        };
        ContentPlayerComponent.prototype.loop = function (story) {
            var _this = this;
            this.startDate = new Date().getTime();
            if (this.storyPosition <= this.stories.length) {
                this.timerId = setInterval(function () {
                    if (!_this.isPause) {
                        _this.checkEndStory(_this.startDate);
                    }
                }, 1);
            }
        };
        ContentPlayerComponent.prototype.checkEndStory = function (startDate) {
            this.currentDate = new Date().getTime();
            var remainingDuration = this.currentDate - startDate;
            if (remainingDuration > this.currentStory.duration) {
                if (this.storyPosition < this.stories.length - 1) {
                    this.next();
                }
            }
            else {
                this.progressPosition = (remainingDuration * 100) / this.currentStory.duration;
                this.stories[this.storyPosition].progression = this.progressPosition;
                this.storiesChange.emit(this.stories);
            }
        };
        ContentPlayerComponent.prototype.clickEvent = function (event) {
            var x = event.offsetX;
            var tier = this.storyContentWidth / 3;
            if (x < tier) {
                this.previous();
            }
            if (x > this.storyContentWidth - tier) {
                this.next();
            }
        };
        ContentPlayerComponent.prototype.next = function () {
            clearInterval(this.timerId);
            if (this.storyPosition < this.stories.length - 1) {
                this.storyPosition = this.storyPosition + 1;
                this.currentStory = this.stories[this.storyPosition];
                this.loop(this.currentStory);
            }
            else {
                this.storyPosition = this.stories.length - 1;
                this.currentStory = this.stories[this.storyPosition];
            }
            this.changeProgressionStory(this.storyPosition);
        };
        ContentPlayerComponent.prototype.previous = function () {
            clearInterval(this.timerId);
            var previousStoryPosition = this.storyPosition;
            if (this.storyPosition > 0) {
                this.storyPosition = this.storyPosition - 1;
            }
            else {
                this.storyPosition = 0;
            }
            this.changeProgressionStory(this.storyPosition);
            this.currentStory = this.stories[this.storyPosition];
            this.loop(this.currentStory);
        };
        ContentPlayerComponent.prototype.changeProgressionStory = function (currentStory) {
            for (var index = 0; index < this.stories.length; index++) {
                if (index < currentStory) {
                    this.stories[index].progression = 100;
                }
                else if (index > currentStory) {
                    this.stories[index].progression = 0;
                }
                else {
                    if (currentStory === this.stories.length - 1) {
                        this.stories[index].progression = 100;
                    }
                }
            }
            this.storiesChange.emit(this.stories);
        };
        ContentPlayerComponent.prototype.onLongPress = function () {
            this.isPause = true;
            if (this.currentStory.type == this.typeVideo) {
                this.pauseVideo();
            }
        };
        ContentPlayerComponent.prototype.onLongPressEnd = function () {
            if (this.isPause) {
                this.isPause = false;
                if (this.currentStory.type == this.typeVideo) {
                    this.playVideo();
                }
            }
        };
        ContentPlayerComponent.prototype.playVideo = function () {
            this.video.nativeElement.play();
        };
        ContentPlayerComponent.prototype.pauseVideo = function () {
            this.video.nativeElement.pause();
        };
        __decorate([
            core.Input()
        ], ContentPlayerComponent.prototype, "stories", void 0);
        __decorate([
            core.Output()
        ], ContentPlayerComponent.prototype, "storiesChange", void 0);
        __decorate([
            core.ViewChild("storyContent")
        ], ContentPlayerComponent.prototype, "storyContent", void 0);
        __decorate([
            core.ViewChild("video")
        ], ContentPlayerComponent.prototype, "video", void 0);
        ContentPlayerComponent = __decorate([
            core.Component({
                selector: 'app-content-player',
                template: "<div long-press (onLongPress)=\"onLongPress()\" (onLongPressEnd)=\"onLongPressEnd()\" class=\"content\" #storyContent (click)=\"clickEvent($event)\">\n  <video *ngIf=\"currentStory!==undefined && currentStory.type === typeVideo\" width=\"100%\" height=\"100%\" autoplay=\"true\" muted=\"false\" #video>\n    <source src={{currentStory.source}} type=\"video/mp4\">\n    Sorry, your browser doesn't support embedded videos.\n  </video>\n  <img *ngIf=\"currentStory!==undefined && currentStory.type === typeImg\" width=\"100%\" height=\"100%\" src={{currentStory.source}}>\n</div>\n",
                styles: [".content{height:100%;width:100%}"]
            })
        ], ContentPlayerComponent);
        return ContentPlayerComponent;
    }());

    var ProgressPlayerComponent = /** @class */ (function () {
        function ProgressPlayerComponent() {
        }
        ProgressPlayerComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], ProgressPlayerComponent.prototype, "width", void 0);
        ProgressPlayerComponent = __decorate([
            core.Component({
                selector: 'app-progress-player',
                template: "<div class=\"progress-bar first\">\n  <div [ngStyle]=\"{'width.%':width}\" class=\"progress-bar second\">\n  </div>\n</div>",
                styles: [".first{width:100%;background-color:#eee}.second{background-color:#b5c0c4}.progress-bar{border-radius:16px;height:2px}"]
            })
        ], ProgressPlayerComponent);
        return ProgressPlayerComponent;
    }());

    var LongPressDirective = /** @class */ (function () {
        function LongPressDirective() {
            this.duration = 500;
            this.onLongPress = new core.EventEmitter();
            this.onLongPressing = new core.EventEmitter();
            this.onLongPressEnd = new core.EventEmitter();
            this.mouseX = 0;
            this.mouseY = 0;
        }
        Object.defineProperty(LongPressDirective.prototype, "press", {
            get: function () { return this.pressing; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LongPressDirective.prototype, "longPress", {
            get: function () { return this.longPressing; },
            enumerable: true,
            configurable: true
        });
        LongPressDirective.prototype.onMouseDown = function (event) {
            var _this = this;
            // don't do right/middle clicks
            if (event.which !== 1)
                return;
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.pressing = true;
            this.longPressing = false;
            this.timeout = setTimeout(function () {
                _this.longPressing = true;
                _this.onLongPress.emit(event);
                _this.loop(event);
            }, this.duration);
            this.loop(event);
        };
        LongPressDirective.prototype.onMouseMove = function (event) {
            if (this.pressing && !this.longPressing) {
                var xThres = (event.clientX - this.mouseX) > 10;
                var yThres = (event.clientY - this.mouseY) > 10;
                if (xThres || yThres) {
                    this.endPress();
                }
            }
        };
        LongPressDirective.prototype.loop = function (event) {
            var _this = this;
            if (this.longPressing) {
                this.timeout = setTimeout(function () {
                    _this.onLongPressing.emit(event);
                    _this.loop(event);
                }, 50);
            }
        };
        LongPressDirective.prototype.endPress = function () {
            clearTimeout(this.timeout);
            this.longPressing = false;
            this.pressing = false;
            this.onLongPressEnd.emit(true);
        };
        LongPressDirective.prototype.onMouseUp = function () { this.endPress(); };
        __decorate([
            core.Input()
        ], LongPressDirective.prototype, "duration", void 0);
        __decorate([
            core.Output()
        ], LongPressDirective.prototype, "onLongPress", void 0);
        __decorate([
            core.Output()
        ], LongPressDirective.prototype, "onLongPressing", void 0);
        __decorate([
            core.Output()
        ], LongPressDirective.prototype, "onLongPressEnd", void 0);
        __decorate([
            core.HostBinding('class.press')
        ], LongPressDirective.prototype, "press", null);
        __decorate([
            core.HostBinding('class.longpress')
        ], LongPressDirective.prototype, "longPress", null);
        __decorate([
            core.HostListener('mousedown', ['$event'])
        ], LongPressDirective.prototype, "onMouseDown", null);
        __decorate([
            core.HostListener('mousemove', ['$event'])
        ], LongPressDirective.prototype, "onMouseMove", null);
        __decorate([
            core.HostListener('mouseup')
        ], LongPressDirective.prototype, "onMouseUp", null);
        LongPressDirective = __decorate([
            core.Directive({ selector: '[long-press]' })
        ], LongPressDirective);
        return LongPressDirective;
    }());

    var PlayerVideoModule = /** @class */ (function () {
        function PlayerVideoModule() {
        }
        PlayerVideoModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    http.HttpClientModule
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

    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());

    exports.PlayerVideoComponent = PlayerVideoComponent;
    exports.PlayerVideoModule = PlayerVideoModule;
    exports.User = User;
    exports.ɵa = ContentPlayerComponent;
    exports.ɵb = ProgressWrapperPlayerComponent;
    exports.ɵc = ProgressPlayerComponent;
    exports.ɵd = LongPressDirective;
    exports.ɵe = HeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-storyshare-player.umd.js.map
