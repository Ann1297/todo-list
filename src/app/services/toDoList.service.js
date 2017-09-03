"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var toDoItem_1 = require("../model/toDoItem");
//temp hardcoded const array
var nextId = 1;
exports.ToDoList = [
    { id: nextId++, task: 'Take part in hackathon', isDone: true, isDeleted: false },
    { id: nextId++, task: 'Learn JS more', isDone: false, isDeleted: false }
];
var ToDoListService = (function () {
    function ToDoListService() {
    }
    ToDoListService.prototype.getList = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(exports.ToDoList.filter(function (i) { return !i.isDeleted; }));
            }, 50);
        });
    };
    ToDoListService.prototype.getTask = function (id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var item = exports.ToDoList.find(function (i) { return i.id === id; });
                resolve(item);
            }, 500);
        });
    };
    ToDoListService.prototype.addTask = function (task) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var item = new toDoItem_1.ToDoItem();
                item.id = nextId++;
                item.isDeleted = false;
                item.isDone = false;
                item.task = task;
                exports.ToDoList.push(item);
                resolve(item);
            }, 50);
        });
    };
    ToDoListService.prototype.deleteTask = function (id) {
        new Promise(function (resolve) {
            setTimeout(function () {
                var index = exports.ToDoList.findIndex(function (i) { return i.id === id; });
                exports.ToDoList[index].isDeleted = true;
            }, 50);
        });
    };
    ToDoListService.prototype.changeCheckedState = function (id, state) {
        new Promise(function (resolve) {
            setTimeout(function () {
                var index = exports.ToDoList.findIndex(function (i) { return i.id === id; });
                exports.ToDoList[index].isDone = state;
            }, 50);
        });
    };
    return ToDoListService;
}());
ToDoListService = __decorate([
    core_1.Injectable()
], ToDoListService);
exports.ToDoListService = ToDoListService;
//# sourceMappingURL=toDoList.service.js.map