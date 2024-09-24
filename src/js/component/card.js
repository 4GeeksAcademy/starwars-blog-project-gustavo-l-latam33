import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Style from "../../styles/card.css";

export const Card = ({ uid, category, name, title, imageUrl }) => {
    const { store, actions } = useContext(Context);

    const defaultImageUrl = imageUrl || `https://starwars-visualguide.com/assets/img/${category === 'people' ? 'characters' : category}/${uid}.jpg`;
    const placeholderUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    
    const displayName = category === "films" ? title : name;

    const handleImageError = (e) => {
        e.target.src = placeholderUrl;
    };

    const handleAddToFavorites = () => {
        const item = { uid, name: displayName, title, category };
        actions.addToFavorites(item);
    };

    const isFavorite = store.favorites.some(fav => fav.uid === uid);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img 
                src={defaultImageUrl} 
                alt={`${displayName}`} 
                onError={handleImageError}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{displayName}</h5>
                <button 
                    className={`btn ${isFavorite ? "btn-outline-warning" : "btn-warning"}`} 
                    onClick={handleAddToFavorites}
                >
                    {isFavorite ? "In Favorites" : "Add to Favorites"}
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    uid: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string, 
    title: PropTypes.string, 
    imageUrl: PropTypes.string
};
