
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

  createConcert() {
  return this.client.post(this.BASE_URL, {
    query: `
      mutation  {
        createConcert(data: {artist: "test", startTime: "12/04/2020,18:00", date: "12/04/2020", festival: {connect: {id: "cki5tbzjs4yh80a01yl84gw70"}}, style: "test style", duration: "1h"}) {
          id
         }
        }
      `
    }).pipe(map((r: any) => r.data));
  }

  publishConcert(id: string) {
    return this.client.post(this.BASE_URL, {
      query: `
        mutation  {
          publishConcert (where: {id: ""}, to: PUBLISHED) {
            id
          }
         }
      `
    });
  }
}

