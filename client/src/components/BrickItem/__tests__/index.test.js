import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrickItem from '..';

afterEach(cleanup);

describe('BrickItem component', () => {
  // Renders
  it('renders', () => {
    render(<BrickItem />);
  });

  // Matches Snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<BrickItem />);

    expect(asFragment()).toMatchSnapshot();
  });
});
