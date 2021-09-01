import { useParams} from "react-router-dom"
import {useEffect,useState} from "react";
import axios from "axios";

const MealDetails = () => {
  const [meal, setMeal] = useState({})
  const [ings, setIngs] = useState([])

  const params = useParams()

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then(({data}) => {
        const obj = data.meals[0]
        setMeal(obj)

        const ings = Array(20).fill(0).reduce((acc, rec, idx) => {
          if (obj[`strIngredient${idx + 1}`]) {
            return [...acc, obj[`strIngredient${idx + 1}`]]
          }
          return acc
        }, [])
        setIngs(ings)
      })
  }, [])

  return (
    <div className="row">
      Meals details:
      <div>{<img src={meal.strMealThumb} alt="" width={"300"}/>}</div>
      <div>{meal.strInstructions}</div>
      <div className="row">
        {
          ings.map(item =>
            <div key={item} className={"col-3"}>
              <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt="" className={"ings-img"}/>
              <p>{item}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default MealDetails;