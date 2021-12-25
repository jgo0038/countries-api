import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSpinner = true;
  countries: any[] = [];

  constructor(private countryService: CountriesService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((countriesRes) => {
      this.countries = countriesRes.data;
      this.showSpinner = false;
      console.log(this.showSpinner)
    })

  }

  viewCountry(countryName: string): void {
    console.log(countryName)
    this.router.navigateByUrl('/country/' + countryName);
  }
}
