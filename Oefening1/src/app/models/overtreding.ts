export class Overtreding {
    constructor(
        public id: number,
         public datum_vaststelling_jaar: number, 
         public datum_vaststelling_maand: number, 
         public datum_vaststelling: string,
         public opnameplaats_straat: string,
         public opnameplaats_rijrichting_gaand: string,
         public opnameplaats_zone_snelheid: number,
         public aantal_passanten: number,
         public aantal_overtredingen_snelheid: number,
         public aantal_overtredingen_roodlicht: number) 
         {}


         toForm(): string {
            return `${this.id} - ${this.datum_vaststelling} - ${this.datum_vaststelling_maand}  -
            ${this.datum_vaststelling_jaar} -
            ${this.opnameplaats_straat} - 
            ${this.opnameplaats_rijrichting_gaand} -
            ${this.opnameplaats_zone_snelheid} - 
            ${this.aantal_passanten} -
            ${this.aantal_overtredingen_snelheid} -
            ${this.aantal_overtredingen_roodlicht}
            `;
        }
}