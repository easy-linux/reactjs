import React from "react"
import { useAppText1 } from "../contexts"

export const Text1 = React.memo(() => {
    const text1 = useAppText1()
    console.log('%cText1 rerender', 'color: yellow;')
    return (
        <p>
            Text1 value: {text1}
        </p>
    )

})

Text1.displayName = 'Text1'