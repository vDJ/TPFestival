import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotelsData: any;
  hotel: any;
  destinationsData: any;
  destination: any;

  title = 'TPFestival';

  constructor(private api: GraphqlService) {
    console.log('TODO call API!');
    this.api.getHotels().subscribe((data) => {
      this.hotelsData = data.hotels;
    });
    this.api.getDestinations().subscribe((data) => {
      this.destinationsData = data.destinations;
    });
  }
}




