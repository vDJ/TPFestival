
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  BASE_URL = 'https://api-eu-central-1.graphcms.com/v2/ckhvsqv50mw3e01xibuy0gmja/master';

  constructor(private client: HttpClient) { }
  getHotels() {
    return this.client.post(this.BASE_URL, {
      query: `
        query {
          hotels {
            name
            rooms
          }
        }
      `
    }).pipe(map((r: any) => r.data));
  }
  getDestinations() {
    return this.client.post(this.BASE_URL, {
      query: `
        query {
          destinations {
            name
            image {
              url
              }
          }
        }
      `
    }).pipe(map((r: any) => r.data));
  }
}
