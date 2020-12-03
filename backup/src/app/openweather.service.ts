import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  BASE_URL = 'http://api.openweathermap.org/data/2.5/';
  TOKEN = 'f943980545a8746130564d4108211c4d';

  constructor(private client: HttpClient) { }

  getWeather(lat: number, lon: number) {
    return this.client.get(this.BASE_URL + 'onecall?lat=' + lat + '&lon=' + lon + '&units=metric&exclude=minutely,hourly&APPID='
      + this.TOKEN);
  }
}
