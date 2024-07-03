import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getPlanetsDetails(uid);
    }, [uid, actions]);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ marginTop: "-25px", marginLeft: "-20px", marginRight: "-20px" }}>
                <h2 style={{ backgroundColor: "yellow", textAlign: "center", marginBottom: "20px", padding: "10px 0" }}>
                    Learn more: {store.planetsDetails?.properties.name}
                </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <div style={{ textAlign: "center" }}>
                    <figure>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} 
                            alt={store.planetsDetails?.properties.name} 
                            style={{ width: "300px", borderRadius: "10px", marginTop: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        />
                        <figcaption style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
                            {store.planetsDetails?.properties.name}
                            <p style={{ marginTop: "10px", textAlign: "center", color: "grey" }}>
                                <strong>{store.planetsDetails?.description}</strong>
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div style={{ width: "50%", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
                    <p><strong>Rotation period:</strong> {store.planetsDetails?.properties.rotation_period}</p>
                    <p><strong>Orbital period:</strong> {store.planetsDetails?.properties.orbital_period}</p>
                    <p><strong>Gravity:</strong> {store.planetsDetails?.properties.gravity}</p>
                    <p><strong>Population:</strong> {store.planetsDetails?.properties.population}</p>
                    <p><strong>Climate:</strong> {store.planetsDetails?.properties.climate}</p>
                    <p><strong>Terrain:</strong> {store.planetsDetails?.properties.terrain}</p>
                    <p><strong>Sufrace water:</strong> {store.planetsDetails?.properties.surface_water}</p>
                    <p><strong>Edited:</strong> {store.planetsDetails?.properties.edited}</p>
                    <p><strong>Url:</strong> {store.planetsDetails?.properties.url}</p>
                    
                </div>
            </div>
        </div>
    );
};