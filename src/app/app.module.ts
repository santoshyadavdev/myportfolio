import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MainNavModule } from './main-nav/main-nav.module';
import { HomeComponent } from './home/home.component';
import { BulmaHeroModule, BulmaButtonModule, BulmaContainerModule, BulmaFooterModule, BulmaBoxModule, BulmaCardModule } from 'ngx2-bulma';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { EventContainer } from './containers/event/event.container';
import { ShowComponent } from './show/show.component';
import { ShowModule } from './show/show.module';
import { RecenteventsComponent } from './containers/recentevents/recentevents.component';
import { SocialMediaModule } from './social-media/social-media.module';
import { BlogsModule } from './blogs/blogs.module';
import { RecentblogsComponent } from './containers/recentblogs/recentblogs.component';
import { ScrollerComponent } from './scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    EventContainer,
    RecenteventsComponent,
    RecentblogsComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ShowModule,
    MainNavModule,
    BulmaHeroModule,
    BulmaButtonModule,
    BulmaContainerModule,
    BulmaFooterModule,
    BulmaBoxModule,
    BulmaButtonModule,
    BulmaCardModule,
    HttpClientModule,
    SocialMediaModule,
    BlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
