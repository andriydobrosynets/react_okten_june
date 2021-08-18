import './App.css';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Users/>
        <h3>Users Posts</h3>
        <Posts/>
      <h3>Сomments to posts</h3>
      <Comments/>
    </div>
  );
}
export default App;