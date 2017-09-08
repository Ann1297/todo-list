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
        this.toDoListService.getList()
            .then(function (list) { return _this.toDoList = list; });
    };
    ToDoListComponent.prototype.addTask = function () {
        var _this = this;
        var input = document.getElementsByTagName("input")[0];
        if (input.validity.valid) {
            this.toDoListService.addTask(input.value)
                .then(function (item) { return _this.toDoList.push(item); });
        }
        input.value = "";
    };
    ToDoListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.toDoListService.deleteTask(id)
            .then(function (result) {
            if (result) {
                _this.toDoList = _this.toDoList.filter(function (value) { return value.id !== id; });
            }
        });
    };
    ToDoListComponent.prototype.checkedChange = function (id) {
        var _this = this;
        var newState = !this.toDoList.find(function (i) { return i.id == id; }).isDone;
        this.toDoListService.changeCheckedState(id, newState)
            .then(function (result) {
            if (result) {
                _this.toDoList.find(function (i) { return i.id == id; }).isDone = newState;
            }
        });
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