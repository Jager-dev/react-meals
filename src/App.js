import {BrowserRouter as Router, Route} from "react-router-dom";
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";
import Ingredients from "./Ingredients";
import Header from "./Header";



function App() {
  return (
  <Router>
    <Header />
    <Route exact path={"/"}><Meals /></Route>
    <Route path={"/mealdetails/i=:id"}><MealDetails /></Route>
    <Route path={"/browse/:name"}><Browse /></Route>
    <Route path={"/ingredients/:name"}><Ingredients /></Route>
  </Router>
  )
}

export default App;

