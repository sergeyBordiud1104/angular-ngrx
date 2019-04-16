import {Action} from '@ngrx/store';
import { ActionTypes } from '../actions/counter.actions';

export const initialState: { negative: number; positive: number } = {
  negative: -5,
  positive: 10
};

export function counterReducer(state = initialState, action: Action) {
  
  switch (action.type) {
    case ActionTypes.Increment:
      return {...state, negative: state.negative + 1};
    
    case ActionTypes.Decrement:
      return {...state, positive: state.positive - 1};
    
    default:
      return state;
  }
  
}
