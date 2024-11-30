import React from "react"

export const TextWithoutContext1 = React.memo(() => {
    console.log('%cTextWithoutContext2 rerender', 'color: green;')
    return (
        <p>
            TextWithoutContext1 TextWithoutContext1 TextWithoutContext1
        </p>
    )
})

TextWithoutContext1.displayName = 'TextWithoutContext1'