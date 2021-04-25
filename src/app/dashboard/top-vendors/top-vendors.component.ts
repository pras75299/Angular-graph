import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-top-vendors',
  templateUrl: './top-vendors.component.html',
  styleUrls: ['./top-vendors.component.css'],
  providers: [MessageService]
})
export class TopVendorsComponent implements OnInit { 
  
 
  constructor() {}

  ngOnInit(): void {
  }

}
