import { createContext, useContext, useEffect, useMemo, useRef, useSyncExternalStore } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext(null)

export const AppContextComponent = ({ value, children }) => {
    const storeRef = useRef();

    storeRef.current = useMemo(() => {
        const listeners = new Set();
        return {
            value,
            subscribe: (l) => { listeners.add(l); return () => listeners.delete(l); },
            notify: () => listeners.forEach((l) => l()),
        }
    }, [])

    useEffect(() => {
        if (!Object.is(storeRef.current.value, value)) {
            storeRef.current.value = value;
            storeRef.current.notify();
        }
    }, [value]);

    return (
        <AppContext.Provider value={storeRef.current}>
            {children}
        </AppContext.Provider>
    )
}

export const useContextSelector = (selector) => {
    const store = useContext(AppContext);
    return useSyncExternalStore(
        store.subscribe,
        () => selector(store.value),
    );
};

export const useAppContext = () => {
    return useContextSelector((context) => {
        return context
    })
}

export const useAppSetCount = () => {
    return useContextSelector((context) => {
        return context?.setCount ? context.setCount : null
    })
}

export const useAppCounter = () => {
    return useContextSelector((context) => {
        return context?.count ? context.count : 0
    })
}

export const useAppText1 = () => {
    return useContextSelector((context) => {
        return context?.text1 ? context.text1 : ''
    })
}

export const useAppText2 = () => {
    return useContextSelector((context) => {
        return context?.text2 ? context.text2 : ''
    })
}

AppContextComponent.propTypes = {
    value: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}