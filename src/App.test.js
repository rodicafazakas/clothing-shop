import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from './store/store';
import App from './App';

test('renders shop link', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>  
  );
  const linkElement = screen.getByText(/SHOP/i);
  expect(linkElement).toBeInTheDocument();
});
