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
      <input type="text" onChange={handleSearch}/>
      <NavLink to={`/browse/s=${search}`}>Search</NavLink> <br/>
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