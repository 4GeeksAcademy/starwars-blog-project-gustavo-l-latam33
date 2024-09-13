const getState = ({ getStore, setStore }) => {
    return {
        store: {
            categories: [],
            items: [],
            currentCategory: null,
            selectedItem: null,
            nextPage: null,
            previousPage: null,
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

            fetchCategoryItems: async (category, page = 1) => {
                const store = getStore();
                if (store.currentCategory !== category || store.items.length === 0) {
                    try {
                        const response = await fetch(`https://www.swapi.tech/api/${category}?page=${page}&limit=10`);
                        if (!response.ok) throw new Error(`Error fetching ${category} items`);
                        const data = await response.json();

                        // Para manejar tanto `result` como `results`
                        const items = data.result || data.results || [];
                        if (items.length === 0) throw new Error(`No items found for category: ${category}`);

                        setStore({
                            items,
                            currentCategory: category,
                            nextPage: data.next,
                            previousPage: data.previous
                        });
                    } catch (error) {
                        console.error(`Error fetching items for category ${category}:`, error);
                    }
                }
            },

            fetchItemDetails: async (category, id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${category}/${id}`);
                    if (!response.ok) throw new Error(`Error fetching item details`);
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
