import { Component, OnInit } from '@angular/core';

import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-show-container',
  templateUrl: './show.container.html',
  styleUrls: ['./show.container.scss']
})
export class ShowContainer {

  showData$ = this.showService.getTalks();

  constructor(private showService: ShowService) { }

}
