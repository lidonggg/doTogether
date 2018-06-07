import { Component, OnInit, Inject,ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pro',
  templateUrl: './new-pro.component.html',
  styleUrls: ['./new-pro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProComponent implements OnInit {
  title = '';
  coverImages = [];
  form:FormGroup;
  constructor(@Inject(MD_DIALOG_DATA) private data,private dialogRef:MdDialogRef<NewProComponent>,
              private fb:FormBuilder) { 
    
  }

  ngOnInit() {
    this.coverImages = this.data.thumbnails;
    if(this.data.project){
      this.form = this.fb.group({
        name:[this.data.project.name,Validators.compose([Validators.required, Validators.maxLength(20)])],
        desc:[this.data.project.desc],
        coverImg:[this.getMyThumbnails(this.data.project.coverImg), Validators.required]
      });
      this.title = "修改项目:";
    }else{
      this.form = this.fb.group({
        name:['',Validators.compose([Validators.required, Validators.maxLength(20)])],
        desc:['',Validators.maxLength(100)],
        coverImg:[this.data.img, Validators.required]
      });
      this.title = "新建项目:";
    }
    //this.title = this.data.title;
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault();
    if(!valid){
      return;
    }
    this.dialogRef.close(value);
  }

  private getMyThumbnails(img:string){
    return img.split('.')[0]+"_tn.jpg";
  }
}
