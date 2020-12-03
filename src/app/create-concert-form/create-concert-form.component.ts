import { Component, OnInit } from '@angular/core';
import {GraphqlService} from '../graphql.service';
import {HttpClient, HttpClientModule, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-create-concert-form',
  templateUrl: './create-concert-form.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateConcertFormComponent implements OnInit {

  artist: any;
  style: any;
  datetime: any;
  duration: any;
  // selectedFile: File;

/*  onFileChanged(event) {
    const file = event.target.files[0];
  }*/

/* UPLOAD VERS GRAPHCMS - NE MARCHE PAS
  onUpload() {
    const req = new HttpRequest('POST', 'https://api-eu-central-1.graphcms.com/v2/cki5qqty8l28t01xn1czyfm61/master/upload', this.selectedFile);
    return this.http.request(req);
    this.http.post('https://api-eu-central-1.graphcms.com/v2/cki5qqty8l28t01xn1czyfm61/master/upload', this.selectedFile);
  }
*/

  constructor(private api: GraphqlService, private http: HttpClient) { }

  createConcert() {
    this.api.createConcert(this.artist, this.style, this.datetime, this.duration).subscribe( (data) => {
      this.api.publishConcert(data.createConcert.id).subscribe(() => { //on  récupère directement l'id du concert créé et on le passe du stage DRAFT à PUBLISHED
        this.api.getConcerts(); //on essaye de reload la liste de concerts mais ça ne fonctionne pas
      });
    });
  }
  ngOnInit(): void {
  }

}
