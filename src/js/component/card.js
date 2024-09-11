import React from "react";
import "../../styles/card.css";

export const Card = ({ name, uid, category, onClick }) => {
    const imageCategory = category === "people" ? "characters" : category;
    const imageUrl = `https://starwars-visualguide.com/assets/img/${imageCategory}/${uid}.jpg`;

    return (
        <div className="card" onClick={onClick}>
            <img src={imageUrl} alt={name} className="card-img" />
            <h3>{name}</h3>
            <p>Learn more about {name}</p>
        </div>
    );
};
