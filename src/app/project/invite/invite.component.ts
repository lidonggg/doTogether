import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items=[
    {
      id:'1',
      name:"lidong"
    },
    {
      id:'2',
      name:'dong'
    }
  ]
  
  constructor() { }

  ngOnInit() {

  }
  displayUser(user: {id: string;name: string}){
    return user ? user.name : '';
  }

}
