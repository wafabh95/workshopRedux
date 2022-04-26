import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Actions/counterAction'


const App2 = () => {
    const count = useSelector(state=>state.counterReducer)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>dispatch(increment())}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>-</button>
        </header>
    </div>
  )
}

export default App2