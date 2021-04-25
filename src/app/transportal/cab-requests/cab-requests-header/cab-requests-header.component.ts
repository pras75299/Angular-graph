import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageService} from 'primeng/api';
import { EmployeeService } from '../../../_services/employee.service'
import {SelectItemGroup} from 'primeng/api';
import animationDataSe from 'src/assets/json/search.json';
import animationCalendarJson from 'src/assets/json/calendar_icon.json';
import animationTimeJson from 'src/assets/json/time_icon.json';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-cab-requests-header',
  templateUrl: './cab-requests-header.component.html',
  styleUrls: ['./cab-requests-header.component.css'],
  providers: [MessageService, EmployeeService]
})
export class CabRequestsHeaderComponent implements OnInit { 
  
  @ViewChild("dateFilter", undefined) private dateFilter: any;
 
  public datesRangeFilter: Date[];
 
  public onDatesRangeFilterSelected(selectedValue: Date) {
    if (this.datesRangeFilter[1]) {
      this.dateFilter.hideOverlay();
    }
  }


  role = ''; 
  role1 = '';

  tab1:any ='../assets/images/tab1.svg';

  countries: any[];      
  filteredCountries: any[];  
  selectedCountries: any[];
  selectedCountryAdvanced: any[];
  selectedCountryAdvanced1: any[];
  filteredBrands: any[];
  cities: City[];
  selectedCities4: any[];
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

  public lottieConfig: Object;
  private anim: any; 

  public lottieConfigCalendar: Object;
  private animCalendar: any;   
 
  constructor( private EmployeeService: EmployeeService) {
    
    this.lottieConfig = {
      animationData: animationDataSe,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };

    this.lottieConfigCalendar = {
      animationData: animationCalendarJson,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.cities = [
      {name: 'Noida SEZ-Tower2-U1-All Floors', code: 'NY'},
      {name: 'Option 2', code: 'RM'},
      {name: 'Option 3', code: 'LDN'},
      {name: 'Option 4', code: 'IST'},
      {name: 'Option 5', code: 'PRS'}
    ];
    this.Country = [
      {name: 'Select', code: ''},
      {name: 'Noida SEZ-Tower2-U1-All Floors', code: ''},
      {name: 'Option 2', code: ''}
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

  handleAnimation(anim: any) {
    this.anim = anim; 
  }
  play() { 
    this.anim.stop();
      this.anim.play();
  }


  handleAnimationCalendar(animCalendar: any) {
    this.animCalendar = animCalendar; 
  }
  playCalendar() { 
    this.animCalendar.stop();
      this.animCalendar.play();
  }



  ngOnInit(): void {
    this.EmployeeService.getCountries().then(countries => {
      this.countries = countries;
    });
  }
  employees: any[] = [
    {
      "name": "Saket Kumar",
      "employeeId": "51448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    },
    {
      "name": "Amarnath Kumar",
      "employeeId": "53448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    },
    {
      "name": "Sanjeev Goel",
      "employeeId": "54448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    },
    {
      "name": "Supriya Kumari",
      "employeeId": "51448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    },
    {
      "name": "Deepak Gupta",
      "employeeId": "51448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    },
    {
      "name": "Anupama Gupta",
      "employeeId": "51448564",
      "employeePosition": "Project Manager",
      "employeeBand": "E3",
      "employeedu": "HCLISD US DEL- NORAM2B-NORAM 2B-B1",
      "employeeloc": "Noida"
    }
  ];
  filteredBrandsNew: any[];
  selectedBrandsNewAdvanced: any[];
  

  filterBrands(event) {
    this.filteredBrandsNew = [];
    for(let i = 0; i < this.employees.length; i++) {
        let employee = this.employees[i];
        if (employee.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrandsNew.push(employee);
        }
      }
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

  
  

}
