import { render, screen } from '@testing-library/react';
import Stats from '../Stats';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Stats', () => {
  it('renders all stat values', () => {
    render(<Stats />);
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('25+')).toBeInTheDocument();
    expect(screen.getByText('1000+')).toBeInTheDocument();
  });

  it('renders all stat names', () => {
    render(<Stats />);
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Partners')).toBeInTheDocument();
    expect(screen.getByText('Community Members')).toBeInTheDocument();
  });
}); 