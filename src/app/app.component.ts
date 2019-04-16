import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  negative$: Observable<number>;
  positive$: Observable<number>;
    
    constructor(private store: Store<{ count: { negative: number, positive: number }}>) {
    this.negative$ = store.select(state => state.count.negative);
    this.positive$ = store.select(state => state.count.positive);
  }
  
  start() {
    const secondsCounter = interval(1000);
    
    secondsCounter.subscribe(() =>
      this.store.dispatch({ type: 'START_ACTION' }));
  }
  
  
}
