import { Component } from '@angular/core';

import { ToDoItem } from './model/toDoItem'
import { ToDoListService } from './services/toDoList.service';

@Component({
  selector: 'my-app',
  templateUrl: './pages/toDoList.html',
})

export class AppComponent { 

  toDoList: ToDoItem[];
  selectedItem: ToDoItem;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getFullList();
  }

  onSelected(item: ToDoItem) {
    this.selectedItem = item;
  }

  getFullList() {
    this.toDoListService.getList().then(list => this.toDoList = list);  
  }

  addTask() {
    let input = document.getElementsByTagName('input')[0];
    if (input.validity.valid) {
        this.toDoListService.addTask(input.value);
        input.value = "";

        //can i uodate the list dynamicly
        this.getFullList();
    }   
  }
}