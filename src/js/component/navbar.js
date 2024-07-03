import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteFavorite = (item) => {
        actions.removeFavorite(item);
    };

    return (
        <nav className="navbar navbar-expand-lg mb-3 " style={{ backgroundColor: "black" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" 
                        alt="logo Star Wars" 
                        style={{ height: "60px", marginRight: "10px" }}
                    />
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites <span className="badge badge-light">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            {store.favorites.length === 0 ? (
                                <li><span className="dropdown-item">No favorites</span></li>
                            ) : (
                                store.favorites.map((favorite, index) => (
                                    <li key={index} className="d-flex justify-content-between align-items-center">
                                        <span className="dropdown-item">{favorite}</span>
                                        <button className="btn btn-outline-danger btn-sm" style={{marginRight: "15px"}}onClick={() => handleDeleteFavorite(favorite)}><i className="fa fa-trash"></i></button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};