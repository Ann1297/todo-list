import { Injectable } from '@angular/core';

import { ToDoItem } from '../model/toDoItem';

//temp hardcoded const array
let nextId = 1;
export const ToDoList: ToDoItem[] = [
    { id: nextId++, task: 'Take part in hackathon', isDeleted: false },
    { id: nextId++, task: 'Learn JS more', isDeleted: false }
  ];

@Injectable()
export class ToDoListService {
    getList(): Promise<ToDoItem[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(ToDoList.filter( i => !i.isDeleted ));
            }, 50);
        });
    }
}