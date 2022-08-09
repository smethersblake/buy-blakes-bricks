import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropdownTab from '..';

afterEach(cleanup);

describe('DropdownTab component', () => {
  // Renders
  it('renders', () => {
    render(<DropdownTab />);
  });

  // Matches Snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<DropdownTab />);
    expect(asFragment()).toMatchSnapshot();
  });
});
