import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PeopleCard from "../component/peopleCard";

export const Home = () => {

	const {store, actions} = useContext (Context);

	return (
	<div className="text-center mt-5">
		<div className="container d-flex">
		{store.people?.map(el => <PeopleCard 
			key = {el.uid} 
			name = {el.name}
			uid ={el.uid} 
		/>)}
		</div>
	</div>

	)
};
