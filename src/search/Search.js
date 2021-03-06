import './Search.css';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getStockByTicker = props.getStockByTicker;
  }
  searchService;

  handleInputChange(event) {
    this.getStockByTicker(event.target.value);
  }
  
  render() {
    return (
      <div className="Search">
        Enter Stock Ticker: <input className="search" type="text" name="search" onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default Search;