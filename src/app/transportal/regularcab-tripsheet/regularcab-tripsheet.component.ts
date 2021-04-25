import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-regularcab-tripsheet',
  templateUrl: './regularcab-tripsheet.component.html',
  styleUrls: ['./regularcab-tripsheet.component.css'],
  providers: [MessageService]
})
export class RegularcabTripSheetComponent implements OnInit { 
  
 
  constructor() {}

  ngOnInit(): void {
  }

  windowPrintFn(){
    window.print();
  }

}
