import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos: Todo[] = [{
    id: '1',
    text: 'Aprender Angular',
    completed: false,
    createdAt: new Date(),
  }];

  addNewTodo(text: string) {
    let newTodo: Todo = {
      id: `todo-${Math.random() * 99}`,
      text,
      completed: false,
      createdAt: new Date(),
    };

    this.todos.push(newTodo);
  }
}
