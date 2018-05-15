import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-pro-item',
  templateUrl: './pro-item.component.html',
  styleUrls: ['./pro-item.component.scss']
})
export class ProItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
