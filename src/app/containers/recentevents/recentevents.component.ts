import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';
import { filter, map, take, tap} from 'rxjs/operators'
import compareAsc from 'date-fns/compareAsc'

@Component({
  selector: 'app-recentevents',
  templateUrl: './recentevents.component.html',
  styleUrls: ['./recentevents.component.scss']
})
export class RecenteventsComponent  {

  showData$ = this.showService.getTalks().pipe(
    map(data=> data.filter(show=> compareAsc(new Date(show.datetime), new Date()) == 1)),
    map(ordered => ordered.slice(0,3))
  );


  constructor(private showService: ShowService) { }


}
