import './style/App.css';
import Books from './components/Books';
import Home from './components/Home';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <header>
            <Link to='/'>
              <h1>Books4Poors</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/books' component={Books} />
            <Route path='/books/:id' component={BookDetails} />
          </Switch>
          <Footer />
        </div>
      </div >
    </Router>
  );
}

export default App;