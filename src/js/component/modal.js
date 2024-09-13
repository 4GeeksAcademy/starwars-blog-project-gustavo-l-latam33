import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Modal = () => {
    const { store, actions } = useContext(Context);

    if (!store.selectedItem) {
        return null;
    }

    const { name, title, height, mass, gender, birth_year, director, producer, release_date } = store.selectedItem;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{name || title}</h2>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Gender: {gender}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Director: {director}</p>
                <p>Producer: {producer}</p>
                <p>Release Date: {release_date}</p>
                <button onClick={() => actions.clearSelectedItem()}>Close</button>
            </div>
        </div>
    );
};