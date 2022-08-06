import React, { useEffect, useState } from 'react'
import './App.scss'
import {printText} from '../tools/tools'

const Example1 = ({data}) => {

    const [localData, setLocalData] = useState(0)

    const onClick = (e) => {
        setLocalData(Math.random())
    }

    useEffect(()=>{
        printText('useEffect with <b>no</b> deps')
        return () => {
            printText('<b>cleanUp</b> for useEffect with <b>no</b> deps')
        }
    })

    useEffect(()=>{
        printText('useEffect with deps [data]')
        return () => {
            printText('<b>cleanUp</b> for useEffect with deps [data]')
        }
    }, [data])

    useEffect(()=>{
        printText('useEffect with deps [localData]')
        return () => {
            printText('<b>cleanUp</b> for useEffect with deps [localData]')
        }
    }, [localData])

    useEffect(()=>{
        printText('useEffect <b>with empty</b> deps')
        return () => {
            printText('<b>cleanUp</b> for useEffect with <b>empty</b> deps')
        }
    }, [])

    
    printText(' ---- <b>Render!!! </b>  ---- ')
    return (
        <div className="box example1">
            <div className="label">Example1 component</div>
            <div>Local data: <b>{localData}</b></div>
            <div>External data: <b>{data}</b></div>           
            <button 
                className="button"  
                onClick={onClick}>Generate new value</button>
        </div>
    )
}

export default Example1