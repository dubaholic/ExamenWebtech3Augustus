import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Overtreding} from '../models/overtreding';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {
  private _url: string = '/assets/data/overtredingen.json';

  constructor(private http: HttpClient) { }

  getOvertredingen(): Observable<Overtreding[]>{
    //returned alle pokemon objecten van de meegegeven json
      return this.http.get<Overtreding[]>(this._url);
  }
}
