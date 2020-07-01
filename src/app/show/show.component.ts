import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { ShowService } from './show.service';
import { Observable } from 'rxjs';
import { Show } from './show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @HostBinding('class') class= 'app-show';

  showData$: Observable<Show[]>;

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showData$ = this.showService.getTalks();
  }

}
