import { Component } from '@angular/core';
import {DeckService} from './deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kooky Card Catalog';
  isCollapsed = true;
  deckService: DeckService = new DeckService();
  deck: any[] = this.deckService.getDeck();
}
