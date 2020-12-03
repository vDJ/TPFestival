import { Component, OnInit } from '@angular/core';
import {GraphqlService} from '../graphql.service';

@Component({
  selector: 'app-create-concert-form',
  templateUrl: './create-concert-form.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateConcertFormComponent implements OnInit {

  constructor(private api: GraphqlService) { }

  createConcert() {
    this.api.createConcert().subscribe( (data) => {
      console.log(data);
      this.api.publishConcert(data.createConcert.id).subscribe(() => {
        this.api.getConcerts();
      });
    });
  }
  ngOnInit(): void {
  }

}
