import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login/login.component'
const routes: Routes = [
    { path: '', redirectTo:'/login' ,pathMatch: 'full'},
    { path: 'project', redirectTo:'/project' ,pathMatch: 'full'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
