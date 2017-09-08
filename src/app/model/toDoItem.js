"use strict";
var ToDoItem = (function () {
    function ToDoItem(init) {
        this.isDone = false;
        this.isDeleted = false;
        Object.assign(this, init);
    }
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=toDoItem.js.map