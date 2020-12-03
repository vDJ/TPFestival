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
            date
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

  createConcert(artist: any, style: any, datetime: any, duration: any) {
  return this.client.post(this.BASE_URL, {
    query: `
      mutation  {
        createConcert(data: {artist: "` + artist + `", date: "` + datetime.substr(0, 10) + `", startTime: "` + datetime + `", festival: {connect: {id: "cki5tbzjs4yh80a01yl84gw70"}}, style: "` + style + `", duration: "` + duration + `"}) {
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
          publishConcert (where: {id: "` + id + `"}, to: PUBLISHED) {
            id
          }
         }
      `
    });
  }
}

