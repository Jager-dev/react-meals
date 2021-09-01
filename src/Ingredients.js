import React ,{useState,useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const Ingredients = () => {
  const [ing, setIng] = useState([])
  const params = useParams()


  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
      .then(({data}) => setIng(data.meals))
  }, [params.name])


  return (
    <div className='row'>
      {
        ing.map(el => (
            <div key={el.idMeal} className='col-3'>
              <Link to={`/mealdetails/i=${el.idMeal}`}>
                <img src={el.strMealThumb} alt="" className='img'/>
                <div>
                  {el.strMeal}
                </div>
              </Link>
            </div>
          )
        )
      }
    </div>
  );
}
export default Ingredients;