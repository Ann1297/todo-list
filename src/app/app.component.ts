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
    this.toDoListService.getList().then(list => this.toDoList = list);    
  }

    onSelected(item: ToDoItem) {
    this.selectedItem = item;
  }
}