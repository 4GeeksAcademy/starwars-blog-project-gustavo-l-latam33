import React from "react";
import PropTypes from "prop-types";
import Styles from "../../styles/card.css"

export const Card = ({ uid, category, name, title, imageUrl, onClick }) => {
    const defaultImageUrl = imageUrl || `https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : category}/${uid}.jpg`;
    const placeholderUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    const displayName = category === "films" ? title : name;
    const handleImageError = (e) => {
        e.target.src = placeholderUrl;
    };

    return (
        <div className="card" onClick={onClick}>
            <img 
                src={defaultImageUrl} 
                alt={`${displayName}`} 
                onError={handleImageError}
            />
            <p>{displayName}</p>
        </div>
    );
};

Card.propTypes = {
    uid: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string, 
    title: PropTypes.string, 
    imageUrl: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};