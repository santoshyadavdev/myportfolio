import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { TalksService } from './talks.service';
import { Observable } from 'rxjs';
import { Talks } from './talks';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  @HostBinding('class') class = 'app-events';

  talks$: Observable<Talks[]>;

  constructor(private talkService: TalksService) { }

  ngOnInit(): void {
    this.talks$ = this.talkService.getTalks();
  }


}
