import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs-container',
  templateUrl: './blogs-container.component.html',
  styleUrls: ['./blogs-container.component.css']
})
export class BlogsContainerComponent {

  constructor(private blogsService: BlogService) { }

  blogs$ = this.blogsService.getBlogs();

}
