import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any>{
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries')
  }

  getCodeCountry(): Observable<any> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/iso')
  }

  // getCodeCountry(countryName: string): Observable<any> {
  //   return this.http.post<any>('https://countriesnow.space/api/v0.1/countries/iso', { country : countryName})
  // }

  getCountryFlag(): Observable<any> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/images')
  }

  // getCountryFlag(countryName: string, countryCode: string): Observable<any> {
  //   return this.http.post<any>('https://countriesnow.space/api/v0.1/countries/flag/images', {country: countryName, iso2: countryCode})
  // }
  getCountryCurrency(): Observable<any> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/currency')
  }

  // getCountryCurrency(countryName: string, countryCode: string): Observable<any> {
  //   return this.http.post<any>('https://countriesnow.space/api/v0.1/countries/currency', {country: countryName, iso2: countryCode})
  // }

  getCountryCapital(): Observable<any> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/capital')
  }

  // getCountryCapital(countryName: string, countryCode: string): Observable<any> {
  //   return this.http.post<any>('https://countriesnow.space/api/v0.1/countries/capital', {country: countryName, iso2: countryCode})
  // }

  getCountryPosition(): Observable<any> {
    return this.http.get<any>('https://countriesnow.space/api/v0.1/countries/positions')
  }

  // getCountryPosition(countryName: string, countryCode: string): Observable<any> {
  //   return this.http.post<any>('https://countriesnow.space/api/v0.1/countries/positions', {country: countryName, iso2: countryCode})
  // }

}
