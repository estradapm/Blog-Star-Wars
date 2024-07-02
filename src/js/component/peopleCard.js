import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const PeopleCard = ({ name, uid }) => {

    const {store, actions} = useContext (Context);
    
    useEffect (()=> {
        actions.getPeopleDetails(uid)

    }, [])

    return (
        <div className="card" style={{ minWidth: "12rem", margin: "10px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="card-text">
                    <p>Gender: {store.peopleDetails?.properties.gender}</p>
                    <p>Eye color: {store.peopleDetails?.properties.eye_color}</p>
                    <p>Height: {store.peopleDetails?.properties.height}</p>
                </div>
                <Link to={"/PeopleDetails/" + uid} className="btn btn-primary"style={{ marginRight: "10px" }}>Learn more</Link>
                <button className="btn btn-secondary">Fav</button>
            </div>
        </div>
    );
};

export default PeopleCard;