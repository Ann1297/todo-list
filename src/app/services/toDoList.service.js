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
var toDoItem_1 = require("../model/toDoItem");
var ToDoListService = (function () {
    function ToDoListService() {
        this.nextId = 1;
        //Tasks by default
        var ToDoList = [
            { id: this.nextId++, task: 'Take part in hackathon', isDone: true, isDeleted: false },
            { id: this.nextId++, task: 'Learn JS more', isDone: false, isDeleted: false }
        ];
        if (this.getToDoList().length == 0) {
            this.writeToDoList(ToDoList);
        }
        this._cache = this.getToDoList();
        this.nextId = this._cache.length + 1;
    }
    ToDoListService.prototype.writeToDoList = function (list) {
        localStorage.setItem('ToDoList', JSON.stringify(list));
    };
    ToDoListService.prototype.getToDoList = function () {
        return JSON.parse(localStorage.getItem('ToDoList')) || [];
    };
    ToDoListService.prototype.getList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.getToDoList().filter(function (i) { return !i.isDeleted; }));
            }, 50);
        });
    };
    ToDoListService.prototype.addTask = function (task) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var item = new toDoItem_1.ToDoItem({ id: _this.nextId++, task: task });
                _this._cache.push(item);
                _this.writeToDoList(_this._cache);
                resolve(item);
            }, 50);
        });
    };
    ToDoListService.prototype.deleteTask = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var index = _this.getToDoList().findIndex(function (i) { return i.id === id; });
                if (index != -1) {
                    _this._cache[index].isDeleted = true;
                    _this.writeToDoList(_this._cache);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, 50);
        });
    };
    ToDoListService.prototype.changeCheckedState = function (id, state) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var index = _this.getToDoList().findIndex(function (i) { return i.id === id; });
                if (index != -1) {
                    _this._cache[index].isDone = state;
                    _this.writeToDoList(_this._cache);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, 50);
        });
    };
    return ToDoListService;
}());
ToDoListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ToDoListService);
exports.ToDoListService = ToDoListService;
//# sourceMappingURL=toDoList.service.js.map