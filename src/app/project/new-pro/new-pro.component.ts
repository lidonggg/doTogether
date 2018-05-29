import { Component, OnInit, Inject,ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProComponent implements OnInit {
  title = '';
  constructor(@Inject(MD_DIALOG_DATA) private data,private dialogRef:MdDialogRef<NewProComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClick(){
    this.dialogRef.close(this.title);
  }
}
