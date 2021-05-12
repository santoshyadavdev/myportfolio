import { Component, } from '@angular/core';
import { map  } from 'rxjs/operators';
import compareAsc from 'date-fns/compareAsc';
import { SupbaseService } from '../services/supbase.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-recentevents',
  templateUrl: './recentevents.component.html',
  styleUrls: ['./recentevents.component.scss'],
})
export class RecenteventsComponent {
  showData$ = from(this.supacaseService.getShows()).pipe(
    map((res) =>
      res.data.filter(
        (show) => compareAsc(new Date(show.datetime), new Date()) === 1
      )
    ),
    map((ordered) => ordered.slice(0, 3))
  );

  constructor(private supacaseService: SupbaseService) {}
}
