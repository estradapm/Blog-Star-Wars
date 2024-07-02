import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ name, uid }) => {
    return (
        <div className="card" style={{ minWidth: "18rem", margin: "10px" }}>
            <img src={""} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">hola</p>
                <Link to={"/PeopleDetails/" + uid} className="btn btn-primary">Learn more</Link>
                <button className="btn btn-secondary">Fav</button>
            </div>
        </div>
    );
};

export default PeopleCard;