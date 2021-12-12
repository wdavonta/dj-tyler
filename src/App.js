import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Nav/navbar"
import Home from "./pages/navbar/home"
import About from "./pages/navbar/about"
import Contact from "./pages/navbar/contact"




function App() {


  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' compent={Contact} />
        </Switch>
      </Router>
    );
  }

export default App;