import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';

  ngOnInit() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  addTodo() {
    if (this.newTodoText) {
      const newTodo = new Todo(this.newTodoText);
      this.todos.unshift(newTodo);
      this.newTodoText = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodosToLocalStorage() {
    this.saveTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleComment(todo: Todo) {
    todo.showComment = !todo.showComment;
  }

  addComment(todo: Todo) {
    if (todo.newComment) {
      todo.comments.push(todo.newComment);
      todo.newComment = '';
      this.saveTodos();
    }
  }
}





