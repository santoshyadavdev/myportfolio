import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { BlogService } from '../containers/services/blog.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  @HostBinding('class') class = 'app-home';

}
