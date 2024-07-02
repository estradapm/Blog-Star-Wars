import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPeopleDetails(uid);
    }, [uid, actions]);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 className="alert alert-primary" role="alert" style={{ textAlign: "center", marginBottom: "20px" }}>Details Page</h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <div style={{ textAlign: "center" }}>
                    <figure>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
                            alt={store.peopleDetails?.properties.name} 
                            style={{ width: "300px", borderRadius: "10px", marginTop: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        />
                        <figcaption style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
                            {store.peopleDetails?.properties.name}
                            <p style={{ marginTop: "10px", textAlign: "center", color: "#084298" }}><strong>{store.peopleDetails?.description}</strong></p>
                        </figcaption>
                    </figure>
                </div>
                <div style={{ width: "50%", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
                    <p><strong>Gender:</strong> {store.peopleDetails?.properties.gender}</p>
                    <p><strong>Eye color:</strong> {store.peopleDetails?.properties.eye_color}</p>
                    <p><strong>Height:</strong> {store.peopleDetails?.properties.height}</p>
                    <p><strong>Mass:</strong> {store.peopleDetails?.properties.mass}</p>
                    <p><strong>Hair color:</strong> {store.peopleDetails?.properties.hair_color}</p>
                    <p><strong>Skin color:</strong> {store.peopleDetails?.properties.skin_color}</p>
                    <p><strong>Birth year:</strong> {store.peopleDetails?.properties.birth_year}</p>
                    <p><strong>Created:</strong> {store.peopleDetails?.properties.created}</p>
                    <p><strong>Edited:</strong> {store.peopleDetails?.properties.edited}</p>
                    <p><strong>Homeworld:</strong> {store.peopleDetails?.properties.homeworld}</p>
                    <p><strong>URL:</strong> {store.peopleDetails?.properties.url}</p>
                </div>
            </div>
        </div>
    );
};