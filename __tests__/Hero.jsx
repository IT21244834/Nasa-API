import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders Hero component with video background', () => {
    render(<Hero />);
    const heroElement = screen.getByText(/Wanna Explore The Universe?/i);
    const videoElement = screen.getByTestId('video-element');

    expect(heroElement).toBeInTheDocument();
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', '../assets/video.mp4');
    expect(videoElement).toHaveAttribute('autoPlay', '');
    expect(videoElement).toHaveAttribute('loop', '');
    expect(videoElement).toHaveAttribute('muted', '');
    expect(videoElement).toHaveAttribute('playsInline', '');
  });

  test('renders correct text content', () => {
    render(<Hero />);
    const textElement = screen.getByText(/We have:/i);
    expect(textElement).toBeInTheDocument();
  });
});
