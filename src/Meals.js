import {useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
      .then(({data}) => {
        setMeals(data.meals)
      })
  },[])

  return (
    <div>
      All meals:
      {
        meals.map(item =>
          <p key={item.id}>
            <NavLink to={`/mealdetails/i=${item.idMeal}`}>
              {item.strMeal}
            </NavLink>
          </p>
        )
      }
    </div>
  );
};

export default Meals;