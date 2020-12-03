import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';
import {OpenweatherService} from './openweather.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPhone = faPhone;
  faAt = faAt;

  constructor(private api: GraphqlService, private ows: OpenweatherService) {
    console.log('TODO call API!');
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
      console.log(this.festivalsData);
    });
  }

    festivalsData: any;
    festival: any;
    concertsData: any;
    concert: any;
    title = 'tpfinal';
    city: string;
    weatherDatas: any;
    nameFestival: any;
    latFestival: number;
    lonFestival: number;
    cityFestival: any;
    imageFestival: any;
    descriptionFestival: any;

    loadWeather(latFestival: number, lonFestival: number){
      this.ows.getWeather(latFestival, lonFestival).subscribe((data) => {
        this.weatherDatas = data;
      });
    }
}
