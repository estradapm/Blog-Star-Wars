import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const VehiclesDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.getVehiclesDetails(uid);
    }, [uid, actions]);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ marginTop: "-25px", marginLeft: "-20px", marginRight: "-20px" }}>
                <h2 style={{ backgroundColor: "yellow", textAlign: "center", marginBottom: "20px", padding: "10px 0" }}>
                    Learn more: {store.vehiclesDetails?.properties.name}
                </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                <div style={{ textAlign: "center" }}>
                    <figure>
                        <img 
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} 
                            alt={store.vehiclesDetails?.properties.name} 
                            style={{ width: "300px", borderRadius: "10px", marginTop: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        />
                        <figcaption style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
                            {store.vehiclesDetails?.properties.name}
                            <p style={{ marginTop: "10px", textAlign: "center", color: "grey" }}>
                                <strong>{store.vehiclesDetails?.description}</strong>
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div style={{ width: "50%", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
                    <p><strong>Cargo capacity:</strong> {store.vehiclesDetails?.properties.cargo_capacity}</p>
                    <p><strong>Consumables:</strong> {store.vehiclesDetails?.properties.consumables}</p>
                    <p><strong>Cost in credits:</strong> {store.vehiclesDetails?.properties.cost_in_credits}</p>
                    <p><strong>Created:</strong> {store.vehiclesDetails?.properties.created}</p>
                    <p><strong>Crew:</strong> {store.vehiclesDetails?.properties.crew}</p>
                    <p><strong>Edited:</strong> {store.vehiclesDetails?.properties.edited}</p>
                    <p><strong>Manufacturer:</strong> {store.vehiclesDetails?.properties.manufacturer}</p>
                    <p><strong>Max atmosphering speed:</strong> {store.vehiclesDetails?.properties.max_atmosphering_speed}</p>
                    <p><strong>Model:</strong> {store.vehiclesDetails?.properties.model}</p>
                    <p><strong>Passengers:</strong> {store.vehiclesDetails?.properties.passengers}</p>
                    <p><strong>Pilots:</strong> {store.vehiclesDetails?.properties.pilots}</p>
                    <p><strong>Films:</strong> {store.vehiclesDetails?.properties.films}</p>
                    <p><strong>Vehicle class:</strong> {store.vehiclesDetails?.properties.vehicle_class}</p>
                </div>
            </div>
        </div>
    );
};