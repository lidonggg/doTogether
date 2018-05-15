import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProListComponent } from './pro-list/pro-list.component';
import { ProItemComponent } from './pro-item/pro-item.component';
import { NewProComponent } from './new-pro/new-pro.component';
import { InviteComponent } from './invite/invite.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule} from './project-routing-module';
@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProListComponent,
    ProItemComponent,
    NewProComponent,
    InviteComponent
  ],
  entryComponents:[
    NewProComponent,
    InviteComponent
  ],
  exports:[
    ProListComponent,
    ProItemComponent,
  ]
})
export class ProjectModule { }
