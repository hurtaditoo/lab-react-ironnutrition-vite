import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFood] = useState(foodsJson);

  return (
    <div className="App">
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      } } 
      />

    </div>
  );
}

export default App;
