import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from './quote.service';
import { ProjectService } from './project.service';
import { TaskListService } from './task-list.service';
import { TaskService } from './task.service';

export {
  QuoteService,
  ProjectService,
  TaskListService,
  TaskService
}
@NgModule()
export class ServicesModule { 
  static forRoot(){
    return{
      ngModule : ServicesModule,
      providers:[
        QuoteService,
        ProjectService,
        TaskListService,
        TaskService
      ]
    }
  }
}
