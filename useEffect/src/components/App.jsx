import React, { useState } from 'react'
import './App.scss'
import Example1 from './Example1'

const App = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState(0)

    const onClickShow = (e) => {
        setShow(!show)
    }

    const onClickData = (e) => {
        setData(Math.random())
    }
    
    return (
        <div>
        <div className="box app">
            <div className="label">App component</div>
            <div>Local data: <b>{data}</b></div>
            <button 
                className="button" 
                onClick={onClickShow}>
                    { show ? 
                       <>Hide Example component</> : 
                       <>Show Example component</> 
                    }
                    </button>
            <button 
                className="button" 
                onClick={onClickData}>Generate new value</button>
        </div>
            { show && <Example1 data={data} /> }
        </div>
    )
}

export default App