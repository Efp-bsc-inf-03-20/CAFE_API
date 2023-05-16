"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FreezePipe = void 0;
var common_1 = require("@nestjs/common");
var FreezePipe = /** @class */ (function () {
    function FreezePipe() {
        this.logger = new common_1.Logger(FreezePipe_1.name);
    }
    FreezePipe_1 = FreezePipe;
    FreezePipe.prototype.transform = function (value) {
        this.logger.debug('FreezePipe running...');
        Object.freeze(value);
        return value;
    };
    var FreezePipe_1;
    FreezePipe = FreezePipe_1 = __decorate([
        (0, common_1.Injectable)()
    ], FreezePipe);
    return FreezePipe;
}());
exports.FreezePipe = FreezePipe;
