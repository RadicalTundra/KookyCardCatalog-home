import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Location } from '@angular/common';

@NgModule({
  imports: [
    FormsModule
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list-component.css']
})

export class CardListComponent implements OnInit {

  constructor(private http: HttpClient, private location: Location) {
  }

  title = 'Yeet dab';
  cardName: string;
  response: any = [];
  cardNames: any = [];
  card: any;
  searchCards() {
    const obs = this.http.get((this.cardName === '') ? 'https://api.scryfall.com/cards' :
      'https://api.scryfall.com/cards/named?fuzzy=' + this.cardName);
    obs.subscribe((response) => {
     // @ts-ignore
      if (response.object === 'list' || response.object === 'catalog') {
        // @ts-ignore
        this.response = response.data;
        this.card = '';
      } else {
        this.card = response;
        this.response = [];
        console.log(this.card);
      }
      console.log(response);
    });
  }
  autocomplete() {
    if (this.cardName.length > 3) {
      const obs = this.http.get('https://api.scryfall.com/cards/autocomplete?q=' + this.cardName);
      obs.subscribe((response) => {
        if (response) {
          // @ts-ignore
          this.cardNames = response.data;
        }
        console.log(response);
      });
    }
  }
  ngOnInit() {
    const obs = this.http.get('https://api.scryfall.com/cards');
    obs.subscribe((response) => {
      // @ts-ignore
      this.response = response.data;
      console.log(response);
    });
  }
}
