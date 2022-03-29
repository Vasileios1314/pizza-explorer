import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/restaurants/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useState } from "react";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas);
  const [selectPizza, setSelectPizza] = useState(pizzas[0].id);
  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectPizza)
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
              <ul>
                {restaurant.pizzas.map((pizza) => (
                  <li key={pizza.id}>{pizza.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          Pizza:
          <select
            value={selectPizza}
            onChange={(e) => {
              setSelectPizza(parseInt(e.target.value));
            }}
          >
            {pizzas.map((pizza) => (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            ))}
          </select>
        </h2>
        <ul>
          {restaurantsThatSellSelectedPizza.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
