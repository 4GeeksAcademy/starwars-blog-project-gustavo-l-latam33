import React from "react";
import PropTypes from "prop-types";

export const Card = ({ uid, category, onClick }) => {
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : category}/${uid}.jpg`;

    return (
        <div className="card" onClick={onClick}>
            <img src={imageUrl} alt={`${category} ${uid}`} />
            <p>{uid}</p>
        </div>
    );
};

Card.propTypes = {
    uid: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
