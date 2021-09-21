import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {TodoRoutingModule} from './todo-routing.module'
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';





@NgModule({
  declarations: [
    HomeComponent,
    ListsComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
