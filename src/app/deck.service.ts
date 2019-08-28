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
    if (deck.length === 0) {
      deck.push(card);
    }
    if (card.type.indexOf('Creature')) {
      for (const currentCard of deck) {
        if (currentCard.name === card.name || currentCard.type.indexOf('Creature') ||
          (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
          deck.splice(deck.indexOf(card), 0, card);
          break;
        }
      }
    }
    else if (card.type.indexOf('Planeswalker')) {
      for (const currentCard of deck) {
        if (currentCard.name === card.name || currentCard.type.indexOf('Enchantment') ||
          (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
          deck.splice(deck.indexOf(card), 0, card);
          break;
        }
      }
    }
    else if (card.type.indexOf('Artifact')) {
      for (const currentCard of deck) {
        if (currentCard.name === card.name || currentCard.type.indexOf('Enchantment') ||
          (currentCard.type.indexOf('Artifact') && !currentCard.type.indexOf('Artifact Creature'))) {
          deck.splice(deck.indexOf(card), 0, card);
          break;
        }
      }
    }
    console.log(deck);
  }
  removeFromDeck(cardIndex: number) {
    deck.splice(cardIndex, 1);
  }
  constructor() { }
}
