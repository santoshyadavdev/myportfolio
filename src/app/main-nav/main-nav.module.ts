import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavRoutingModule } from './main-nav-routing.module';
import { MainNavComponent } from './main-nav.component';
import { BulmaNavbarModule, BulmaFooterModule, BulmaContainerModule, BulmaHeroModule, BulmaButtonModule } from 'ngx2-bulma';
import { SocialMediaModule } from '../social-media/social-media.module';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MainNavRoutingModule,
    SocialMediaModule,
    BulmaNavbarModule,
    BulmaFooterModule,
    BulmaContainerModule,
    BulmaHeroModule,
    BulmaButtonModule,
  ],
  exports: [MainNavComponent]
})
export class MainNavModule { }
