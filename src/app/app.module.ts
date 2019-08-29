import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { CardListComponent } from './CardList/card-list.component';
import {FormsModule} from '@angular/forms';
import { CardDetailComponent } from './CardDetail/card-detail.component';
import { DeckListComponent } from './DeckList/deck-list.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'cards', component: CardListComponent},
  {path: 'card/:id', component: CardDetailComponent},
  {path: 'deck-list', component: DeckListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HomeComponent,
    CardDetailComponent,
    DeckListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- for debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
