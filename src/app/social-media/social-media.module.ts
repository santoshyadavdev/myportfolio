import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { BulmaBoxModule } from 'ngx2-bulma';
import { BuyMeCofeeModule } from '../buy-me-cofee/buy-me-cofee.module';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule,
    BulmaBoxModule,
    BuyMeCofeeModule
  ],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
