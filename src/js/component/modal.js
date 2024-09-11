import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/modal.css";

export const Modal = () => {
    const { store, actions } = useContext(Context);

    if (!store.selectedItem) {
        return null;
    }

    const imageUrl = `https://starwars-visualguide.com/assets/img/${store.selectedItem.category}/${store.selectedItem.uid}.jpg`;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => actions.clearSelectedItem()}>&times;</span>
                <img src={imageUrl} alt={store.selectedItem.name} className="modal-img" />
                <h2>{store.selectedItem.name}</h2>
                <p>Height: {store.selectedItem.height}</p>
                <p>Mass: {store.selectedItem.mass}</p>
                <p>Hair Color: {store.selectedItem.hair_color}</p>
                <p>Skin Color: {store.selectedItem.skin_color}</p>
                <p>Birth Year: {store.selectedItem.birth_year}</p>
            </div>
        </div>
    );
};
