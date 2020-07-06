import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  dataUrl= './assets/blogs.json';

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<Blog[]>(this.dataUrl);
  }
}
