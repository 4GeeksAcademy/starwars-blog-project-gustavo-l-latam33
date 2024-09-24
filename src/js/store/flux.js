const getState = ({ getStore, setStore }) => {
    return {
        store: {
            categories: [],
            items: [],
            currentCategory: null,
            selectedItem: null,
            favorites: [],
            searchResults: []
        },
        actions: {
            fetchCategories: async () => {
                const store = getStore();
                if (store.categories.length === 0) {
                    try {
                        const response = await fetch("https://www.swapi.tech/api/");
                        const data = await response.json();
                        const categories = Object.keys(data.result);
                        setStore({ categories });
                    } catch (error) {
                        console.error("Error fetching categories:", error);
                    }
                }
            },

            fetchCategoryItems: async (category) => {
                const store = getStore();
                if (store.currentCategory !== category) {
                    try {
                        const response = await fetch(`https://www.swapi.tech/api/${category}/?page=1&limit=100`);
                        if (!response.ok) {
                            throw new Error(`Error fetching ${category} items`);
                        }
                        const data = await response.json();

                        let items = [];
                        if (data.result && Array.isArray(data.result)) {
                            items = data.result;
                        } else if (data.results && Array.isArray(data.results)) {
                            items = data.results;
                        } else {
                            throw new Error(`Invalid data format for category: ${category}`);
                        }

                        setStore({ 
                            items, 
                            currentCategory: category 
                        });
                    } catch (error) {
                        console.error(`Error fetching items for category ${category}:`, error);
                    }
                }
            },

            fetchItemDetails: async (category, id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching item details: ${response.status} ${response.statusText}`);
                    }
                    const data = await response.json();
                    setStore({ selectedItem: data.result.properties });
                } catch (error) {
                    console.error("Error fetching item details:", error);
                }
            },

            fetchSearchResults: async (query) => {
                try {
                    const peopleResponse = await fetch(`https://www.swapi.tech/api/people/?name=${query}`);
                    const peopleData = await peopleResponse.json();

                    const planetResponse = await fetch(`https://www.swapi.tech/api/planets/?name=${query}`);
                    const planetData = await planetResponse.json();

                    const vehicleResponse = await fetch(`https://www.swapi.tech/api/vehicles/?name=${query}`);
                    const vehicleData = await vehicleResponse.json();

                    const results = [
                        ...peopleData.results || [],
                        ...planetData.results || [],
                        ...vehicleData.results || []
                    ];

                    setStore({ searchResults: results });
                    return results;
                } catch (error) {
                    console.error("Error en la búsqueda:", error);
                    return [];
                }
            },

            clearSelectedItem: () => {
                setStore({ selectedItem: null });
            },

            addToFavorites: (item, category) => {
                const store = getStore();
                const newItem = {
                    ...item,
                    name: category === "films" ? item.title : item.name,
                    category: category, 
                };
                
                if (!store.favorites.find((fav) => fav.uid === newItem.uid)) {
                    setStore({ favorites: [...store.favorites, newItem] });
                }
            },            

            removeFromFavorites: (uid) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.uid !== uid)
                });
            }
        }
    };
};

export default getState;
