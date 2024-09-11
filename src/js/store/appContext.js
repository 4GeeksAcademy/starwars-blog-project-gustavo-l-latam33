import React, { createContext, useState, useEffect } from "react";
import getState from "./flux";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const initialState = getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) =>
                setState({
                    store: { ...state.store, ...updatedStore },
                    actions: { ...state.actions },
                }),
        });

        const [state, setState] = useState(initialState);

        useEffect(() => {
            state.actions.fetchCategories(); 
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;
