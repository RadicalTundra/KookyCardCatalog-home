import { Component, OnInit } from '@angular/core';
import {DeckService} from '../deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})

export class DeckListComponent implements OnInit {

  constructor() { }
  deckService: DeckService = new DeckService();
  deck: any[] = this.deckService.getDeck();
  ngOnInit() {
  }
}
