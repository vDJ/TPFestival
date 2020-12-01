import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';
import {OpenweatherService} from "./openweather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  concertsData: any;
  concert: any;
  title = 'tpfinal';
  city: string;
  weatherDatas: any;

  constructor(private api: GraphqlService, private ows: OpenweatherService) {
    console.log('TODO call API!');
    this.api.getConcerts().subscribe((data) => {
      this.concertsData = data.concerts;
    });
  }
  
  loadWeather() {
    this.ows.getWeather(this.city).subscribe((data) => {
      this.weatherDatas = data;
    });
  }
  
}