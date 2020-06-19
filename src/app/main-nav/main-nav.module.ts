import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavRoutingModule } from './main-nav-routing.module';
import { MainNavComponent } from './main-nav.component';
import { BulmaNavbarModule, BulmaFooterModule, BulmaContainerModule } from 'ngx2-bulma';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MainNavRoutingModule,
    BulmaNavbarModule,
    BulmaFooterModule,
    BulmaContainerModule
  ],
  exports: [MainNavComponent]
})
export class MainNavModule { }
