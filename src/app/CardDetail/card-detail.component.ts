import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Card} from '../card';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  card: any;
  manaTypes: any[];
  oracleTexts: any[];
  deckService: DeckService = new DeckService();
  cardToAdd: Card;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const obs = this.http.get( 'https://api.scryfall.com/cards/' + params.id);
      obs.subscribe((response) => {
          this.card = response;
          if (this.card.mana_cost) {
            this.manaTypes = this.card.mana_cost.split('{');
            this.manaTypes.splice(0, 1);
            for ( const color of this.manaTypes) {
              this.manaTypes[this.manaTypes.indexOf(color)] = color.substring(0, color.length - 1);
            }
            console.log(this.manaTypes);
          }
          if (this.card.oracle_text) {
              this.oracleTexts = this.card.oracle_text.split(/\r?\n/);
              console.log(this.oracleTexts);
          }
          console.log(this.card);
      });
      this.card = params;
    });
  }
  addToDeck(newCard) {
    this.cardToAdd = new Card(newCard.id, newCard.name, newCard.set_name, newCard.image_uris, newCard.type_line);
    this.deckService.addToDeck(this.cardToAdd);
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
