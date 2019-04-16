import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = '[App Component] Increment',
  Decrement = '[App Component] Decrement',
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}
