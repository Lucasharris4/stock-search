import './Search.css';
import React from 'react';
import NumberFormat from 'react-number-format';
import debounce from 'lodash.debounce';
import { Form, Container } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false,
      profile: {}
    };
    this.getStockByTicker = props.getStockByTicker;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange = debounce(this.handleInputChange, 1000);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async handleInputChange(event) {
    const result = await this.getStockByTicker(event.target.value);
    if (this.mounted && result && result.data[0]) {
      this.setState({
        showProfile: true,
        profile: result.data[0] ? result.data[0] : {}
      });
    } else if (this.mounted) {
      this.setState({
        showProfile: false,
        profile: {}
      })
    }
  }

  getSearchBar() {
    return (
      <Form className="search">
        <Form.Label className="search-label">Enter Stock Ticker:</Form.Label>
        <Form.Control className="search-bar" type="text" name="search" onChange={this.handleInputChange}></Form.Control>
      </Form>)
  }

  render() {
    if (this.state.profile && this.state.showProfile) {
      return (
        <div className="app-header">
          <Container fluid="sm">
            {this.getSearchBar()}
            <StockPrice profile={this.state.profile} />
          </Container>
        </div>
      );
    }
    return (
      <div className="app-header">
        <Container fluid="sm">
          {this.getSearchBar()}
        </Container>
      </div>
    );
  }
}

class StockPrice extends React.Component {

  render() {
    let className = this.getClassName();
    return <div className="profile">
      <h1>{this.props.profile.symbol}</h1>
      <h3>{this.props.profile.companyName}</h3>
      <div>Price: <span><NumberFormat value={this.props.profile.price} displayType={'text'} thousandSeparator={true} prefix={'$'}></NumberFormat></span></div>
      <div>Beta: <span>{this.props.profile.beta}</span></div>
      <div>VolAvg: <span><NumberFormat value={this.props.profile.volAvg} displayType={'text'} thousandSeparator={true}></NumberFormat></span></div>
      <div>Market Cap: <span><NumberFormat value={this.props.profile.mktCap} displayType={'text'} thousandSeparator={true}></NumberFormat></span></div>
      <div>Last Dividend: <span>{this.props.profile.lastDiv}</span></div>
      <div>Range: <span>{this.props.profile.range}</span></div>
      <div>Changes: <span className={className}>{this.props.profile.changes}</span></div>
      <div>Website: <span><a href={this.props.profile.website}>{this.props.profile.website}</a></span></div>
    </div>
  }

  getClassName() {
    if (this.props.profile.changes < 0) {
      return 'negative';
    }
    return 'positive';
  }
}

export { Search, StockPrice };
