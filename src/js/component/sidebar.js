import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

export const Sidebar = () => {
    const { store } = useContext(Context);

    return (
        <div className="sidebar">
            <h2>Categories</h2>
            <ul>
                {store.categories.length > 0 ? (
                    store.categories.map((category, index) => (
                        <li key={index}>
                            <Link to={`/${category}`}>{category}</Link>
                        </li>
                    ))
                ) : (
                    <p>Loading categories...</p> 
                )}
            </ul>
        </div>
    );
};
