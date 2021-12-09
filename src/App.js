import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/navbar/home"
import About from "./pages/navbar/about"
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
