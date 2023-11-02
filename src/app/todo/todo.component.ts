import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/FirebaseService'; // Tuodaan FirebaseService
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';

  constructor(private firebaseService: FirebaseService) {} // Injektoidaan FirebaseService

  ngOnInit() {
    this.firebaseService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.newTodoText) {
      const newTodo = new Todo(this.newTodoText);
      this.firebaseService.addTodo(newTodo); // Tallennetaan uusi todo tietokantaan
      this.newTodoText = '';
    }
  }

  removeTodo(todoKey: string) {
    this.firebaseService.deleteTodo(todoKey); // Poistetaan todo tietokannasta
  }

  toggleComment(todo: Todo) {
    todo.showComment = !todo.showComment;
  }


  /*addComment(todo: Todo) {
    if (todo.newComment) {
      todo.comments.push(todo.newComment);
      this.saveTodos();
    }
  }*/
}







