import React from "react"
import { useAppText2 } from "../contexts"

export const Text2 = React.memo(() => {
  const text2 = useAppText2()
  console.log('%cText2 rerender', 'color: yellow;')
  return (
      <p>
        Text2 value: {text2}
      </p>
  )

})

Text2.displayName = 'Text2'