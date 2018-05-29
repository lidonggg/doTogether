import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule()
export class ServicesModule { 
  static forRoot(){
    return{
      NgModule : ServicesModule,
      providers:[

      ]
    }
  }
}
