const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
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
			}
		}
	};
};

export default getState;
