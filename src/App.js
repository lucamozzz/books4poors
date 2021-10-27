import './style/App.css';
import Searchbar from './components/Searchbar';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <h1>Books4Poors</h1>
          <Searchbar />
        </header>
        <Welcome />
        <BookDetails />
        <Books />
        <Footer />
      </div>
    </div >
  );
}

export default App;