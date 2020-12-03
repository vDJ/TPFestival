
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  BASE_URL = 'https://api-eu-central-1.graphcms.com/v2/cki5qqty8l28t01xn1czyfm61/master';

  constructor(private client: HttpClient) { }
  getConcerts() {
    return this.client.post(this.BASE_URL, {
      query: `
        query {
          concerts(orderBy: startTime_ASC) {
            id
            artist
            duration
            style
            startTime
            date
            photo {
              url
            }
          }
        }
      `
    }).pipe(map((r: any) => r.data));
  }
  getFestivals() {
    return this.client.post(this.BASE_URL, {
      query: `
        query {
          festivals {
            name
            id
            description
            address {
              longitude
              latitude
            }
            city
            festivalimage {
              url
            }
          }
        }
      `
    }).pipe(map((r: any) => r.data));
  }
}
