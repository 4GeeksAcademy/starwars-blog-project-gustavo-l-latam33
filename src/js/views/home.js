import React, { useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <h1>Star Wars Categories</h1>
            <div className="card-grid">
                {store.categories.length > 0 ? (
                    store.categories.map((category, index) => (
                        <Card
                            key={index}
                            name={category}
                            description={`Explore the ${category}`}
                        />
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>
        </div>
    );
};
