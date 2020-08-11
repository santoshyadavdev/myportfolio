import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-recentblogs',
  templateUrl: './recentblogs.component.html',
  styleUrls: ['./recentblogs.component.css']
})
export class RecentblogsComponent {

  constructor(private blogService: BlogService) { }

  recentBlogs$ = this.blogService.getBlogs().pipe(map(blogs => blogs.slice(0, 3)));


}
