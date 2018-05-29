import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component'
const routes: Routes = [
    { path: '', redirectTo:'/login' ,pathMatch: 'full'},
    { path: 'projects', redirectTo:'/projects' ,pathMatch: 'full'},
    { path: 'tasklists', redirectTo:'/tasklists' ,pathMatch: 'full'},


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
