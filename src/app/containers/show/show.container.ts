import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import { SupbaseService } from '../services/supbase.service';

@Component({
  selector: 'app-show-container',
  templateUrl: './show.container.html',
  styleUrls: ['./show.container.scss'],
})
export class ShowContainer {
  showData$ = from(this.supacaseService.getShows()).pipe(
    map((res) => res.data)
  );

  constructor(private supacaseService: SupbaseService) {}
}
