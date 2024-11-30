import React from "react"

export const TextWithoutContext2 = React.memo(() => {
    console.log('%cTextWithoutContext2 rerender', 'color: green;',)
    return (
        <p>
            TextWithoutContext2 TextWithoutContext2 TextWithoutContext2
        </p>
    )
})

TextWithoutContext2.displayName = 'TextWithoutContext2'