import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About'; // Check and correct the paths
import Projects from './components/Projects'; // Check and correct the paths
import Contact from './components/Contact'; // Check and correct the paths

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    
    </Router>
  );
}

export default App;
