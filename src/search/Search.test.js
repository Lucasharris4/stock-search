import { render, screen, waitFor } from '@testing-library/react';
import { StockPrice, Search } from './Search';
import { mockGetStockByTicker } from './search-service/SearchService';
import * as sinon from 'sinon';
import { mockProfile } from '../mocks';
import NumberFormat from 'react-number-format';
jest.mock('react-number-format', () => ({}));


let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();

})

test('renders learn react link', () => {
  render(<Search />);
  const stockSearch = screen.getByText(/Enter Stock Ticker/i);
  expect(stockSearch).toBeInTheDocument();
});

test('should make the API call with the entered stock ticker', async () => {
  const searchComponent = new Search({ getStockByTicker: mockGetStockByTicker });
  jest.spyOn(searchComponent, 'getStockByTicker');
  await searchComponent.handleInputChange({
    target: {
      value: 'AAPL'
    }
  })
  await waitFor(() => {
    expect(searchComponent.getStockByTicker).toHaveBeenCalled();
  })
});

test('should return the positive class for positive change in stock', () => {
  const stockPriceElement = new StockPrice({ profile: mockProfile });
  const result = stockPriceElement.getClassName();
  expect(result).toEqual('positive');
});

test('should return the negative class for positive change in stock', () => {
  const mockProfileCopy = JSON.parse(JSON.stringify(mockProfile));
  mockProfileCopy.changes = -1.22;
  const stockPriceElement = new StockPrice({ profile: mockProfileCopy });
  const result = stockPriceElement.getClassName();
  expect(result).toEqual('negative');
});
