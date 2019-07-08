import { Component, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.scss']
})

export class ShowTodosComponent {
  @Input() data: Todo[];
 }
