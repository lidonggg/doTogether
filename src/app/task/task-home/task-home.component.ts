import { Component, OnInit ,HostBinding,ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim'
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding("@routeAnim") state;

  lists=[
    {
      order:1,
      id:1,
      name:"待办",
      tasks:[
        {
          id:1,
          desc:"任务一",
          completed:true,
          priority:3,
          owner:
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
          dueDate:new Date(),
          reminder:new Date()
        },
        {
          id:2,
          desc:"任务二",
          completed:false,
          priority:2,
          owner:
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
          
          dueDate:new Date()
        }
      ]
    },
    {
      id:2,
      order:2,
      name:"待办",
      completed:true,
      tasks:[
        {
          id:1,
          desc:"任务一",
          priority:1,
          owner:
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
            
          dueDate:new Date()
        }
      ]
    }
  ]
  constructor(private dialog:MdDialog,private cd :ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog(){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:'新建任务:'}});
  }

  launchCopyTaskDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
  }

  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:'修改任务:',task:task}});
  }

  launchConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:"删除列表",content:"确认删除？"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:"更改列表名称"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:"新建列表"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData,list){
    switch(srcData.tag){
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const temOrder = srcList.order;
        srcList.order = list.order;
        list.order = temOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc:string){
    console.log(desc);
  }
}
