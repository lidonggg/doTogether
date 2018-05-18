import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists=[
    {
      id:1,
      name:"待办",
      tasks:[
        {
          id:1,
          desc:"任务一",
          owner:[
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
            {
              id:2,
              name:"lidong",
              avatar:"avatars:svg-11"
            }
          ]
        },
        {
          id:2,
          desc:"任务二",
          owner:[
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
            {
              id:2,
              name:"lidong",
              avatar:"avatars:svg-11"
            }
          ]
        }
      ]
    },
    {
      id:2,
      name:"待办",
      tasks:[
        {
          id:1,
          desc:"任务一",
          owner:[
            {
              id:1,
              name:"lidong",
              avatar:"avatars:svg-11"
            },
            {
              id:2,
              name:"lidong",
              avatar:"avatars:svg-11"
            }
          ]
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
