import React, { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/CounterReducer';
import * as CounterActions from './actions/actions';


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous:0,
  changes:0
} 

export const CounterReducerComponent = () => {

  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
      dispatch(CounterActions.doReset())
    }

    const increaseBy = ( value: number ) =>{
      dispatch(CounterActions.doIncreaseBy(value))
    }

  return (
    <>
      <h1>Counter Reducer Segmentado: { counter }</h1>
      <hr />
      <button
        onClick={ handleReset }
      >
        Reset
      </button>

      <button
        onClick={ () => increaseBy(1) }
      >
        +1
      </button>

      <button
        onClick={ () => increaseBy(5) }
      >
        +5
      </button>

      <button
        onClick={ () => increaseBy(10) }
      >
        +10
      </button>

      <h4>Previous: {previous}</h4>
      <h4>Changes: {changes}</h4>

    </>
  )
}
