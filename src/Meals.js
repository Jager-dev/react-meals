import React, {useEffect,useState} from "react";
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
      <div className={'row'}>
        {
          meals.map(item =>
            <p key={item.id}  className={'col-3'}>
              <NavLink to={`/mealdetails/i=${item.idMeal}`}>
                  <div>
                    <img src={item.strMealThumb} alt="" className='img'/>
                    {item.strMeal}
                  </div>
              </NavLink>
            </p>
          )
        }
      </div>
    </div>
  );
};

export default Meals;