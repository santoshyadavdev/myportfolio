import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsContainerRoutingModule } from './blogs-container-routing.module';
import { BlogsContainerComponent } from './blogs-container.component';
import { BulmaHeroModule, BulmaContainerModule } from 'ngx2-bulma';
import { BlogsModule } from 'src/app/blogs/blogs.module';


@NgModule({
  declarations: [BlogsContainerComponent],
  imports: [
    CommonModule,
    BlogsContainerRoutingModule,
    BulmaHeroModule,
    BulmaContainerModule,
    BlogsModule
  ]
})
export class BlogsContainerModule { }
