import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  card: any;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.id);
      const obs = this.http.get( 'https://api.scryfall.com/cards/' + params.id);
      obs.subscribe((response) => {
          this.card = response;
          console.log(this.card);
      });
      this.card = params;
    });
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
