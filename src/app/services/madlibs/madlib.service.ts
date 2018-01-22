import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Madlib } from '../../classes/madlib';

@Injectable()
export class MadlibService {
  private _baseUrl = '/api/madlibs';
  private  _urls = {
    get: this._baseUrl,
    save: this._baseUrl,
    getOne: this._baseUrl + '/findByName'
  };

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getMadLibs(): Observable<any> {
    return this.http.get(this._urls.get).map(res => res.json());
  }

  getMadLib(query: any): Observable<any> {
    const params = this.serialize(query);
    return this.http.get(this._urls.getOne + '?' + params).map(res => res.json());
  }

  saveMadlib(madlib: Madlib): Observable<Madlib> {
    return this.http.post(this._urls.save, madlib).map(res => res.json());
  }

  serialize(obj: any) {
    const params: URLSearchParams = new URLSearchParams();


    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];

            params.set(key, element);
        }
    }

    return params;
}
}
