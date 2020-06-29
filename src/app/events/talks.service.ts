import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Talks } from './talks';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  dataUrl = './assets/talks.json';

  constructor(private http: HttpClient) { }

  getTalks() {
    return this.http.get<Talks[]>(this.dataUrl);
  }
}
