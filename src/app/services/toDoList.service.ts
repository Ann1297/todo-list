import { Injectable } from '@angular/core';

import { ToDoItem } from '../model/toDoItem';

@Injectable()
export class ToDoListService {
    private nextId = 1;
    private _cache: ToDoItem[];

    constructor() {
        //Tasks by default
        var ToDoList: ToDoItem[] = [
            { id: this.nextId++, task: 'Take part in hackathon', isDone: true, isDeleted: false },
            { id: this.nextId++, task: 'Learn JS more', isDone: false, isDeleted: false }
          ];

        if (this.getToDoList().length == 0) {
            this.writeToDoList(ToDoList);
        }

        this._cache = this.getToDoList();
        this.nextId = this._cache.length + 1;
    }

    writeToDoList(list: ToDoItem[]) {
        localStorage.setItem('ToDoList', JSON.stringify(list));
    }


    getToDoList() : ToDoItem[] {
        return JSON.parse(localStorage.getItem('ToDoList')) || [];
    }

    getList(): Promise<ToDoItem[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.getToDoList().filter(i => !i.isDeleted));
            }, 50);
        });
    }

    addTask(task: string): Promise<ToDoItem> {
        return new Promise(resolve => {
            setTimeout(() => {
                let item = new ToDoItem({ id: this.nextId++, task: task });
                this._cache.push(item);
                this.writeToDoList(this._cache);
                resolve(item);
            }, 50);
        });
    }

    deleteTask(id: number): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            setTimeout(() => {
                const index = this.getToDoList().findIndex(i => i.id === id);
                if (index != -1) {
                    this._cache[index].isDeleted = true;
                    this.writeToDoList(this._cache);
                    resolve(true);
                } else {
                    resolve(false);
                }                
            }, 50);
        });
    }

    changeCheckedState(id: number, state: boolean): Promise<boolean>  {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.getToDoList().findIndex(i => i.id === id);
                if (index != -1) {
                    this._cache[index].isDone = state;
                    this.writeToDoList(this._cache);
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, 50);
        });
    }
}