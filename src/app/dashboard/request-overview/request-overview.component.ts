import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageService} from 'primeng/api';
interface Years {
  name: string;
  code: string;
}

@Component({
  selector: 'app-request-overview',
  templateUrl: './request-overview.component.html',
  styleUrls: ['./request-overview.component.css'],
  providers: [MessageService]
})
export class RequestOverviewComponent implements OnInit { 

  @ViewChild("dateFilter", undefined) private dateFilter: any;
 
  public datesRangeFilter: Date[];
 
  public onDatesRangeFilterSelected(selectedValue: Date) {
    if (this.datesRangeFilter[1]) {
      this.dateFilter.hideOverlay();
    }
  }

  singleMonth: Years[];
  quater: Years[]; 
  years: Years[];

  totalData: any;
  totalDataOptions: any;

  newData: any;
  newDataOptions: any;

  newDataOne: any;
  newDataOptionsOne: any;

  upcomingData: any;
  upcomingDataOptions: any;

  executedData: any;
  executedDataOptions: any;

  cancelledData: any;
  cancelledDataOptions: any;
 
  constructor() {
    this.totalData = {
      labels: ['Total'],
      datasets: [{
              data: [300],
              backgroundColor: [
                  "#606060"
              ],
              hoverBackgroundColor: [
                  "#606060"
              ],
              borderColor: [
                '#606060',
              ],
            }]    
    };
    this.totalDataOptions = {
      tooltips: {
        display: false,
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
      cutoutPercentage: 60, 
        
    }

    this.newData = {
      labels: ['New', 'Other'],
      datasets: [{
              data: [450, 950],
              backgroundColor: [
                  "#1ec00b", "#DFEEFD"
              ],
              hoverBackgroundColor: [
                  "#1ec00b", "#DFEEFD"
              ],
              borderColor: [
                '#1ec00b',
                '#DFEEFD',
              ],
        }] 
    };

    this.newDataOptions = {
      tooltips: {
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
      cutoutPercentage: 60, 
        
    }


    this.newDataOne = {
      labels: ['Non-Premium', 'Premium', 'Luxury', 'Night Cab'],
      datasets: [{
              data: [200, 100, 50, 50],
              backgroundColor: [
                  "#1ec00b", "#000000", "#FFD422", "#AAAAAA"
              ],
              hoverBackgroundColor: [
                  "#1ec00b", "#000000", "#FFD422", "#AAAAAA"
              ],
              borderColor: [
                '#1ec00b',
                '#000000',
                '#FFD422', 
                '#AAAAAA'
              ],
        }] 
    };

    this.newDataOptionsOne = {
      tooltips: {
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
      cutoutPercentage: 90, 
        
    }

    this.upcomingData = {
      labels: ['Upcoming', 'Other'],
      datasets: [{
              data: [600, 800],
              backgroundColor: [
                  "#3385D6", "#DFEEFD"
              ],
              hoverBackgroundColor: [
                  "#3385D6", "#DFEEFD"
              ],
              borderColor: [
                '#3385D6',
                '#DFEEFD',
              ],
        }] 
    };

    this.upcomingDataOptions = {
      tooltips: {
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
        cutoutPercentage: 60, 
        
    }

    this.executedData = {
      labels: ['Executed', 'Other'],
      datasets: [{
              data: [200, 1200],
              backgroundColor: [
                  "#71BF74", "#E1F2E2"
              ],
              hoverBackgroundColor: [
                  "#71BF74", "#E1F2E2"
              ],
              borderColor: [
                '#71BF74',
                '#E1F2E2',
              ],
        }] 
    };

    this.executedDataOptions = {
      tooltips: {
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
        cutoutPercentage: 60, 
        
    }

    this.cancelledData = {
      labels: ['Cancelled', 'Other'],
      datasets: [{
              data: [50, 1350],
              backgroundColor: [
                  "#F6695E", "#FFEEED"
              ],
              hoverBackgroundColor: [
                  "#F6695E", "#FFEEED"
              ],
              borderColor: [
                '#F6695E',
                '#FFEEED',
              ],
        }] 
    };

    this.cancelledDataOptions = {
      tooltips: {
        enabled: false
      },
      legend: {​​​​
        display: false,
        position: 'bottom'},
        cutoutPercentage: 60, 
        
    }

    this.singleMonth = [
      {name: 'Jan', code: ''},
      {name: 'Feb', code: ''},
      {name: 'Mar', code: ''},
      {name: 'Apr', code: ''},
      {name: 'May', code: ''},
      {name: 'Jun', code: ''},
      {name: 'Jul', code: ''},
      {name: 'Aug', code: ''},
      {name: 'Sep', code: ''},
      {name: 'Oct', code: ''},
      {name: 'Nov', code: ''},
      {name: 'Dec', code: ''}, 
      
    ];
    this.quater = [
      {name: 'AMJ', code: ''},
      {name: 'JAS', code: ''},
      {name: 'OND', code: ''},
      {name: 'JFM', code: ''},      
    ];

    this.years = [
      {name: '2020', code: ''},
      {name: '2019', code: ''},
      {name: '2018', code: ''},
    ];

  }

  ngOnInit(): void {
  }

  isNewOld:boolean = true;
  isNewnew1:boolean = false;
  newshowVar;

  onNewLiClick(){
    this.newshowVar = !this.newshowVar;
    this.isNewOld = !this.isNewOld;
    this.isNewnew1 = !this.isNewnew1;
  }

  isUpcoming:boolean = true;
  isUpcomingOne:boolean = false;
  upcomingshowVar;

  onupcomingliClick() {
    this.isUpcoming = !this.isUpcoming;
    this.isUpcomingOne = !this.isUpcomingOne;
    this.upcomingshowVar = !this.upcomingshowVar;
  }

  isExecuted:boolean = true;
  isExecutedOne:boolean = false;
  executedshowVar;
  onexecutedliClick() {
    this.isExecuted = !this.isExecuted;
    this.isExecutedOne = !this.isExecutedOne;
    this.executedshowVar = !this.executedshowVar;
  }

  isCancelled:boolean = true;
  isCancelledOne:boolean = false;
  cancelledshowVar;
  oncancelledliClick() {
    this.isCancelled = !this.isCancelled;
    this.isCancelledOne = !this.isCancelledOne;
    this.cancelledshowVar = !this.cancelledshowVar;
  }

}
