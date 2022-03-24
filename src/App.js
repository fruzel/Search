
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import { useState } from "react";

function App() {
  const [results, setResults] = useState('');
  const [searchType, setSearchType] = useState('search');

  return (
    <div className="App">
     <Nav setSearchType={setSearchType} setResults= {setResults} />
     <SearchBar setResults= {setResults} searchType = {searchType} />
     <Results  searchType = {searchType} results = {results} />
    </div>
  );
}

export default App;
