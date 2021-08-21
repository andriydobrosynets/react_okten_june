import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import Form from "./form/Form"
function App() {
  return (
      <Router>
        <div>
          <Link to={'/'}> Start page </Link>
          <br/>
          <Link to={'/cars'}> Cars with Database  </Link>
          <br/>
          <Link to={'/formAddCar'}>Form Add Car  </Link>
          <br/>

        </div>
        <Route path={'/cars'} render={() => <Cars/>} />
          <Route path={'/formAddCar'} render={() => <Form/>} />
      </Router>
  );
}


export default App;
