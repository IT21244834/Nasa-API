import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const navbarElement = screen.getByText(/NASA/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders Home link', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders Todays Picture link', () => {
    render(<Navbar />);
    const pictureLink = screen.getByText(/Todays Picture/i);
    expect(pictureLink).toBeInTheDocument();
  });

  test('renders On Mars link', () => {
    render(<Navbar />);
    const marsLink = screen.getByText(/On Mars/i);
    expect(marsLink).toBeInTheDocument();
  });

  test('renders Wild Fire link', () => {
    render(<Navbar />);
    const fireLink = screen.getByText(/Wild Fire/i);
    expect(fireLink).toBeInTheDocument();
  });
});
