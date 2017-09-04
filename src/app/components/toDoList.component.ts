import { Component, Input, OnInit} from '@angular/core';

import { ToDoItem } from '../model/toDoItem'
import { ToDoListService } from '../services/toDoList.service';

@Component({
  selector: 'todo-list',
  templateUrl: './pages/toDoList.component.html',
  styleUrls: ['./pages/toDoList.component.css']
})

export class ToDoListComponent implements OnInit { 
  @Input()
  toDoList: ToDoItem[];

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getFullList();
  }

  getFullList() {
    this.toDoListService.getList().then(list => {this.toDoList = list; console.log(this.toDoList);} );      
  }

  addTask() {
    let input = document.getElementsByTagName("input")[0];
    if (input.validity.valid) {
        this.toDoListService.addTask(input.value).then(() => this.getFullList());
        input.value = "";
    }
  }

  deleteTask(id: number) {
    this.toDoListService.deleteTask(id);
    this.getFullList();
  }

  checkedChange(id: number) {
    this.toDoListService.changeCheckedState(id, !this.toDoList.find(i => i.id == id).isDone);
    console.log("change event");
    this.getFullList();
  }
}