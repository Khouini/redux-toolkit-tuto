import React from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    const [Amount, setAmount] = useState(0);
    const resetAll = () => {
        setAmount(0);
        dispatch(reset());
    };
    return (
        <>
            <div>{count}</div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <br />
                <input type="text" value={Amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(Amount) || 0))}>Add Amount</button>
                <button onClick={() => dispatch(resetAll())}>Reset</button>
            </div>
        </>
    );
};

export default Counter;