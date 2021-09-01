import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {

  const [foods, setFoods] = useState([])
  const [message, setMessage] = useState("")

  const params = useParams()


  useEffect(() => {
    setMessage("")
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
      .then(({data}) => {
        !data.meals ? setMessage("Такого блюда нет!") : setFoods(data.meals)
      })
  }, [params.name])

  return (
    <div>
      <div>
        <h2>{message}</h2>
      </div>
      {
        foods.map(el =>
          <p key={el.id}>
            <NavLink to={`/mealdetails/i=${el.idMeal}`}>{el.strMeal}
              <img src={el.strMealThumb} alt="" className='browse-img'/>
            </NavLink>
          </p>
        )
      }
    </div>
  );
};

export default Browse;