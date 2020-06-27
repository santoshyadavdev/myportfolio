import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MainNavModule } from './main-nav/main-nav.module';
import { HomeComponent } from './home/home.component';
import { BulmaHeroModule, BulmaButtonModule, BulmaContainerModule, BulmaFooterModule } from 'ngx2-bulma';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    MainNavModule,
    BulmaHeroModule,
    BulmaButtonModule,
    BulmaContainerModule,
    BulmaFooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
