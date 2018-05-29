import { NgModule ,SkipSelf,Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { AppRoutingModule } from '../app-routing.module';
//import { ServicesModule } from '../services/services.module'

import 'hammerjs';
import 'rxjs/add/operator/take';
@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HttpModule,
    AppRoutingModule
 ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent:CoreModule,iconRegistry: MdIconRegistry,
  sanitizer: DomSanitizer){
    if(parent){
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
