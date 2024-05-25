import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MRP from './MRP';

describe('MRP Component Integration Test', () => {
  test('allows user to filter photos by camera and navigate pages', async () => {
    render(<MRP />);

    // Select a camera filter
    const filterSelection = screen.getByRole('combobox');
    userEvent.selectOptions(filterSelection, 'MAST');

    // Wait for data loading to finish (this can be replaced with a mock API response in testing)
    await screen.findByTestId('photo-grid');

    // Check if photos are rendered based on the selected filter
    const photos = screen.getAllByTestId('photo-thumbnail');
    expect(photos.length).toBeGreaterThan(0);

    // Check if pagination is rendered
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();

    // Navigate to the next page
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    userEvent.click(nextPageButton);

    // Wait for data loading for the next page
    await screen.findByTestId('photo-grid');

    // Check if photos on the next page are rendered
    const nextPagePhotos = screen.getAllByTestId('photo-thumbnail');
    expect(nextPagePhotos.length).toBeGreaterThan(0);

    // Check if the camera filter is still applied on the next page
    expect(screen.getByText(/Camera: MAST/i)).toBeInTheDocument();
  });
});
