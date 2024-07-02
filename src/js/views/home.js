import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PeopleCard from "../component/peopleCard";

export const Home = () => {
    const { store, actions } = useContext(Context);
    
    return (

        <div className="text-center mt-5">
            <h1 style={{ marginTop: "-37px", backgroundColor: "yellow", textAlign: "center", marginBottom: "20px", padding: "10px 0" }}>
                    Characters
            </h1>
            <div className="card-container" style={{maxWidth: "80%", margin: "auto" }}>
                {store.people?.map(el => (
                    <PeopleCard 
                        key={el.uid} 
                        name={el.name} 
                        uid={el.uid} 
                    />
                ))}
            </div>


            <h1 style={{ marginTop: "20px", backgroundColor: "yellow", textAlign: "center", marginBottom: "20px", padding: "10px 0" }}>
                    Planets
            </h1>


        </div>

        
    );
};