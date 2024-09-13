import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Category = () => {
    const { store, actions } = useContext(Context);
    const { category } = useParams();

    useEffect(() => {
        actions.fetchCategoryItems(category);
    }, [category, actions]);

    return (
        <div className="category-page">
            <h2>{category}</h2>
            <div className="card-container">
                {store.items.length > 0 ? (
                    store.items.map(item => (
                        <Card
                            key={item.uid}
                            uid={item.uid}
                            category={category}
                            onClick={() => actions.fetchItemDetails(category, item.uid)}
                        />
                    ))
                ) : (
                    <p>No items found for this category.</p>
                )}
            </div>
        </div>
    );
};
