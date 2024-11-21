
const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;

  return (
    <div>
        <p><b>{name}</b></p>

        <img src={image} alt="Fruit Image" />

        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>

        <p>
            <b>Total Calories: {calories * servings} </b> kcal
        </p>

        <button>Delete</button>
    </div>
  );
};

export default FoodBox;
