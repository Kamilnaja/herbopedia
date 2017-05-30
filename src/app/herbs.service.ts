import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HerbsService {
  private _url= 'api/herbs';
  constructor(private _http: Http) {}
  getHerbs () {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}
