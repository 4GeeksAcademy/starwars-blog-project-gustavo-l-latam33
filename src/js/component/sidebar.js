import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Styles from "../../styles/sidebar.css"

export const Sidebar = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCategories();
    }, []);

    return (
        <div className="sidebar">
            <h3>Categories</h3>
            <ul>
                {store.categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/${category}`} onClick={() => actions.fetchCategoryItems(category)}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
