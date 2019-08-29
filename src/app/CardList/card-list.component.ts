import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Location } from '@angular/common';
import {DeckService} from '../deck.service';
import {Card} from '../card';

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
  deckService: DeckService = new DeckService();
  deck: any[];
  constructor(private http: HttpClient, private location: Location) {
    this.deck = this.deckService.getDeck();
  }

  title = 'Yeet dab';
  cardName: string;
  response: any = [];
  cardNames: any = [];
  card: any;
  cardToAdd: Card;
  searchCards() {
    this.response = [];
    const obs = this.http.get((this.cardName === '') ? 'https://api.scryfall.com/cards' :
      'https://api.scryfall.com/cards/search?q=' + this.cardName + '&unique=cards&as=grid&order=name');
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
  addToDeck(newCard) {
    this.cardToAdd = new Card(newCard.id, newCard.name, newCard.set_name, newCard.image_uris, newCard.type_line);
    this.deckService.addToDeck(this.cardToAdd);
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
