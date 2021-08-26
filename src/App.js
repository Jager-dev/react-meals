import {BrowserRouter as Router,Route} from "react-router-dom";
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";



function App() {
  return (
  <Router>
    <Route exact path={"/"}><Meals /></Route>
    <Route path={"/mealdetails/i=:id"}><MealDetails /></Route>
    <Route path={"/browse/s=:name"}><Browse /></Route>
  </Router>
  )
}

export default App;

