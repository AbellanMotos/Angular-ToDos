import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.scss']
})

export class ShowTodosComponent {
  @Input() data: Todo[];
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() completedTodo = new EventEmitter<string>();

  emitDeleteId(id){
    this.deleteTodo.emit(id);
  }

  emitCompletedId(id){
    this.completedTodo.emit(id);
  }
 }
