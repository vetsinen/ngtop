import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {

  }
  query():any{
    return this.http.get(
      'https://vetsinen.github.io/photobase/base.json');
  }
}
