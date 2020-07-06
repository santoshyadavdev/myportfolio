import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsContainerComponent } from './blogs-container.component';

const routes: Routes = [{ path: '', component: BlogsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsContainerRoutingModule { }
