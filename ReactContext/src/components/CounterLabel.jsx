import React from "react"
import { useAppCounter } from "../contexts"


export const CounterLabel = React.memo(() => {
    const count = useAppCounter()
    console.log('%cCounterLabel rerender', 'color: red;')
    return (
        <>
            count is {count}
        </>
    )

})

CounterLabel.displayName = 'CounterLabel'