import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { BulmaHeroModule, BulmaButtonModule } from 'ngx2-bulma';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    BulmaButtonModule,
    BulmaHeroModule
  ],
  exports: [ShowComponent]
})
export class ShowModule { }
