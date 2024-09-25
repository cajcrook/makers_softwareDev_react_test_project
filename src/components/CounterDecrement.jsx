import { useState } from "react";

const CounterDecrement = () => {
    const [count, setCount] = useState(0);

    const decrementCounter = () => {
        setCount(count - 1);
        // console.log(count)
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrementCounter}>Decrement!</button>
        </div>
    );
};

export default CounterDecrement;