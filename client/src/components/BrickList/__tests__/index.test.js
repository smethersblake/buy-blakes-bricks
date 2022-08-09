import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrickLists from '..';

afterEach(cleanup);

describe('BrickLists component', () => {
  // Renders
  it('renders', () => {
    render(<BrickLists />);
  });

  // Matches Snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<BrickLists />);
    expect(asFragment()).toMatchSnapshot();
  });
});
