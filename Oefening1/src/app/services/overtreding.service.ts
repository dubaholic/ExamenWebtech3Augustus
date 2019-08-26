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
    
      return this.http.get<Overtreding[]>(this._url);
  }

  searchOvertredingStraat(opnameplaats_straat: string, allOvertredingen: Overtreding[]): Overtreding[] {
   const someOvertredingen: Overtreding[] = [];
      for (const overtreding of allOvertredingen) {
          const straatGezocht = overtreding.opnameplaats_straat
          const aantalGezocht = overtreding.aantal_overtredingen_snelheid;
        
          if (opnameplaats_straat === straatGezocht) {
           someOvertredingen.push(overtreding);
      } 
  }
    return someOvertredingen.sort();
    }

    searchOvertredingAantal(aantal_gezocht: number, allOvertredingen: Overtreding[]): Overtreding[] {
      const overtredingSnelheid: Overtreding[] = [];
        for (const overtreding of allOvertredingen) {
            const aantalGezocht = overtreding.aantal_overtredingen_snelheid;
            if (aantalGezocht >=  aantal_gezocht) {
                overtredingSnelheid.push(overtreding);
        } 
    }
      
        return overtredingSnelheid.sort();
      }
}
