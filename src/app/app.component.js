"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var toDoList_service_1 = require("./services/toDoList.service");
var AppComponent = (function () {
    function AppComponent(toDoListService) {
        this.toDoListService = toDoListService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getFullList();
    };
    AppComponent.prototype.getFullList = function () {
        var _this = this;
        this.toDoListService.getList().then(function (list) { _this.toDoList = list; console.log(_this.toDoList); });
    };
    AppComponent.prototype.addTask = function () {
        var _this = this;
        var input = document.getElementsByTagName("input")[0];
        if (input.validity.valid) {
            this.toDoListService.addTask(input.value).then(function () { return _this.getFullList(); });
            input.value = "";
        }
    };
    AppComponent.prototype.deleteTask = function (id) {
        this.toDoListService.deleteTask(id);
        this.getFullList();
    };
    AppComponent.prototype.checkedChange = function (id) {
        this.toDoListService.changeCheckedState(id, !this.toDoList.find(function (i) { return i.id == id; }).isDone);
        console.log("change event");
        this.getFullList();
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppComponent.prototype, "toDoList", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './pages/toDoList.html',
    }),
    __metadata("design:paramtypes", [toDoList_service_1.ToDoListService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map