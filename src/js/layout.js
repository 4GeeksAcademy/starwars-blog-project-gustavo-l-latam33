import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Category } from "./views/category";
import { Sidebar } from "./component/sidebar";
import { Modal } from "./component/modal"; 
import injectContext, { Context } from "./store/appContext";
import "../styles/global.css";

const Layout = () => {
    const { actions } = useContext(Context);

    // useEffect(() => {
    //     actions.fetchCategories();  
    // }, []); 

    return (
        <Router>
            <div className="layout">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:category" element={<Category />} />
                    </Routes>
                </div>
                <Modal />
            </div>
        </Router>
    );
};

export default injectContext(Layout);
