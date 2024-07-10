import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders some text', () => {
    render(<Home />);
    const heading = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && !!content.trim();
    });
    expect(heading).toBeInTheDocument();
  });

});
