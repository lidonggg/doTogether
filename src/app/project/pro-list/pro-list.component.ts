import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProComponent } from '../new-pro/new-pro.component';

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
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "name":"dotogether",
      "desc":"adngag",
      "coverImg":"assets/img/covers/1.jpg"
    }
  ]
  
  constructor(private dialog: MdDialog) {
    
  }

  ngOnInit() {
  }

  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProComponent);
  }
}
