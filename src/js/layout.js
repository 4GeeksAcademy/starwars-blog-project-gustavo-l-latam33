import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Category } from "./views/category";
import { Sidebar } from "./component/sidebar";
import { Navbar } from "./component/navbar";
import { Modal } from "./component/modal";
import { SearchResults } from "./component/searchResults";
import injectContext, { Context } from "./store/appContext";
import "../styles/starwars.css";

const Layout = () => {
    const { store } = useContext(Context);

    return (
        <Router>
            <div className="layout">
                <Navbar />
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:category" element={<Category />} />
                    </Routes>

                    {store.searchResults.length > 0 && <SearchResults />}
                </div>
                <Modal />
            </div>
        </Router>
    );
};

export default injectContext(Layout);