import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowTodosComponent } from './show-todos/show-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormatDatePipe } from './format-date.pipe';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    ShowTodosComponent,
    AddTodoComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
