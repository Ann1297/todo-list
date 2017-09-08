import { Component, Input, OnInit } from '@angular/core';

import { ToDoItem } from '../../model/toDoItem'
import { ToDoListService } from '../../services/toDoList.service';

@Component({
  selector: 'todo-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})

export class ToDoListComponent implements OnInit {
  toDoList: ToDoItem[];

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.getFullList();
  }

  getFullList() {
    this.toDoListService.getList()
      .then(list => this.toDoList = list);
  }

  addTask() {
    let input = document.getElementsByTagName("input")[0];
    if (input.validity.valid) {
      this.toDoListService.addTask(input.value)
        .then(item => this.toDoList.push(item));
    }
    input.value = "";
  }

  deleteTask(id: number) {
    this.toDoListService.deleteTask(id)
      .then(result => {
        if (result) {
          this.toDoList = this.toDoList.filter(value => value.id !== id);
        }
      });
  }

  checkedChange(id: number) {
    const newState = !this.toDoList.find(i => i.id == id).isDone;
    this.toDoListService.changeCheckedState(id, newState)
      .then(result => {
        if (result) {
          this.toDoList.find(i => i.id == id).isDone = newState;
        }
      });
  }
}