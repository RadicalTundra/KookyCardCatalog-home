import {Component, NgModule, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import { Product } from '../product.entity';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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

// @Injectable()
// export class CardService {
//   private cards: Product[];
//
//   constructor() {
//     this.cards = [
//       { id: '01', name: ''}
//     ]
//   }
//
// }

export class CardListComponent implements OnInit {

  constructor(private http: HttpClient) {
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
      if (response.object === 'list' || response.object === 'catalog') {
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
          this.cardNames = response.data;
        }
        console.log(response);
      });
    }
  }
  ngOnInit() {
    const obs = this.http.get('https://api.scryfall.com/cards');
    obs.subscribe((response) => {
      this.response = response.data;
      console.log(response);
    });
  }
}
