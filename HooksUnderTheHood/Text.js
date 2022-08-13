import { useState } from './EasyItReact'


function Text(params = {}) {
  const {id, text, children} = params
    const [localText, setLocaltext] = useState(text)

    const eventHandler = (event, data) => {
      switch(event){
        case 'type': {
          setLocaltext(data)
          break
        }
      }
    }

    return {
      eventHandler,
      render: () => {
        return `<div>
        <div><u>TEXT COMPONENT</u>: ${localText} <input type="radio" name="texts" id="${id}" /></div>
        ${children ? `<div>${children}</div>` : ''}
        </div>`
      }
    }
}

export default Text