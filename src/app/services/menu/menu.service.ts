import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MenuItem } from '../../classes/menuitem';

@Injectable()
export class MenuService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getMenuItems(): Observable<MenuItem> {
    return this.http.get('/api/menuitems').map(res => res.json());
  }

}
