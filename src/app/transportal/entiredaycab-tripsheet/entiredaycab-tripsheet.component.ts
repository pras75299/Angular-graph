import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageService} from 'primeng/api';
import { CountryService } from '../../_services/countryservice';




interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-entiredaycab-tripsheet',
  templateUrl: './entiredaycab-tripsheet.component.html',
  styleUrls: ['./entiredaycab-tripsheet.component.css'],
  providers: [MessageService]
})
export class EntiredayCabSheetComponent implements OnInit { 
  

  role = ''; 
  role1 = '';

  tab1:any ='../assets/images/tab1.svg';

  countries: any[];      
  filteredCountries: any[];  
  selectedCountries: any[];
  selectedCountryAdvanced: any[];
  selectedCountryAdvanced1: any[];
  filteredBrands: any[];


   // onClick button Enable
   clicked = true;
   changeEvent(event) {
     //console.log("event.target.value",event);
     if(event.checked){
        this.clicked = false;
        //console.log("checkedbtn value",this.checkedbtn);
     }else{
        this.clicked = true;
     }        
    }

  Country: City[];
  timeRange: City[];
  CabType: City[];
  Company: City[];
 
  constructor(private messageService: MessageService,  private CountryService: CountryService,) {
    this.Country = [
      {name: 'Select', code: ''},
      {name: 'India', code: ''},
      {name: 'Newzeland', code: ''} 
    ];

    this.timeRange = [
      {name: 'Select', code: ''},
      {name: '10:00 AM - 12:30 PM', code: ''},
      {name: '12:00 PM - 02:30 PM', code: ''}
    ];

    this.CabType = [
      {name: 'Select', code: ''},
      {name: 'Non-Premium', code: ''},
      {name: 'Premium', code: ''},
      {name: 'Luxury', code: ''},
      {name: 'Night Cab', code: ''}
    ];

    this.Company = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];

   }

   filterCountry(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    
    this.filteredCountries = filtered;
  }

  ngOnInit(): void {
    this.CountryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  // Reject Modal Msg
  onReject() {
    this.messageService.clear('d');
  }

// Refer Back Alert Mdl  
  referBack() {
    this.messageService.add({key: 'd', sticky: true, severity:'success'});
  }
// Refer Back Alert Success Msg
  referSuccess() {
    this.messageService.clear('d'); 
    this.messageService.add({key: 'tl', severity:'success',});
    // setTimeout(() => {
    //   this.router.navigate(['/enrolmentTopUp']);
    // }, 3500);
  }
// Approval Alert Mdl
  approval (){
    this.messageService.add({key: 'a', sticky: true, severity:'success'});
  }
  // Approval Alert Success Msg
  approvalSuccess() {
    this.messageService.clear('a'); 
    this.messageService.add({key: 'as', severity:'success',});
    // setTimeout(() => {
    //   this.router.navigate(['/enrolmentTopUp']);
    // }, 3500);
  }
  

}
