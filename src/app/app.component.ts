import { Component } from '@angular/core';
import {GraphqlService} from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  concertsData: any;
  concert: any;

  constructor(private api: GraphqlService) {
    console.log('TODO call API!');
    this.api.getConcerts().subscribe((data) => {
      this.concertsData = data.concerts;
    });
  }
}




