import { Component, OnInit ,Input,Output,EventEmitter,HostBinding,HostListener,ChangeDetectionStrategy} from '@angular/core';
import { cardAnim } from '../../anims/card.anim';
@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss'],
  animations: [
    cardAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMonseEnter(){
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMonseLeave(){
    this.cardState = 'out';
  }

  openInviteComponent(){
    this.onInvite.emit();
  }

  onEditClick(){
    this.onEdit.emit();
  }

  onDeleteClick(){
    this.onDelete.emit();
  }
}
