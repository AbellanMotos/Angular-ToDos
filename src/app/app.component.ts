import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

  addNewTodo(text: string) {
    let newTodo: Todo = {
      id: `todo-${Math.random() * 99}`,
      text,
      completed: false,
      createdAt: new Date(),
      color: 'black'
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

  toggleCompleted(id: string) {
    this.todos = this.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.saveToLocalStorage();
  };

  changeColor(ev) {
    let id = ev.id;
    let color = ev.color;
    this.todos = this.todos.map( todo => {
      if(todo.id === id) {
        todo.color = color;
      }
      return todo;
    })
    this.saveToLocalStorage();
    }
}
