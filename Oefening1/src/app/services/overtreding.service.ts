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

  searchOvertredingStraat(opnameplaats_straat: string, allOvertredingen: Overtreding[]): Overtreding[] {
    //lege array van pokemons gedeclareerd die moeten worden teruggegeven 
    const someOvertredingen: Overtreding[] = [];
    //ingevoerde datums in variabele gestoken
      //de hele lijst van pokemons wordt geloopt
      for (const overtreding of allOvertredingen) {
        //waarbij elke pokemon zijn dataOwned wordt opgeslagen in een variabele
          const straatGezocht = overtreding.opnameplaats_straat
          const aantalGezocht = overtreding.aantal_overtredingen_snelheid;
          //en vervolgens wordt gechecked of deze pokemon zijn datum tussen de 2 opgegeven datums ligt
          if (opnameplaats_straat === straatGezocht) {
            //als dit zo is wordt de pokemon toegevoegd aan de array van pokemons die moeten worden teruggegeven
              someOvertredingen.push(overtreding);
      } 
  }
    //de array van de gezochte pokemon
      return someOvertredingen;
    }

    searchOvertredingAantal(aantal_overtredingen_snelheid: number, allOvertredingen: Overtreding[]): Overtreding[] {
      //lege array van pokemons gedeclareerd die moeten worden teruggegeven 
      const someOvertredingen: Overtreding[] = [];
      //ingevoerde datums in variabele gestoken
        //de hele lijst van pokemons wordt geloopt
        for (const overtreding of allOvertredingen) {
          //waarbij elke pokemon zijn dataOwned wordt opgeslagen in een variabele
            const aantalGezocht = overtreding.aantal_overtredingen_snelheid;
            //en vervolgens wordt gechecked of deze pokemon zijn datum tussen de 2 opgegeven datums ligt
            if (aantal_overtredingen_snelheid >= aantalGezocht) {
              //als dit zo is wordt de pokemon toegevoegd aan de array van pokemons die moeten worden teruggegeven
                someOvertredingen.push(overtreding);
        } 
    }
      //de array van de gezochte pokemon
        return someOvertredingen;
      }
}
