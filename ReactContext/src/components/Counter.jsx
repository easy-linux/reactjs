import React from "react"
import { useAppSetCount } from "../contexts"
import { CounterLabel } from "./CounterLabel"


export const Counter = React.memo(() => {
    const setCount = useAppSetCount()

    const onClick = () => {
        if (setCount) {
            setCount((count) => count + 1)
        }
    }
    console.log('%cCounter rerender', 'color: red;')
    return (
        <button onClick={onClick}>
            <CounterLabel />
        </button>
    )

})

Counter.displayName = 'Counter'