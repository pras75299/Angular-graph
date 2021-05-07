import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MessageService} from 'primeng/api';
import { CountryService } from '../../_services/countryservice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import animationDataSe from 'src/assets/json/search.json';
import animationDataEX from 'src/assets/json/excel.json';

import animationDataInfoIcon from 'src/assets/json/info_icon.json';
import animationDataOneway from 'src/assets/json/one_way_icon.json';
import animationDataRoundway from 'src/assets/json/return_trip_icon.json';
import animationDataEntireDay from 'src/assets/json/entire_day_icon.json';

import animationDataCalendar from 'src/assets/json/calendar_icon.json';
import animationDataTranfer from 'src/assets/json/transfer_icon.json';
import animationDataEmail from 'src/assets/json/email_icon.json';
import animationDataCancel from 'src/assets/json/cancel_icon.json';
import animationDataDelete from 'src/assets/json/delete_icon.json';



interface City {
  name: string;
  code: string;
}

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'extraCardOne',},
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardTwo', },
  {name: 'CardThree', },
  
];


export interface PeriodicElementOne {
  name: string;
}

const ELEMENT_DATA_ONE: PeriodicElementOne[] = [
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardTwo', },
  {name: 'CardThree', }
];


export interface PeriodicElementTwo {
  name: string;
}

const ELEMENT_DATA_TWO: PeriodicElementTwo[] = [
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardOne', },
  {name: 'CardTwo', },
  {name: 'CardThree', }
];


@Component({
  selector: 'app-cab-requests',
  templateUrl: './cab-requests.component.html',
  styleUrls: ['./cab-requests.component.css'],
  providers: [MessageService]
})
export class CabRequestsComponent implements OnInit { 

  @ViewChild("dateFilter", undefined) private dateFilter: any;
 
  public datesRangeFilter: Date[];
 
  public onDatesRangeFilterSelected(selectedValue: Date) {
    if (this.datesRangeFilter[1]) {
      this.dateFilter.hideOverlay();
    }
  }

  role3 = '';
  role4 = '';
  mast = false;
  hiddenFields:boolean = true;
  onClickhiddenFields:boolean = false;
  radioModel = 'Local';
  radioModelReqType = 'Project';
  modalRef: BsModalRef;
  /* onclick checkbox Button Enable & Disable */
  
  clicked = true;
  changeEvent(event) {
    //console.log("event.target.value",event);
    if(event.checked){
      this.clicked = false;
      console.log("checkedbtn value");
    } else{
      this.clicked = true;
    }        
  }

  clickedBook = true;
  changeEventBooked(event) {
    if(event.checked){
      this.clickedBook = false;
      //console.log("checkedbtn value",this.checkedbtn);
    }else{
      this.clickedBook = true;
    }  
  }

  checkedMyReq = true;
  changeEventMyReq(event) {
    if(event.checked){
      this.checkedMyReq = false;
      //console.log("checkedbtn value",this.checkedbtn);
    }else{
      this.checkedMyReq = true;
    }  
  }

  /* onclick checkbox Button Enable & Disable End */
  // @ViewChild('MatPaginator') paginator: MatPaginator;
  @ViewChild('MatPaginator1') MatPaginator1: MatPaginator;
  @ViewChild('MatPaginator2') MatPaginator2: MatPaginator;
  @ViewChild('MatPaginator3') MatPaginator3: MatPaginator;

