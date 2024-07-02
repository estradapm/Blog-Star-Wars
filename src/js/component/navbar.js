import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{ backgroundColor: "black" }}>
			<Link to="/" className="navbar-brand mb-0 h1">
				<img 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" 
					alt="logo Star Wars" 
					style={{ height: "60px", marginRight: "10px" }}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn" style= {{backgroundColor: "yellow"}}>Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
