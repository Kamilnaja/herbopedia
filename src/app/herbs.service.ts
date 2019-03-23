import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HerbsService {
  private _url = 'api/herbs';
  private port = 8080;

  constructor(private _http: Http) { }

  getHerbs() {
    return this._http.get('http://localhost:8080/api/herbs')
      .map((response: Response) => response.json());
  }
}
