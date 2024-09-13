import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Category = () => {
    const { store, actions } = useContext(Context);
    const { category } = useParams(); 

    useEffect(() => {
        actions.fetchCategoryItems(category);
    }, [category]);

    return (
        <div className="category-page">
            <h1>{category}</h1>
            <div className="card-container">
                {store.items.length > 0 ? (
                    store.items.map(item => (
                        <Card
                            key={item.uid}
                            uid={item.uid}
                            category={category}
                            name={item.name || item.title}  
                            onClick={() => actions.fetchItemDetails(category, item.uid)}
                        />
                    ))
                ) : (
                    <p>Loading items...</p>
                )}
            </div>
        </div>
    );
};