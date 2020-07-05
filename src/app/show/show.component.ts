import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import { Show } from '../containers/services/show';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

  @HostBinding('class') class = 'app-show';

  @Input() showData: Show[];

}
