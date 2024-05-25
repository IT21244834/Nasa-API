import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MRP from './MRP';

describe('MRP Component', () => {
  test('renders MRP component with initial state', () => {
    render(<MRP />);

    const pageTitle = screen.getByText(/On Mars/i);
    const filterSelection = screen.getByRole('combobox');
    const welcomeText = screen.getByText(/Welcome to our Mars photo gallery!/i);

    expect(pageTitle).toBeInTheDocument();
    expect(filterSelection).toBeInTheDocument();
    expect(welcomeText).toBeInTheDocument();
  });

  test('updates camera filter and page on filter selection', async () => {
    render(<MRP />);

    const filterSelection = screen.getByRole('combobox');
    userEvent.selectOptions(filterSelection, 'MAST');
    
    // Simulate loading state due to API fetch
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();

    // Wait for data loading to finish (this can be replaced with a mock API response in testing)
    await screen.findByTestId('photo-grid');

    const photos = screen.getAllByTestId('photo-thumbnail');
    expect(photos.length).toBeGreaterThan(0);

    // Check if the camera filter was applied
    expect(screen.getByText(/Camera: MAST/i)).toBeInTheDocument();

    // Check if pagination is rendered
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });
});
