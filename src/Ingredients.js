import React ,{useState,useEffect} from 'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";


const Ingredients = () => {
  const [mealsIng, setMealsIng] = useState([])
  const params = useParams()


  useEffect( () => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
      .then(({data})=>setMealsIng(data.meals))
  },[])


  return (
    <div className='row'>
      {
        mealsIng.map(el => (
            <div key={el.idMeal} className='col-3'>
              <NavLink to={`/foodinfo/i=${el.idMeal}`}>
                <img src={el.strMealThumb} alt="" className='img'/>
                <div>
                  {el.strMeal}
                </div>
              </NavLink>
            </div>
          )
        )
      }
    </div>
  );
};

export default Ingredients;