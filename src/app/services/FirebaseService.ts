import { Injectable } from '@angular/core';
import { AngularFireDatabase} from "@angular/fire/compat/database";
import {Todo} from "../todo/todo.model";

@Injectable()
export class FirebaseService {
  constructor(private db: AngularFireDatabase) { }

  // Hae todos tietokannasta
  getTodos() {
    return this.db.list<Todo>('/todos').valueChanges();
  }

  // Lisää uusi todo tietokantaan
  addTodo(todo: Todo) {
    this.db.list('/todos').push(todo);
  }

  // Poista todo tietokannasta
  deleteTodo(todoKey: string) {
    this.db.object('/todos/' + todoKey).remove();
  }
}
