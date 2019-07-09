import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

  /* todos: Todo[] = [{
    id: '1',
    text: 'Aprender Angular',
    completed: false,
    createdAt: new Date(),
  }];
 */

  addNewTodo(text: string) {
    let newTodo: Todo = {
      id: `todo-${Math.random() * 99}`,
      text,
      completed: false,
      createdAt: new Date(),
    };

    this.todos.push(newTodo);
    this.saveToLocalStorage();

  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(id: string){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveToLocalStorage();
  }
}
