import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  public localDriverurl = 'assets/data/driver.json';
  public localVendorrurl = 'assets/data/vendor.json';
  public localCountriesUrl = 'assets/data/countries.json';

    constructor(private http: HttpClient) { }

    getCountries() {
      return this.http.get<any>(this.localCountriesUrl)
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

    getVendor() {
      return this.http.get<any>(this.localVendorrurl, {responseType: 'json',})
        .toPromise()
        .then(res => <any[]>res.data)
        .then(data => { return data; });  
    }
}