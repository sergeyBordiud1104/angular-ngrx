import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Increment, Decrement} from "../actions/counter.actions";
import { Observable} from 'rxjs';
import { concatMapTo } from 'rxjs/operators';
import { Action } from "@ngrx/store";

@Injectable()
export class StartEffects {
  
  @Effect()
  public firstAction$: Observable<Action> = this.actions$.pipe(
    ofType( 'START_ACTION' ),
    concatMapTo([
      new Increment(),
      new Decrement(),
      new Decrement(),
    ])
  );
  
  constructor(
    private actions$: Actions
  ) {}
}
