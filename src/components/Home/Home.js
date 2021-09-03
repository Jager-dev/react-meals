import React from 'react';
import {Link} from "react-router-dom";
import Search from "../Search/Search"


const Home = () => {
  return (
    <div className={"home__container container"}>
      <div className={"home__page"}>
        <p className='home__search'>
          <Search/>
        </p>
        <h1 className={"home__title"}>Wholesome foods that make you enjoy life more</h1>
        <p className='home__btn'>
          <Link to="/" className="btn">Meals</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;