import { Component, OnInit } from '@angular/core';
import {Overtreding} from '../../models/overtreding';
import { FormControl, FormGroup } from '@angular/forms';
import {OvertredingService} from '../../services/overtreding.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchOvertreding: FormGroup;

  constructor(private overTredingService : OvertredingService) { }

  overtredingenGezocht: Overtreding[] = [];
  allOvertredingen: Overtreding[] = [];

  straat: string;

  ngOnInit() {
    this.searchOvertreding = new FormGroup({
      straat: new FormControl(''),
    });

    this.overTredingService.getOvertredingen().subscribe(data => this.allOvertredingen = data);

    
  }

  onSubmit() {
    this.overtredingenGezocht = this.overTredingService.searchOvertredingStraat(this.searchOvertreding.value.straat,
         this.allOvertredingen);
  }
}
