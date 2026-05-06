import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) { }
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data.slice(0, 20);

      // Handle the list of todos
    });
  }

}
