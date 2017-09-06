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
var toDoList_service_1 = require("../../services/toDoList.service");
var ToDoListComponent = (function () {
    function ToDoListComponent(toDoListService) {
        this.toDoListService = toDoListService;
    }
    ToDoListComponent.prototype.ngOnInit = function () {
        this.getFullList();
    };
    ToDoListComponent.prototype.getFullList = function () {
        var _this = this;
        this.toDoListService.getList().then(function (list) { _this.toDoList = list; console.log(_this.toDoList); });
    };
    ToDoListComponent.prototype.addTask = function () {
        var _this = this;
        var input = document.getElementsByTagName("input")[0];
        if (input.validity.valid) {
            this.toDoListService.addTask(input.value).then(function () { return _this.getFullList(); });
            input.value = "";
        }
    };
    ToDoListComponent.prototype.deleteTask = function (id) {
        this.toDoListService.deleteTask(id);
        this.getFullList();
    };
    ToDoListComponent.prototype.checkedChange = function (id) {
        this.toDoListService.changeCheckedState(id, !this.toDoList.find(function (i) { return i.id == id; }).isDone);
        console.log("change event");
        this.getFullList();
    };
    return ToDoListComponent;
}());
ToDoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: './toDoList.component.html',
        styleUrls: ['./toDoList.component.css']
    }),
    __metadata("design:paramtypes", [toDoList_service_1.ToDoListService])
], ToDoListComponent);
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=toDoList.component.js.map