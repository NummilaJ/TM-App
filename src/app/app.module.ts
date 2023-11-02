import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CdkDrag, CdkDropListGroup } from "@angular/cdk/drag-drop";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdkDrag,
    provideFirebaseApp(() => initializeApp({"projectId":"tm-app-db831","appId":"1:506425400377:web:c45192e7a17430f28c41e8","storageBucket":"tm-app-db831.appspot.com","apiKey":"AIzaSyAZ4LtCvwJ94SGbS38MFs_1ExLlMqzrnjE","authDomain":"tm-app-db831.firebaseapp.com","messagingSenderId":"506425400377","measurementId":"G-85YCPN0Q9L"})),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

