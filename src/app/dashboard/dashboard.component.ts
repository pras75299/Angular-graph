import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit { 
  

  TransportDesk: City[];  
 
  constructor() {
    this.TransportDesk = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
  }

  ngOnInit(): void {
  }

}
