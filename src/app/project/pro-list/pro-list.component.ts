import { Component, OnInit ,HostBinding,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';
import { ProjectService } from '../../services/project.service';
import * as _ from "lodash";
import { Project } from '../../domain';
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
  projects;
  
  constructor(private dialog: MdDialog,private cd: ChangeDetectorRef,private service$:ProjectService) {
    
  }

  ngOnInit() {
    this.service$.get("2").subscribe(projects => {
      this.projects=projects;
      this.cd.markForCheck();
    });
  }

  openNewProjectDialog(){
    const selectedImg = `/assets/img/covers/${Math.floor(Math.random()*40)}_tn.jpg`;
    const dialogRef = this.dialog.open(NewProComponent,{data:{thumbnails:this.getThumbnails(),img:selectedImg,title:"新建项目"}});
    dialogRef.afterClosed()
      .take(1)
      .filter(n => n)
      .switchMap(v => this.service$.add(v))
      .map(val => ({...val,coverImg:this.buildImgSrc(val.coverImg)}))
      .subscribe(project => {
        this.projects = [...this.projects,project];
        this.cd.markForCheck();
      });
    
  }

  launclInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
    
  }

  launchUpdateDialog(project:Project){
    const dialogRef = this.dialog.open(NewProComponent,{data:{thumbnails:this.getThumbnails(),project:project,title:"新建项目"}});
    dialogRef.afterClosed()
      .take(1)
      .filter(n => n)
      .switchMap(v => this.service$.add(v))
      .map(val => ({...val,id:project.id,coverImg:this.buildImgSrc(val.coverImg)}))
      .subscribe(project => {
        const index = this.projects.map(p => p.id).indexOf(project.id);
        this.projects = [...this.projects.slice(0,index),project,...this.projects.slice(index + 1)];
        this.cd.markForCheck();
      });
    //const dialogRef = this.dialog.open(NewProComponent,{data:{title:"编辑项目"}});
  }

  launchDeleteDialog(project){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:"删除项目",content:"确认删除？"}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id!==project.id)
    });
    this.cd.markForCheck();
  }

  private getThumbnails(){
    return _.range(0,40)
      .map(i => `/assets/img/covers/${i}_tn.jpg`);
  }

  private buildImgSrc(img:string): string{
    return img.indexOf('_')>-1?img.split('_')[0]+".jpg":img;
  }

}
