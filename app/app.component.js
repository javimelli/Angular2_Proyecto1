System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var _this = this;
                    this.resetTimer();
                    setInterval(function () { return _this.tick(); }, 1000);
                }
                AppComponent.prototype.resetTimer = function () {
                    this.minutos = 24;
                    this.segundos = 59;
                    this.buttonLabel = 'Empezar';
                    this.tooglePause();
                };
                AppComponent.prototype.tick = function () {
                    if (!this.isPaused) {
                        this.buttonLabel = 'Detener';
                        if (--this.segundos < 0) {
                            this.segundos = 59;
                            if (--this.minutos < 0) {
                                this.resetTimer();
                            }
                        }
                    }
                };
                AppComponent.prototype.tooglePause = function () {
                    this.isPaused = !this.isPaused;
                    if (this.minutos < 24 || this.segundos < 59) {
                        this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<img src="assets/img/reloj.png"><h1>{{minutos}}:{{segundos}}</h1><p><button (click)="tooglePause()">{{buttonLabel}}</button></p>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
