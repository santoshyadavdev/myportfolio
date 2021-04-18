import { Component, ViewEncapsulation, HostBinding, Input, OnInit } from '@angular/core';
import { Show } from '../containers/services/show';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @HostBinding('class') class = 'app-show';

  @Input() showData: Show[];

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
