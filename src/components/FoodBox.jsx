
const FoodBox = ({ food }) => {
  const { name, calories, image, servings } = food;

  return (
    <div 
        style={{ 
            border: '1px solid lightgrey', 
            paddingTop: '1rem',
        }} 
    >
        <h4><b>{name}</b></h4>

        <img src={image} alt="Fruit Image" style={{ maxWidth: '250px' }} />

        <p>Calories: {calories}</p>
        <p>Servings <b>{servings}</b></p>

        <p>
            <b>Total Calories: {calories * servings} </b> kcal
        </p>

        <button>Delete</button>
    </div>
  );
};

export default FoodBox;