  displayedColumns: string[] = ['select', 'name',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

  displayedColumnsOne: string[] = ['select', 'name',];
  dataSourceOne = new MatTableDataSource<PeriodicElementOne>(ELEMENT_DATA_ONE);
  selectionOne = new SelectionModel<PeriodicElementOne>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedOne() {
    const numSelectedOne = this.selectionOne.selected.length;
    const numRowsOne = this.dataSourceOne.data.length;
    return numSelectedOne === numRowsOne;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleOne() {
    this.isAllSelectedOne() ?
        this.selectionOne.clear() :
        this.dataSourceOne.data.forEach(row => this.selectionOne.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelOne(row?: PeriodicElementOne): string {
    if (!row) {
      return `${this.isAllSelectedOne() ? 'select' : 'deselect'} all`;
    }
    //return `${this.selectionOne.isAllSelectedOne(row) ? 'deselect' : 'select'} row`;
  }

  displayedColumnsTwo: string[] = ['select', 'name',];
  dataSourceTwo = new MatTableDataSource<PeriodicElementTwo>(ELEMENT_DATA_TWO);
  selectionTwo = new SelectionModel<PeriodicElementTwo>(true, []);


  ngAfterViewInit() {
    this.dataSource.paginator = this.MatPaginator1;
    this.dataSourceOne.paginator = this.MatPaginator2;
    this.dataSourceTwo.paginator = this.MatPaginator3;
  }
  
  // Request type active inactive
  selectedIndexReqType1: number = 0;
  subModulesReqType1 = [{ name: "Project" }, { name: "RCC" }]

  setIndexReqType1(index: number) {
    this.selectedIndexReqType1 = index;
  } 

  // Request type active inactive
  selectedIndex: number = 0;
  subModules = [{ name: "Project" }, { name: "RCC" }]

  setIndex(index: number) {
    this.selectedIndex = index;
  } 

  // Cab type active inactive
  selectedIndexCabType: number = 0;
  subModulesCabType = [{ name: "Non-Premium" }, { name: "Premium" }, { name: "Luxury" }]

  setIndexCabType(index: number) {
    this.selectedIndexCabType = index;
  } 


  // Trip type active inactive
  selectedIndexTripType: number = 0;
  subModulesTripType = [{ name: "One Way" }, { name: "Return" }, { name: "Entire Day" }]

  setIndexTripType(index: number) {
    this.selectedIndexTripType = index;
  } 

  // Req type active inactive
  selectedIndexReqs: number = 0;
  subModulesReqs = [{ name: "Local" }, { name: "Traveller" }]

  setIndexReqs(index: number) {
    this.selectedIndexReqs = index;
  } 

  travellerClick() {
    this.hiddenFields = false;
    this.onClickhiddenFields = true;
  }

  localTravelClick() {
    this.hiddenFields = true;
    this.onClickhiddenFields = false;
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


   
 
  Country: City[];
  policy: City[];
  Status: City[];
  Company: City[];
  TripType: City[];
  BookingType: City[];
  RmApproval: City[];
  Location: City[];
  Distance: City[];
  SequenceType: City[];
  approvingAuthority: City[];  
  ProjectName: City[];  
  TransportDesk: City[];
  PickupCity: City[];
  DropupCity: City[];
  Resons: City[];
  TasId: City[];
  CancelReasons: City[];
  SelectTransportDesk: City[];

  addedCopassanger:any[];
  addedLocation:any[];
  passangerList:any[];
  bookButton:boolean = true;
  bookedButton:boolean = false;
  
  driverDetailsDiv:boolean = true;
  driverFormDiv:boolean = false;

  statusCalendarIcon:boolean = true;
  statusTransferIcon:boolean = false;
  statusCancelIcon:boolean = false;
  vendorCalendarDiv: boolean = true;
  cancelClickDiv:boolean = false;
  transportClickDiv:boolean = false;

  cancelBtnBoolean:boolean = true;
  cancelledBtnBoolean:boolean = false;

  transferBtnBoolean:boolean = true;
  transferledBtnBoolean:boolean = false;

  editIconFunction(){
    this.driverDetailsDiv=false;
    this.driverFormDiv=true;
  }
  onSubmitDriverForm() {
    this.driverDetailsDiv=true;
    this.driverFormDiv=false;
  }

  onCalendarIconClickFn(){
    this.vendorCalendarDiv=true;
    this.transportClickDiv = false;
    this.cancelClickDiv=false;
    this.statusCalendarIcon = true;
    this.statusCancelIcon=false;
    this.statusTransferIcon = false;
  }

  onCancelIconClickFn(){
    this.vendorCalendarDiv=false;
    this.transportClickDiv = false;
    this.cancelClickDiv=true;
    this.statusCancelIcon = true;
    this.statusCalendarIcon = false;
    this.statusTransferIcon = false;
  }
  onCancelButtonClickFn(){
    // this.vendorCalendarDiv=false;
    // this.cancelClickDiv=true;
    // this.transportClickDiv = false;
    this.cancelBtnBoolean = false;
    this.cancelledBtnBoolean = true;
  }

  onTransportIconClickFn(){
    this.vendorCalendarDiv=false;
    this.cancelClickDiv=false;
    this.transportClickDiv=true;    
    this.statusTransferIcon = true;
    this.statusCancelIcon = false;
    this.statusCalendarIcon = false;
  }
  
  onTransportButtonClickFn(){
    this.transferBtnBoolean = false;
    this.transferledBtnBoolean = true;
  }


  public demo1TabIndex = 0;


  drivers: any[];      
  filteredDrivers: any[];  
  selectedDrivers: any[];
  selectedDriversAdvanced: any[];


  vendors: any[];      
  filteredVendors: any[];  
  selectedVendors: any[];
  selectedVendorsAdvanced: any[];


  bookBtnFunction(){
    this.bookButton=false;
    this.bookedButton=true;
    const tabCount = 3;
    setTimeout(() => {
      this.demo1TabIndex = (this.demo1TabIndex + 1) % tabCount;
    }, 1000);    
  }

  

  //  ANIMATION
  public lottieConfig: Object;
  public lottieConfig2: Object;
  public lottieConfig3: Object;
  public lottieConfig4: Object;
  public lottieConfig5: Object;
  public lottieConfig6: Object;


  private anim: any; 
  private anim2: any; 
  private anim3: any; 
  private anim4: any; 
  private anim5: any;
  private anim6: any;


  public lottieConfigCalendar: Object;
  private animCalendar: any;


  public lottieConfigTransferIcon: Object;
  private animTransfer: any;

  public lottieConfigEmailIcon: Object;
  private animEmailIcon: any;

  public lottieConfigCancelIcon: Object;
  private animCancelIcon: any;


  public lottieConfigDeleteIcon: Object;
  private animDeleteIcon: any;

  constructor(private messageService: MessageService,  private CountryService: CountryService,private modalService: BsModalService) {   
    this.lottieConfigDeleteIcon = {
      animationData: animationDataDelete,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };   
    this.lottieConfigCancelIcon = {
      animationData: animationDataCancel,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.lottieConfigEmailIcon = {
      animationData: animationDataEmail,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.lottieConfigTransferIcon = {
      animationData: animationDataTranfer,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.lottieConfigCalendar = {
      animationData: animationDataCalendar,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.lottieConfig = {
      animationData: animationDataSe,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.lottieConfig3 = {
      animationData: animationDataEX,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };

    this.lottieConfig2 = {
      animationData: animationDataInfoIcon,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };

    this.lottieConfig4 = {
      animationData: animationDataOneway,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };

    this.lottieConfig5 = {
      animationData: animationDataRoundway,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };

    this.lottieConfig6 = {
      animationData: animationDataEntireDay,
      renderer: 'svg',
      autoplay: true,
      loop: false
    };
    this.SelectTransportDesk = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.CancelReasons = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.TasId = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.Resons = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.addedLocation=[
      {location:'Sez, Kanpur, Sector-126, Kanpur'},
      {location:'A- 8 & 9, Maharaja Agrasen Marg, Block- A, Sector-60, Kanpur'},
    ]
    this.DropupCity = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.PickupCity = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.TransportDesk = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.ProjectName = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.BookingType = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    
    this.approvingAuthority = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ]
    this.SequenceType = [
      {name: 'Select', code: ''},
      {name: '1', code: ''},
      {name: '2', code: ''}
    ]
    this.TripType = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.Distance = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.RmApproval = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.Location = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];
    this.Country = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];

    this.policy = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];

    this.Status = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];

    this.Company = [
      {name: 'Select', code: ''},
      {name: 'Option 1', code: ''},
      {name: 'Option 2', code: ''}
    ];

    this.addedCopassanger=[
      {empname:'Manju Devi',sapid:'40180335'},
    ]
    this.passangerList =[
      {empname:'Manju Devi',sapid:'40180335',designation:'SENIOR TECHNICAL LEAD',band:'E4',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
      {empname:'Rohit Sharma',sapid:'51556185',designation:'LEAD CONSULTANT',band:'E3',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
      {empname:'Ankita Tiwari',sapid:'51687772',designation:'VISUAL DESIGNER',band:'E1',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
      {empname:'Manju Devi',sapid:'40180335',designation:'SENIOR TECHNICAL LEAD',band:'E4',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
      {empname:'Rohit Sharma',sapid:'51556185',designation:'LEAD CONSULTANT',band:'E3',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
      {empname:'Ankita Tiwari',sapid:'51687772',designation:'VISUAL DESIGNER',band:'E1',department:'BTIS - BTIS - EIS - DU1, Kanpur'},
    ]

  }

  handleAnimationDeleteIcon(animDeleteIcon: any) {
    this.animDeleteIcon = animDeleteIcon; 
  }
  playDeleteIcon() { 
    this.animDeleteIcon.stop();
    this.animDeleteIcon.play();
  }


  handleAnimationCancelIcon(animCancelIcon: any) {
    this.animCancelIcon = animCancelIcon; 
  }
  playCancelIcon() { 
    this.animCancelIcon.stop();
    this.animCancelIcon.play();
  }
  handleAnimationCancelIcon1(animCancelIcon: any) {
    this.animCancelIcon = animCancelIcon; 
  }
  playCancelIcon1() { 
    this.animCancelIcon.stop();
    this.animCancelIcon.play();
  }
  handleAnimationCancelIcon2(animCancelIcon: any) {
    this.animCancelIcon = animCancelIcon; 
  }
  playCancelIcon2() { 
    this.animCancelIcon.stop();
    this.animCancelIcon.play();
  }

  handleAnimationEmailIcon(animEmailIcon: any) {
    this.animEmailIcon = animEmailIcon; 
  }
  playEmailIcon() { 
    this.animEmailIcon.stop();
    this.animEmailIcon.play();
  }
  handleAnimationEmailIcon1(animEmailIcon: any) {
    this.animEmailIcon = animEmailIcon; 
  }
  playEmailIcon1() { 
    this.animEmailIcon.stop();
    this.animEmailIcon.play();
  }
  handleAnimationEmailIcon2(animEmailIcon: any) {
    this.animEmailIcon = animEmailIcon; 
  }
  playEmailIcon2() { 
    this.animEmailIcon.stop();
    this.animEmailIcon.play();
  }


  handleAnimationTransfer(animTransfer: any) {
    this.animTransfer = animTransfer; 
  }
  playTransfer() { 
    this.animTransfer.stop();
    this.animTransfer.play();
  }
  handleAnimationTransfer1(animTransfer: any) {
    this.animTransfer = animTransfer; 
  }
  playTransfer1() { 
    this.animTransfer.stop();
    this.animTransfer.play();
  }
  handleAnimationTransfer2(animTransfer: any) {
    this.animTransfer = animTransfer; 
  }
  playTransfer2() { 
    this.animTransfer.stop();
    this.animTransfer.play();
  }

  handleAnimationCalendar(animCalendar: any) {
    this.animCalendar = animCalendar; 
  }
  playCalendar() { 
    this.animCalendar.stop();
      this.animCalendar.play();
  }
  handleAnimationCalendar1(animCalendar: any) {
    this.animCalendar = animCalendar; 
  }
  playCalendar1() { 
    this.animCalendar.stop();
    this.animCalendar.play();
  }
  handleAnimationCalendar2(animCalendar: any) {
    this.animCalendar = animCalendar; 
  }
  playCalendar2() { 
    this.animCalendar.stop();
    this.animCalendar.play();
  }


  handleAnimation(anim: any) {
    this.anim = anim; 
  }
  
  handleAnimation2(anim2: any) {
  this.anim2 = anim2; 
  }
  handleAnimation3(anim3: any) {
  this.anim3 = anim3; 
  }
  
  handleAnimation4(anim4: any) {
  this.anim4 = anim4; 
  }
  
  handleAnimation5(anim5: any) {
  this.anim5 = anim5; 
  }

  handleAnimation6(anim6: any) {
    this.anim6 = anim6; 
  }
  
  
  
  play() { 
  this.anim.stop();
    this.anim.play();
  }
  play2() { 
  this.anim2.stop();
    this.anim2.play();
  }
  play3() { 
  this.anim3.stop();
    this.anim3.play();
  }
  
  play4() { 
  this.anim4.stop();
    this.anim4.play();
  }
  
  play5() { 
  this.anim5.stop();
   this.anim5.play();
  }

  play6() { 
    this.anim6.stop();
     this.anim6.play();
  }
  
  // Download
  private Down1: any; 
  handleAnimationDown1(Down1: any) {
    this.Down1 = Down1; 
    }
  playDown1() { 
    this.Down1.stop();
     this.Down1.play();
    }
  
    private Down2: any; 
  handleAnimationDown2(Down2: any) {
    this.Down2 = Down2; 
    }
  playDown2() { 
    this.Down2.stop();
     this.Down2.play();
    }
  
  
    private Down3: any; 
  handleAnimationDown3(Down3: any) {
    this.Down3 = Down3; 
    }
  playDown3() { 
    this.Down3.stop();
     this.Down3.play();
    }
  
  
    private Down4: any; 
  handleAnimationDown4(Down4: any) {
    this.Down4 = Down4; 
    }
  playDown4() { 
    this.Down4.stop();
     this.Down4.play();
    }
  
  
    private Down5: any; 
  handleAnimationDown5(Down5: any) {
    this.Down5 = Down5; 
    }
  playDown5() { 
    this.Down5.stop();
     this.Down5.play();
    }
  
  
    private Down6: any; 
  handleAnimationDown6(Down6: any) {
    this.Down6 = Down6; 
    }
  playDown6() { 
    this.Down6.stop();
     this.Down6.play();
    }
  
  
    private Down7: any; 
  handleAnimationDown7(Down7: any) {
    this.Down7 = Down7; 
    }
  playDown7() { 
    this.Down7.stop();
     this.Down7.play();
    }
  
  
    private Down8: any; 
  handleAnimationDown8(Down8: any) {
    this.Down8 = Down8; 
    }
  playDown8() { 
    this.Down8.stop();
     this.Down8.play();
    }



  filterDriver(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.drivers.length; i++) {
        let driver = this.drivers[i];
        if (driver.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(driver);
        }
    }
    
    this.filteredDrivers = filtered;
  }


  filterVendors(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.vendors.length; i++) {
        let vendor = this.vendors[i];
        if (vendor.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(vendor);
        }
    }
    
    this.filteredVendors = filtered;
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
    this.CountryService.getDriver().then(drivers => {
      this.drivers = drivers;
    });
    this.CountryService.getVendor().then(vendors => {
      this.vendors = vendors;
    });
  }

  employees: any[] = [
    {
      "name": "Manju Devi",
      "employeeId": "Q14E8564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
    },
    {
      "name": "Manish Kumar",
      "employeeId": "53448564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
    },
    {
      "name": "Nitin Singh",
      "employeeId": "54448564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
    },
    {
      "name": "Suman Kumari",
      "employeeId": "Q14E8564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
    },
    {
      "name": "Deepak G",
      "employeeId": "Q14E8564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
    },
    {
      "name": "Anu Chauhan",
      "employeeId": "Q14E8564",
      "employeePosition": "Project Group Manager",
      "employeeBand": "E3",
      "employeedu": "Silokhera, Sector 15 Part 2, Sector 15, Gurugram",
      "employeeloc": "Kanpur"
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


  vendorsCutsom: any[] = [ 
    {"name": "Vendor one", "code": "AF"}, 
    {"name": "Vendor two", "code": "AX"}, 
    {"name": "Vendor three", "code": "AL"}, 
    {"name": "Vendor four", "code": "DZ"}, 
    {"name": "Vendor five", "code": "AS"}, 
    {"name": "Vendor six", "code": "AD"}     
  ];
  filteredVendorsNew: any[];
  selectedVendorsNewAdvanced: any[];
  filterVendorsNew(event) {
    this.filteredVendorsNew = [];
    for(let i = 0; i < this.vendorsCutsom.length; i++) {
        let vendorNew = this.vendorsCutsom[i];
        if (vendorNew.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredVendorsNew.push(vendorNew);
        }
    }
  }



  driversCutsom: any[] = [ 
    {"name": "Drive one", "code": "AF"}, 
    {"name": "Drive two", "code": "AX"}, 
    {"name": "Drive three", "code": "AL"}, 
    {"name": "Drive four", "code": "DZ"}, 
    {"name": "Drive five", "code": "AS"}, 
    {"name": "Drive six", "code": "AD"}      
  ];
  filteredDriversNew: any[];
  selectedDriversNewAdvanced: any[];
  filterDriversNew(event) {
    this.filteredDriversNew = [];
    for(let i = 0; i < this.driversCutsom.length; i++) {
        let driverNew = this.driversCutsom[i];
        if (driverNew.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredDriversNew.push(driverNew);
        }
    }
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  private coPassanger: any = {empname:'Manju Devi',sapid:'40180335'};
  addCopassanger() {
      this.addedCopassanger.push(this.coPassanger)
      this.coPassanger = {empname:'Manju Devi',sapid:'40180335'};
  }

  removeCopassanger(index) {
    this.addedCopassanger.splice(index, 1);
  }

  private newLocation: any = {location:'Sez, Kanpur, Sector-126, Kanpur'};
  addnLocation() {
      this.addedLocation.push(this.newLocation)
      this.newLocation ={location:'Sez, Kanpur, Sector-126, Kanpur'};
  }

  removeLocation(index) {
    this.addedLocation.splice(index, 1);
  }

  openModalMergeCab(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  

  saveDepend() {
    this.messageService.add({key: 'ms', severity:'success'})    
  }
  // Merge Cab Booking
  displayPosition: boolean;
  showPositionDialog() {
      this.displayPosition = true;
  }

  displayPositionRaiseReq: boolean;
  showPositionDialogRaiseReq() {
      this.displayPositionRaiseReq = true;
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
    this.messageService.add({key: 'a', severity:'success'});
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
