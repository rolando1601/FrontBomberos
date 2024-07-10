import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders welcome message', () => {
    render(<Home />);
    const heading = screen.getByText(/Welcome to Next.js!/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders Vercel logo', () => {
    render(<Home />);
    const image = screen.getByAltText(/Vercel Logo/i);
    expect(image).toBeInTheDocument();
  });
});
