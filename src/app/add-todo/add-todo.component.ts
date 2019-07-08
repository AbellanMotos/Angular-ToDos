import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  task = '';
  @Output() newTodo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addTodo(text){
    this.newTodo.emit(text);
    this.task = ''
  }

}
