import { Component, OnInit ,Input ,Output ,EventEmitter,HostBinding,HostListener,ChangeDetectionStrategy} from '@angular/core';
//HostBinding   绑定属性
//HostListener   绑定监听事件
import { itemAnim } from '../../anims/item.anim'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
    this.avatar=this.item.owner ? this.item.owner.avatar:'unassigned';
  }

  @HostListener('mouseenter')
  onMonseEnter(){
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMonseLeave(){
    this.widerPriority = 'in';
  }

  onItemClick(){
    this.taskClick.emit();
  }

  onCheckBoxClick(ev:Event){
    ev.stopPropagation();
  }
}
