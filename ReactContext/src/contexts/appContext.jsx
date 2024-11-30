import { createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(null)

export const AppContextComponent = ({ value, children }) => {
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const ctx = useContext(AppContext)
    return useMemo(() => (ctx), [ctx])
}

export const useAppSetCount = () => {
    const ctx = useAppContext()
    return useMemo(() => {
        if (ctx) {
            return ctx.setCount
        }
        return 0
    }, [ctx?.setCount])
}

export const useAppCounter = () => {
    const ctx = useAppContext()
    return useMemo(() => {
        if (ctx) {
            return ctx.count
        }
        return 0
    }, [ctx?.count])
}

export const useAppText1 = () => {
    const ctx = useAppContext()
    return useMemo(() => {
        if (ctx) {
            return ctx.text1
        }
        return ''
    }, [ctx?.text1])
}

export const useAppText2 = () => {
    const ctx = useAppContext()
    return useMemo(() => {
        if (ctx) {
            return ctx.text2
        }
        return ''
    }, [ctx?.text2])
}

AppContextComponent.propTypes = {
    value: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}