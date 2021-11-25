import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../features/counterSlice';

const Counter = () => {
    const count = useSelector( state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increament())}>Increase</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decreament())}>Decrease</button>
        </div>
    )
}

export default Counter
