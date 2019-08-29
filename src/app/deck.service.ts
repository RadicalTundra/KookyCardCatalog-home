import { Injectable } from '@angular/core';
import { Card } from './card';

const deck: Card[] = [];
@Injectable({
  providedIn: 'root'
})
export class DeckService {
  result: boolean;
  getDeck() {
    return deck;
  }
  addToDeck(card: Card) {
    deck.push(card);
    // if (deck.length === 0) {
    //   deck.push(card);
    // }
    // if (card.type.indexOf('Creature')) {
    //   for (const currentCard of deck) {
    //     if (currentCard.name === card.name || currentCard.type.indexOf('Creature') ||
    //       (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
    //       deck.splice(deck.indexOf(card), 0, card);
    //       break;
    //     }
    //   }
    // }
    // else if (card.type.indexOf('Planeswalker')) {
    //   for (const currentCard of deck) {
    //     if (currentCard.name === card.name || currentCard.type.indexOf('Enchantment') ||
    //       (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
    //       deck.splice(deck.indexOf(card), 0, card);
    //       break;
    //     }
    //   }
    // }
    // else if (card.type.indexOf('Artifact')) {
    //   for (const currentCard of deck) {
    //     if (currentCard.name === card.name || currentCard.type.indexOf('Enchantment') ||
    //       (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
    //       deck.splice(deck.indexOf(card), 0, card);
    //       break;
    //     }
    //   }
    // }
    console.log(deck);
  }
  removeFromDeck(cardIndex: number) {
    this.result = window.confirm('Are you sure you want to take a ' + deck[cardIndex].name + ' out of your deck?');
    if (this.result === true) {
      deck.splice(cardIndex, 1);
    }
  }
  constructor() { }
}
