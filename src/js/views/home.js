import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="home-page">
            <h1>Star Wars Categories</h1>
            <div className="card-container">
                {store.categories.map((category, index) => (
                    <Card
                        key={index}
                        uid={category}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
};
