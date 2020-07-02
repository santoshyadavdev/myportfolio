import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { BulmaPanelModule, BulmaHeroModule, BulmaContainerModule, BulmaCardModule, BulmaButtonModule } from 'ngx2-bulma';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    BulmaHeroModule,
    BulmaContainerModule,
    BulmaCardModule,
    BulmaButtonModule
  ]
})
export class EventsModule { }
