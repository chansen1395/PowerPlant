import { render, screen } from '@testing-library/react';
import {storeState, stateControl, changeState, feed, blueFood, hydrate, superWater,} from './App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
