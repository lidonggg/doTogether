import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormControl,FormGroup,Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email : ['123@163.com',Validators.compose([Validators.required,Validators.email/*,this.validator*/])],
      password : ['',Validators.required]
    })
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
    //this.form.controls['email'].setValidators(this.validator);//动态验证
  }

  validator(c:FormControl):{[key:string]:any}{//自定义验证规则
    if(!c.value){
      return null;
    }
    const pattern = /^123+/;
    if(pattern.test(c.value)){
      return null;
    }
    return{
      emailNotValid:"The email mast start with 123"
    }
  }
}
