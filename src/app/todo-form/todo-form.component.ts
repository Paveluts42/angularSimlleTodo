import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      data: new Date()
    };
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
