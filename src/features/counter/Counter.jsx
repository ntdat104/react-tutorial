import React, { useEffect, useState } from "react";
import "./Counter.scss";

function getInitCount() {
    return 0;
}

function Counter() {
	const [count, setCount] = useState(() => {
        const initCount = getInitCount();
        console.log("useState is running", initCount);
        return initCount;
    });

    useEffect(() => {
        console.log("useEffect is running");
    })

    useEffect(() => {
        console.log("useEffect + [] is running");
    },[])

    useEffect(() => {
        console.log("useEffect + [count] is running");
    },[count])

	return (
		<div className="counter">
            {console.log("return is running")}
            <div className="counter__container">
                <h1 className="counter__title">Count: {count}</h1>
                <button className="counter__btn" onClick={() => setCount(count + 1)}>+</button>
                <button className="counter__btn" onClick={() => setCount(count - 1)}>-</button>
                <button className="counter__btn" onClick={() => setCount(getInitCount())}>Reset</button>
            </div>
		</div>
	);
}

export default Counter;
