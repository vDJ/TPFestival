import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';
import {OpenweatherService} from './openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api: GraphqlService, private ows: OpenweatherService) {
    console.log('TODO call API!');
    this.api.getConcerts().subscribe((data) => {
      this.concertsData = data.concerts;
    });
    this.api.getFestivals().subscribe((data) => {
      this.festivalsData = data.festivals;
      this.latFestival = this.festivalsData[0].address.latitude;
      this.lonFestival = this.festivalsData[0].address.longitude;
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
  latFestival: number;
  lonFestival: number;

  loadWeather(latFestival: number, lonFestival: number){
    this.ows.getWeather(latFestival, lonFestival).subscribe((data) => {
      this.weatherDatas = data;
    });
  }
}
