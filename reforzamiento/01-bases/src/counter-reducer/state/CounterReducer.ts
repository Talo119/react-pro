import { CounterActions } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";


export const counterReducer = ( state: CounterState, action: CounterActions): CounterState =>{
    switch (action.type) {
      case 'reset':        
        return {
          counter: 0,
          previous:0,
          changes: 0
        };
        case 'increaseBy':
          return {
            ...state,
            counter: state.counter + action.payload.value,
            previous: state.counter,
            changes: state.changes +1
          }
      default:
        return state;
    }
  }