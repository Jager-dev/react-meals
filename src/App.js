import {BrowserRouter as Router, Route} from "react-router-dom";
import Meals from "./components/Meals/Meals";
import MealDetails from "./components/MealDetails/MealDetails";
import Browse from "./views/Browse";
import Ingredients from "./views/Ingredients";
import Header from "./views/Header";
import Home from "./components/Home/Home";



function App() {
  return (
  <Router>
    <Header />
    <Route exact path={"/"}><Meals /></Route>
    <Route path={"/mealdetails/i=:id"}><MealDetails /></Route>
    <Route path={"/browse/:name"}><Browse /></Route>
    <Route path={"/ingredients/:name"}><Ingredients /></Route>
    <Route path={"/home"}><Home /></Route>
  </Router>
  )
}

export default App;

