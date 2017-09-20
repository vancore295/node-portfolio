import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  findByType(shop): Observable<any> {
    return this.http.get('api/shop/${shop.type}').map(res => res.json());
  }

  getAll(): Observable<any> {
    return this.http.get('api/shopitems').map(res => res.json());
  }

}
