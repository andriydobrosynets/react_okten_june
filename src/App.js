import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import About from "./about/About";

function App() {
  return (
    <Router>
        <div>
            <Link to={'/'}> Start page </Link>
            <br/>
            <Link to={'/about'}> About </Link>
            <br/>
            <Link to={'/users'}>Users</Link>
            <br/>
            <Link to={'/posts'}>Posts</Link>
            <br/>
            <Link to={'/comments'}>Comments</Link>
        </div>
        <Route path={'/about'} render={() => <About/>} />
        <Route path={'/users'} render={() => <Users/>} />
        <Route path={'/posts'} render={() => <Posts/>} />
        <Route path={'/comments'} render={() => <Comments/>} />
    </Router>
  );
}
export default App;
