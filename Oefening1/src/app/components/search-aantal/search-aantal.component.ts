import { Component, OnInit } from '@angular/core';
import {Overtreding} from '../../models/overtreding';
import { FormControl, FormGroup } from '@angular/forms';
import {OvertredingService} from '../../services/overtreding.service';

@Component({
  selector: 'app-search-aantal',
  templateUrl: './search-aantal.component.html',
  styleUrls: ['./search-aantal.component.css']
})
export class SearchAantalComponent implements OnInit {

  searchOvertreding: FormGroup;

  constructor(private overTredingService : OvertredingService) { }

  overtredingenGezocht: Overtreding[] = [];
  allOvertredingen: Overtreding[] = [];

  aantal: number;

  ngOnInit() {
    this.searchOvertreding = new FormGroup({
      aantal: new FormControl(''),
    });

    this.overTredingService.getOvertredingen().subscribe(data => this.allOvertredingen = data);

    
  }

  onSubmit() {
    this.overtredingenGezocht = this.overTredingService.searchOvertredingAantal(this.searchOvertreding.value.aantal,
         this.allOvertredingen);
  }

}
