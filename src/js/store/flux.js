const getState = ({ getStore, setStore }) => {
    return {
        store: {
            categories: [],
            items: [],
            currentCategory: null,
            selectedItem: null
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
                        const response = await fetch(`https://www.swapi.tech/api/${category}`);
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

            clearSelectedItem: () => {
                setStore({ selectedItem: null });
            }
        }
    };
};

export default getState;
