import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Madlib } from '../../classes/madlib';

@Injectable()
export class MadlibService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getMadLibs(): Observable<any> {
    return this.http.get('/api/madlibs').map(res => res.json());
  }

  saveMadlib(madlib: Madlib): Observable<Madlib> {
    return this.http.post('/api/madlibs', madlib).map(res => res.json());
  }

}
