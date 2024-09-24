import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleRemove = (uid) => {
        actions.removeFromFavorites(uid); 
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Buscando:", searchQuery);
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark mb-3 p-3">
                <Link to="/" className="navbar-brand">Star Wars Database</Link>

                <form className="d-flex" onSubmit={handleSearchSubmit}>
                    <input 
                        className="form-control" 
                        type="search" 
                        placeholder="Search..." 
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>

                <button className="btn btn-warning ms-auto" onClick={toggleModal}>
                    View Favorites ({store.favorites.length})
                </button>
            </nav>

            {showModal && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Favorites</h5>
                                <button type="button" className="close" onClick={toggleModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {store.favorites.length > 0 ? (
                                    <ul className="list-group">
                                        {store.favorites.map((fav, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {fav.name || fav.title} 
                                                <button 
                                                    className="btn btn-danger btn-sm" 
                                                    onClick={() => handleRemove(fav.uid)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No favorites added yet.</p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
