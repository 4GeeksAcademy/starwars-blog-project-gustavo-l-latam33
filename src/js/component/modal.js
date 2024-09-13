import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = () => {
    const { store, actions } = useContext(Context);

    if (!store.selectedItem) return null;

    const { name, height, mass, gender } = store.selectedItem;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{name}</h2>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Gender: {gender}</p>
                <button onClick={actions.clearSelectedItem}>Close</button>
            </div>
        </div>
    );
};
