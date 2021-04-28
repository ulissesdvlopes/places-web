import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlacesListPage from './pages/PlacesListPage';
import PlaceChatPage from './pages/PlaceChatPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <PlaceChatPage />
        </Route>
        <Route path="/list">
          <PlacesListPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
