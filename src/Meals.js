import React, {useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
      .then(({data}) => {
        setMeals(data.meals)
      })
  },[])

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div>
      <input type="text" onChange={handleSearch} class="input-group-text" id="inputGroup-sizing-default"/>
      <NavLink to={`/browse/${search}`}>Search</NavLink> <br/>
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