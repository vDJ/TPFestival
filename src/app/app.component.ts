import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';
import {OpenweatherService} from './openweather.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api: GraphqlService, private ows: OpenweatherService) {
    this.api.getConcerts().subscribe((data) => {
      this.concertsData = data.concerts;
    });
    this.api.getFestivals().subscribe((data) => {
      this.festivalsData = data.festivals;
      this.nameFestival = this.festivalsData[0].name;
      this.latFestival = this.festivalsData[0].address.latitude;
      this.lonFestival = this.festivalsData[0].address.longitude;
      this.cityFestival = this.festivalsData[0].city;
      this.imageFestival = this.festivalsData[0].festivalimage.url;
      this.descriptionFestival = this.festivalsData[0].description;
      this.dateStartFestival = this.festivalsData[0].date[0];
    });

/*  let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let diff =  (( Date.parse('2020-12-04') - Date.parse(today) ) / 86400000);
    console.log(diff);*/

  }
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faPhone = faPhone;
  faAt = faAt;

  title = 'tpfinal';
  festivalsData: any;
  festival: any;
  concertsData: any;
  concert: any;
  city: string;
  weatherDatas: any;
  nameFestival: any;
  latFestival: number;
  lonFestival: number;
  cityFestival: any;
  imageFestival: any;
  descriptionFestival: any;
  dateStartFestival: string;
  diff: number;

  isShown = false ; // caché par défaut - sert pour cacher la création de concert

    loadWeather(latFestival: number, lonFestival: number){
      this.ows.getWeather(latFestival, lonFestival).subscribe((data) => {
        this.weatherDatas = data;

      });
    }
  toggleShow() {
    this.isShown = ! this.isShown;
  }
}
