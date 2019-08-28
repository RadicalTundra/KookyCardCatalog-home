import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { YeetListComponent } from './YeetList/yeet-list.component';
import { CardListComponent } from './CardList/card-list.component';
import {FormsModule} from '@angular/forms';
import { CardDetailComponent } from './CardDetail/card-detail.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'yeet-center', component: YeetListComponent},
  {path: 'cards', component: CardListComponent},
  {path: 'card/:name', component: CardDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    YeetListComponent,
    CardListComponent,
    HomeComponent,
    CardDetailComponent
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
