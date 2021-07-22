import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router-dom';
import SearchByLastName from './components/SearchByLastName';
import SearchResultsView from './components/SearchResultsView';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/main" component={SearchByLastName} />
      <Route path="/SearchResults" component={SearchResultsView}></Route>

    
    </div>
    </BrowserRouter>
  );
}

export default App;


  /* <SearchByLastName></SearchByLastName> */