import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';
import '@testing-library/jest-dom'

describe('Transactions components', () => {
  test('render', async () => {
    render(<Transactions transactions={[{
      index: 1,
      time: 1608620982,
      hash: '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa',
    }]} />);
    expect(screen.queryByText(/000000/)).toBeNull();
    expect(await screen.findByText(/81ffaa/)).toBeInTheDocument();
    expect(await screen.findByText(/2020-12-22/)).toBeInTheDocument();
  });
});
