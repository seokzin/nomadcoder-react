import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    price: "5000",
    rating: 4.5
  },
  {
    id: 2,
    name: "pizza",
    price: "10000",
    rating: 4
  },
  {
    id: 3,
    name: "kimbap",
    price: "2000",
    rating: 5
  }
];

function renderFood(dish) {
  return (
  <Food
    key={dish.id} 
    name={dish.name} 
    price={dish.price} 
    rating={dish.rating}/>
   )
}

function Food( {name, price, rating } ) {
  return (
  <div>
    <h1>I like {name}</h1>
    <p>It's {price}W</p>
    <h4>{rating}/5</h4>
  </div>
  );
}

// 반드시 propTypes로 네이밍 해야 함.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
        {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
