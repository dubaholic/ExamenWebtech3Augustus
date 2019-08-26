import { Component, OnInit } from '@angular/core';
import {OvertredingService} from'../../services/overtreding.service';
import {Overtreding} from '../../models/overtreding';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  overtredings: Overtreding[] = [];
  constructor(private overtredinsgService: OvertredingService) { }

  ngOnInit() {
    this.overtredinsgService.getOvertredingen().subscribe(data => this.overtredings = data)
    
  }

}
