import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchList from '..';

afterEach(cleanup);

describe('SearchList component', () => {
  // Renders
  it('renders', () => {
    render(<SearchList />);
  });

  // Matches Snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<SearchList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
