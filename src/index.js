import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY='AIzaSyDNRUj4xYmUx7h-xJCM8_HKmozKoxUXBH4';

const App = () => {
  return  (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
