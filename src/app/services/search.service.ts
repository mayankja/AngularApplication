import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult = (val) => {
    return this.http.get(`https://api.github.com/search/users?q=${val}`);
  }
}
