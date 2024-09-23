const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		favourites: [],
	  },
	  actions: {
		deleteTrash: (favorite) => {
		  const store = getStore();
		  const actions = getActions();
		  const isFavorite = actions.heartColour(favorite);
		  if (isFavorite) {
			setStore({
			  favourites: store.favourites.filter((repeat) => repeat.title != favorite.title),
			});
		  }
		},
		// Use getActions to call a function within a fuction
		heartColour: (favorite) => {
		  const store = getStore();
		  return store.favourites.some(item => favorite.title == item.title);
		},
		favouritesAction: (favorite) => {
		  const store = getStore();
		  if (store.favourites.some(item => favorite.title == item.title)) {
			setStore({
			  favourites: store.favourites.filter((repeat) => repeat.title != favorite.title),
			});
		  } else { 
			setStore({ favourites: [...store.favourites, favorite] });
		  }
		},
		getInfoDetails: async (urlForFetch) => {
		  try {
			let response = await fetch(urlForFetch);
			if (!response.ok) {
			  console.error(`Error Request: ${response.status}`);
			  return;
			}
			let data = await response.json();
  
			return data.result.properties;
		  } catch (error) {
			console.error(`Promise error: ${error}`);
		  }
		},
  
		swapiFetch: async (elementType) => {
		  //https://swapi.tech/api/people
		  try {
			let resp = await fetch(`https://swapi.tech/api/${elementType}`);
			if (!resp.ok) {
			  console.error(`Error en la peticion: ${resp.status}`);
			  return;
			}
			let data = await resp.json();
			return data;
		  } catch (error) {
			console.error(`Error en la promesa: ${error}`);
			return;
		  }
		},
  
		adjacentPage: async (urlFetch) => {
		  try {
			let resp = await fetch(urlFetch);
			if (!resp.ok) {
			  console.error(`Error en la peticion: ${resp.status}`);
			  return;
			}
			let data = await resp.json();
			return data;
		  } catch (error) {
			console.error(`Error en la promesa: ${error}`);
			return;
		  }
		},
	  },
	};
  };
  
  export default getState;