import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodsJson);

  return (
    <div className="App">
      <h2>Food List</h2>
      <div className="food-list">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} />
        ))}
      </div>

    </div>
  );
}

export default App;
