import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search components', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();
    render(<Search value='' onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Javascript' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
