import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ColorList from '../ColorList';

test('renders color names as links', () => {
  const colors = [
    { name: 'Red', color: '#ff0000' },
    { name: 'Blue', color: '#0000ff' },
  ];
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );

  expect(screen.getByText('Red')).toBeInTheDocument();
  expect(screen.getByText('Blue')).toBeInTheDocument();
});
