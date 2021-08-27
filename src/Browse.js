import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {
  const [foods, setFoods] = useState([])

  const params = useParams()


  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?s=${params.name}`)
      .then(({data}) => {
        setFoods(data.meals[0])
      })
  },[])

  return (
    <div>
      {


      }
    </div>
  );
};

export default Browse;