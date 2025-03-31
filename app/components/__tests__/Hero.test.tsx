import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

jest.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('KORAT')).toBeInTheDocument();
    expect(screen.getByText('X TECH')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/Empowering innovation and technology/i)).toBeInTheDocument();
  });

  it('renders the call-to-action buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Explore Events')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });
}); 