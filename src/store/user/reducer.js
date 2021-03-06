const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "user/toggleFavorite": {
      const id = payload;

      const favorites = state.favorites.includes(id) // check if we already have it
        ? state.favorites.filter((f) => f !== id) // remove
        : [...state.favorites, id]; // add

      return {
        ...state,
        favorites,
      };
    }
    default: {
      return state;
    }
  }
}
