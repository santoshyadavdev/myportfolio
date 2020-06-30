import { Component, OnInit } from '@angular/core';
import { ShowService } from './show.service';
import { Observable } from 'rxjs';
import { Show } from './show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  showData$: Observable<Show[]>;

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showData$ = this.showService.getTalks();
  }

}
