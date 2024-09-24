import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const SearchResults = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h2>Search Results</h2>
            <div className="row">
                {store.searchResults.length > 0 ? (
                    store.searchResults.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <Card 
                                uid={item.uid}
                                category="people"
                                name={item.name}
                                imageUrl={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};
