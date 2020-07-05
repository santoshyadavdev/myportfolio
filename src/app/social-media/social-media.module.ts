import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { BulmaBoxModule } from 'ngx2-bulma';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule,
    BulmaBoxModule
  ],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
