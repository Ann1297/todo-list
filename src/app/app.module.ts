import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ToDoListComponent } from './components/toDoList.component' 

import { ToDoListService } from './services/toDoList.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ToDoListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ToDoListService ]
})

export class AppModule { }