import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BulmaHeroModule, BulmaContainerModule, BulmaButtonModule } from 'ngx2-bulma';


@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    BulmaHeroModule,
    BulmaContainerModule,
    BulmaButtonModule
  ],
  exports: [BlogsComponent]
})
export class BlogsModule { }
