import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {  
  public _employeeurl = 'assets/data/employee.json';
  // public _producturl = 'https://api.jsonbin.io/b/5fc8cec1177c556ef9b62e92';
  // public urlCustomer = 'https://api.jsonbin.io/b/5fc8ceaa045eb86f1f8a895e';

  public localDriverurl = 'assets/data/driver.json';
  public localproducturl = 'assets/data/product.json';
  public localurlCustomer = 'assets/data/customer.json';


  

  constructor(private http: HttpClient) { }

  getCountries() {
  return this.http.get<any>(this._employeeurl, {responseType: 'json',})
    .toPromise()
    .then(res => <any[]>res.data)
    .then(data => { return data; });  
  }

  getDriver() {
  return this.http.get<any>(this.localDriverurl, {responseType: 'json',})
    .toPromise()
    .then(res => <any[]>res.data)
    .then(data => { return data; });  
  }

  /*getCustomer() {
    return this.http.get<any>(this.urlCustomer, {responseType: 'json'})
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  getProject() {
    return this.http.get<any>(this._producturl, {responseType: 'json'})
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }*/
}