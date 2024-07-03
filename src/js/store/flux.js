const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
            planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {

			getPeopleDetails: async (uid) => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/people/" + uid);
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching peopleDetails")
					const data = await resp.json();
					console.log(data)
					setStore ({peopleDetails: data.result})
				} catch (error) {
					console.log (error)
				}
			},
			getPeople: async () => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/people");
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching people")
					const data = await resp.json();
					console.log(data)
					setStore ({people: data.results})
				} catch (error) {
					console.log (error)
				}
			},

			getPlanetsDetails: async (uid) => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/planets/" + uid);
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching planetsDetails")
					const data = await resp.json();
					console.log(data)
					setStore ({planetsDetails: data.result})
				} catch (error) {
					console.log (error)
				}
			},
			getPlanets: async () => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/planets");
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching planets")
					const data = await resp.json();
					console.log(data)
					setStore ({planets: data.results})
				} catch (error) {
					console.log (error)
				}
			},

			getVehiclesDetails: async (uid) => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/vehicles/" + uid);
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching vehiclesDetails")
					const data = await resp.json();
					console.log(data)
					setStore ({vehiclesDetails: data.result})
				} catch (error) {
					console.log (error)
				}
			},
			getVehicles: async () => {
				try {
					const resp = await fetch ("https://www.swapi.tech/api/vehicles");
					console.log (resp)
					if (!resp.ok) throw new Error ("Error fetching vehicles")
					const data = await resp.json();
					console.log(data)
					setStore ({vehicles: data.results})
				} catch (error) {
					console.log (error)
				}
			},
			addFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
            },
            removeFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== item) });
            },
		}
	};
};

export default getState;
