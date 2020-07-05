import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowContainer } from './show.container';

const routes: Routes = [{ path: '', component: ShowContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
