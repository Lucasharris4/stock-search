import { render, screen } from '@testing-library/react';
import Search from './Search';
import { mockGetStockByTicker } from './search-service/SearchService';
jest.mock('./search-service/SearchService');

beforeEach(() => {
  mockGetStockByTicker.mockClear();
})

test('renders learn react link', () => {
  render(<Search />);
  const stockSearch = screen.getByText(/Enter Stock Ticker/i);
  expect(stockSearch).toBeInTheDocument();
});

test('should make the API call with the entered stock ticker', () => {
  console.log(mockGetStockByTicker);
  const searchComponent = new Search({ getStockByTicker: mockGetStockByTicker });
  searchComponent.handleInputChange({
    target: {
      value: 'KO'
    }
  });
  expect(mockGetStockByTicker).toHaveBeenCalledWith('KO');
});
