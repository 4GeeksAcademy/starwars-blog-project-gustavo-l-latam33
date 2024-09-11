import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Category = () => {
    const { store, actions } = useContext(Context);
    const { category } = useParams();

    useEffect(() => {
        if (store.currentCategory !== category) {
            actions.fetchCategoryItems(category);
        }
    }, [category, actions, store.currentCategory]);

    if (!store.items || store.items.length === 0) {
        return <p>Loading items...</p>;
    }

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} List</h1>
            <div className="card-grid">
                {store.items.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        uid={item.uid}
                        category={category}
                        onClick={() => actions.fetchItemDetails(category, item.uid)}
                    />
                ))}
            </div>
        </div>
    );
};
