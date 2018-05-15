import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProListComponent } from './pro-list/pro-list.component';

const routes: Routes = [
    { path: 'project', component: ProListComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
