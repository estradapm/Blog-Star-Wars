import React from "react";
import { useParams } from "react-router";


export const PeopleDetails = () => {

    const {id} = useParams ()
   

    return (

        <h2>Details page</h2>
    );
};