import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { BulmaButtonModule, BulmaHeroModule } from 'ngx2-bulma';


@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    BulmaButtonModule,
    BulmaHeroModule
  ]
})
export class ShowModule { }
