export const displayResturants = (reduxState) => {
  const cloneRestaurants = [...reduxState.restaurants.allRestaurants];
  return cloneRestaurants.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const selectRestaurantsWithPizzas = (reduxState) => {
  return reduxState.restaurants.map((restaurant) => {
    return {
      ...restaurant,
      pizzas: restaurant.pizzas.map((pizzaId) => {
        return reduxState.pizzas.allPizzas.find(
          (pizza) => pizza.id === pizzaId
        );
      }),
    };
  });
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.filter((restaurant) =>
    restaurant.pizzas.includes(pizzaId)
  );
};
