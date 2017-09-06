import { Injectable } from '@angular/core';

import { ToDoItem } from '../model/toDoItem';

//temp hardcoded array
let nextId = 1;
// export  ToDoList: ToDoItem[] = [
//     { id: nextId++, task: 'Take part in hackathon', isDone: true, isDeleted: false },
//     { id: nextId++, task: 'Learn JS more', isDone: false, isDeleted: false }
//   ];

@Injectable()
export class ToDoListService {
    ToDoList: ToDoItem[] = [
        { id: nextId++, task: 'Take part in hackathon', isDone: true, isDeleted: false },
        { id: nextId++, task: 'Learn JS more', isDone: false, isDeleted: false }
      ];

    getList(): Promise<ToDoItem[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.ToDoList.filter(i => !i.isDeleted));
            }, 50);
        });
    }

    getTask(id: number): Promise<ToDoItem> {
        return new Promise(resolve => {
            setTimeout(() => {
                const item = this.ToDoList.find(i => i.id === id);
                resolve(item);
            }, 500);
        });
    }

    addTask(task: string): Promise<ToDoItem> {
        return new Promise(resolve => {
            setTimeout(() => {
                let item = new ToDoItem();
                item.id = nextId++;
                item.isDeleted = false;
                item.isDone = false;
                item.task = task;
                this.ToDoList.push(item);
                resolve(item);
            }, 50);
        });
    }

    deleteTask(id: number) {
        new Promise(resolve => {
            setTimeout(() => {
                const index = this.ToDoList.findIndex(i => i.id === id);
                this.ToDoList[index].isDeleted = true;
            }, 50);
        });
    }

    changeCheckedState(id: number, state: boolean) {
        new Promise(resolve => {
            setTimeout(() => {
                const index = this.ToDoList.findIndex(i => i.id === id);
                this.ToDoList[index].isDone = state;
            }, 50);
        });
    }

}