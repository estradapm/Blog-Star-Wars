import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesCard = ({ name, uid }) => {
    const { store, actions } = useContext(Context);

    const [isHeartFilled, setIsHeartFilled] = useState(false);

    useEffect(() => {
        actions.getVehiclesDetails(uid);
    }, []);

    const toggleHeart = () => {
        setIsHeartFilled(!isHeartFilled);
        if (!isHeartFilled) {
            actions.addFavorite(name);
        } else {
            actions.removeFavorite(name);
        }
    };

    return (
        <div className="card" style={{ minWidth: "13rem", margin: "10px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="card-text">
                    <p>Cargo capacity: ... </p>
                    <p>Model: ...</p>
                    <p>Passengers: ... </p>
                </div>
                <Link to={`/VehiclesDetails/${uid}`} className="btn btn-outline-primary" style={{ marginRight: "10px" }}>
                    Learn more
                </Link>
                <button type="button" className="btn btn-outline-danger" onClick={toggleHeart}>
                    <i className={`fa fa-heart ${isHeartFilled ? 'text-danger' : ''}`} />
                </button>
            </div>
        </div>
    );
};

export default VehiclesCard;