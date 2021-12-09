import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/home"
import About from "./pages/about"
function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
