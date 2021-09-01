import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const MealDetails = () => {
  const [meal, setMeal] = useState({})
  const [ings, setIngs] = useState([])
  const [youtube, setYoutube] = useState("")

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
        let youtubeCode = obj.strYoutube.slice(obj.strYoutube.indexOf("v=") + 2, obj.strYoutube.length  )
        setIngs(ings)
        setYoutube(youtubeCode)
      })
  }, [params.id])



  return (
    <div className="row">
      Meals details:


      <div><img src={meal.strMealThumb} alt="" width={"300"}/></div>
      <div>{meal.strInstructions}</div>
      <div className="row">
        {
          ings.map(item =>
            <div key={item} className={"col-3"}>
              <Link to={`/ingredients/${item}`}>
                <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt="" className={"ings-img"}/>
                <p>{item}</p>

              </Link>

            </div>
          )
        }
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
      </div>
    </div>
  );
}
export default MealDetails;