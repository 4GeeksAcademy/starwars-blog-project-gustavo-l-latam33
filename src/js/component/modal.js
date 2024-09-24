import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = () => {
    const { store, actions } = useContext(Context);

    if (!store.selectedItem) {
        return null;
    }

    const { name, title, height, mass, gender, birth_year, director, producer, release_date } = store.selectedItem;

    return (
        <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{name || title}</h5>
                        <button type="button" className="close" onClick={() => actions.clearSelectedItem()}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {height && <p>Height: {height}</p>}
                        {mass && <p>Mass: {mass}</p>}
                        {gender && <p>Gender: {gender}</p>}
                        {birth_year && <p>Birth Year: {birth_year}</p>}
                        {director && <p>Director: {director}</p>}
                        {producer && <p>Producer: {producer}</p>}
                        {release_date && <p>Release Date: {release_date}</p>}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => actions.clearSelectedItem()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
