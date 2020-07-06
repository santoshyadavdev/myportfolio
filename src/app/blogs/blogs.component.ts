import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../containers/services/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  @Input() blogs: Blog[];

}
