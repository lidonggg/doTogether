import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {
  projects = [
    {
      "name":"dotogether",
      "desc":"adngag",
      "coverImg":"assets/img/covers/bg.jpg"
    },
    {
      "name":"dotogether",
      "desc":"adngag",
      "coverImg":"assets/img/covers/bg.jpg"
    }
  ]
  
  constructor(private dialog: MdDialog) {
    
  }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProComponent,{data:{title:"新建项目"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launclInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
    
  }

  launchUpdateDialog(){
    const dialogRef = this.dialog.open(NewProComponent,{data:{title:"编辑项目"}});
  }

  launchDeleteDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:"删除项目",content:"确认删除？"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
