import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-container-routing.module';
import { BulmaHeroModule, BulmaContainerModule } from 'ngx2-bulma';
import { ShowContainer } from './show.container';
import { ShowModule } from 'src/app/show/show.module';


@NgModule({
  declarations: [ShowContainer],
  imports: [
    CommonModule,
    ShowRoutingModule,
    ShowModule,
    BulmaHeroModule,
    BulmaContainerModule
  ]
})
export class ShowContainerModule { }
