import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countryName: string | null;
  countryCode: string = '';
  countryFlag: string = '';
  countryCurrency: string = '';
  countryCapital: string = '';
  countryPositionLong: string = '';
  countryPositionLat: string = '';

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private countriesService: CountriesService) { 
    this.countryName = this.activatedRoute.snapshot.paramMap.get('countryName');

    if(this.countryName){
      // this.countriesService.getCodeCountry(this.countryName).subscribe((code) => {
      this.countriesService.getCodeCountry().subscribe((code) => {
        // this.countryCode = code.data.Iso2;
        for(let i = 0; i< code.data.length; i++){
          if(code.data[i].name === this.countryName){
            console.log(code.data[i].Iso2)
            this.countryCode = code.data[i].Iso2;
          }
        }

        this.countriesService.getCountryFlag().subscribe((flag) => {
          for(let i = 0; i< flag.data.length; i++){
            if(flag.data[i].name === this.countryName){
              console.log(flag.data[i].flag)
              this.countryFlag = flag.data[i].flag;
            }
          }
        });

        this.countriesService.getCountryCurrency().subscribe((currency) => {
          for(let i = 0; i< currency.data.length; i++){
            if(currency.data[i].name === this.countryName){
              console.log(currency.data[i].currency)
              this.countryCurrency = currency.data[i].currency;
            }
          }
        });

        this.countriesService.getCountryCapital().subscribe((capital) => {
          for(let i = 0; i< capital.data.length; i++){
            if(capital.data[i].name === this.countryName){
              console.log(capital.data[i].capital)
              this.countryCapital = capital.data[i].capital;
            }
          }
        });

        // this.countriesService.getCountryFlag(String(this.countryName), this.countryCode).subscribe((flag) => {
        //   this.countryFlag = flag.data.flag;
        // })

        // this.countriesService.getCountryCurrency(String(this.countryName), this.countryCode).subscribe((currency) => {
        //   this.countryCurrency = currency.data.currency;
        // })

        // this.countriesService.getCountryCapital(String(this.countryName), this.countryCode).subscribe((capital) => {
        //   this.countryCapital = capital.data.capital;
        // })

        this.countriesService.getCountryPosition().subscribe((position) => {
          for(let i = 0; i< position.data.length; i++){
            if(position.data[i].name === this.countryName){
              console.log(position.data[i].position)
              this.countryPositionLat = position.data[i].lat;
              this.countryPositionLong = position.data[i].long;
            }
          }
        });

        // this.countriesService.getCountryPosition(String(this.countryName), this.countryCode).subscribe((position) => {
        //   console.log(position)
        //   this.countryPositionLat = position.data.lat;
        //   this.countryPositionLong = position.data.long;
        // })
      })

      
    }
    
  }

  ngOnInit(): void {

  }

  backHome(): void {
    this.route.navigateByUrl('')
  }

}
