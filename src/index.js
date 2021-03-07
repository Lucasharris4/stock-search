import React from 'react';
import { Search } from './search/Search'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { getStockByTicker } from './search/search-service/SearchService';


ReactDOM.render(
  <React.StrictMode>
    <Search getStockByTicker={getStockByTicker} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
