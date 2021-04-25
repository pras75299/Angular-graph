import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-cab-usage',
  templateUrl: './cab-usage.component.html',
  styleUrls: ['./cab-usage.component.css'],
  providers: [MessageService]
})
export class CabUsageComponent implements OnInit { 
  requestTypeData: any;
  requestTypeDataOptions: any;  


  tripTypeData: any;
  tripTypeDataOptions: any;  

  stackedBarChart: any;
  stackedBarChartOptions: any;
 
  constructor() {
    this.requestTypeData = {
      labels: ['Local', 'Traveller'],
      datasets: [{
              data: [300, 100],
              backgroundColor: [
                  "#1ec00b", "#DFEEFD"
              ],
              hoverBackgroundColor: [
                  "#1ec00b", "#DFEEFD"
              ],
              borderColor: [
                '#1ec00b', "#DFEEFD"
              ],
            }]    
    };
    this.requestTypeDataOptions = {
      tooltips: {
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return {
                    backgroundColor: '#fff'
                }
            },
        },
        backgroundColor: '#1ec00b'
      },
      legend: {
        labels: {
        usePointStyle: true,
        boxWidth: 3,
      },​​​​
        position: 'bottom'},
        
    }

    this.tripTypeData = {
      labels: ['One Way', 'Entire Day', 'Return'],
      datasets: [{
              data: [200, 100, 50],
              backgroundColor: [
                  "#1ec00b","#84C2FF", "#DFEEFD"
              ],
              hoverBackgroundColor: [
                  "#1ec00b","#84C2FF", "#DFEEFD"
              ],
              borderColor: [
                '#1ec00b',"#84C2FF", "#DFEEFD"
              ],
            }]    
    };
    this.tripTypeDataOptions = {
      tooltips: {
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return {
                    backgroundColor: '#fff'
                }
            },
        },
        backgroundColor: '#1ec00b'
      },
      legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 3,
        },​​​​
        position: 'bottom'},
        
    }

    this.stackedBarChart = {
      type: 'bar',
      labels: ['Fri', 'Sat','Sun','Mon','Tue','Wed','Thu'],
      datasets: [
          {
            label: 'Night Cab',
            maxBarThickness: 8,
            barThickness: 10,
            data: [1000, 500, 900, 2000, 2200, 1700, 2500],
            backgroundColor: "#AAAAAA",
          },
          {
            label: 'Non-Premium',
            maxBarThickness: 8,
            barThickness: 10,
            data: [2200, 1100, 500, 200, 1200, 700, 900],
            backgroundColor: "#71B8FF",
          },
          {
            label: 'Premium',
            maxBarThickness: 8,
            barThickness: 10,
            data: [1100, 500, 200, 1200, 700, 900, 1800],
            backgroundColor: "#222",
          },
          {
            label: 'Luxury',
            maxBarThickness: 8,
            barThickness: 10,
            data: [700, 900, 2800, 500, 200, 1200, 1000],
            backgroundColor: "#FFD422",
          },
                    
        ], 
    }

    this.stackedBarChartOptions = {
      tooltips: {
        callbacks: {
            labelColor: function(tooltipItem, chart) {
                return {
                    backgroundColor: '#fff'
                }
            },
        },
        backgroundColor: '#1ec00b'
      },
      legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 4,          
        },​​​​
        display: true,        
        position: 'bottom'},
      scales : {
        xAxes : [ {
          stacked: true, 
          gridLines : {
            display : false,
            color: "#EBEBEB"
          },
            ticks: {
              fontColor: "#777",
            }
        } ],
        yAxes : [ {
          stacked: true, 
          gridLines : {
            display : true,
            borderDash: [8, 4],
            color: "#EBEBEB"
          },
          ticks: {
            fontColor: "#777",
          }
      } ]
      }
    }
  }

  ngOnInit(): void {
  }

}
