import { Component, OnInit ,HostBinding,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';
@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProListComponent implements OnInit {
  @HostBinding("@routeAnim") state;
  projects = [
    {
      "id":1,
      "name":"dotogether",
      "desc":"adngag",
      "coverImg":"assets/img/covers/bg.jpg"
    },
    {
      "id":2,
      "name":"dotogether",
      "desc":"adngag",
      "coverImg":"assets/img/covers/bg.jpg"
    }
  ]
  
  constructor(private dialog: MdDialog,private cd: ChangeDetectorRef) {
    
  }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProComponent,{data:{title:"新建项目"}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [... this.projects,{id:3,name:"new project",desc:"a new project",coverImg:"assets/img/covers/bg.jpg"},
      {id:4,name:"new project",desc:"a new project",coverImg:"assets/img/covers/bg.jpg"}]
    });
    this.cd.markForCheck();
  }

  launclInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
    
  }

  launchUpdateDialog(){
    const dialogRef = this.dialog.open(NewProComponent,{data:{title:"编辑项目"}});
  }

  launchDeleteDialog(project){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:"删除项目",content:"确认删除？"}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id!==project.id)
    });
    this.cd.markForCheck();
  }
}
