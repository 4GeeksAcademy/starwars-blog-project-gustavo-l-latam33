import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom"; 
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import Style from "../../styles/home.css"


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCategories();
    }, [actions]);

    const categoryImages = {
        starships: "https://starwars-visualguide.com/assets/img/categories/starships.jpg",
        vehicles: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
        planets: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
        species: "https://starwars-visualguide.com/assets/img/categories/species.jpg",
        films: "https://starwars-visualguide.com/assets/img/categories/films.jpg",
        people: "https://starwars-visualguide.com/assets/img/categories/character.jpg"
    };

    return (
        <div className="home-page">
            <h1>Star Wars Categories</h1>
            <div className="card-container">
                {store.categories.length > 0 ? (
                    store.categories.map(category => (
                        <Link to={`/${category}`} key={category}>
                            <Card
                                uid={category}
                                category={category}
                                name={category} 
                                imageUrl={categoryImages[category]}
                                onClick={() => {}} 
                            />
                        </Link>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>
        </div>
    );
};