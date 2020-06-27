import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  dataUrl= './assets/show.json';

  constructor(private http: HttpClient) { }

  getTalks() {
    return this.http.get<Show[]>(this.dataUrl);
  }
}
