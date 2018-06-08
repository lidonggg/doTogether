import { Component, OnInit ,Input,forwardRef,OnDestroy} from '@angular/core';
import { 
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS, 
  FormControl, 
  FormBuilder, 
  FormGroup 
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../domain';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsListComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ChipsListComponent),
      multi: true,
    }
  ],
})
export class ChipsListComponent implements OnInit ,ControlValueAccessor{

  @Input() multiple = true;
  @Input() placeholderText = '请输入成员 email';
  @Input() label = '添加/修改成员';
  
  form:FormGroup;
  items:User[];
  membersResults$:Observable<User[]>;


  private propagateChange = (_: any) => {};

  constructor(private fb:FormBuilder,private service:UserService) { 
    this.items = [];
  }

  ngOnInit() {
    this.form=this.fb.group({
      memberSearch:['']
    });
    this.membersResults$ = this.form.get('memberSearch').valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .filter(s => s && s.length>1)
      .switchMap(str => this.service.searchUsers(str));
  }

  // 提供值的写入方法
  public writeValue(obj: User[]):void {
    if (obj && this.multiple) {
      const userEntities = obj.reduce((e,c)=>({...e,c}),{});
      if(this.items){
        const remaining = this.items.filter(item => !userEntities[item.id]);
        this.items = [...remaining, ...obj];
      }
    }else if(obj && !this.multiple){
      this.items = [...obj];
    }
  }

  // 当表单控件值改变时，函数 fn 会被调用
  // 这也是我们把变化 emit 回表单的机制
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // 这里没有使用，用于注册 touched 状态
  public registerOnTouched() {
  }

  // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
  public validate(c: FormControl): {[key: string]: any} {
    return this.items?null:{
      chipListInvalid:true
    }
  
  }

  removeMember(member:User){
    const ids = this.items.map(item =>item.id);
    const i = ids.indexOf(member.id);
    if (this.multiple) {
      this.items = [...this.items.slice(0, i), ...this.items.slice(i + 1)];
    } else {
      this.items = [];
    }
    this.form.patchValue({ memberSearch: '' });
    this.propagateChange(this.items);
  }

  handleMemberSelection(member: User){
    if (this.items.map(u => u.id).indexOf(member.id) !== -1) {
      return;
    }
    if (this.multiple) {
      this.items = [...this.items, member];
    } else {
      this.items = [member];
    }
    this.form.patchValue({ memberSearch: member.name });
    this.propagateChange(this.items);
  }

  displayUser(user: User): string {
    return user ? user.name : '';
  }

  searchUsers(obs: Observable<string>): Observable<User[]> {
    return obs.startWith('')
      .debounceTime(300)
      .distinctUntilChanged()
      .filter(s => s && s.length > 1)
      .switchMap(str => this.service.searchUsers(str));
  }

  get displayInput() {
    return this.multiple || (this.items.length === 0);
  }
}
