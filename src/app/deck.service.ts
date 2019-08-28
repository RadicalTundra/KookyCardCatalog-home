import { Injectable } from '@angular/core';
import { Card } from './card';

const deck: Card[] = [];
@Injectable({
  providedIn: 'root'
})
export class DeckService {
  getDeck() {
    return deck;
  }
  addToDeck(card: Card) {
    deck.push(card);
    console.log(deck);
  }
  constructor() { }
}
