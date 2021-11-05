import './style/App.css';
import Home from './components/Home';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <header>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h1>Books4Poors <span className='money'>💸</span></h1>
            </Link>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/books' component={Books} />
            <Route path='/books/:id' component={BookDetails} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;