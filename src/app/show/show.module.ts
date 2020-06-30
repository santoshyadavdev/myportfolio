import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { BulmaButtonModule } from 'ngx2-bulma';


@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    BulmaButtonModule
  ]
})
export class ShowModule { }
